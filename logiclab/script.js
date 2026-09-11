const perguntas = [
  {
    pergunta: "Qual conectivo representa 'e'?",
    alternativas: ["∨", "∧", "→", "↔"],
    correta: "∧",
    categoria: "conectivos",
    dificuldade: "facil",
  },
  {
    pergunta: "Qual conectivo representa 'ou'?",
    alternativas: ["∧", "∨", "¬", "↔"],
    correta: "∨",
    categoria: "conectivos",
    dificuldade: "facil",
  },
  {
    pergunta: "Qual símbolo representa a negação?",
    alternativas: ["¬", "∧", "→", "↔"],
    correta: "¬",
    categoria: "conectivos",
    dificuldade: "facil",
  },
  {
    pergunta: "Qual símbolo representa uma implicação?",
    alternativas: ["∧", "¬", "→", "↔"],
    correta: "→",
    categoria: "conectivos",
    dificuldade: "facil",
  },
  {
    pergunta: "Qual símbolo representa uma bicondicional?",
    alternativas: ["→", "∨", "↔", "¬"],
    correta: "↔",
    categoria: "conectivos",
    dificuldade: "medio",
  },
  {
    pergunta: "Em ¬p, qual operação lógica está sendo aplicada?",
    alternativas: ["Negação", "Conjunção", "Disjunção", "Implicação"],
    correta: "Negação",
    categoria: "conectivos",
    dificuldade: "medio",
  },
  {
    pergunta: "Qual é o conectivo principal da expressão ¬p ∧ q?",
    alternativas: ["¬", "∧", "∨", "→"],
    correta: "∧",
    categoria: "conectivos",
    dificuldade: "medio",
  },
  {
    pergunta:
      "A frase 'p é condição suficiente para q' corresponde a qual estrutura?",
    alternativas: ["p → q", "q → p", "p ↔ q", "p ∧ q"],
    correta: "p → q",
    categoria: "conectivos",
    dificuldade: "dificil",
  },
  {
    pergunta:
      "A frase 'p é condição necessária e suficiente para q' representa qual conectivo?",
    alternativas: ["∨", "→", "↔", "∧"],
    correta: "↔",
    categoria: "conectivos",
    dificuldade: "dificil",
  },
  {
    pergunta: "Qual é o conectivo principal de ¬(p ∨ q) → r?",
    alternativas: ["¬", "∨", "→", "∧"],
    correta: "→",
    categoria: "conectivos",
    dificuldade: "dificil",
  },
  {
    pergunta:
      "Considere p = 'Você estuda' e q = 'Você trabalha'. Como representar 'Você estuda e você trabalha'?",
    alternativas: ["p ∧ q", "p ∨ q", "p → q", "¬p"],
    correta: "p ∧ q",
    categoria: "traducao",
    dificuldade: "facil",
  },
  {
    pergunta:
      "Considere p = 'Está frio' e q = 'Está chovendo'. Como representar 'Está frio ou está chovendo'?",
    alternativas: ["p ∧ q", "p ∨ q", "p → q", "p ↔ q"],
    correta: "p ∨ q",
    categoria: "traducao",
    dificuldade: "facil",
  },
  {
    pergunta:
      "Considere p = 'Pedro estuda'. Como representar 'Pedro não estuda'?",
    alternativas: ["p", "¬p", "p ∨ q", "p → q"],
    correta: "¬p",
    categoria: "traducao",
    dificuldade: "facil",
  },
  {
    pergunta:
      "Considere p = 'Você estuda' e q = 'Você passa'. Como representar 'Se você estuda, então você passa'?",
    alternativas: ["p ∧ q", "p ∨ q", "p → q", "q → p"],
    correta: "p → q",
    categoria: "traducao",
    dificuldade: "facil",
  },
  {
    pergunta:
      "Considere p = 'Você estuda' e q = 'Você passa'. Como representar 'Você estuda se, e somente se, você passa'?",
    alternativas: ["p → q", "p ↔ q", "p ∨ q", "¬p"],
    correta: "p ↔ q",
    categoria: "traducao",
    dificuldade: "medio",
  },
  {
    pergunta:
      "Considere p = 'Gaby estuda' e q = 'Gaby falta'. Como representar 'Se Gaby estuda, então Gaby não falta'?",
    alternativas: ["p → ¬q", "¬p → q", "p ∧ ¬q", "p ↔ q"],
    correta: "p → ¬q",
    categoria: "traducao",
    dificuldade: "medio",
  },
  {
    pergunta:
      "Considere p = 'Ana estuda' e q = 'Ana trabalha'. Como representar 'Ana não estuda e Ana trabalha'?",
    alternativas: ["¬p ∧ q", "p ∧ ¬q", "¬(p ∧ q)", "p ∨ q"],
    correta: "¬p ∧ q",
    categoria: "traducao",
    dificuldade: "medio",
  },
  {
    pergunta:
      "Considere p = 'Está frio' e q = 'Está chovendo'. Como representar 'Está frio ou não está chovendo'?",
    alternativas: ["p ∨ ¬q", "¬p ∨ q", "p ∧ ¬q", "¬(p ∨ q)"],
    correta: "p ∨ ¬q",
    categoria: "traducao",
    dificuldade: "dificil",
  },
  {
    pergunta:
      "Considere p = 'Pedro estuda' e q = 'Pedro trabalha'. Como representar 'Não é verdade que Pedro estuda e trabalha'?",
    alternativas: ["¬(p ∧ q)", "¬p ∧ q", "p ∨ ¬q", "¬(p ∨ q)"],
    correta: "¬(p ∧ q)",
    categoria: "traducao",
    dificuldade: "dificil",
  },
  {
    pergunta:
      "Considere p = 'Você estuda' e q = 'Você passa'. Como representar 'Se você não estuda, então você passa'?",
    alternativas: ["¬p → q", "p → ¬q", "¬(p → q)", "p ↔ q"],
    correta: "¬p → q",
    categoria: "traducao",
    dificuldade: "dificil",
  },
  {
    pergunta: "Complete a tabela-verdade da expressão p ∨ q.",
    categoria: "tabela",
    dificuldade: "facil",
    tipo: "tabelaInterativa",
    expressao: "p ∨ q",
    linhas: [
      { p: "V", q: "V", correta: "V" },
      { p: "V", q: "F", correta: "V" },
      { p: "F", q: "V", correta: "V" },
      { p: "F", q: "F", correta: "F" },
    ],
  },
  {
    pergunta: "Complete a tabela-verdade da expressão p → q.",
    categoria: "tabela",
    dificuldade: "medio",
    tipo: "tabelaInterativa",
    expressao: "p → q",
    linhas: [
      { p: "V", q: "V", correta: "V" },
      { p: "V", q: "F", correta: "F" },
      { p: "F", q: "V", correta: "V" },
      { p: "F", q: "F", correta: "V" },
    ],
  },
  {
    pergunta: "Complete a tabela-verdade da expressão p ↔ q.",
    categoria: "tabela",
    dificuldade: "medio",
    tipo: "tabelaInterativa",
    expressao: "p ↔ q",
    linhas: [
      { p: "V", q: "V", correta: "V" },
      { p: "V", q: "F", correta: "F" },
      { p: "F", q: "V", correta: "F" },
      { p: "F", q: "F", correta: "V" },
    ],
  },
  {
    pergunta: "Complete a tabela-verdade da expressão ¬(p ∨ q).",
    categoria: "tabela",
    dificuldade: "dificil",
    tipo: "tabelaInterativa",
    expressao: "¬(p ∨ q)",
    linhas: [
      { p: "V", q: "V", correta: "F" },
      { p: "V", q: "F", correta: "F" },
      { p: "F", q: "V", correta: "F" },
      { p: "F", q: "F", correta: "V" },
    ],
  },
  {
    pergunta: "Complete a tabela-verdade da expressão p ∧ q.",
    categoria: "tabela",
    dificuldade: "medio",
    tipo: "tabelaInterativa",
    expressao: "p ∧ q",
    linhas: [
      { p: "V", q: "V", correta: "V" },
      { p: "V", q: "F", correta: "F" },
      { p: "F", q: "V", correta: "F" },
      { p: "F", q: "F", correta: "F" },
    ],
  },
  {
    pergunta: "Complete a tabela-verdade da expressão p → ¬q.",
    categoria: "tabela",
    dificuldade: "dificil",
    tipo: "tabelaInterativa",
    expressao: "p → ¬q",
    linhas: [
      { p: "V", q: "V", correta: "F" },
      { p: "V", q: "F", correta: "V" },
      { p: "F", q: "V", correta: "V" },
      { p: "F", q: "F", correta: "V" },
    ],
  },
  {
    pergunta: "Se p = V e q = F, qual é o valor de p ∧ q?",
    alternativas: ["V", "F"],
    correta: "F",
    categoria: "tabela",
    dificuldade: "facil",
  },
  {
    pergunta: "Se p = F e q = V, qual é o valor de p ∨ q?",
    alternativas: ["V", "F"],
    correta: "V",
    categoria: "tabela",
    dificuldade: "facil",
  },
  {
    pergunta: "Se p = V, qual é o valor de ¬p?",
    alternativas: ["V", "F"],
    correta: "F",
    categoria: "tabela",
    dificuldade: "facil",
  },
  {
    pergunta: "Se p = F e q = V, qual é o valor de p → q?",
    alternativas: ["V", "F"],
    correta: "V",
    categoria: "tabela",
    dificuldade: "facil",
  },
  {
    pergunta: "Se p = V e q = F, qual é o valor de p → q?",
    alternativas: ["V", "F"],
    correta: "F",
    categoria: "tabela",
    dificuldade: "medio",
  },
  {
    pergunta: "Se p = V e q = F, qual é o valor de p ↔ q?",
    alternativas: ["V", "F"],
    correta: "F",
    categoria: "tabela",
    dificuldade: "medio",
  },
  {
    pergunta: "Se p = F e q = F, qual é o valor de p ↔ q?",
    alternativas: ["V", "F"],
    correta: "V",
    categoria: "tabela",
    dificuldade: "medio",
  },
  {
    pergunta: "Se p = V e q = F, qual é o valor de ¬(p ∧ q)?",
    alternativas: ["V", "F"],
    correta: "V",
    categoria: "tabela",
    dificuldade: "dificil",
  },
  {
    pergunta: "Se p = V e q = F, qual é o valor de ¬p ∨ q?",
    alternativas: ["V", "F"],
    correta: "F",
    categoria: "tabela",
    dificuldade: "dificil",
  },
  {
    pergunta: "Se p = V e q = F, qual é o valor de (p ∨ q) → q?",
    alternativas: ["V", "F"],
    correta: "F",
    categoria: "tabela",
    dificuldade: "dificil",
  },
];

