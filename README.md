# Projeto Bootcamp Digital FullStack - Netflix

## JS Backend 
Node.js com MongoDB

## Configuração
Alterar arquivo .env com as informações de acesso


## Script para executar modo desenvolvimento
~~~bash
npm run dev
~~~

## Rotas disponíveis

### Rotas Geral

>Ação | Rota
>-----|-----
>Geral|[http://localhost:5000/](http://localhost:5000/)

### Rotas de Usuário

>Ação | Rota
>-----|-----
>Criar usuário|[/users/new](http://localhost:5000/users/new)
>Usuário específico|[/users/id/:id](http://localhost:5000/users/id/:id)
>Excluir usuário|[/users/destroy/:id](http://localhost:5000/users/destroy/:id)

### Rotas de Sessão

>Ação | Rota
>-----|-----
>Sessão|[/session](http://localhost:5000/session)
>Criar sessão|[/session/new](http://localhost:5000/session/new)

### Rotas de Filme

>Ação | Rota
>-----|-----
>Listar Filmes com paginação|[/movies](http://localhost:5000/movies)
>Filme específico|[/movies/id/:id](http://localhost:5000/movies/id/:id)
>Pesquisar pelo título do Filme|[/movies/search/:search](http://localhost:5000/movies/search/:search)
>Criar filme|[/movies/new](http://localhost:5000/movies/new)

### Rotas de Lista de filmes

>Ação | Rota
>-----|-----
>Lista|[/list](http://localhost:5000/list)
>Adicionar filme|[/list/add/:id](http://localhost:5000/list/add/:id)
>Apagar filme da lista|[/list/remove/:id](http://localhost:5000/list/remove/:id)


### Rotas Externas

>Ação | Rota
>-----|-----
>Criar arquivo movies.json|[/external/createBulk]('http://localhost:5000/external/createBulk)
>Buscar filmes do arquivo movies.json|[/external](http://localhost:5000/external)


