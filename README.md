# Gobarber-Project
Gobarber é sistema responsável por todo o gerenciamento de uma barbearia moderna.  

# Executando a aplicação

Para rodar o projeto será necessário instalar as seguintes aplicações:
- Docker
- NodeJs
- Yarn (Opcional)
- Postbird(Opcional) para visualização dos dados estruturados na base
- MongoDB Compass(Opcional) para visualização dos dados não estruturados na base

# Requisitos

- Subir a base de dados com o seguinte comando:
``` 
docker run --name database -p 5432:5432 -d -e POSTGRES_DBNAME=postgres
```
