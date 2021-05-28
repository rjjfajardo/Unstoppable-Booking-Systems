
const connection = require("../config/connectionDB")
const loginService = require('../service/loginService')
const bcrypt = require('bcryptjs');
const { connect } = require("../config/connectionDB");

let viewAccountProfile = async (req, res) => {
    connection.query("SELECT * FROM users WHERE id = ?", req.user.id, (err, row, field) => { var user = row;


        //TO BE VALIDATED
        
        connection.query("SELECT user_id, vehicle_brand_model, rent_startDate, rent_endDate, bookings_tbl.createdAt, bookings_tbl.status FROM bookings_tbl INNER JOIN cars ON bookings_tbl.vehicle_id = cars.id WHERE user_id = ?", req.user.id, (err, row, field) => { 
            var bookings = row
           
            res.render("accountProfile.ejs", {user : user, bookings : bookings })
            
        })
    })
};



let editProfile = (req,res) => {

    let data = req.body;

    // if(!(req.body.fullname && req.body.email && req.body.phone_number && req.body.birthdate && req.body.address && req.body.drivers_license && req.body.license_expiry)) {
    //     res.redirect('/');
    // }else{
    //     connection.query("UPDATE users SET ? WHERE user_id = ?",[req.body,req.user.user_id],(err,results) => {
    //         if(err){
    //             console.log(req.body);
    //             console.log(err);
    //             res.status(500).send();
    //         }else{
    //             req.flash('success', 'Profile successfully updated');
    //             res.redirect('/profile');
    //         }
    //     })
    // }

    let sql = 'UPDATE users SET fullname = ?, email = ?, birthdate = ?, address = ?, contact_no = ?, license = ?'

    connection.query(sql, [data.fullname, data.email, data.birthdate, data.address, data.contact_no, data.license_no], (err, row) => {
        if(err){
            throw error;
        }
        else{
            res.redirect('/profile', {update : row })
        }
    })
   
}



module.exports = {
    viewAccountProfile: viewAccountProfile,
    editProfile: editProfile
};
