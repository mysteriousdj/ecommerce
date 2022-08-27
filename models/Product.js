const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Product extends Model {}

Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
  },
  productName: {
      type: DataTypes.STRING,
      allowNull: false
  },
  price: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
  },
  stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
  },
  categoryId: {
      type: DataTypes.INTEGER,
      references: {
          model: "category",
          key: "id"
      }
  }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
