2) CONFIGURAÇÕES
    - .gitignore: define o que deve ser ignorado pelo Git (não incluir no repositório), nesse caso "node_modules/" e "dist/"

    - package.json: informações e dependências do projeto. Alterações em "scripts" para definir códigos utilizados para executar testes com Vitest e rodar o programa em modo de desenvolvimento com "index.ts".

    - tsconfig.json: configurações do compilador. "rootDir" e "outDir" foram descomentadas para definí-las como pasta dos arquivos-fonte e a pasta dos arquivos compilados, respectivamente. Além disso "verbatimModuleSyntax" foi definido como "false" e "strict" como "true".