import express, { application } from "express";
import api from "./api/index.js";
const routes = express.Router();

routes.use(express.static('public'))

routes
  .get('/', function(){
  })
  .use(api)
  .use(function(req, res) {
    res.status(404).sendFile('404.html', { root: './public' });
});

export { routes as default };
