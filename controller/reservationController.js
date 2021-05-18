
const connection = require("../config/connectionDB")
const bookingService = require('./../service/bookingService')

let getReservationPage = async (req, res) => {
    connection.query("SELECT * FROM users WHERE id = ?", req.user.id, (request, row) => {

        connection.query("SELECT * FROM cars WHERE id = ?", req.params.car_id, (req, cars) => {

        return res.render("reservation.ejs", {user: row, car: cars}, )
        })
    })
};



// BOOKING TRANSCATION FORM 
let createBookings = async (req, res) => {
  
    let data = req.body;

     let bookingsItems = {
        user_id: data.car_id[1],
        vehicle_id: data.car_id[0],
        rent_startDate: data.reserve_pick_up_date,
        rent_endDate: data.reserve_return_date,
        rent_duration:  data.no_of_days,
        rent_type:  data.rent_type,
        notes:  data.reserve_notes
     };

        // 
    connection.query(
        "INSERT INTO bookings_tbl SET ? ", bookingsItems, (err,row,fields)=>{
            // console.log("Trying to create 1 new lobby");
            if(err){
                //put some data validation if the data is already taken 
           
            }else{
                // connection.query("UPDATE cars WHERE availability_status = ") update cars availabity status when booked 
                req.flash('message', 'Sucessfully booked for a reservation!')   
                res.redirect('/');   

            }
    });  


};

module.exports = { 
    getReservationPage : getReservationPage,
    createBookings: createBookings
}
