

const connection = require("../config/connectionDB")
const loginService = require('../service/loginService')
const bcrypt = require('bcryptjs')


// const registerService = require('../service/registerService');
// const bcrypt = require('bcryptjs');

// let index = async (req,res) => {
//     let userId = req.params.id;
//     connection.query('SELECT * FROM users WHERE user_id = ' + userId, function(err,rows)     {
//         if(err) {
//             req.flash('error', err);  
//         } else {
//             // render to profile.ejs
//             res.render('profile/profile',{data: rows[0]});
//         }
//     });
// }

// let showUpdatePage = async (req,res) => {
//     let id = req.params.id;
//     connection.query('SELECT * FROM users WHERE user_id = ' + id, function(err, rows) {
//         if(err) throw err
//         // render to edit.ejs
//         res.render('profile/edit', {
//             full_name: rows[0].full_name, 
//             id: rows[0].user_id,
//             display_name: rows[0].display_name,
//             email_address: rows[0].email_address,
//             birthday: rows[0].birthday
//         })
//     })
// }

// let edit = (req,res) => {
//     let id = req.params.id;
//     let full_name = req.body.full_name;
//     let display_name = req.body.display_name;
//     let birthday = req.body.birthday;
//     let email_address = req.body.email_address;
//     if(!(req.body.full_name && req.body.display_name && req.body.birthday && req.body.email_address)) {
//         res.redirect('/profile');
//     }else{
//         return new Promise(async (resolve, reject) => {
//             //check email exists or not
//             let user = await loginService.findUserById(id);
//             if (user) {
//                 resolve(true);
//                 // if(email_address != user.email_address){
//                 //     let email = checkExistEmail(email_address);
//                 //     if(!email){
//                 //         const tok = uuidv4();

//                 //     } 
//                 // }
//                 var form_data = {
//                     user_id: req.params.id,
//                     full_name: full_name,
//                     birthday: birthday,
//                     display_name: display_name,
//                     email_address: email_address,
//                 }
//                 connection.query('UPDATE users SET ? WHERE user_id = ' + id, form_data, function(err, result) {
//                     if (err) {
//                         req.flash('error', err)
//                         res.render('profile/edit', {
//                             id: req.params.id,
//                             full_name: form_data.full_name,
//                             display_name: form_data.display_name,
//                             email_address: form_data.email_address,
//                             birthday: form_data.birthday
//                         })
//                     } else if (result) {
//                         req.flash('success', 'Profile successfully updated');
//                         res.redirect('/profile');
//                     }
//                 })
//             }
//         });
//     }
// }

// module.exports = {

//     edit: edit,
//     index: index,
//     showUpdatePage: showUpdatePage

// }




let viewAccountProfile = async (req, res) => {
    return res.render("accountProfile.ejs", {
        user: req.user 
    });
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
