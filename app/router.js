const express = require('express');
const mainController = require('./controllers/mainController');
const quizController = require('./controllers/quizController');
const tagController = require('./controllers/tagController');
const userController = require('./controllers/userController');
const adminController = require('./controllers/adminController');

const userMiddleware = require('./middleware/auth');

const router = express.Router();

router.get('/', mainController.homePage);
router.get('/quiz/:id',quizController.quizPage);
router.get('/tags',tagController.tagsPage);
router.get('/tags/:id', tagController.oneTagPage);

// affichage page inscritpion
router.get('/signup', userController.signupPage);
router.post('/signup', userController.signupAction);

// affichage page de connexion
router.get('/login', userController.loginPage);
// récupération formulaire de connexion
router.post('/login', userController.loginAction);

router.get('/profile', userController.profilePage);

router.get('/logout', userController.logOut);

// route ADMIN
router.get('/admin', userMiddleware.isNotLogged, adminController.adminPage);

module.exports = router;