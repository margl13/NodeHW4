const { CARS } = require('../../configs/db-tables.enum');

module.exports = (sequelize, DataTypes) => {
    const Car = sequelize.define('Car', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.INTEGER,
        },
        model: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        year: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    }, {
        tableName: CARS,
        timestamps: false
    });

    return Car;
};
