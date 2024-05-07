import { Model, DataTypes } from "sequelize";
import { Sequelize } from "sequelize";

interface WithdrawAttributes {
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
  WithdrawDate: Date;
  RecordDate: Date;
  ModifiedDate: Date;
  WithdrawMan: string;
  ProductStatus: string;
  TransactionCode: string;
  OutPrice: string;
  OutCost: string;
  OutNumber: string;
  PicBinaryCode: Buffer;
  Remark?: string;
}

interface WithdrawInstance extends Model<WithdrawAttributes>, WithdrawAttributes {}

const WithdrawModel = (sequelize: Sequelize) => {

  const model =  sequelize.define<WithdrawInstance>("WithdrawHistory", {
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
    WithdrawMan: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    ProductStatus: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    TransactionCode: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    OutPrice: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    OutCost: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    OutNumber: {
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

export { WithdrawAttributes, WithdrawInstance, WithdrawModel };
