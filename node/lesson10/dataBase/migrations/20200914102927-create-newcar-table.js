const {DataTypes} = require('sequelize');
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('newcars', {
      id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      model:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      price:{
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      year:{
        type: DataTypes.INTEGER,
        allowNull: false,
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('newcars');
  }
};
