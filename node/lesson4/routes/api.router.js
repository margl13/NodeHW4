const {Router} = require('express');
const apiRouter = Router();

const {carsRouter} = require('../routes');


apiRouter.use('/cars', carsRouter);


module.exports = apiRouter;
