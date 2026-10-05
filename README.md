1) ### COMO INSTALAR, TESTAR E RODAR O PROJETO ###

### INSTALAÇÃO ###

- Clone o repositório git, entre na pasta do projeto e execute "npm install" no terminal para instalar todas as depenências necessárias para o projeto.

### TESTES ###

- Utilize "npm test" para executar os testes feitos com Vitest para as funções de despesas do projeto.

### RODAR ###

- Em index.ts, há um exemplo de um array "despesas" que pode ser utilizado em qualquer uma das funções do projeto. Todas elas foram chamadas para  index.ts. Para utilizá-las, basta usar console.log(*função*) e usar "npm run dev" no terminal - esse comando roda index.ts automaticamente.

2) ### CONFIGURAÇÕES ###

    - .gitignore: define o que deve ser ignorado pelo Git (não incluir no repositório), nesse caso "node_modules/" e "dist/"

    - package.json: informações e dependências do projeto. Alterações em "scripts" para definir códigos utilizados para executar testes com Vitest e rodar o programa em modo de desenvolvimento com "index.ts".

    - tsconfig.json: configurações do compilador. "rootDir" e "outDir" foram descomentadas para definí-las como pasta dos arquivos-fonte e a pasta dos arquivos compilados, respectivamente. Além disso "verbatimModuleSyntax" foi definido como "false" e "strict" como "true".

3) ### REGISTRO DO USO DE IA ###

    - adicoinarDespesa (Vitest): única função onde a resposta da IA não foi completamente satisfatória. Foi necessário criar um novo teste e refazer o prompt.

    - removerDespesa (Vitest): testes e prompts feitos de maneira que a resposta da IA foi satisfatória.

    - despesasDaCategoria (Vitest): testes e prompts feitos de maneira que a resposta da IA foi satisfatória.

    - totalGasto (Vitest): testes e prompts feitos de maneira que a resposta da IA foi satisfatória.

    - maiorDespesa (Vitest): testes e prompts feitos de maneira que a resposta da IA foi satisfatória.

    - descriçãoCategoria: o uso de IA não foi necessário.

    - matrizCategoriaMes: única função na qual o auxílio de IA foi muito necessário. Diversos erros de "Object is possibly undefined" foram solucionados com a ajuda de IA.

    - formatarRelatorio: IA foi utilizada apenas para o aprendizado sobre a funcionalidade de ferramentas como *padEnd()* e para a solução de problemas relacionados à variáveis que poderiam ser "undefined".

4) ###  REFLEXÃO FINAL ###

- CONCLUSÃO: A Inteligência Artificial, sem dúvidas, é uma ferramenta extremamente útil, sobretudo para a explicação de conceitos e ferramentas e, principalmente para a utilização de funcionalidades como *.filter* e *.reduce*, as quais, na maioria das vezes não pensamos - ou até mesmo - nem lembramos da sua existência. Porém, é necessário ter muito cuidado, pois a IA é, ao mesmo tempo, muito literal, ou seja, a sua resposta é totalmente baseada no seu prompt (ou no caso desse projeto, nos testes), sendo preciso olhar para as suas soluções e códigos de maneira crítica, sempre se questionando se a sua resposta satisfaz apenas o seu prompt/teste, ou ainda se faltou adicionar algo ao teste, uma vez que se o seu objetivo não estiver bem explícito no comando, a IA simplesmente não o atingirá. Um exemplo desse último caso foi o desenvolvimento da função adicionarDespesa, na qual após construir os testes e mandá-los para a IA, percebi que estava faltando um teste importante que conferisse se a despesa adicionada teve seu atributo "valor" (fundamental para todo o funcionamento do sistema) informado corretamente, informando um erro caso ele fosse igual a 0, o que seria impossível e poderia comprometer o projeto. Assim, o desenvolvimento do projeto mostrou que a IA pode ser uma ferramenta muito poderosa, mas não substitui a análise e a compreensão do programador.