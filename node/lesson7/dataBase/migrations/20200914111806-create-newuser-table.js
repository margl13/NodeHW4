const {DataTypes} = require('sequelize');

const { USERS } = require('../../configs/db-tables.enum');


module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable(USERS, {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
      },
      name: {
        type: DataTypes.STRING,
        allowNull:false,
        defaultValue:'Dimas',
      },
      email: {
        type: DataTypes.STRING,
        allowNull:false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull:false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.dropTable(USERS);
  }
};
