let connection = require('../config/connectionDB')

let getAccountProfile = async (req, res) => {

//     connection.query("SELECT * FROM bookings_tbl WHERE id = ? ", req.user.id, (req, bookings) => {
//     return res.render("accountProfile.ejs", { user: req.user, bookings : bookings}
//         })
//     })
// };
    connection.query("SELECT * FROM users WHERE id = ?", req.user.id, (err, row, field) => { var user = row;


        //TO BE VALIDATED
        
        connection.query("SELECT user_id, vehicle_brand_model, rent_startDate, rent_endDate, bookings_tbl.status FROM bookings_tbl INNER JOIN cars ON bookings_tbl.vehicle_id = cars.id INNER JOIN users ON bookings_tbl.user_id = users.id", (err, row, field) => { 
            var bookings = row
        //    res.render("accountProfile.ejs", {user : user, bookings : bookings })
        console.log(bookings)
        })
    })
};

let getReservationTable = async (req, res) => {
    connection.query("SELECT * FROM bookings_tbl WHERE id = ?", req.user.id, (request, row) => {
        return res.render("accountProfile", {bookings: row})
    })
}

let editAccountProfile = async (req, res) => {
    let data = req.body;
    connection.query('UPDATE users SET fullname =? , email=?, birthdate=?, address=?, contact_no=?, license_no=?, WHERE id= ?', 
    [data.fullname, data.email, data.birthdate, data.address, data.contact_no, data.license_no, id], (err, row) => {
        if(err){
            res.render('accountProfile', {user: req.user})
        }
    })
}



module.exports = {
    getAccountProfile: getAccountProfile,
    editAccountProfile: editAccountProfile,
    getReservationTable: getReservationTable
};
