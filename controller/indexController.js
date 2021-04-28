let getPageIndex = async (req, res) => {
    return res.render("index.ejs")
};

let getAboutPage = async(req, res) => {
    return res.render("about.ejs")
};


module.exports = {
    getPageIndex: getPageIndex,
    getAboutPage: getAboutPage
};
