const {ErrorHandler, errors, statusCodesEnum} = require('../error');
const{carValidator: {newCarValidator, updateCarValidator} } = require('../validators');

module.exports = {
    carsValidity: (req, res, next) => {
        try {
            const car = req.body;
            const{error} = newCarValidator.validate(car);
            if ( error) {
                return next(new ErrorHandler(
                    error.details[0].message,
                    statusCodesEnum.BAD_REQUEST,
                    errors.BAD_REQUEST_NOT_VALID_CAR.code))
            }
            next();
        } catch (err) {
            next(err)
        }
    },

    updateCarValidity: (req, res, next) => {
        try {
            const car = req.body;
            const newcar = Object.keys(car).length !== 0;
            if (!newcar) {
                return next(new ErrorHandler(
                    BAD_REQUEST_NOT_VALID_CAR.message,
                    statusCodesEnum.BAD_REQUEST,
                    BAD_REQUEST_NOT_VALID_CAR.code))
            }

            const {error} = updateCarValidator.validate(car);
            if (error) {
                return next(new ErrorHandler(
                    error.details[0].message,
                    statusCodesEnum.BAD_REQUEST,
                    BAD_REQUEST_NOT_VALID_CAR.code)
                );
            };
            req.car = car;
            next();

        } catch (err) {
            next(err);
        }
    },
};
