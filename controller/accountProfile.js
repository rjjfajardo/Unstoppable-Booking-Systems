let getAccountProfile = async (req, res) => {
    return res.render("accountProfile.ejs", {
        user: req.user
    })
};



module.exports = {
    getAccountProfile: getAccountProfile
};
