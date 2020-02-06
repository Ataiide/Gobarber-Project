import express from "express";
import path from "path";
import routes from "./routes";

import "./database";

/*Toda vez que essa classe é instanciada, o método "constructor" 
é chamado Automaticamente
*/
class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }
  middlewares() {
    this.server.use(express.json());
    this.server.use(
      "/files",
      express.static(path.resolve(__dirname, "..", "tmp", "uploads"))
    );
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
