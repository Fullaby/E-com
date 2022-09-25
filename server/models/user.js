'use strict';
const {
  Model
} = require('sequelize');
const { hashPass } = require('../helpers/bcrypt');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Product)
      this.hasMany(models.Cart)
    }
  }
  User.init({
    username: {type: DataTypes.STRING,
    allowNull:false,
  validate:{
    notNull:{
      msg: 'username is required'
    },
    notEmpty:{
      msg: 'username is required'
    }
  }},
    password: {type: DataTypes.STRING,
    allowNull:false,
  validate:{
    notNull:{
      msg: 'password is required'
    },
    notEmpty:{
      msg: 'password is required'
    }
  }},
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });

  User.beforeCreate((el)=>{
    el.password= hashPass(el.password)
  })

  return User;
};