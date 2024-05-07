import { DataTypes } from "sequelize";
import sequelize from "@/server/db"

const InventoryModel = async () => {
    const Inventory = sequelize.define("Inventory", {
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
    await Inventory.sync({ alter: true });
    return Inventory
}

export default InventoryModel
