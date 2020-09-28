const uuid = require('uuid').v4();
const fs = require('fs-extra').promises;
const path = require('path');
const chalk = require('chalk');


const { emailService, userService } = require('../services');
const { hashPassword } = require('../helpers');
const { statusCodesEnum } = require('../error');
const { WELCOME } = require('../configs/email-actin.enum');
const { transactionInstance } = require('../dataBase').getInstance();



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
        const transaction = await transactionInstance();
        try {
            const {body: user, avatar} = req;
            user.password = await hashPassword(user.password);

            const newUser = await userService.createUser(user, transaction);

            if (avatar) {
                const photoDir = `/users/${newUser.id}/photos`;
                const fileExtension = avatar.name.split('.').pop();
                const photoName = `${uuid}.${fileExtension}`;



                await fs.mkdir(path.resolve(process.cwd(), 'public', `./${photoDir}`), {recursive: true});
                await avatar.mv(path.resolve(process.cwd(), 'public', `./${photoDir}`, `./${photoName}`));
                await userService.update(newUser.id, {avatar: `${photoDir}/${photoName}` }, transaction);
            }
            await emailService.sendMail(user.email, WELCOME, {userName: user.email});


            await transaction.commit();
            console.log(chalk.green('TRANSACTION COMMIT'));
            res.status(statusCodesEnum.CREATED).json(newUser);
        } catch (err) {
            console.log(chalk.bgMagentaBright(err.message));
            console.log(chalk.magenta('TRANSACTION ROLLBACK'));
            await  transaction.rollback();
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
        const transaction = await transactionInstance();
        try {
            const {body: user, avatar} = req;
            await userService.update(req.params.id, req.body, transaction);

            if (avatar) {
                const photoDir = `/users/${req.params.id}/photos`;
                const fileExtension = avatar.name.split('.').pop();
                const photoName = `${uuid}.${fileExtension}`;

                const oldFile = path.resolve(process.cwd(), 'public', `./users/${req.params.id}`);

                await fs.rmdir(oldFile, {recursive: true});
                await fs.mkdir(path.resolve(process.cwd(), 'public', `./${photoDir}`), {recursive: true});
                await avatar.mv(path.resolve(process.cwd(), 'public', `./${photoDir}`, `./${photoName}`));
                await userService.update(req.params.id, {avatar: `${photoDir}/${photoName}` }, transaction);
            }

            await transaction.commit();
            res.status(statusCodesEnum.OK).json(user);
        } catch (err) {
            await  transaction.rollback();
            next(err)
        }
    },

    delete: async (req, res, next) => {
        const transaction = await transactionInstance();
        try {
            const oldFile = path.resolve(process.cwd(), 'public', `./users/${req.params.id}`);
            await userService.delete(req.params.id, transaction);
            await fs.rmdir(oldFile, {recursive: true});
            await transaction.commit();
            res.status(statusCodesEnum.OK).end('User destroyed');
        } catch (err) {
            await  transaction.rollback();
            next(err)
        }
    }
};
