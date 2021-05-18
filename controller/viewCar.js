
const connection = require('../config/connectionDB')

let viewCarDetails = async (req, res) => {
    const carQuery = 'SELECT * FROM cars WHERE id = ?';

    connection.query(carQuery, req.params.car_id, (req, result) => {
        res.render('car_details.ejs', {car: result})
    })
}

module.exports = {
    viewCarDetails : viewCarDetails
}