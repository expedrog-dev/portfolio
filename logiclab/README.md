# LogicLab

Um laboratório de lógica proposicional criado por **Pedro Henrique Santos Garcia e Gaby (Gabryella Cortes)**.

[Abrir o LogicLab](https://expedrog-dev.github.io/portfolio/logiclab/) · [Conhecer o projeto](https://expedrog-dev.github.io/portfolio/projetos/quiz-logica.html)

## Experimente

Escolha Conectivos, Tradução, Tabela-verdade ou Misturado; depois selecione Fácil, Médio, Difícil ou Todas. Cada rodada reúne até dez questões do banco de 31 perguntas, com ordem e alternativas embaralhadas. A quantidade depende do filtro escolhido.

- Feedback imediato e identificação da alternativa correta.
- Tabela interativa com validação de preenchimento e correção de cada linha.
- Progresso, percentual de acertos, reinício e troca de categoria.
- Layout adaptável, navegação por teclado e respeito à preferência por movimento reduzido.

## Executar

Abra `index.html` no navegador. Não exige instalação nem servidor. Opcionalmente, execute `python3 -m http.server 4174` nesta pasta e abra `http://localhost:4174`.

## Estrutura

- `index.html`: telas e conteúdo semântico.
- `style.css`: identidade visual, responsividade e estados.
- `script.js`: banco original, seleção de perguntas e lógica do quiz.
- `assets/PedroHand-Regular.woff2`: fonte autoral do Pedro, usada em detalhes.
- `tests/flows.cjs`: testes de fluxo com jsdom (dependência apenas de desenvolvimento).

## Autoria e continuidade

Projeto em coautoria de Pedro e Gaby. Esta versão parte dos arquivos do projeto [gabryella-cortes/quiz-l-gica](https://github.com/gabryella-cortes/quiz-l-gica), disponibilizados a Pedro. O repositório original da Gaby foi preservado. Os créditos não atribuem funções individuais não confirmadas.

A versão original foi ampliada com novo design e melhorias de acessibilidade e robustez. **ChatGPT / Codex** auxiliaram no redesign, na revisão do código e nos testes desta versão. A fonte Pedro Hand é criação de Pedro.

## Validação

Testes de DOM simulam 32 rodadas (todas as combinações de categoria e dificuldade, com acertos e erros), verificação de tabela incompleta, bloqueio de pontuação duplicada, reinício e troca de categoria. Esses testes não substituem inspeção visual em navegadores reais.
