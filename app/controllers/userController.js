const { User } = require('../models');
const validator = require('email-validator');
const { EmptyResultError } = require('sequelize');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const userController = {
    signupPage(req, res) {
        res.render('signup');
    },
    profilePage(req, res){
        res.render('profile');
    },
    async signupAction(req, res) {
        try {
            const result = await User.findOne({
                where: {
                    email: req.body.email
                }
            });
            if(result){
                throw new Error('Ce compte existe déjà');
            }
            // Verif email
            if(validator.validate(req.body.email)===false){
                throw new Error("Format d'email invalide");
            }
            // Verif compatibilité des mots de passes
            if(req.body.password !== req.body.passwordConfirm){
                throw new Error('Les mots de passe ne correspondent pas, recommencez.')
            }
            
            const encryptMsg = await bcrypt.hash(req.body.password, saltRounds);

            const newUser = await User.create({
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email,
                password: encryptMsg
            });

            if(!newUser) {
                throw new Error("Erreur lors de l'inscription");
            }
            res.redirect('/login');
            
        } catch (error) {
            console.log(error);
            res.redirect('/signup');
        }

    },

    loginPage(req, res) {
        res.render('login');
    },

    async loginAction(req, res) {
        try {
            const result = await User.findOne({
                where: {
                    email: req.body.email
                }
            });
            if(!result){
                throw new Error('Identifiants Invalides');
            }
            const validPwd = await bcrypt.compare(req.body.password, result.password);
            if(validPwd === false){
                throw new Error('Identifiants Invalides');
            }

            req.session.user = result;

            delete req.session.user.password;
            res.redirect('/');
            
        } catch (error) {
            console.log(error);
            res.redirect('/login');
        }

    },

    logOut(req, res) {
        req.session.user = false;
        res.redirect('/');
    }

}

module.exports = userController;