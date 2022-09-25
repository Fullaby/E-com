'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Cart)
      this.hasMany(models.Comment)
      this.hasMany(models.Like)
      this.belongsTo(models.Category)
      this.belongsTo(models.User)
    }
  }
  Product.init({
    name: DataTypes.STRING,
    productImage: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER,
    stock: DataTypes.INTEGER,
    CategoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};