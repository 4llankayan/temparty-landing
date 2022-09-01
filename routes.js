import express from "express";
import parties from "./src/controllers/parties_controller.js";

const routes = express.Router();

routes.use(express.static('public'))

routes.get("/parties", parties.findAll);
routes.post("/parties", parties.addParty);
routes.get("/parties/:id", parties.findParty);
routes.put("/parties/:id", parties.updateParty);
routes.delete("/parties/:id", parties.deleteParty);

export { routes as default };
