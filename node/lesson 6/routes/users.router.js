const {Router} = require('express');

const {userController} = require('../controllers');
const middleware = require('../middlewares/users.middlewares');
const usersRouter = Router();

usersRouter.get('/', userController.read);
usersRouter.get('/:userName:', middleware.usersValidity, userController.findById);
usersRouter.post('/', middleware.usersValidity, userController.create);
usersRouter.delete('/:userName', middleware.usersValidity, userController.delete);

module.exports = usersRouter;
