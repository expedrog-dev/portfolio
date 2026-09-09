# Portfólio do Pedro

Site estático em HTML, CSS e JavaScript. Os arquivos originais da pasta do projeto foram preservados; o site fica inteiramente em `portfolio/`.

## Editar
- `index.html`: home, formação e biografia. Confirmar idade antes de cada nova inscrição.
- `projetos/`: páginas individuais.
- `style.css`: identidade, responsividade e fonte.
- `script.js`: contatos, teste da fonte e registros da coleção.
- `assets/`: fontes, imagens, vídeos e ícones. Caminhos em páginas de projetos começam com `../assets/`.

## Materiais finais
1. E-mail e GitHub já estão preenchidos em `script.js`. LinkedIn permanece vazio, pois não existe conta informada.
2. Inserir fotos/vídeos de robótica em `assets/images/` e `assets/videos/`; adicionar registros à lista `collection` conforme modelo abaixo. Não há limite de 45 itens.
3. Cinco certificados recebidos já estão em `assets/certificados/`, com links em `certificados.html`: TechBot, Design Gráfico, New Office Completo, OBA 2024 e Python Mundo 1.
4. Adicionar exportação jogável, screenshots e vídeo de O Tirano. Os mapas atuais são materiais reais do projeto, identificados como arte de cenário e não gameplay.
5. Adicionar screenshots e URL do quiz quando disponíveis; atualizar seu estado somente ao concluir.
6. A foto de blazer azul está na seção Sobre. As fotos de 2021 são originais, com as bordas da captura ocultadas apenas no layout.

Modelo de registro, dentro de `collection` em `script.js`:
```js
{
  name: "Nome real do projeto",
  category: "Robótica & IoT", // Ou Design, Fotografia, Experimentos
  description: "O que foi construído e para quê.",
  learning: "Tecnologias usadas e aprendizado real.",
  image: "../assets/images/nome-do-projeto.jpg", // Opcional
  alt: "Descrição do que aparece na imagem",
  video: "../assets/videos/nome-do-projeto.mp4", // Opcional
  captions: "../assets/videos/nome-do-projeto.vtt" // Legendas quando houver fala
}
```

Não inserir exemplos fictícios como projetos publicados. O contador representa registros publicados, distinto dos aproximadamente 45 projetos desenvolvidos.

## Visualizar e preparar entrega
Execute `python3 -m http.server 4173` nesta pasta e abra http://localhost:4173.
Execute `python3 build.py` para gerar `dist/`, que contém apenas os arquivos do site. `.openai/hosting.json` vincula o projeto à hospedagem Sites.

## Autoria e materiais
A Pedro Hand 1.1 foi copiada dos materiais locais do Pedro. O TTF está disponível para download. O site não declara licença comercial ou de redistribuição. Textos de O Tirano descrevem a estrutura encontrada e o contexto fornecido; não afirmam publicação ou testes da versão jogável.

## Publicação para inscrição
A prévia hospedada é privada. Antes de enviar a avaliadores, disponibilizar o site com acesso que eles possam abrir. Verificar o link em sessão sem login após tornar o acesso público.
