import express from "express";
import routes from "./routes.js";
import db from "./src/db.js";

const app = express();

app.use(express.json());
app.use(routes);

(async () => {
  // const Party = require('./models/party');
  try {
      await db.sync();
      console.log(`Banco de dados conectado: ${process.env.DB_NAME}`)

      // const resultado = await Party.create({
      //   name: 'Temparty',
      //   date: 2021-12-31,
      //   address: 'Rua Orestes Gerin 535',
      //   descricao: 'Primeira edição, atração principal: Dj Jeeh FDC'
      // })

      // console.log(resultado);

  } catch (error) {
      console.log(error);
  }
})();

app.listen(3000, () => console.log("Servidor iniciado na porta 3000"));
