const { Tag } = require('../models');

const tagController = {

    async tagsPage(req, res) {
        try {
            const result = await Tag.findAll();
            res.render('tags', {result});
        } catch (error) {
            console.log(error);
        }

    },

    async oneTagPage(req, res) {
        const tagId = req.params.id;
        try {
            const response = await Tag.findByPk(tagId, {
                include: [
                    {association: 'quizzes', include: ['author']}
                ]
            });
            const result = response.quizzes;
            res.render('home', {result, isHomePage: false, tag:response.name});
        } catch (error) {
            console.log(error);
        }
    }

}

module.exports = tagController;