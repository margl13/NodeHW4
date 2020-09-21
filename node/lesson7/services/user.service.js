const connection = require('../dataBase').getInstance();

module.exports = {

    createUser:  (userObject) => {
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

    findById: async (userId) => {
        const User = connection.getModel('User');
        return User.findById(userId)
    },

    update: async (user) => {
        const User = connection.getModel('User');
        const id = user.id;
        return User.update({
                name: user.name
            },
            {where: {id}})
    },

    delete: async (id) => {
        const User = connection.getModel('User');
        return User.destroy({
            where: {id}
        })
    }
};
