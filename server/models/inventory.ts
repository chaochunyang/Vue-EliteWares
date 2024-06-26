import { Model, DataTypes } from "sequelize";
import { Sequelize } from "sequelize";

interface InventoryAttributes {
  ProductUUID?: string;
  ProductID: string;
  Brand: string;
  Name: string;
  InnerCode?: string;
  Materials: string;
  Color: string;
  Condition: string;
  LastCheckTime?: Date;
  StorageDate: Date;
  WithdrawDate?: Date;
  RecordDate: Date;
  ModifiedDate: Date;
  RecordMan: string;
  ModifiedMan: string;
  ProductStatus: string;
  InPrice: string;
  InCost: string;
  InNumber: string;
  PicBinaryCode: Buffer;
  Remark?: string;
}

interface InventoryInstance extends Model<InventoryAttributes>, InventoryAttributes {}

const InventoryModel = (sequelize: Sequelize) => {
  const model =  sequelize.define<InventoryInstance>("Inventory", {
    ProductUUID: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    ProductID: {
      type: DataTypes.STRING(10),
      allowNull: false,
      unique: true,
    },
    Brand: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    Name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    InnerCode: {
      type: DataTypes.STRING(30),
      allowNull: true,
    },
    Materials: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    Color: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    Condition: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    LastCheckTime: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    StorageDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    WithdrawDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    RecordDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    ModifiedDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    RecordMan: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    ModifiedMan: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    ProductStatus: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    InPrice: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    InCost: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    InNumber: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    PicBinaryCode: {
      type: DataTypes.BLOB,
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

export { InventoryAttributes, InventoryInstance, InventoryModel };
