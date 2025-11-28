# Site-de-Receitas
Projeto de um site de receitas utilizando React+vite+typescript

Membros e componentes que cada um desenvolveu:
Matheus Afonso Tavares: RecipeList.tsx e SimpleCard.tsx,
Fagner Abreu Borges: Navbar.tsx e RecipeCard.tsx,
Matheus Assis Borges Gomes Campelo: SearchBar.tsx e Carousel.tsx,
Thallita Evelyn Silva Sousa: Button.tsx e Title.tsx,
Wendel Borges da Silva Vieira: Footer.tsx e Label.tsx.

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
   - Veja erros no terminal ou no console do navegador.

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
   - Verifique se todas as dependências foram instaladas.
   - Veja erros no terminal ou no console do navegador.

