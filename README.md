#  Lista de Contatos – API

API REST desenvolvida em **Node.js** e **TypeScript** para gerenciamento de contatos, com foco em organização de código, boas práticas de backend e separação de responsabilidades.

Projeto criado para fins de **estudo**.

##  Tecnologias Utilizadas
- Node.js  
- Express  
- TypeScript  

## Estrutura do Projeto
```bash
├── data/
├── src/
│   ├── routes/
|       └── index.ts
│   ├── services/
        └── contact.ts
│   └── server.ts
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```
## Funcionalidades

[x] Listagem de contatos

[x] Criação de contatos

[x] Busca por contato específico

[x] Atualização de contatos

[x] Remoção de contatos

## Como executar
```bash
npm install
npm run start
```

## Testes
As rotas podem ser testadas utilizando:

- Insomnia
- Postman
- Thunder Client
