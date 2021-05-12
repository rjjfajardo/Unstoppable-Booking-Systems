


const express = require('express')
const homePageController = require('../controller/homeController')
// const registerController = require('../controller/registerController')
const loginController = require('../controller/loginController')
const registerController = require('../controller/registerController')
const indexController = require('../controller/indexController')


// const isLoggedinMW = require('../controller/loginController').checkLoggedIn;
// const profile = require('../controller/profileController.js');

const profileController = require('../controller/profileController')
const searchResults = require("../controller/searchResults")

const viewCarDetailsController = require('../controller/viewCar')
const reserveController = require('../controller/reservationController')



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

    router.get("/register", registerController.getPageRegister);
    router.post("/register", auth.validateRegister, registerController.createNewUser);
    router.post("/logout", loginController.postLogOut);

    
    router.get("/welcome", indexController.getPageIndex);
    router.get("/about", indexController.getAboutPage);
    router.get("/search_results", searchResults.getSearchResults);
    router.get("/booking/:car_id", reserveController.getReservationPage)
    router.get("/view_car/:car_id", viewCarDetailsController.viewCarDetails)
    
    
    router.get("/profile", profileController.viewAccountProfile);


    // router.get("/profile/:id", profileController.editProfile);
    // router.get("/profile/:id", profileController.editProfile);

   
    // app.get('/profile/:user_id/changepassword',isLoggedinMW, profile.showChangePage)
    // app.post('/profile/:id/changepassword',isLoggedinMW, profile.change)





    
    return app.use("/", router);
};
module.exports = initWebRoutes;
