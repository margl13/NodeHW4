const {carService} = require('../services');

module.exports = {
    read: async (req, res) => {
        try {
            const cars = await carService.findAll();

            res.status(200).json(cars);
        } catch (err) {
            res.json(err.message)
        }
    },

    create: async (req, res) => {
        try {
            const car = await carService.createCar(req.body);
            res.status(201).json(car);
        } catch (err) {
            res.json(err.message)
        }
    },

    findById: async (req, res) => {
        try {
            const car = await carService.findById(req.params.id);
            res.status(200).json(car);
        }
        catch (err) {
            res.json(err.message);
        }
    },

    update: async (req, res) => {
        try {
           const car = await carService.update(req.params.id, req.body);
            res.status(200).end('Car updated');
        } catch (err) {
            res.json(err.message)
        }
    },

    delete: async (req, res) => {
        try {
            carService.destroy(req);
            res.status(201).end('Car destroyed');
        } catch (err) {
            res.json(err.message)

        }
    }
};
