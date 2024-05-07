import { readBody } from "h3";
import {
  WithdrawModel,
  WithdrawAttributes,
} from "@/server/models/withdrawHistory";
import sequelize from "@/server/db";

const EditWithdraw = async (body: WithdrawAttributes) => {
  const WithdrawHistory = await WithdrawModel(sequelize);
  const data = await WithdrawHistory.update(
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
      WithdrawMan: body.WithdrawMan,
      ProductStatus: body.ProductStatus,
      TransactionCode: body.TransactionCode,
      OutPrice: body.OutPrice,
      OutCost: body.OutCost,
      OutNumber: body.OutNumber,
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
    const data = await EditWithdraw(body as WithdrawAttributes);
    return data;
  } catch (error) {
    console.error("Error in event handler:", error);
    return { error: "no return data!" };
  }
});
