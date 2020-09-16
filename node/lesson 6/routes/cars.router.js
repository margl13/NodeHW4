const {Router} = require('express');
const carsRouter = Router();

const {carController} = require('../controllers');
const middleware = require('../middlewares/cars.middleware');


carsRouter.get('/', carController.read);
carsRouter.post('/', middleware.carsValidity, carController.create);
carsRouter.post('/:id', middleware.updateCarValidity, carController.update);
carsRouter.delete('/:id', carController.delete);

module.exports = carsRouter;
