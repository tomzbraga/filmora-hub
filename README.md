# Projeto React + Vite

Este projeto foi desenvolvido utilizando **React** e **Vite** no frontend e **Node.js + Express** no backend.

## Pré-requisitos

Antes de iniciar, certifique-se de ter instalado:

- Node.js (versão 18 ou superior)
- npm

## Como executar o projeto

### 1. Clone o repositório

```bash
git clone <URL_DO_REPOSITORIO>
```

Entre na pasta do projeto:

```bash
cd <NOME_DO_PROJETO>
```

### 2. Instale as dependências do frontend

```bash
npm install
```



### 4. Inicie o frontend

Na pasta principal do projeto, execute:

```bash
npm run dev
```

O frontend ficará disponível em:

```
http://localhost:5173
```

### 5. Inicie o backend

Abra um **novo terminal**, entre na pasta do backend:

```bash
cd backend
```
### . Instale as dependências do backend

Caso ainda não estejam instaladas, execute:

```bash
npm install express cors
```

Em seguida execute:

```bash
node server.js
```

> Caso o arquivo tenha outro nome (por exemplo `serve.js`), utilize:

```bash
node serve.js
```

## 📂 Estrutura do projeto

```
FILMORA-HUB/
│
├── backend/
│   ├── server.js
│   ├── package.json
│   └── ...
│
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── contexts/
│   ├── layout/
│   ├── pages/
│   ├── service/
│   ├── App.jsx
│   ├── main.jsx
│   └── ...
│
├── package.json
├── vite.config.js
└── README.md
```

---


## Tecnologias utilizadas

- React
- Vite
- JavaScript
- Node.js
- Express
- CORS