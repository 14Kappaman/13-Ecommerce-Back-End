const { Model, DataTypes } = require('sequelize');
const { Product}= require("./Product")

const sequelize = require('../config/connection');
const Tag = require('./Tag');

class ProductTag extends Model {}

ProductTag.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    product_id: {type:DataTypes.INTEGER, references: {model: "Product", key: "id" } , onDelete: "CASCADE"},
    tag_id: {type:DataTypes.INTEGER, references: {model: "Tag", key: "id" } , onDelete: "CASCADE"}
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
