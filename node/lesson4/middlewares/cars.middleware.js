module.exports = {
    carsValidity: (req, res, next) => {
        try {
            const cars = req.body;
            if ( !cars.model || !cars.year || !cars.price) {
                throw new Error(`Required property: model , year, price`)
            }
            next();
        } catch (err) {
            return res.status(400).end(err.message)
        }
    }
};
