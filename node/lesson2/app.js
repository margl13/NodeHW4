const express = require('express');
const expressHandlebars = require('express-handlebars');
const path = require('path');
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static(path.join(process.cwd(), 'views')));

app.engine('.hbs', expressHandlebars({
    defaultLayout: false
}));
app.set('view engine', '.hbs');
app.set('views', path.join(process.cwd(), 'views'));


app.get('/', (req, res) => {
    res.render('home');
});

app.get('/register', (req, res) => {
    res.render('register')
});

const users = [
    {
        firstName: 'Alex',
        lastName: 'Smith',
        email: 'a.smith@gmail.com',
        password: 12345678
    }
];

app.post('/register', (req, res) => {
    const {firstName, lastName, email, password, confirmPassword} = req.body;
    if (users.find(user => user.email === email)) {
        res.render('register', {
            message: 'User already registered.'
        });
    } else {
        users.push({
            firstName,
            lastName,
            email,
            password
        });
        res.render('login', {
            message: 'Please, login to continue.'
        });
    }
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.post('/login', (req, res) => {
    console.log(req.body);
    const {email, password} = req.body;
    const user = users.find(u => {
        return u.email === email && u.password === password
    });
    if (user) {
        res.render('login', {
           message: 'All good!!!'
        });
    } else {
        res.redirect('/register')
        }
    });


app.get('/users', (req, res) => {
    res.render('users', { users })
});

app.listen(5000, (err) => {
    if (err) {
        console.log(err);
    }
    console.log('Server listening on 5000')
 });
