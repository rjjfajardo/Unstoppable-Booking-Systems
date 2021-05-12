
module.exports = (app) => {
    const isLoggedinMW = require('../../controller/loginController').checkLoggedIn;
    const profile = require('../../controller/profileController.js');

    app.get('/profile', isLoggedinMW, profile.viewAccountProfile)
    app.get('/profile/:user_id/update', isLoggedinMW, profile.showUpdatePage)
    app.post('/profile/:id/update', isLoggedinMW, profile.edit)
    // app.get('/profile/:user_id/changepassword',isLoggedinMW, profile.showChangePage)
    // app.post('/profile/:id/changepassword',isLoggedinMW, profile.change)
    
}