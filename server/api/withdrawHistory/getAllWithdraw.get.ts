import { WithdrawModel } from "@/server/models/withdrawHistory";
import sequelize from "@/server/db"

async function FindAllData() {
  const WithdrawHistory = await WithdrawModel(sequelize);
  const data = await WithdrawHistory.findAll();
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