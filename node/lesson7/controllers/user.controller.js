const { userService } = require('../services');
const { hashPassword } = require('../helpers');


module.exports = {

    read: async (req, res, next) => {
        try {
            const users = await userService.findAll();
            res.json(users);
        } catch (err) {
            next(err);
        }
    },

    create: async (req, res, next) => {
        try {
            const user = req.body;
            user.password = await hashPassword(user.password);
            const newUser = await userService.createUser(user);
            res.status(201).json(newUser);
        } catch (err) {
            next(err)
        }
    },

    findById: async (req, res, next) => {
        try {
            const user = await userService.findById(+req.params.id);
            res.json(user);
        } catch (err) {
            next(err)
        }
    },

    update: async (req, res, next) => {
        try {
            const user = req.user;
            const newUser = {...user, ...req.body};
            const updatedUser = await userService.update(+req.params.id, newUser);
            res.send(updatedUser);
        } catch (err) {
            next(err)
        }
    },

    delete: async (req, res, next) => {
        try {
            userService.destroy(req);
            res.status(200).end('User destroyed');
        } catch (err) {
            next(err)
        }
    }
};
