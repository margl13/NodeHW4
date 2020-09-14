const { UserErrorHandler, userErrors, statusCodesEnum } = require('../userError');

module.exports = {
    usersValidity: (req, res, next) => {
        try {
        const user = req.body;
        if (!user.name) {
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
