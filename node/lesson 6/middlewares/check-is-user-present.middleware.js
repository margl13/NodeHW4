const { userService } = require('../services');
const { userErrors,  UserErrorHandler, statusCodesEnum} = require('../userError');

module.exports = async (req, res, next) => {
    try {
        const { email } = req.body;
        const user = await userService.findOneBYParams({ email });

        if (!user) {
            return next(new UserErrorHandler(userErrors.NOT_FOUND_USER.message, statusCodesEnum.NOT_FOUND, userErrors.NOT_FOUND_USER.code))
        }

        req.user = user;

        next();
    } catch (e) {
        next(e)
    }
}

