const { UserErrorHandler, userErrors, statusCodesEnum } = require('../userError');
const{ userValidator: {newUserValidator} } = require('../validators');
module.exports = {
    usersValidity: (req, res, next) => {
        try {
            const user = req.body;
            const {error} = newUserValidator.validate(user);
            if (error) {
                return next(new UserErrorHandler(
                    userErrors.BAD_REQUEST_NOT_VALID_USER.message,
                    statusCodesEnum.BAD_REQUEST,
                    userErrors.BAD_REQUEST_NOT_VALID_USER.code))
            }
            next();

        } catch (err) {
            next(err)
        }
    }
};
