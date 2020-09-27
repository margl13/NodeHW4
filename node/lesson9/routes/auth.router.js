const { Router } = require('express');
const authRouter = Router();

const  controller  = require('../controllers/auth.controller');
const { auth, user } = require('../middlewares');




authRouter.post('/', user.checkIsUserPresentMiddleware, user.checkUserPasswordMiddleware, controller.login);
authRouter.post('/refresh', auth.checkRefreshTokenMiddleware, controller.refreshToken);
authRouter.post('/logout', auth.checkAccessTokenMiddleware, controller.logout);


module.exports = authRouter;

