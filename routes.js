import express, { application } from "express";
import api from "./api/index.js";

const routes = express.Router();

routes.use(express.static('public'))

routes
  .get('/', function(){
  })
  .use(api);

export { routes as default };
