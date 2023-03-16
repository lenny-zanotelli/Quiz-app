const express = require('express');
const mainController = require('./controllers/mainController');
const quizController = require('./controllers/quizController');
const tagController = require('./controllers/tagController');

const router = express.Router();

router.get('/', mainController.homePage);
router.get('/quiz/:id', quizController.quizPage);
router.get('/tags', tagController.tagsPage);

module.exports = router;