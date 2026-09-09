// Contatos e registros são opcionais: não publique endereços ou projetos fictícios.
const contacts = { email: "ex.pedrog@gmail.com", github: "https://github.com/expedrog-dev", linkedin: "" };

document.querySelectorAll('[data-contact]').forEach(container => {
 const entries = Object.entries(contacts).filter(([, value]) => value);
 if (!entries.length) return;
 container.replaceChildren();
 entries.forEach(([kind, value]) => {const a=document.createElement('a');a.className='button';a.textContent={email:'E-mail ↗',github:'GitHub ↗',linkedin:'LinkedIn ↗'}[kind];a.href=kind==='email'?'mailto:'+value:value;container.append(a);});
});
const tester=document.querySelector('#font-text');
const size=document.querySelector('#font-size');
if(tester&&size) size.addEventListener('input',()=>{tester.style.fontSize=size.value+'px';document.querySelector('#font-size-value').value=size.value+' px';});
const archiveButtons = document.querySelectorAll('[data-archive-filter]');
const archiveSections = document.querySelectorAll('[data-archive-section]');
archiveButtons.forEach(button => button.addEventListener('click', () => {
 const category = button.dataset.archiveFilter;
 archiveButtons.forEach(other => other.setAttribute('aria-pressed', String(other === button)));
 archiveSections.forEach(section => { section.hidden = category !== 'Todas' && section.dataset.archiveSection !== category; });
 document.querySelector('#archive-status').textContent = category === 'Todas' ? 'Todas as categorias' : button.textContent;
}));
