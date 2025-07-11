<div align="center">
   <h1>NLW Agents</h1>
</div>

<p align="center" margin-top="25px" >
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/Ricmaloy/NLW-20?color=660066">

  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/Ricmaloy/NLW-20?color=800080">
  
  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/Ricmaloy/NLW-20?color=be29ec">

  <img alt="GitHub" src="https://img.shields.io/github/license/Ricmaloy/NLW-20?color=d896ff">
</p>



<img src="https://img.notionusercontent.com/s3/prod-files-secure%2F08f749ff-d06d-49a8-a488-9846e081b224%2F3c8235c1-2513-470a-89b5-6266f45e77fc%2Fprojeto_intermed.png/size/w=2000?exp=1752332369&sig=UawfPA2F_wtn5RNpQhLyzuWOqjspHcjzmH6axO0bD50&id=21c395da-5770-8091-8515-c1a30c2aa80a&table=block">




Projeto desenvolvido durante um evento da Rocketseat para demonstrar o uso de agentes inteligentes na web.

## 🚀 Tecnologias

- **React 19.1** - Biblioteca para interfaces de usuário
- **TypeScript 5.8** - Superset JavaScript com tipagem estática
- **Vite 7.0** - Build tool e servidor de desenvolvimento
- **TailwindCSS 4.1** - Framework CSS utility-first
- **React Router Dom 7.6** - Biblioteca de roteamento
- **TanStack React Query 5.8** - Gerenciamento de estado servidor e cache
- **Radix UI** - Componentes primitivos acessíveis
- **Shadcn/ui** - Sistema de componentes
- **Lucide React** - Biblioteca de ícones

## 📂 Padrões de Projeto

- **Component-based Architecture** - Arquitetura baseada em componentes React
- **File-based Routing** - Roteamento baseado em arquivos com React Router
- **Server State Management** - Gerenciamento de estado servidor com React Query
- **Variant-based Components** - Componentes com variantes usando CVA
- **Composition Pattern** - Padrão de composição com Radix Slot
- **Path Aliasing** - Alias de caminhos (`@/` aponta para `src/`)

## ⚙️ Configuração do Projeto

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório
2. Instale as dependências:
   ```bash
   npm install
   ```

3. Execute o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

4. Acesse a aplicação em `http://localhost:5173`

### Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run preview` - Preview do build de produção

### Backend

O projeto consome uma API que deve estar rodando na porta 3333. Certifique-se de que o backend esteja configurado e executando antes de iniciar o frontend.

## 🛠️ Estrutura do Projeto

```
src/
├── components/ui/    # Componentes de interface
├── pages/           # Páginas da aplicação
├── lib/             # Utilitários e configurações
└── app.tsx          # Componente raiz
``` 

<div align="center">
  <img src="https://img.notionusercontent.com/s3/prod-files-secure%2F08f749ff-d06d-49a8-a488-9846e081b224%2F409d3377-f5ba-45a2-a60f-51f625a463dd%2Fcapa_agents.png/size/w=2000?exp=1752332722&sig=Ayi6-uhd6NGPt9J3xz0jxUWXQ--T4FBeYeMqjXWv_F0&id=21b395da-5770-8061-b24c-c1aa48c0fb3a&table=block" >
</div>
