const express = require('express');
const fileUpload = require('express-fileupload');
require('dotenv').config();
const app = express();
const path = require('path');



console.log(process.env.DB_PASS);

const instance = require('./dataBase').getInstance();
instance.setModels();

app.use(fileUpload({}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(process.cwd(), 'public')));

const apiRouter = require('./routes/api.router');

app.use('/api', apiRouter);

app.use('*', (err, req, res, next) => {
    res
        .status(err.status || 404)
        .json({
            message: err.message || 'NOT FOUND',
            code: err.customCode || ''
        })
});

app.listen(5000, (err) => {
    if (err) {
        console.log(err);
    }

    console.log('Server listening on 5000')
});


process.on('unhandledRejection', reason => {
    console.log(reason);

    process.exit(0)
});
