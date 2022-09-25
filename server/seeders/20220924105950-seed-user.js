'use strict';
const fs =require('fs');
const { hashPass } = require('../helpers/bcrypt');
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     let data= JSON.parse(fs.readFileSync('./db.json', 'utf-8')).Users
     data.forEach((el)=>{
      el.createdAt=el.updatedAt= new Date()
      el.password= hashPass(el.password)
     })
     await queryInterface.bulkInsert('Users', data)
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Users', null)
  }
};