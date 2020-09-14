const {ErrorHandler, errors, statusCodesEnum} = require('../error');

module.exports = {
    carsValidity: (req, res, next) => {
        try {
            const cars = req.body;
            if ( !cars.model || !cars.year || !cars.price) {
                return next(new ErrorHandler(
                    errors.BAD_REQUEST_NOT_VALID_CAR.message,
                    statusCodesEnum.BAD_REQUEST,
                    errors.BAD_REQUEST_NOT_VALID_CAR.code))
            }
            next();
        } catch (err) {
            next(err)
        }
    }
};
