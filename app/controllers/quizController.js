const { Quiz } = require('../models');

const quizController = {

    async quizPage(req, res) {
        const quizId = parseInt(req.params.id);
        try {
            const result = await Quiz.findByPk(quizId, {
                include: [
                    {association: 'author'},
                    {association: 'questions',include: ['level', 'answers']},
                    {association: 'tags'}
                ]
            });
            res.render('quizDetail', {result});
        } catch (error) {
            console.log(error);
        }
    }

}

module.exports = quizController;