MANIFESTO CONTRA IL DECRETO TAJANI - ESTRUTURA DE ARQUIVOS
===========================================================

Este arquivo ZIP contém todos os arquivos do website organizado por linguagem/tipo:

DIRETÓRIOS:
-----------

1. HTML/
   - index.html: Template HTML principal com meta tags e links de recursos

2. CSS/
   - index.css: Estilos globais, variáveis CSS, temas e design tokens

3. JavaScript-TypeScript/
   - App.tsx: Componente raiz com router e ThemeProvider
   - Home.tsx: Página principal com todo o conteúdo do manifesto
   - main.tsx: Entry point da aplicação React
   - const.ts: Constantes da aplicação (APP_TITLE, APP_LOGO, etc)

4. JSON/
   - package.json: Dependências e scripts do projeto
   - tsconfig.json: Configuração TypeScript
   - tsconfig.node.json: Configuração TypeScript para Node
   - components.json: Configuração do shadcn/ui
   - vite.config.ts: Configuração do build tool Vite

5. Markdown/
   - README.md: Documentação completa do projeto
   - CONTRIBUTING.md: Diretrizes para contribuir
   - DEPLOYMENT.md: Guia de deployment em várias plataformas
   - todo.md: Lista de tarefas e progresso do projeto

6. Documentation/
   - LICENSE: Licença Creative Commons Attribution 4.0
   - gitignore.txt: Arquivo .gitignore para controle de versão

COMO USAR:
----------

1. Extraia os arquivos mantendo a estrutura de diretórios
2. Copie os arquivos para seus respectivos locais no projeto:
   - HTML/* → client/
   - CSS/* → client/src/
   - JavaScript-TypeScript/* → client/src/pages/ e client/src/
   - JSON/* → raiz do projeto
   - Markdown/* → raiz do projeto
   - Documentation/* → raiz do projeto

3. Execute: pnpm install
4. Execute: pnpm dev
5. Acesse: http://localhost:3000

ESTRUTURA DO PROJETO FINAL:
---------------------------

manifesto-tajani/
├── client/
│   ├── index.html
│   ├── src/
│   │   ├── index.css
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   ├── const.ts
│   │   └── pages/
│   │       └── Home.tsx
├── package.json
├── tsconfig.json
├── vite.config.ts
├── README.md
├── CONTRIBUTING.md
├── DEPLOYMENT.md
├── LICENSE
└── .gitignore

TECNOLOGIAS:
-----------

- React 19
- TypeScript
- Tailwind CSS 4
- Vite
- Wouter (Router)
- shadcn/ui

CORES PRINCIPAIS:
----------------

- Neon Green: #39FF14
- Cyan: #00FFFF
- Rebel Red: #FF1E56
- Dark Background: #101622

CONTATO E SUPORTE:
-----------------

Para mais informações, consulte README.md e CONTRIBUTING.md

Manifesto Contro il Decreto Tajani
Data: 17 Novembre 2025
