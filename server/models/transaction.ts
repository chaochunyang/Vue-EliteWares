import { Model, DataTypes } from "sequelize";
import { Sequelize } from "sequelize";

interface TransAttributes {
  TransUUID?: string;
  TransID: string;
  TransDate: Date;
  TransMan: string;
  CustomerID: string;
  TransPrice: string;
  TransCost: string;
  Remark?: string;
}

interface TransInstance extends Model<TransAttributes>, TransAttributes {}

const TransModel = (sequelize: Sequelize) => {
  const model =  sequelize.define<TransInstance>("TransHistory", {
    TransUUID: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    TransID: {
      type: DataTypes.STRING(10),
      allowNull: false,
      unique: true,
    },
    TransDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    TransMan: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    CustomerID: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    TransPrice: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    TransCost: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    Remark: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
  });
  sequelize.sync({alter:true})
  return model
};

export { TransAttributes, TransInstance, TransModel };
