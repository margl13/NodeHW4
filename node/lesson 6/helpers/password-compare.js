const bcrypt = require('bcrypt');

const { ErrorHandler, userErrors, statusCodesEnum } = require('../error');

module.exports = async (password, hashedPassword) => {
    const isPasswordEquals = await bcrypt.compare(password, hashedPassword);

    console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
    console.log(isPasswordEquals);
    console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');

    if (!isPasswordEquals) {
        throw new ErrorHandler(userErrors.NOT_FOUND_USER.message, statusCodesEnum.NOT_FOUND, userErrors.NOT_FOUND_USER.code)
    }
}