const LIMITE_QUESTOES = 10;
const nomesDificuldades = {
  facil: "Fácil",
  medio: "Médio",
  dificil: "Difícil",
  todas: "Todas",
};

const nomesCategorias = {
  conectivos: "Conectivos",
  traducao: "Tradução",
  tabela: "Tabela-verdade",
};
let modoAtual = "treino";
let desempenhoCategorias;
let respondida = false;
let perguntaAtual = 0;
let pontuacao = 0;
let perguntasAtuais = [];
let categoriaAtual = "";
let dificuldadeAtual = "";

function resetarSessao() {
  perguntaAtual = 0;
  pontuacao = 0;
  respondida = false;
  perguntasAtuais = [];
  desempenhoCategorias = {
    conectivos: { acertos: 0, total: 0 },
    traducao: { acertos: 0, total: 0 },
    tabela: { acertos: 0, total: 0 },
  };
  document.getElementById("progresso").style.width = "0%";
  document.getElementById("barraProgresso").setAttribute("aria-valuenow", "0");
  document.getElementById("progressLabel").textContent = "0% da rodada";
  document.getElementById("desempenhoCategorias").replaceChildren();
  document.getElementById("recomendacaoRevisao").textContent = "";
}

function iniciarSessao() {
  resetarSessao();
  prepararPerguntas();
  if (!perguntasAtuais.length) {
    mostrarTela("dificuldades");
    document.getElementById("categoriaSelecionada").textContent =
      "Ainda não existem questões nesta combinação.";
    return;
  }
  mostrarTela("quiz");
  mostrarPergunta();
}

