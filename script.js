// Contatos e registros são opcionais: não publique endereços ou projetos fictícios.
const contacts = { email: "ex.pedrog@gmail.com", github: "https://github.com/expedrog-dev", linkedin: "" };
const collection = [
  {
    "name": "Carro que desvia de obstáculos",
    "category": "Robótica & IoT",
    "description": "Projeto do TechBot em que montei e conectei componentes eletrônicos e trabalhei na lógica de um carro capaz de detectar obstáculos e reagir, mudando seu movimento.",
    "learning": "Entrada → processamento → saída: captar informações do ambiente, decidir e acionar motores.",
    "image": "../assets/images/robotica-carro.png",
    "alt": "Pedro em 2021, de camiseta azul, com o carro robótico e suas conexões eletrônicas sobre a mesa.",
    "crop": {
      "width": 738,
      "height": 732,
      "offsetPercent": 27.125
    }
  },
  {
    "name": "Separador automatizado de bolinhas",
    "category": "Robótica & IoT",
    "description": "Um mecanismo para separar bolinhas, construído durante o TechBot. O trabalho reuniu montagem da estrutura, conexões eletrônicas e programação para controlar os movimentos do conjunto.",
    "learning": "Montagem mecânica, eletrônica e automação: transformar a lógica do programa em ação física.",
    "image": "../assets/images/robotica-separador.png",
    "alt": "Pedro, de moletom azul, ajustando a estrutura azul e amarela do separador de bolinhas.",
    "crop": {
      "width": 738,
      "height": 980,
      "offsetPercent": 19.375
    }
  },
  {
    "name": "Cofre eletrônico",
    "category": "Robótica & IoT",
    "description": "Construção de um cofre no TechBot, integrando uma estrutura física, componentes eletrônicos e programação da lógica de controle.",
    "learning": "Integração entre montagem, conexões e controle de um sistema físico.",
    "image": "../assets/images/robotica-cofre.png",
    "alt": "Pedro, de moletom cinza, atrás do projeto de cofre eletrônico e de seus componentes conectados.",
    "crop": {
      "width": 738,
      "height": 949,
      "offsetPercent": 20.375
    }
  }
];
document.querySelectorAll('[data-contact]').forEach(container => {
 const entries = Object.entries(contacts).filter(([, value]) => value);
 if (!entries.length) return;
 container.replaceChildren();
 entries.forEach(([kind, value]) => {const a=document.createElement('a');a.className='button';a.textContent={email:'E-mail ↗',github:'GitHub ↗',linkedin:'LinkedIn ↗'}[kind];a.href=kind==='email'?'mailto:'+value:value;container.append(a);});
});
const tester=document.querySelector('#font-text');
const size=document.querySelector('#font-size');
if(tester&&size) size.addEventListener('input',()=>{tester.style.fontSize=size.value+'px';document.querySelector('#font-size-value').value=size.value+' px';});
const grid=document.querySelector('#collection-grid');
if(grid){
 const empty=document.querySelector('#collection-empty');
 function render(category){
  grid.replaceChildren();
  const items=collection.filter(item=>category==='Todas'||item.category===category);
  empty.hidden=items.length>0;
  document.querySelector('#collection-count').textContent=items.length+' registros publicados';
  items.forEach(item=>{
   const card=document.createElement('article');
   if(item.image){const img=document.createElement('img');img.src=item.image;img.alt=item.alt||item.name;img.loading='lazy';if(item.crop){const frame=document.createElement('div');frame.className='record-photo';frame.style.aspectRatio=item.crop.width+'/'+item.crop.height;img.style.transform='translateY(-'+item.crop.offsetPercent+'%)';frame.append(img);card.append(frame);}else{card.append(img);}}
   const title=document.createElement('h3');title.textContent=item.name;card.append(title);
   for(const text of [item.description,item.learning]){if(text){const p=document.createElement('p');p.textContent=text;card.append(p);}}
   if(item.video){const video=document.createElement('video');video.src=item.video;video.controls=true;video.preload='metadata';video.setAttribute('aria-label','Vídeo de '+item.name);if(item.captions){const track=document.createElement('track');track.kind='captions';track.src=item.captions;track.srclang='pt-BR';track.label='Português';video.append(track);}card.append(video);}
   grid.append(card);
  });
 }
 document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('[data-filter]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));render(button.dataset.filter);}));
 render('Todas');
}
