const jwt = require('jsonwebtoken');

const { ACCESS_TOKEN_SECRET } = require('../../configs/config');
const { AUTHORIZATION } = require('../../configs/constants');
const { ErrorHandler } = require('../../error');
const { oAuthService } = require('../../services');

module.exports = async (req, res, next) => {
    const token = req.get(AUTHORIZATION);

    if (!token) {
        return next(new ErrorHandler('Token is not valid', 401))
    }

    jwt.verify(token, ACCESS_TOKEN_SECRET, err => {

        if (err) {
            return next(new ErrorHandler('Token is not valid', 401))
        }
    });

    const tokenWithUser = await oAuthService.getByParams({access_token: token});

    req.user = tokenWithUser.User;

    next();
};
