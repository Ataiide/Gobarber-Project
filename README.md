# Gobarber-Project
Gobarber é sistema responsável por todo o gerenciamento de uma barbearia moderna.  

# Executando a aplicação

Para rodar o projeto será necessário instalar as seguintes aplicações:
- Docker
- NodeJs
- Yarn (Opcional)
- Postbird -> para visualização dos dados estruturados na base
- MongoDB Compass -> para visualização dos dados não estruturados na base

# Requisitos

- Subir a base de dados com o seguinte comando:
``` 
docker run --name database -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
```
Em seguida, acessaremos o **Postbird** com os dados abaixo:
- Host: localhost
- Port: 5432
- Username: Postgres
- Password: docker

Logo após acessar o PostBird, no canto superior esquerdo, criaremos uma nova database chamada gobarber. 
