const { Router } = require('express');

const carsRouter = Router();

const { carController } = require('../controllers');
const { auth } = require('../middlewares');


carsRouter.get('/', carController.read);
carsRouter.post('/', auth.checkAccessTokenMiddleware, carController.create);
carsRouter.post('/:id', carController.update);
carsRouter.delete('/:id', carController.delete);

module.exports = carsRouter;
