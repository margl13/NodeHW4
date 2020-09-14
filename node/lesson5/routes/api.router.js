const {Router} = require('express');
const apiRouter = Router();

const {carsRouter, usersRouter} = require('../routes');


apiRouter.use('/cars', carsRouter);
apiRouter.use('/users', usersRouter);


module.exports = apiRouter;