function voltarCategorias() {
  modoAtual = "treino";
  resetarSessao();
  mostrarTela("categorias");
}

function registrarDesempenho(categoria, acertou) {
  desempenhoCategorias[categoria].total++;
  if (acertou) desempenhoCategorias[categoria].acertos++;
}

function mostrarDesempenho() {
  const area = document.getElementById("desempenhoCategorias");
  area.replaceChildren();
  const respondidas = Object.entries(desempenhoCategorias).filter(
    ([, dados]) => dados.total > 0,
  );
  for (const [categoria, dados] of respondidas) {
    const percentual = Math.round((dados.acertos / dados.total) * 100);
    const card = document.createElement("article");
    card.className = "desempenho-card";
    const titulo = document.createElement("h3");
    titulo.textContent = nomesCategorias[categoria];
    const numeros = document.createElement("p");
    numeros.textContent = `${dados.acertos}/${dados.total} acertos • ${percentual}%`;
    const barra = document.createElement("div");
    barra.className = "desempenho-barra";
    barra.setAttribute("role", "progressbar");
    barra.setAttribute(
      "aria-label",
      `Acertos em ${nomesCategorias[categoria]}`,
    );
    barra.setAttribute("aria-valuemin", "0");
    barra.setAttribute("aria-valuemax", "100");
    barra.setAttribute("aria-valuenow", percentual);
    const preenchimento = document.createElement("span");
    preenchimento.style.width = `${percentual}%`;
    barra.appendChild(preenchimento);
    card.append(titulo, numeros, barra);
    area.appendChild(card);
  }
  let categoriaParaRevisar = null;
  let menorPercentual = Infinity;

  for (const [categoria, dados] of respondidas) {
    const percentual = dados.acertos / dados.total;
    if (percentual < menorPercentual) {
      menorPercentual = percentual;
      categoriaParaRevisar = categoria;
    }
  }

  document.getElementById("recomendacaoRevisao").textContent =
    categoriaParaRevisar
      ? `Conteúdo para revisar: ${nomesCategorias[categoriaParaRevisar]}`
      : "";
}

