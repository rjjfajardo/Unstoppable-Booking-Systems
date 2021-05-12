
const connection = require("../config/connectionDB")
const loginService = require('../service/loginService')
const bcrypt = require('bcryptjs')

let viewAccountProfile = async (req, res) => {
    connection.query("SELECT * FROM users WHERE id = ?", req.user.id, (req, row) => {
        return res.render("accountProfile.ejs", {user: row})
    })
};


let editProfile = (req,res) => {
    if(!(req.body.fullname && req.body.email && req.body.phone_number && req.body.birthdate && req.body.address && req.body.drivers_license && req.body.license_expiry)) {
        res.redirect('/');
    }else{
        connection.query("UPDATE users SET ? WHERE user_id = ?",[req.body,req.user.user_id],(err,results) => {
            if(err){
                console.log(req.body);
                console.log(err);
                res.status(500).send();
            }else{
                req.flash('success', 'Profile successfully updated');
                res.redirect('/profile');
            }
        })
    }
   
}



module.exports = {
    viewAccountProfile: viewAccountProfile,
    editProfile: editProfile
};
