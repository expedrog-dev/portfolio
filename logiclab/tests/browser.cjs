const {chromium}=require('playwright');
const fs=require('fs'), path=require('path'), vm=require('vm'), assert=require('assert/strict');
const root=path.resolve(__dirname,'..');
const url=process.env.QUIZ_URL||'http://127.0.0.1:4174/';
const out=process.env.QA_OUTPUT||path.resolve(root,'../../output/logiclab-restauracao');
fs.mkdirSync(out,{recursive:true});
(async()=>{
 const browser=await chromium.launch({headless:true,channel:'chrome'});
 const page=await browser.newPage({viewport:{width:1440,height:1000},reducedMotion:'reduce'});
 const errors=[];
 page.on('pageerror',e=>errors.push(e.message));
 page.on('console',m=>{if(m.type()==='error'&&!m.text().includes('favicon.ico'))errors.push(m.text())});
 page.on('response',r=>{if(r.status()>=400&&!r.url().endsWith('favicon.ico'))errors.push(`${r.status()} ${r.url()}`)});
 await page.goto(url);await page.evaluate(()=>document.fonts.ready);
 const sourceFile=process.env.SOURCE_JS;
 if(sourceFile){const source=fs.readFileSync(sourceFile,'utf8').split('let perguntaAtual')[0];const bank=vm.runInNewContext(source+'; JSON.stringify(perguntas)');assert.equal(await page.evaluate(()=>JSON.stringify(perguntas)),bank,'Question bank must exactly match attachment');}
 const report=await page.evaluate(()=>{
  let rounds=0,answers=0;const checks=[];
  const check=(v,m)=>{if(!v)throw Error(m)};
  const d=document,click=id=>d.querySelector(id).click();
  const baseline=JSON.stringify(perguntas);
  const fresh=()=>{check(pontuacao===0&&perguntaAtual===0&&!respondida,'reset counters');check(Object.values(desempenhoCategorias).every(x=>x.acertos===0&&x.total===0),'reset performance');};
  function answer(correct){
   const q=perguntasAtuais[perguntaAtual],before=pontuacao;
   if(q.tipo==='tabelaInterativa'){
    click('#botaoVerificarTabela');check(d.querySelector('#feedback').textContent==='Preencha todas as linhas da tabela antes de verificar.','incomplete message');check(!respondida&&pontuacao===before,'incomplete not scored');
    d.querySelectorAll('.respostaTabela').forEach((s,i)=>s.value=correct?q.linhas[i].correta:(q.linhas[i].correta==='V'?'F':'V'));
    click('#botaoVerificarTabela');verificarTabela();
    check([...d.querySelectorAll('select')].every(s=>s.disabled),'table disabled');
    check(d.querySelectorAll('.correcaoLinha').length===4,'line corrections');
    if(!correct)check([...d.querySelectorAll('.correcaoLinha')].every((n,i)=>n.textContent.includes(`Correto: ${q.linhas[i].correta}`)),'correct V/F');
    check(d.querySelector('#botaoVerificarTabela').disabled,'verification disabled');
   }else{
    const chosen=correct?q.correta:q.alternativas.find(a=>a!==q.correta);
    [...d.querySelectorAll('#alternativas button')].find(b=>b.textContent===chosen).click();verificarResposta(chosen);
    check([...d.querySelectorAll('#alternativas button')].every(b=>b.disabled),'answers disabled');
    check(d.querySelectorAll('#alternativas .correta').length===1,'correct marked');
    check(d.querySelectorAll('#alternativas .errada').length===(correct?0:1),'wrong marked');
    check(d.querySelector('#feedback').textContent.includes(gerarExplicacao(q)),'explanation');
    if(!correct)check(d.querySelector('#feedback').textContent.includes(q.correta),'correct answer feedback');
   }
   check(pontuacao===before+Number(correct),'score / repeat guard');check(d.querySelector('#botaoProxima').style.display!=='none','next available');answers++;
  }
  function finish(target){
   const total=perguntasAtuais.length;
   for(let i=0;i<total;i++){
    const percent=(i+1)/total*100;
    check(perguntaAtual===i,'question index');check(d.querySelector('#numeroQuestao').textContent===`Questão ${i+1} de ${total}`,'question label');
    check(Math.abs(parseFloat(d.querySelector('#progresso').style.width)-percent)<.001,'progress formula');
    check(+d.querySelector('#barraProgresso').getAttribute('aria-valuenow')===Math.round(percent),'accessible progress');
    click('#botaoProxima');check(perguntaAtual===i,'cannot skip unanswered');
    answer(i<target);click('#botaoProxima');if(i<total-1){click('#botaoProxima');check(perguntaAtual===i+1,'repeat next');}
   }
   check(d.querySelector('#resultado').style.display==='block','result visible');
   check(pontuacao===target,'final score');
   check(d.querySelector('#porcentagemResultado').textContent===`${Math.round(target/total*100)}%`,'final percentage');
   const entries=Object.entries(desempenhoCategorias).filter(([,x])=>x.total);
   check(entries.reduce((n,[,x])=>n+x.total,0)===total,'performance total');check(entries.reduce((n,[,x])=>n+x.acertos,0)===target,'performance correct');
   check(d.querySelectorAll('.desempenho-card').length===entries.length,'only played categories');
   entries.forEach(([c,x],i)=>{const card=d.querySelectorAll('.desempenho-card')[i];check(card.textContent.includes(nomesCategorias[c])&&card.textContent.includes(`${x.acertos}/${x.total}`),'category details');check(+card.querySelector('[role=progressbar]').getAttribute('aria-valuenow')===Math.round(x.acertos/x.total*100),'category bar');});
   const lowest=entries.reduce((a,b)=>b[1].acertos/b[1].total<a[1].acertos/a[1].total?b:a);
   check(d.querySelector('#recomendacaoRevisao').textContent.includes(nomesCategorias[lowest[0]]),'weakest category');
   check(JSON.stringify(perguntas)===baseline,'immutable bank');rounds++;
  }
  for(const c of ['conectivos','traducao','tabela','misturado'])for(const l of ['facil','medio','dificil','todas'])for(const correct of [false,true]){
   click('#botaoComecar');check(modoAtual==='treino','training mode');click(`[data-categoria="${c}"]`);click(`[data-dificuldade="${l}"]`);fresh();
   check(perguntasAtuais.length===Math.min(10,perguntas.filter(q=>(c==='misturado'||q.categoria===c)&&(l==='todas'||q.dificuldade===l)).length),'filtered count');
   check(perguntasAtuais.every(q=>(c==='misturado'||q.categoria===c)&&(l==='todas'||q.dificuldade===l)),'filters');
   check(!d.querySelector('#infoQuiz').textContent.includes('Prova'),'training label');finish(correct?perguntasAtuais.length:0);
   click('#botaoReiniciar');fresh();check(modoAtual==='treino'&&categoriaAtual===c&&dificuldadeAtual===l,'training restart settings');click('#botaoCategorias');fresh();check(d.querySelector('#progresso').style.width==='0%','reset progress');
  }
  checks.push('16 training combinations, each at 0% and 100%');
  const orders=new Set(),optionOrders=new Set(),cats=new Set(),levels=new Set();
  for(let k=0;k<30;k++){
   click('#botaoModoProva');fresh();check(modoAtual==='prova'&&categoriaAtual==='misturado'&&dificuldadeAtual==='todas','exam settings');
   check(perguntasAtuais.length===10,'10 exam questions');check(d.querySelector('#quiz').style.display==='block'&&d.querySelector('#categorias').style.display==='none'&&d.querySelector('#dificuldades').style.display==='none','exam direct');
   check(d.querySelector('#infoQuiz').textContent==='Modo Prova • 10 questões','exam label');check(new Set(perguntasAtuais.map(q=>q.pergunta)).size===10,'unique selection');
   orders.add(perguntasAtuais.map(q=>q.pergunta).join('|'));
   perguntasAtuais.forEach(q=>{cats.add(q.categoria);levels.add(q.dificuldade);if(q.pergunta===perguntas[0].pergunta)optionOrders.add(q.alternativas.join(''))});
  }
  check(orders.size>1&&optionOrders.size>1,'questions and alternatives shuffle');check(cats.size===3&&levels.size===3,'full exam bank');
  for(const target of [0,5,6,8,10]){
   click('#botaoModoProva');finish(target);
   const expected=target===10?'Parabéns! Você acertou todas as perguntas!':target>=8?'Muito bem! Você acertou a maioria das perguntas!':target>=6?'Bom trabalho, mas ainda há como melhorar!':'Não desanime! Continue estudando e você vai melhorar!';
   check(d.querySelector('#mensagemResultado').textContent===expected,'result thresholds');
   click('#botaoReiniciar');fresh();check(modoAtual==='prova'&&perguntasAtuais.length===10,'replay exam');
   click('#botaoCategorias');fresh();check(modoAtual==='treino'&&d.querySelector('#categorias').style.display==='block','exit exam');
  }
  checks.push('30 exam selections, shuffling, full bank; complete exams at 0/50/60/80/100%; replay and exit');
  // Exercise the real interactive question deterministically, without changing the bank.
  for(const expression of perguntas.filter(q=>q.tipo==='tabelaInterativa').map(q=>q.expressao))for(const wrongRows of [0,1,4]){
   modoAtual='treino';categoriaAtual='tabela';dificuldadeAtual=perguntas.find(q=>q.expressao===expression).dificuldade;iniciarSessao();
   const tableIndex=perguntasAtuais.findIndex(q=>q.expressao===expression);
   [perguntasAtuais[0],perguntasAtuais[tableIndex]]=[perguntasAtuais[tableIndex],perguntasAtuais[0]];mostrarPergunta();
   const q=perguntasAtuais[0];d.querySelector('select').value='V';click('#botaoVerificarTabela');check(!respondida&&desempenhoCategorias.tabela.total===0,'partial incomplete');
   d.querySelectorAll('select').forEach((s,i)=>s.value=i<wrongRows?(q.linhas[i].correta==='V'?'F':'V'):q.linhas[i].correta);
   click('#botaoVerificarTabela');verificarTabela();check(pontuacao===(wrongRows===0?1:0),'whole table one point');check(desempenhoCategorias.tabela.total===1&&desempenhoCategorias.tabela.acertos===(wrongRows===0?1:0),'table category');check(d.querySelectorAll('select.errada').length===wrongRows,'table row states');
  }
  checks.push(`${perguntas.filter(q=>q.tipo==='tabelaInterativa').length} interactive tables: correct, partially wrong, entirely wrong, incomplete, row correction, locking and category scoring`);
  // Unequal denominators: recommendation must compare percentages, not error counts.
  desempenhoCategorias={conectivos:{acertos:3,total:4},traducao:{acertos:2,total:3},tabela:{acertos:1,total:3}};mostrarDesempenho();check(d.querySelector('#recomendacaoRevisao').textContent.endsWith('Tabela-verdade'),'ratio recommendation');
  voltarCategorias();mostrarTela('inicio');check(getComputedStyle(d.querySelector('#inicio')).display==='grid','home layout preserved');
  return {rounds,answers,checks,bank:perguntas.length};
 });
 // Real pointer interactions and responsive views in addition to the exhaustive DOM flows.
 for(const width of [1440,1024,768,390,320]){
  await page.setViewportSize({width,height:900});await page.reload();await page.evaluate(()=>document.fonts.ready);
  const overflow=()=>page.evaluate(()=>document.documentElement.scrollWidth>innerWidth);
  assert.equal(await overflow(),false,`home overflow ${width}`);
  if([1440,390].includes(width))await page.screenshot({path:path.join(out,`depois-inicio-${width}.png`),fullPage:true});
  await page.locator('#botaoComecar').click();await page.locator('[data-categoria=tabela]').click();await page.locator('[data-dificuldade=medio]').click();
  const trainingTotal=await page.evaluate(()=>perguntasAtuais.length);
  for(let i=0;i<trainingTotal;i++){
   const table=await page.locator('#botaoVerificarTabela').isVisible();
   if(table){await page.locator('#botaoVerificarTabela').click();assert.match(await page.locator('#feedback').innerText(),/Preencha/);const selects=page.locator('select');for(let j=0;j<4;j++)await selects.nth(j).selectOption('V');await page.locator('#botaoVerificarTabela').click();assert.equal(await overflow(),false,`table overflow ${width}`);if([1440,390].includes(width))await page.screenshot({path:path.join(out,`depois-tabela-${width}.png`),fullPage:true});}
   else await page.locator('#alternativas button').first().click();
   await page.locator('#botaoProxima').click();
  }
  assert.equal(await overflow(),false,`result overflow ${width}`);
  if([1440,390].includes(width))await page.screenshot({path:path.join(out,`depois-resultado-${width}.png`),fullPage:true});
  await page.locator('#botaoReiniciar').click();await page.reload();await page.locator('#botaoModoProva').click();assert.equal(await page.locator('#infoQuiz').innerText(),'Modo Prova • 10 questões');
 }
 // Complete an exam with actual pointer/select interactions; replay, then switch to training.
 for(let i=0;i<10;i++){
  if(await page.locator('#botaoVerificarTabela').isVisible()){for(const s of await page.locator('select').all())await s.selectOption('F');await page.locator('#botaoVerificarTabela').click();}
  else await page.locator('#alternativas button').first().click();
  await page.locator('#botaoProxima').click();
 }
 for(const width of [1440,390]){await page.setViewportSize({width,height:900});await page.screenshot({path:path.join(out,`depois-prova-resultado-${width}.png`),fullPage:true});}
 assert(await page.locator('#desempenhoCategorias').isVisible());assert.match(await page.locator('#recomendacaoRevisao').innerText(),/Conteúdo para revisar:/);
 await page.locator('#botaoReiniciar').click();assert.equal(await page.locator('#infoQuiz').innerText(),'Modo Prova • 10 questões');
 await page.evaluate(()=>{document.getElementById('botaoCategorias').click()});assert(await page.locator('#categorias').isVisible());
 assert.deepEqual(errors,[],'browser errors');
 report.url=url;report.viewportWidths=[1440,1024,768,390,320];report.errors=errors;
 fs.writeFileSync(path.join(out,'test-results.json'),JSON.stringify(report,null,2));console.log(JSON.stringify(report,null,2));await browser.close();
})().catch(e=>{console.error(e);process.exit(1)});
