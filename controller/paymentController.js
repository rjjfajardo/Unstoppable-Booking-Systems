
let connection = require('../config/connectionDB')

let getPaymentPage = async (req, res) => {

    connection.query("SELECT * FROM users WHERE id = ?", req.user.id, (err, row, field) => {
        if(err){
            throw err;
        }
        else
        {
        return res.render('payment.ejs', {user : row })
        }
    })
}

module.exports = {
    getPaymentPage : getPaymentPage
}