const { Router } = require('express');
const usersRouter = Router();

const { userController } = require('../controllers');
const { user } = require('../middlewares');


usersRouter.get('/', userController.read);
usersRouter.get('/:id', userController.findById);
usersRouter.post('/', user.checkUserValidityMiddleware, userController.create);
usersRouter.put('/:id', user.checkUserValidityMiddleware, userController.update);
usersRouter.delete('/',  userController.delete);

module.exports = usersRouter;
