const {comparePasswords, tokinazer} = require('../helpers');
const {oAuthService} = require('../services');
const {AUTHORIZATION} = require('../configs/constants');


module.exports = {

    login: async (req, res, next) => {
        try {
            const user = req.user;
            const {password} = req.body;

            await comparePasswords(password, user.password);
            const tokens = tokinazer();

            oAuthService.create({
                ...tokens,
                user_id: user.id
            });

            res.json(tokens);

        } catch (e) {
            next(e);
        }
    },

    logout: async (req, res, next) => {
        try {
            const access_token = req.access_token;

            await oAuthService.deleteByParams(access_token);

            res.end();
        } catch (e) {
            next(e);
        }
    },

    refreshToken: async (req, res, next) => {
        try {
            const user = req.user;
            const token = req.get(AUTHORIZATION);
            const newTokenPair = tokinazer();

            await oAuthService.deleteByParams({refresh_token: token});

            await oAuthService.create({
                ...newTokenPair,
                user_id: user.id
            });


            res.json(newTokenPair)
        } catch (err) {
            next(err)

        }
    }
}
