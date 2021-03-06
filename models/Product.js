// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');
const Category = require('./Category');
const Tag = require('./Tag');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    product_name: {type: DataTypes.TEXT},
    price: {type: DataTypes.DECIMAL},
    stock: {type: DataTypes.INTEGER, defaultValue: 10},
    category_id: {type:DataTypes.INTEGER, references: {model: "Category", key: "id" }, onDelete: "cascade", hooks: true}
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
