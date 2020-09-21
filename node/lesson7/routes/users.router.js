const {Router} = require('express');
const usersRouter = Router();

const {userController} = require('../controllers');
const { usersMiddleware: { usersValidity, isUserPresentById }} = require('../middlewares/users/users.middleware');


usersRouter.get('/', read);
usersRouter.get('/:id', isUserPresentById, userController.findById);
usersRouter.post('/', usersValidity, userController.create);
usersRouter.delete('/:id', isUserPresentById, userController.delete);

module.exports = usersRouter;
