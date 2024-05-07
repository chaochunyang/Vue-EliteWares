import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const dbUser: string = process.env.dbUser;
const pwd: string = process.env.pwd;
const host: string = process.env.host;

const sequelize = new Sequelize(dbUser, dbUser, pwd, {
  host: host,
  dialect: "postgres",
});

export default sequelize