import { Sequelize } from "sequelize";
import db from "../db.js";

export default db.define("party", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    date: {
        type: Sequelize.DATE,
        allowNull: true
    },
    address: {
      type: Sequelize.STRING,
      allowNull: false
    },
    descricao: Sequelize.STRING
})
