const {Router} = require('express');
const authRouter = Router();
const controller = require('../controllers/auth.controller');
const {checkIsUserPresentMiddleware, checkUserPasswordMiddleware } = require('../middlewares/');



authRouter.post('/', checkIsUserPresentMiddleware, checkUserPasswordMiddleware, controller.login);


module.exports = authRouter;
