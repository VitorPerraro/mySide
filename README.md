Projeto MYSIDE com Next.js

Este é um projeto de e-commerce desenvolvido utilizando Next.js, criado com create-next-app.
Funcionalidades

    Listagem dinâmica de produtos com filtros e paginação.
    Página de detalhes do produto com opção de adicionar itens ao carrinho.
    Gerenciamento de carrinho utilizando a Context API para manter o estado entre as páginas.
    Renderização no lado do servidor (SSR) para carregar dados de produtos rapidamente.
    Estilização com CSS Modules para garantir o escopo local dos estilos.
    Testes com Jest e React Testing Library para garantir a qualidade do código.

Como Iniciar

Para iniciar o projeto localmente, siga as etapas abaixo:
Pré-requisitos

Certifique-se de ter o Node.js instalado na sua máquina. Você pode baixar o Node.js no site oficial.
Instalação

Clone o repositório e instale as dependências necessárias:

bash

git clone https://github.com/VitorPerraro/mySide.git
cd mySide
npm install

Rodando o Servidor de Desenvolvimento

Após instalar as dependências, execute o servidor de desenvolvimento:

bash

npm run dev

Abra http://localhost:3000 no seu navegador para ver o resultado.

Você pode começar a editar as páginas modificando os arquivos dentro da pasta app, como app/page.tsx ou app/products/page.tsx. A aplicação suporta hot-reloading, então suas alterações serão refletidas instantaneamente.
