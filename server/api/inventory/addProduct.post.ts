import { readBody } from "h3";
import InventoryModel from "@/server/models/inventory";

async function AddProduct(body: object) {
  const Inventory = await InventoryModel();
  const data = await Inventory.create({
    ProductID: "1234",
    Brand: "123",
    Name: "123",
    // InnerCode:
    Materials: "123",
    Color: "123",
    Condition: "123",
    LastCheckTime: Date.parse("2024/05/07 15:42:00"),
    StorageDate: Date.now(),
    WithdrawDate: Date.now(),
    RecordDate: Date.now(),
    ModifiedDate: Date.now(),
    RecordMan: "123",
    ModifiedMan: "123",
    ProductStatus: "123",
    InPrice: "123",
    InCost: "123",
    InNumber: "123",
    PicBinaryCode: "123",
    // Remark:
  });
  return data;
}

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const data = await AddProduct(body);
    return data;
  } catch (error) {
    console.error("Error in event handler:", error);

    return { error: "no return data!" };
  }
});
