import { readBody } from "h3";
import { TransModel, TransAttributes } from "@/server/models/transaction";
import sequelize from "@/server/db";

const AddTrans = async (body: TransAttributes) => {
  const transaction = await TransModel(sequelize);
  const data = await transaction.create({
    TransID: body.TransID,
    TransDate: body.TransDate,
    TransMan: body.TransMan,
    CustomerID: body.CustomerID,
    TransPrice: body.TransPrice,
    TransCost: body.TransCost,
    Remark: body.Remark,
  });
  return data;
};

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const data = await AddTrans(body as TransAttributes);
    return data;
  } catch (error) {
    console.error("Error in event handler:", error);
    return { error: "no return data!" };
  }
});
