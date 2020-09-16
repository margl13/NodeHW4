const bcrypt = require('bcrypt');

const { UserErrorHandler, userErrors, statusCodesEnum } = require('../userError');

module.exports = async (password, hashedPassword) => {
    const isPasswordEquals = await bcrypt.compare(password, hashedPassword);

    console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
    console.log(isPasswordEquals);
    console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');

    if (!isPasswordEquals) {
        throw new UserErrorHandler(userErrors.NOT_FOUND_USER.message, statusCodesEnum.NOT_FOUND, userErrors.NOT_FOUND_USER.code)
    }
}
