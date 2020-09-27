const { USERS } = require('../../configs/db-tables.enum');

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
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
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull:false,
        },
    }, {
        tableName: USERS,
        timestamps: false
    });

    return User;
};


