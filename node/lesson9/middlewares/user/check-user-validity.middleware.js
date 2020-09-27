const { ErrorHandler, userErrors, statusCodesEnum } = require('../../error');
const {userValidator: { newUserValidator } } = require('../../validators');


module.exports = (req, res, next) => {
    try {
        const user = req.body;
        const { error } = newUserValidator.validate(user);

        if (error) {
            return next(new ErrorHandler(
                userErrors.BAD_REQUEST_NOT_VALID_USER.message,
                statusCodesEnum.BAD_REQUEST,
                userErrors.BAD_REQUEST_NOT_VALID_USER.code))
        }
        next();

    } catch (err) {
        next(err)
    }
};
