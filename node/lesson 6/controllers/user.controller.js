const {userService} = require('../services');
const {hashPassword} = require('../helpers')

module.exports = {

    create: async (req, res) => {
        try {
            const user = req.body;
            user.password = await hashPassword(user.password);
            const newUser = await userService.createUser(user);
            res.status(201).json(newUser);
        } catch (err) {
            res.json(err.message)
        }
    },

    read: async (req, res) => {
        try {
            const users = await userService.findAll();
            res.status(200).json(users);
        } catch (err) {
            res.json(err.message)
        }
    },


    findById: async (req, res) => {
        try {
            const user = await userService.findById(req.params.id);
            res.status(200).json(user);
        }
        catch (err) {
            res.json(err.message);
        }
    },

    update: async (req, res) => {
        const {userId} = req.params;
        const newName= req.body.model;
        try {
            await userService.update(req.params.id, req.body);
            res.status(200).end('User updated');
        } catch (err) {
            res.json(err.message)
        }
    },

    delete: async (req, res) => {
        try {
            userService.destroy(req);
            res.status(201).end('User destroyed');
        } catch (err) {
            res.json(err.message)

        }
    }
};
