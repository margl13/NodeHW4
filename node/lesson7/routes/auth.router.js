const { Router } = require('express');
const authRouter = Router();

const controller = require('../controllers/auth.controller');
const { usersMiddleware: {checkIsUserPresentMiddleware },
        authMiddleware: { checkAccessTokenMiddleware, checkRefreshTokenMiddleware }}
        = require('../middlewares');


authRouter.post('/', checkIsUserPresentMiddleware, controller.login);
authRouter.post('/refresh', checkRefreshTokenMiddleware, controller.refreshToken);
authRouter.post('/logout', checkAccessTokenMiddleware, controller.logout);


module.exports = authRouter;

