

const DBconnection = require("../config/connectionDB")

let createBookings = (data) => {
    return new Promise (async(resolve, reject) => {
        let bookings = {
            user_id: data.user_id,
            vehicle_id: data.vehicle_id,

        };

        DBConnection.query(
            ' INSERT INTO booking_tbl set ? ', bookings,
            function(err, rows) {
                if (err) {
                    reject(false)
                }
                resolve("Create booking successful");
            }
        );
    })
}

module.exports = {
    createBookings: createBookings
}