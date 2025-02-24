# Projeto Albums
Aplicação que consome API Rest local, com tela de login que armazena no localStorage e busca as imagens dos albums e seus dados na API que roda no json-server.

## Índice

- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Instalação](#instalação)
- [Uso](#uso)

## Tecnologias Utilizadas

- Angular 17
- TypeScript
- HTML5
- CSS3

## Instalação

Para rodar este projeto localmente, siga os passos abaixo:

1. Clone o repositório:
https://github.com/eltonips/ProjectAlbums.git
2. Navegue até o diretório do projeto:
cd nome-do-repositorio
3. Instale as dependências:   
npm install
4. Rodar o json-server com o comando:
json-server --watch db.json
6. Inicie o servidor de desenvolvimento:   
ng serve
7. Acesse a aplicação em seu navegador: http://localhost:4200

## Uso
- A aplicação irá abrir na tela de login
- Informe um login e senha
- Clique no botão Logar. No localStorage do navegador será possível ver que gravou o username e password informados
- Abrirá uma tela com os Albums listados e com uma imagem
- Clicando na imagem irá exibir a lista de photos daquele album
