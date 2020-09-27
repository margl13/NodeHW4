const { userService } = require('../../services');
const { userErrors, ErrorHandler, statusCodesEnum } = require('../../error');

module.exports = async (req, res, next) => {
        try {
            const {email} = req.body;
            const user = await userService.findOneBYParams({email});

            if (!user) {
                return next(new ErrorHandler(
                    userErrors.NOT_FOUND_USER.message,
                    statusCodesEnum.NOT_FOUND,
                    userErrors.NOT_FOUND_USER.code))
            }

            req.user = user;

            next();
        } catch (err) {
            next(err)
        }
    };
