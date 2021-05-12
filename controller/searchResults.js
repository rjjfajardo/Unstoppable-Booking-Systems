let getSearchResults = async (req, res) => {
    return res.render('searchResults.ejs')
}

module.exports = {
    getSearchResults : getSearchResults
}