const connection = require('../dataBase').getInstance();

module.exports = {

    createUser: async (userObject) => {
        const User = connection.getModel('User');
        return User.create(userObject, {new: true})
    },

    findOneBYParams: (findObject) => {
        const User = connection.getModel('User');
        return User.findOne({
            where: findObject
        })
    },

    findAll: async () => {
        const User = connection.getModel('User');
        return User.findAll({})

    },

    findById: async (paramsId) => {
        const User = connection.getModel('User');
        return User.findByPk(paramsId);
    },

    update: async (paramsId, data) => {
        const User = connection.getModel('User');
        return User.update(data, {
            where: { id: paramsId }
        });
    },

    delete: async (id) => {
        const User = connection.getModel('User');
        return User.destroy({
            where: { id }
        })
    }
};
