const { Router } = require('express');
const schRouter = Router();

schRouter.get('/', (req, res) => {
    res.end('CSH WORKING');
});

module.exports = schRouter;
