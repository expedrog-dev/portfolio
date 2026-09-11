# LogicLab

Um laboratório de lógica proposicional criado por **Pedro Henrique Santos Garcia e Gaby (Gabryella Cortes)**.

[Abrir o LogicLab](https://expedrog-dev.github.io/portfolio/logiclab/) · [Conhecer o projeto](https://expedrog-dev.github.io/portfolio/projetos/quiz-logica.html)

## Experimente

Escolha Conectivos, Tradução, Tabela-verdade ou Misturado; depois selecione Fácil, Médio, Difícil ou Todas. Cada rodada reúne até dez questões do banco de 36 perguntas, com ordem e alternativas embaralhadas. A quantidade depende do filtro escolhido.

- Feedback imediato e identificação da alternativa correta.
- Tabela interativa com validação de preenchimento e correção de cada linha.
- Treino com filtros e Modo Prova direto, com dez questões embaralhadas do banco completo.
- Progresso, percentual de acertos, reinício que preserva o modo e troca de categoria que retorna ao treino.
- Acertos, totais e barras por categoria; recomendação da categoria com menor percentual de acertos.
- Reset completo de pontuação e desempenho a cada rodada.
- Layout adaptável, navegação por teclado e respeito à preferência por movimento reduzido.

## Executar

Abra `index.html` no navegador. Não exige instalação nem servidor. Opcionalmente, execute `python3 -m http.server 4174` nesta pasta e abra `http://localhost:4174`.

## Estrutura

- `index.html`: telas e conteúdo semântico.
- `style.css`: identidade visual, responsividade e estados.
- `script.js`: banco original, seleção de perguntas e lógica do quiz.
- `assets/PedroHand-Regular.woff2`: fonte autoral do Pedro, usada em detalhes.
- `tests/flows.cjs`: testes de fluxo legados com jsdom.
- `tests/browser.cjs`: testes completos no Chrome com Playwright (dependência apenas de desenvolvimento).

## Autoria e continuidade

Projeto em coautoria de Pedro e Gaby. Esta versão parte dos arquivos do projeto [gabryella-cortes/quiz-l-gica](https://github.com/gabryella-cortes/quiz-l-gica), disponibilizados a Pedro. O repositório original da Gaby foi preservado. Os créditos não atribuem funções individuais não confirmadas.

A versão original foi ampliada com novo design e melhorias de acessibilidade e robustez. **ChatGPT / Codex** auxiliaram no redesign, na revisão do código e nos testes desta versão. A fonte Pedro Hand é criação de Pedro.

## Validação

`tests/browser.cjs` executa 37 rodadas completas e 262 respostas nos cenários sistemáticos: as 16 combinações de treino com 0% e 100%, além de provas com 0%, 50%, 60%, 80% e 100%. Valida filtros, progresso, feedback, cliques repetidos, desempenho por categoria, recomendação, reinício, saída da prova, embaralhamento e preservação do banco. Testa individualmente as seis tabelas interativas (p ∨ q, p → q, p ↔ q, ¬(p ∨ q), p ∧ q e p → ¬q), com respostas incompletas, corretas, parcialmente erradas e totalmente erradas.

Também percorre o site por cliques e seleção reais no Chrome, com larguras de 320, 390, 768, 1024 e 1440 pixels, verifica erros de console e carregamento e registra capturas. A mesma suíte pode ser executada contra a versão publicada.

Com Playwright instalado e Google Chrome disponível:

```sh
node tests/browser.cjs
QUIZ_URL=https://expedrog-dev.github.io/portfolio/logiclab/ node tests/browser.cjs
```

Por padrão, o teste usa `http://127.0.0.1:4174/`. `QA_OUTPUT` seleciona a pasta de relatórios e capturas; `SOURCE_JS` permite comparar as 36 questões com o JavaScript original. Não são necessários serviços externos para usar o quiz. A verificação responsiva em Chrome não substitui testes em aparelhos físicos ou em Safari/Firefox.
