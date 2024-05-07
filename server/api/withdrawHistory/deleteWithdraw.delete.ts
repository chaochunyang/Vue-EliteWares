import { readBody } from "h3";
import {
  WithdrawModel,
  WithdrawAttributes,
} from "@/server/models/withdrawHistory";
import sequelize from "@/server/db";

const DeleteWithdraw = async (body: WithdrawAttributes) => {
  const WithdrawHistory = await WithdrawModel(sequelize);
  const data = await WithdrawHistory.destroy({
    where: {
      ProductID: body.ProductID,
    },
  });
  return data;
};

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const data = await DeleteWithdraw(body as WithdrawAttributes);
    return data;
  } catch (error) {
    console.error("Error in event handler:", error);
    return { error: "no return data!" };
  }
});
