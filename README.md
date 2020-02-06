# Gobarber-Project
Gobarber é sistema responsável por todo o gerenciamento de uma barbearia moderna.  

# Dependências

    "bcryptjs": "^2.4.3",
    "bee-queue": "^1.2.2",
    "date-fns": "^2.0.0-beta.5",
    "express": "^4.17.1",
    "express-handlebars": "^3.1.0",
    "jsonwebtoken": "^8.5.1",
    "mongoose": "^5.8.1",
    "multer": "^1.4.2",
    "nodemailer": "^6.4.2",
    "nodemailer-express-handlebars": "^3.1.0",
    "pg": "^7.14.0",
    "pg-hstore": "^2.3.3",
    "sequelize": "^5.21.2",
    "yup": "^0.27.0"

# Executando a aplicação

Para rodar o projeto será necessário instalar as seguintes aplicações:
- Docker;
- NodeJs;
- Yarn (Opcional);
- Postbird -> para visualização dos dados estruturados na base;
- MongoDB Compass -> para visualização dos dados não estruturados na base;
- Sequelize;
- Sequelize CLI;

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
