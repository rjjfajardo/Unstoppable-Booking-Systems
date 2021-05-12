const connection = require("../config/connectionDB")

let getSearchResults = async (req, res) => {
    connection.query("SELECT * FROM cars WHERE type = ?", req.query.type, (req, cars) => {
        return res.render('searchResults.ejs', {car: cars});
    })
}

module.exports = {
    getSearchResults : getSearchResults
}