


const express = require('express')
const homePageController = require('../controller/homeController')
// const registerController = require('../controller/registerController')
const loginController = require('../controller/loginController')
const registerController = require('../controller/registerController')
const indexController = require('../controller/indexController')
const auth = require('../validation/authValidation')
const passport = require('passport')
const initPassportLocal = require('../controller/passportController')

// Init all passport
initPassportLocal();

let router = express.Router();

let initWebRoutes = (app) => {
    
    router.get("/", loginController.checkLoggedIn, homePageController.handleHelloWorld);
    router.get("/login",loginController.checkLoggedOut, loginController.getPageLogin);
    router.post("/login", passport.authenticate("local", {
        successRedirect: "/",
        failureRedirect: "/login",
        successFlash: true,
        failureFlash: true
    }));

    router.get("/welcome", indexController.getPageIndex);
    router.get("/about", indexController.getAboutPage);
    router.get("/account/register", registerController.getPageRegister);
    router.post("/register", auth.validateRegister, registerController.createNewUser);
    router.post("/logout", loginController.postLogOut);
    
    return app.use("/", router);
};
module.exports = initWebRoutes;
