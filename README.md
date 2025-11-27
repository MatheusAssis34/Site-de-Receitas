# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```



You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
/*
  TUTORIAL DE INSTALAÇÃO DO PROJETO

1) Baixe ou clone o repositório do GitHub:
   → git clone https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git

2) Abra o projeto no VS Code:
   → File > Open Folder > selecione a pasta do projeto.

3) Instale todas as dependências necessárias:
   → npm install
   Isso instalará React, Firebase e todas as bibliotecas usadas.

4) Crie o arquivo .env:
   → Na raiz do projeto, crie um arquivo chamado ".env"
   → Insira as variáveis abaixo com os dados do seu Firebase:

        VITE_API_KEY=sua_api_key
        VITE_AUTH_DOMAIN=sua_auth_domain
        VITE_PROJECT_ID=seu_project_id
        VITE_STORAGE_BUCKET=seu_storage_bucket
        VITE_MESSAGING_SENDER_ID=sua_messaging_id
        VITE_APP_ID=seu_app_id

5) Inicie o servidor local:
   → npm run dev
   O sistema estará disponível no navegador em:
   http://localhost:5173

6) Caso algo dê errado:
   - Verifique se o arquivo .env está preenchido corretamente.
   - Verifique se todas as dependências foram instaladas.
   - Veja erros no terminal ou no console do navegador


   TUTORIAL DE USO DO PROJETO

1) Faça login ou crie uma nova conta:
   - Acesse a tela de Login.
   - Informe email e senha.
   - Usuários autenticados terão acesso às rotas protegidas.

2) Criar uma nova receita:
   - Vá ao menu “Criar Receita”.
   - Preencha os campos: Título, Descrição e Ingredientes.
   - Clique em “Criar Receita”.
   - A receita será salva automaticamente no Firestore.

3) Visualizar receitas cadastradas:
   - Acesse “Minhas Receitas”.
   - Todas as receitas do usuário logado serão listadas.

4) Ver detalhes de uma receita:
   - Clique sobre a receita desejada.
   - Será exibido título, descrição e ingredientes da receita.

5) Encerrar o servidor local:
   - No terminal do VS Code, pressione:
     CTRL + C

6) Dicas de uso:
   - Mantenha-se logado para acessar todas as funcionalidades.
   - Atualize as páginas se os dados demorarem a aparecer.
   - Caso falte alguma informação, revise seu cadastro no Firebase.
   */

   
])
```
