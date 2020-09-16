const { comparePasswords } = require('../helpers');


module.exports = {

    login: async (req, res, next) => {
        try {
            //const user = req.user;
            //const {password} = req.body;

            //await comparePasswords(password, user.password);
            res.json('login is success')

        } catch (e) {
            res.status(404).end(e.message);
        }

    }
}
