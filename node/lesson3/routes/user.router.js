const { Router } = require('express');
const userRouter = Router();

const controller = require('../controllers/user.controller');
const  { user } = require('../middlewares');

userRouter.get('/', controller.getAllUsers);
userRouter.get('/:userName', controller.getUserById);
userRouter.delete('/:userName', user.checkIsUserPresent, controller.removeUser);
userRouter.post('/', user.checkUser, controller.createUser);

module.exports = userRouter;
