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
        },
        password: {
            type: DataTypes.STRING,
            allowNull:false,
        },

    }, {
        tableName: 'newusers',
        timestamps: false
    });

    return User;
};
