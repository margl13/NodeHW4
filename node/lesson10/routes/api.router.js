const {Router} = require('express');
const apiRouter = Router();

const {carsRouter, usersRouter, authRouter} = require('../routes');


apiRouter.use('/cars', carsRouter);
apiRouter.use('/users', usersRouter);
apiRouter.use('/auth', authRouter);


module.exports = apiRouter;
