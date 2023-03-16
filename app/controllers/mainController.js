const {Quiz} = require('../models')

const mainController = {
    async homePage(req, res) {
        try {
            const result = await Quiz.findAll({
                include: ['author']
            });
            res.render('home', {result, isHomePage: true});
        } catch (error) {
            console.log(error)
        
        }
    }
}

module.exports = mainController;