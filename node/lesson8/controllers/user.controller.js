const { emailService, userService } = require('../services');
const { hashPassword } = require('../helpers');
const { statusCodesEnum } = require('../error');
const { WELCOME } = require('../configs/email-actin.enum');


module.exports = {

    read: async (req, res, next) => {
        try {
            const users = await userService.findAll();
            res.status(statusCodesEnum.OK).json(users);
        } catch (err) {
            next(err);
        }
    },

    create: async (req, res, next) => {
        try {
            const user = req.body;
            user.password = await hashPassword(user.password);
            const newUser = await userService.createUser(user);

            await emailService.sendMail(user.email, WELCOME, { userName: user.email });

            res.status(statusCodesEnum.CREATED).json(newUser);
        } catch (err) {
            next(err)
        }
    },

    findById: async (req, res, next) => {
        try {
            const user = await userService.findById(+req.params.id);
            res.status(statusCodesEnum.OK).json({user})
        } catch (err) {
            next(err)
        }
    },

    update: async (req, res, next) => {
        try {
            const user = await userService.update(req.params.id, req.body);
            res.status(statusCodesEnum.OK).json(user);
        } catch (err) {
            next(err)
        }
    },

    delete: async (req, res, next) => {
        try {
            await userService.delete(req.params.id);
            res.status(statusCodesEnum.OK).end('User destroyed');
        } catch (err) {
            next(err)
        }
    }
};
