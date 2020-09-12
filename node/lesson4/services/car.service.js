const {Op} = require('sequelize');
const connection = require('../dataBase').getInstance();

module.exports = {

    createCar: async (carObject) => {
        const Car = connection.getModel('Car');
        return Car.create(carObject, {new: true})
    },

    findAll: async () => {
       const Car = connection.getModel('Car');
       return Car.findAll({})

   },

        findById: async (carId) => {
            const Car = connection.getModel('Car');
            return Car.findById(carId)
        },

        update: async (car) => {
       const Car = connection.getModel('Car');
        const id = car.id;
            return Car.update({
                model: car.model,
                price: car.price,
                year: car.year
            },
                {where: {id}
                })
        },

        delete: async (id) => {
       const Car = connection.getModel('Car');
       return Car.destroy({
           where: {id}
       })
   }
};
