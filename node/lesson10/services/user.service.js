const { getModel } = require('../dataBase').getInstance();



module.exports = {

    createUser: async (userObject, transaction) => {
        const User = getModel('User');
        return User.create(userObject, {new: true, transaction})
    },

    findOneBYParams: (findObject) => {
        const User = getModel('User');
        return User.findOne({
            where: findObject
        })
    },

    findAll: async () => {
        const User = getModel('User');
        return User.findAll({})

    },

    findById: async (paramsId) => {
        const User = getModel('User');
        return User.findByPk(paramsId);
    },

    update: async (paramsId, data, transaction) => {
        const User = getModel('User');
        return User.update(data, {
            where: { id: paramsId },
            returning: true,
            plain: true,
            transaction
        });
    },

    delete: async (id, transaction) => {
        const User = getModel('User');
        return User.destroy({
            where: { id },
            transaction
        })
    }
};
