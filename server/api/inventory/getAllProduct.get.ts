import { InventoryModel } from "@/server/models/inventory";
import sequelize from "@/server/db"

async function FindAllData() {
  const Inventory = await InventoryModel(sequelize);
  const data = await Inventory.findAll();
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