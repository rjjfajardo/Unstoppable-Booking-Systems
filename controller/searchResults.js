const connection = require("../config/connectionDB")

let getSearchResults = async (req, res) => {

    connection.query("SELECT * FROM users WHERE id = ?", req.user.id, (request, row) => {

    connection.query("SELECT * FROM cars WHERE vehicle_type = ? ", req.query.type,  (req, cars) => {
        return res.render('searchResults.ejs', {user: row, car: cars});
        })
    })
}

module.exports = {
    getSearchResults : getSearchResults
}   