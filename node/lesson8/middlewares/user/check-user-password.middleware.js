const bcrypt = require('bcrypt');

const { userErrors,  ErrorHandler, statusCodesEnum} = require('../../error');

module.exports = async (req, res, next) => {
    try {
        const { password } = req.body;
        const user = req.user;
        const isPasswordEquals = await bcrypt.compare(password, user.password);

        if (!isPasswordEquals) {
            return next(new ErrorHandler(userErrors.NOT_FOUND_USER.message, statusCodesEnum.NOT_FOUND, userErrors.NOT_FOUND_USER.code))
        }

        req.user = user;

        next();
    } catch (err) {
        next(err)
    }
};
