const { ErrorHandler, userErrors, statusCodesEnum } = require('../../error');
const{ userValidator: {newUserValidator} } = require('../../validators');
const { userService } = require('../../services')

module.exports = {
    usersValidity: (req, res, next) => {
        try {
            const user = req.body;
            const {error} = newUserValidator.validate(user);
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
    },

    isUserPresentById: async (req, res, next) => {
        try {
            const id = +req.params.id;
            const user = await userService.findById(+req.params.id);

            if (!user) {
                return next (new userErrors(
                    NOT_FOUND_USER.message,
                    statusCodesEnum.NOT_FOUND,
                    NOT_FOUND_USER.code)
                );
            }

            next()

        } catch (err) {
            next(err)
        }
    }
};
