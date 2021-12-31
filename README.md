# Bootcamp Digital FullStack - Projeto Netflix (Backend)

Node.js com MongoDB

## Primeiros passos
1. Criar arquivo **.env** na raiz do projeto com as informações de acesso (ver **.env.example**).
2. Executar script dev: 
~~~bash
npm run dev
~~~

## Rotas disponíveis

### Rotas Geral

>Descrição | Verbo | Rota | Parâmetros | Retorno
>----------|:-----:|------|------------|---------
>Geral|GET|[http://localhost:5000/](http://localhost:5000/)|-|Response Json: { message: "Nossa primeira rota da API" }

### Rotas de Usuário

>Descrição | Verbo | Rota | Parâmetros | Retorno
>----------|:-----:|------|------------|---------
>Criar usuário|POST|[/users/new](http://localhost:5000/users/new)|Body Json Content: { "name": "value_name", "email": "value_email", "password": "value_password" }|status=201 json={"id": "value_id", "name": "value_name"  / 
>|||||status=403 json={ "message": "Usuário já cadastrado" }
>|||||error json={ error }
>Usuário específico|GET|[/users/id/:id](http://localhost:5000/users/id/:id)|Query Parameters: id=value_id|status=200 json={ "user": { "id": "value_id", "name": "value_name"} }
>|||||status=404 json={ "message": "Usuário não encontrado" }
>Excluir usuário|DELETE|[/users/destroy/:id](http://localhost:5000/users/destroy/:id)|Query Parameters: id=value_id|status=200 json={ "message": "Usuário apagado com sucesso." }
>|||||status=404 json={ "message": "Usuário não encontrado" }
>|||||status=500 json={ "message": "Não foi possível deletar o usuário" }

### Rotas de Sessão

>Descrição | Verbo | Rota | Parâmetros | Retorno
>----------|:-----:|------|------------|---------
>Sessão|GET|[/session](http://localhost:5000/session)|
>Criar sessão|POST|[/session/new](http://localhost:5000/session/new)|Body Json Content: { "email": "value_email", "password": "value_password" }

### Rotas de Filme

>Descrição | Verbo | Rota | Parâmetros | Retorno
>----------|:-----:|------|------------|---------
>Listar Filmes com paginação|GET|[/movies](http://localhost:5000/movies)|
>Filme específico|GET|[/movies/id/:id](http://localhost:5000/movies/id/:id)|
>Pesquisar pelo título do Filme|GET|[/movies/search/:search](http://localhost:5000/movies/search/:search)|
>Criar filme|POST|[/movies/new](http://localhost:5000/movies/new)|

### Rotas de Lista de Filmes

>Descrição | Verbo | Rota | Parâmetros | Retorno
>----------|:-----:|------|------------|---------
>Lista|GET|[/list](http://localhost:5000/list)
>Adicionar filme|GET|[/list/add/:id](http://localhost:5000/list/add/:id)
>Apagar filme da lista|GET|[/list/remove/:id](http://localhost:5000/list/remove/:id)


### Rotas Externas

>Descrição | Verbo | Rota | Parâmetros | Retorno
>----------|:-----:|------|------------|---------
>Criar arquivo movies.json|GET|[/external/createBulk]('http://localhost:5000/external/createBulk)
>Buscar filmes do arquivo movies.json|GET|[/external](http://localhost:5000/external)


