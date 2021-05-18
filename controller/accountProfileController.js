let connection = require('../config/connectionDB')

let getAccountProfile = async (req, res) => {
    return res.render("accountProfile.ejs", {
        user: req.user
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
