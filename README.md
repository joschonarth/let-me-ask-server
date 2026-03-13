<div align="center">

<img alt="let me ask" src="https://github.com/joschonarth/let-me-ask-web/blob/main/public/favicon.svg" />

# 💬 let me ask API

*Pergunte, e a IA responde.*

<img src="https://img.shields.io/github/last-commit/joschonarth/let-me-ask-server?style=default&logo=git&logoColor=white&color=835AFD&labelColor=27272a" alt="last-commit">
<img src="https://img.shields.io/github/languages/top/joschonarth/let-me-ask-server?style=default&color=835AFD&labelColor=27272a" alt="repo-top-language">
<img src="https://img.shields.io/github/languages/count/joschonarth/let-me-ask-server?style=default&color=835AFD&labelColor=27272a" alt="repo-language-count">

---

📃 [Sobre](#-sobre)&nbsp;&nbsp;•&nbsp;&nbsp;
🛠️ [Tecnologias](#️-tecnologias)&nbsp;&nbsp;•&nbsp;&nbsp;
✨ [Funcionalidades](#-funcionalidades)&nbsp;&nbsp;•&nbsp;&nbsp;
🚀 [Como rodar](#-como-rodar)&nbsp;&nbsp;•&nbsp;&nbsp;
🤖 [IA & Áudio](#-ia--áudio)

</div>

---

## 📃 Sobre

O **let me ask** é uma aplicação web de perguntas e respostas voltada para aulas e transmissões ao vivo, e este repositório contém a **API REST** que a alimenta. O apresentador grava um áudio com o conteúdo da aula ou explicação, e os participantes podem fazer perguntas que são respondidas automaticamente pelo **Google Gemini** com base no que foi dito na gravação — evitando que dúvidas já abordadas no conteúdo precisem ser respondidas manualmente. O backend é construído com **Node.js**, **Fastify**, **Drizzle ORM** e **PostgreSQL**.

---

## 🛠️ Tecnologias

- 🟩 **[Node.js](https://nodejs.org/)** — Ambiente de execução JavaScript server-side.
- ⚡ **[Fastify](https://fastify.dev/)** — Framework web focado em performance e baixo overhead.
- 🟦 **[TypeScript](https://www.typescriptlang.org/)** — Tipagem estática e segurança em tempo de desenvolvimento.
- 🤖 **[Google Gemini](https://ai.google.dev/)** — Transcrição de áudio, geração de embeddings e respostas contextuais com IA.
- 🗃️ **[Drizzle ORM](https://orm.drizzle.team/)** — ORM moderno e type-safe para TypeScript.
- 🐘 **[PostgreSQL](https://www.postgresql.org/)** — Banco de dados relacional para persistência dos dados.
- 🐳 **[Docker](https://www.docker.com/)** — Containerização do banco de dados para ambiente reproduzível.
- 📦 **[@fastify/multipart](https://github.com/fastify/fastify-multipart)** — Recebimento de arquivos de áudio via upload multipart.
- 🛡️ **[Zod](https://zod.dev/)** — Validação e parsing de schemas com inferência de tipos.
- 🔍 **[Biome](https://biomejs.dev/)** — Linting e formatação de código de alta performance.

---

## ✨ Funcionalidades

- [x] 🎙️ Gravação de áudio diretamente no navegador
- [x] 🤖 Transcrição automática do áudio com Google Gemini
- [x] 💬 Geração de respostas contextuais baseadas no conteúdo do áudio
- [x] 🔍 Geração de embeddings para análise de similaridade entre perguntas
- [x] ❓ Criação e listagem de perguntas por sala
- [x] 🏠 Criação e gerenciamento de salas
- [x] 🛡️ Validação de dados com Zod

---

## 🚀 Como rodar

### 📋 Pré-requisitos

- 🟩 [Node.js 18+](https://nodejs.org/)
- 📦 [npm](https://www.npmjs.com/)
- 🐳 [Docker](https://www.docker.com/)

### 🔧 Instalação

1. Clone o repositório:

    ```bash
    git clone https://github.com/joschonarth/let-me-ask-server.git
    ```

2. Acesse a pasta do projeto:

    ```bash
    cd let-me-ask-server
    ```

3. Instale as dependências:

    ```bash
    npm install
    ```

4. Configure as variáveis de ambiente copiando o arquivo de exemplo:

    ```bash
    cp .env.example .env
    ```

    Em seguida, abra o arquivo `.env` e preencha as variáveis:

    ```env
    DATABASE_URL=postgresql://docker:docker@localhost:5432/letmeask
    GEMINI_API_KEY=sua_gemini_api_key
    ```

### 🐳 Banco de dados

Suba o container do PostgreSQL com Docker:

```bash
docker compose up -d
```

Gere o client do Prisma:

```bash
npm run db:generate
```

Execute as migrations para criar as tabelas:

```bash
npm run db:migrate
```

Opcionalmente, popule o banco com dados de seed:

```bash
npm run db:seed
```

### ▶️ Execução

Inicia o servidor em modo de desenvolvimento:

```bash
npm run dev
```

O servidor estará disponível em **[http://localhost:3333](http://localhost:3333)**.

---

## 🤖 IA & Áudio

O projeto utiliza o **Google Gemini** como motor de inteligência artificial para processar as perguntas em áudio enviadas pelos participantes.

O fluxo de processamento funciona da seguinte forma:

- O áudio gravado no navegador é enviado para a API via upload multipart;
- O **Gemini** transcreve o áudio para texto;
- São gerados **embeddings** da transcrição para análise de similaridade com perguntas anteriores;
- Com base no conteúdo do áudio gravado e no histórico de perguntas, o **Gemini** gera uma resposta contextual e inteligente.

---

## ⭐ Apoie este Projeto

Se curtiu o projeto, deixe uma ⭐ aqui no GitHub — isso ajuda muito!

---

<div align="center">

Feito com ♥ por **[João Otávio Schonarth](https://github.com/joschonarth)**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/joschonarth)
[![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:joschonarth@gmail.com)

</div>
