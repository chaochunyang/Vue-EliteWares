import { readBody } from "h3";
import { InventoryModel, InventoryAttributes } from "@/server/models/inventory";
import sequelize from "@/server/db";

const AddProduct = async (body: InventoryAttributes) => {
  const Inventory = await InventoryModel(sequelize);
  const data = await Inventory.update(
    {
      ProductID: body.ProductID,
      Brand: body.Brand,
      Name: body.Name,
      InnerCode: body.InnerCode,
      Materials: body.Materials,
      Color: body.Color,
      Condition: body.Condition,
      LastCheckTime: body.LastCheckTime,
      StorageDate: body.StorageDate,
      WithdrawDate: body.WithdrawDate,
      RecordDate: body.RecordDate,
      ModifiedDate: body.ModifiedDate,
      RecordMan: body.RecordMan,
      ModifiedMan: body.ModifiedMan,
      ProductStatus: body.ProductStatus,
      InPrice: body.InPrice,
      InCost: body.InCost,
      InNumber: body.InNumber,
      PicBinaryCode: body.PicBinaryCode,
      Remark: body.Remark,
    },
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
