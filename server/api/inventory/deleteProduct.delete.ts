import { readBody } from "h3";
import { InventoryModel, InventoryAttributes } from "@/server/models/inventory";
import sequelize from "@/server/db";

const AddProduct = async (body: InventoryAttributes) => {
  const Inventory = await InventoryModel(sequelize);
  const data = await Inventory.destroy(
    {
      where: {
        ProductID: body.ProductID,
      },
    }
  );
  return data;
};

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const data = await AddProduct(body as InventoryAttributes);
    return data;
  } catch (error) {
    console.error("Error in event handler:", error);
    return { error: "no return data!" };
  }
});
