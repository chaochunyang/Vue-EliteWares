import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  "ryngnuoi",
  "ryngnuoi",
  "I6rIfAFQqKqfpJHDmDrPY6dK_5eu936D",
  {
    host: "arjuna.db.elephantsql.com",
    dialect: "postgres",
  }
);
export default async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
    }

}