
const {Router} = require('express');

const {carController} = require('../controllers');
const middleware = require('../middlewares/cars.middleware');
const carsRouter = Router();

carsRouter.get('/', carController.read);
carsRouter.post('/', middleware.carsValidity, carController.create);
carsRouter.post('/:id', middleware.carsValidity, carController.update);
carsRouter.delete('/:id', carController.delete);

module.exports = carsRouter;
