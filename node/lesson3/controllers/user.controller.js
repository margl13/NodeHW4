const userService = require('../services/user.servis');



module.exports = {

    getAllUsers: (req, res) => {
       const users =userService.fetchAll();
        res.render('users', { users: users});
    },

    getUserById: (req, res) => {
        const user = userService.getUserByName(req.params.userName);

        res.json(user);
    },

    removeUser: (req, res) => {
        const user = userService.removeUserByName(req.params.userName);

        res.json(user);
    },

    createUser: (req, res) => {
        const newUsers = userService.create(req.body);
        res.json(newUsers);
    }
};