function embaralharArray(array) {
  const novoArray = [...array];
  for (let i = novoArray.length - 1; i > 0; i--) {
    const indiceAleatorio = Math.floor(Math.random() * (i + 1));
    [novoArray[i], novoArray[indiceAleatorio]] = [
      novoArray[indiceAleatorio],
      novoArray[i],
    ];
  }
  return novoArray;
}

function prepararPerguntas() {
  if (modoAtual === "prova") {
    categoriaAtual = "misturado";
    dificuldadeAtual = "todas";
  }
  perguntasAtuais = perguntas.filter((pergunta) => {
    const mesmaCategoria =
      categoriaAtual === "misturado" || pergunta.categoria === categoriaAtual;
    const mesmaDificuldade =
      dificuldadeAtual === "todas" || pergunta.dificuldade === dificuldadeAtual;
    return mesmaCategoria && mesmaDificuldade;
  });
  perguntasAtuais = embaralharArray(perguntasAtuais);
  perguntasAtuais = perguntasAtuais.slice(0, LIMITE_QUESTOES);
  perguntasAtuais = perguntasAtuais.map((pergunta) => ({
    ...pergunta,
    ...(pergunta.linhas
      ? { linhas: pergunta.linhas.map((linha) => ({ ...linha })) }
      : {}),
    alternativas: pergunta.alternativas
      ? embaralharArray(pergunta.alternativas)
      : [],
  }));
}

function mostrarTela(tela) {
  document.getElementById("inicio").style.display = "none";
  document.getElementById("categorias").style.display = "none";
  document.getElementById("dificuldades").style.display = "none";
  document.getElementById("quiz").style.display = "none";
  document.getElementById("resultado").style.display = "none";
  document.getElementById(tela).style.display =
    tela === "inicio" ? "grid" : "block";
  const titulo = document.querySelector(`#${tela} h1, #${tela} h2`);
  titulo.setAttribute("tabindex", "-1");
  titulo.focus({ preventScroll: true });
  window.scrollTo({ top: 0, behavior: "instant" });
}

function mostrarTabelaInterativa(pergunta) {
  const areaTabela = document.getElementById("areaTabela");

  areaTabela.style.display = "block";

  let tabelaHTML = `
    <h3>${pergunta.expressao}</h3>
    <table id="tabelaVerdade">
      <thead>
        <tr>
          <th>p</th>
          <th>q</th>
          <th>${pergunta.expressao}</th>
        </tr>
      </thead>
      <tbody>
  `;
  pergunta.linhas.forEach((linha) => {
    tabelaHTML += `
      <tr>
        <td>${linha.p}</td>
        <td>${linha.q}</td>
        <td>
          <select
            class="respostaTabela"
            aria-label="Resultado para p ${linha.p} e q ${linha.q}"
            data-correta="${linha.correta}"
          >
            <option value="">?</option>
            <option value="V">V</option>
            <option value="F">F</option>
          </select>
        </td>
      </tr>
    `;
  });
  tabelaHTML += `
      </tbody>
    </table>
  `;
  areaTabela.innerHTML = tabelaHTML;
  const botaoVerificar = document.getElementById("botaoVerificarTabela");
  botaoVerificar.disabled = false;
  botaoVerificar.style.display = "inline-block";
}

