import express from "express";
import auth from "../middleware/auth.js";
import parties from "../src/controllers/parties_controller.js";
import users from "../src/controllers/users_controller.js";

const routes = express.Router();

routes.post("/api/register", users.register)
routes.post("/api/login", users.login)

routes.get("/api/parties", auth.verifyToken, parties.findAll);
routes.post("/api/parties", auth.verifyToken, parties.addParty);
routes.get("/api/parties/:id", auth.verifyToken, parties.findParty);
routes.put("/api/parties/:id", auth.verifyToken, parties.updateParty);
routes.delete("/api/parties/:id", auth.verifyToken, parties.deleteParty);

export { routes as default };
