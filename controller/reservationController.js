let getReservationPage = async (req, res) => {
    res.render("reservation.ejs")
}

module.exports = { 
    getReservationPage : getReservationPage
}