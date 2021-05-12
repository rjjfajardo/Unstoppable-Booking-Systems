require('dotenv').config();

const express = require('express')
const configViewEngine = require('./config/viewEngine')
const initWebRoutes = require('./routes/web')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const connectFlash = require('connect-flash')
const passport = require('passport')

const connection = require("./config/connectionDB")



let app = express();

//use cookie parser
app.use(cookieParser('secret'));

//config session
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 // 86400000 1 day
    }
}));

// Enable body parser post data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



//Config view engine
configViewEngine(app);

// Walkthrough
// initPageRoutes(app);





//Enable flash message
app.use(connectFlash());

//Config passport middleware
app.use(passport.initialize());
app.use(passport.session());

// init all web routes
initWebRoutes(app);

let port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Running on port ${port}!`));
