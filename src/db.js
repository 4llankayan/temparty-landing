import { Sequelize } from "sequelize";
import dotenv from "dotenv/config.js";
import pg from 'pg';

const sequelize = new Sequelize(
  process.env.DB_URL,
  {
    dialect: 'postgres',
    dialectModule: pg
  }
);

export default sequelize;
