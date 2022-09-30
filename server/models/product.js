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
    name: {type: DataTypes.STRING,
    allowNull: false,
  validate:{
    notNull:{
      msg: 'name is required'
    },
    notEmpty:{
      msg: 'name is required'
    }
  }},
    productImage: {type: DataTypes.STRING,
    allowNull: false,
  validate:{
    notNull:{
      msg: 'productImage is required'
    },
    notEmpty:{
      msg: 'productImage is required'
    }
  }},
    description: {type: DataTypes.STRING,
    allowNull: false,
  validate:{
    notNull:{
      msg: 'description is required'
    },
    notEmpty:{
      msg: 'description is required'
    }
  }},
    price: {type: DataTypes.INTEGER,
    allowNull: false,
  validate:{
    notNull:{
      msg: 'price is required'
    },
    notEmpty:{
      msg: 'price is required'
    }
  }},
    UserId: {type: DataTypes.INTEGER,
    allowNull: false,
  validate:{
    notNull:{
      msg: 'UserId is required'
    },
    notEmpty:{
      msg: 'UserId is required'
    }
  }},
    stock: {type: DataTypes.INTEGER,
    allowNull: false,
  validate:{
    notNull:{
      msg: 'stock is required'
    },
    notEmpty:{
      msg: 'stock is required'
    }
  }},
    CategoryId: {type: DataTypes.INTEGER,
    allowNull: false,
  validate:{
    notNull:{
      msg: 'CategoryId is required'
    },
    notEmpty:{
      msg: 'CategoryId is required'
    }
  }}
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};