import { TransModel } from "@/server/models/transaction";
import sequelize from "@/server/db"

async function FindAllData() {
  const Trans = await TransModel(sequelize);
  const data = await Trans.findAll();
  return data
}

export default defineEventHandler(async (event) => {
    try {
      const data = await FindAllData();
      return data;
    } catch (error) {
      console.error("Error in event handler:", error);
      return { error: "no return data!" };
    }
  });