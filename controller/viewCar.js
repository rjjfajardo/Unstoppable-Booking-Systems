
const connection = require('../config/connectionDB')

let viewCarDetails = async (req, res) => {

    const carQuery = 'SELECT * FROM car_details';

    res.render('car_listing.ejs', {
        carQuery
    })
}

module.exports = {
    viewCarDetails : viewCarDetails
}