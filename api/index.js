import express from "express";
import parties from "../src/controllers/parties_controller.js";

const routes = express.Router();

routes.get("/api/parties", parties.findAll);
routes.post("/api/parties", parties.addParty);
routes.get("/api/parties/:id", parties.findParty);
routes.put("/api/parties/:id", parties.updateParty);
routes.delete("/api/parties/:id", parties.deleteParty);

export { routes as default };