function mostrarPergunta() {
  respondida = false;

  const perguntaCompleta = perguntasAtuais[perguntaAtual];

  const { pergunta, alternativas = [], tipo } = perguntaCompleta;

  const progresso = ((perguntaAtual + 1) / perguntasAtuais.length) * 100;

  document.getElementById("progresso").style.width = `${progresso}%`;

  document
    .getElementById("barraProgresso")
    .setAttribute("aria-valuenow", Math.round(progresso));
  document.getElementById("progressLabel").textContent =
    `${Math.round(progresso)}% da rodada`;

  const botaoProxima = document.getElementById("botaoProxima");

  botaoProxima.style.display = "none";

  botaoProxima.textContent =
    perguntaAtual === perguntasAtuais.length - 1
      ? "Ver resultado"
      : "Próxima pergunta";

  document.getElementById("feedback").textContent = "";

  document.getElementById("numeroQuestao").textContent =
    `Questão ${perguntaAtual + 1} de ${perguntasAtuais.length}`;

  document.getElementById("textoPergunta").textContent = pergunta;
  document.getElementById("textoPergunta").focus({ preventScroll: true });

  const areaAlternativas = document.getElementById("alternativas");

  const areaTabela = document.getElementById("areaTabela");

  const botaoVerificarTabela = document.getElementById("botaoVerificarTabela");

  areaAlternativas.innerHTML = "";
  areaAlternativas.style.display = "";

  areaTabela.innerHTML = "";
  areaTabela.style.display = "none";

  botaoVerificarTabela.style.display = "none";

  const textoCategoria = nomesCategorias[categoriaAtual] || "Misturado";
  const textoDificuldade = nomesDificuldades[dificuldadeAtual];

  document.getElementById("infoQuiz").textContent =
    modoAtual === "prova"
      ? `Modo Prova • ${perguntasAtuais.length} questões`
      : `${textoCategoria} • ${textoDificuldade}`;
  document
    .getElementById("infoQuiz")
    .classList.toggle("modo-prova", modoAtual === "prova");

  if (tipo === "tabelaInterativa") {
    areaAlternativas.style.display = "none";

    mostrarTabelaInterativa(perguntaCompleta);
    return;
  }
  alternativas.forEach((alternativa) => {
    const botao = document.createElement("button");
    botao.textContent = alternativa;
    botao.addEventListener("click", () => verificarResposta(alternativa));
    areaAlternativas.appendChild(botao);
  });
}

function gerarExplicacao(pergunta) {
  if (pergunta.categoria === "conectivos") {
    return "Observe o significado de cada símbolo lógico antes de escolher.";
  }
  if (pergunta.categoria === "traducao") {
    return "Identifique primeiro os conectivos presentes na frase e depois traduza cada um para sua representação lógica.";
  }
  if (pergunta.categoria === "tabela") {
    return "Calcule a expressão passo a passo usando os valores de verdade informados.";
  }
  return "";
}

function verificarResposta(respostaEscolhida) {
  if (respondida) return;
  respondida = true;
  const { correta } = perguntasAtuais[perguntaAtual];
  const perguntaAtualCompleta = perguntasAtuais[perguntaAtual];
  const explicacao = gerarExplicacao(perguntaAtualCompleta);
  const acertou = respostaEscolhida === correta;
  registrarDesempenho(perguntaAtualCompleta.categoria, acertou);
  if (acertou) {
    pontuacao++;
  }
  const feedback = document.getElementById("feedback");
  feedback.textContent = acertou
    ? `✓ Correto! ${explicacao}`
    : `✗ Errado! A resposta correta é: ${correta}. ${explicacao}`;
  const botoes = document.querySelectorAll("#alternativas button");
  botoes.forEach((botao) => {
    botao.disabled = true;
    if (botao.textContent === correta) {
      botao.classList.add("correta");
    }
    if (botao.textContent === respostaEscolhida && !acertou) {
      botao.classList.add("errada");
    }
  });
  document.getElementById("botaoProxima").style.display = "block";
}

function verificarTabela() {
  if (respondida) return;

  const respostas = document.querySelectorAll(".respostaTabela");

  const feedback = document.getElementById("feedback");

  let tudoPreenchido = true;

  respostas.forEach((resposta) => {
    if (resposta.value === "") {
      tudoPreenchido = false;
    }
  });
  if (!tudoPreenchido) {
    feedback.textContent =
      "Preencha todas as linhas da tabela antes de verificar.";
    return;
  }
  respondida = true;
  let acertouTudo = true;
  respostas.forEach((resposta) => {
    const correta = resposta.dataset.correta;
    if (resposta.value === correta) {
      resposta.classList.add("correta");
    } else {
      resposta.classList.add("errada");
      acertouTudo = false;
    }
    resposta.disabled = true;
    const nota = document.createElement("small");
    nota.className = "correcaoLinha";
    nota.textContent =
      resposta.value === correta ? "✓ Correto" : `× Correto: ${correta}`;
    resposta.parentElement.appendChild(nota);
  });
  registrarDesempenho(perguntasAtuais[perguntaAtual].categoria, acertouTudo);
  if (acertouTudo) {
    pontuacao++;
    feedback.textContent =
      "✓ Perfeito! Você completou corretamente toda a tabela.";
  } else {
    feedback.textContent =
      "✗ Algumas linhas estão incorretas. Observe as marcações.";
  }
  feedback.textContent += ` ${gerarExplicacao(perguntasAtuais[perguntaAtual])}`;
  document.getElementById("botaoVerificarTabela").disabled = true;
  document.getElementById("botaoProxima").style.display = "block";
}

function mostrarResultado() {
  const porcentagem = Math.round((pontuacao / perguntasAtuais.length) * 100);
  let mensagem;
  if (porcentagem === 100) {
    mensagem = "Parabéns! Você acertou todas as perguntas!";
  } else if (porcentagem >= 80) {
    mensagem = "Muito bem! Você acertou a maioria das perguntas!";
  } else if (porcentagem >= 60) {
    mensagem = "Bom trabalho, mas ainda há como melhorar!";
  } else {
    mensagem = "Não desanime! Continue estudando e você vai melhorar!";
  }
  document.getElementById("textoResultado").textContent =
    `Você acertou ${pontuacao} de ${perguntasAtuais.length} perguntas.`;
  document.getElementById("porcentagemResultado").textContent =
    `${porcentagem}%`;
  document.getElementById("mensagemResultado").textContent = mensagem;
  document
    .getElementById("scoreRing")
    .style.setProperty("--score", `${porcentagem}%`);
  document.querySelector(".confetti")?.remove();
  if (
    porcentagem === 100 &&
    !matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    const confetes = document.createElement("div");
    confetes.className = "confetti";
    confetes.setAttribute("aria-hidden", "true");
    for (let i = 0; i < 24; i++) {
      const particula = document.createElement("i");
      particula.style.setProperty("--x", `${Math.random() * 100}%`);
      particula.style.setProperty("--delay", `${Math.random() * 0.5}s`);
      confetes.appendChild(particula);
    }
    document.getElementById("resultado").appendChild(confetes);
  }
  mostrarDesempenho();
  mostrarTela("resultado");
}
document
  .getElementById("botaoComecar")
  .addEventListener("click", voltarCategorias);
document.getElementById("botaoModoProva").addEventListener("click", () => {
  modoAtual = "prova";
  categoriaAtual = "misturado";
  dificuldadeAtual = "todas";
  iniciarSessao();
});

document.getElementById("botaoProxima").addEventListener("click", () => {
  if (!respondida) return;
  respondida = false;
  perguntaAtual++;
  if (perguntaAtual < perguntasAtuais.length) {
    mostrarPergunta();
  } else {
    mostrarResultado();
  }
});
document
  .getElementById("botaoReiniciar")
  .addEventListener("click", iniciarSessao);
const botoesCategorias = document.querySelectorAll(".botaoCategoria");
botoesCategorias.forEach((botao) => {
  botao.addEventListener("click", () => {
    categoriaAtual = botao.dataset.categoria;
    const nomeCategoria = nomesCategorias[categoriaAtual] || "Misturado";
    document.getElementById("categoriaSelecionada").textContent =
      `Categoria escolhida: ${nomeCategoria}`;
    mostrarTela("dificuldades");
  });
});

const botoesDificuldades = document.querySelectorAll(".botaoDificuldade");
botoesDificuldades.forEach((botao) => {
  botao.addEventListener("click", () => {
    dificuldadeAtual = botao.dataset.dificuldade;
    iniciarSessao();
  });
});
document
  .getElementById("botaoCategorias")
  .addEventListener("click", voltarCategorias);
document
  .getElementById("botaoVerificarTabela")
  .addEventListener("click", verificarTabela);

document
  .querySelectorAll("[data-back]")
  .forEach((botao) => botao.addEventListener("click", voltarCategorias));
resetarSessao();
