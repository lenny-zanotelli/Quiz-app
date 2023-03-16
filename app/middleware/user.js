
const userMiddleware = (req, res, next) => {

    if (req.session.user) {
       
        console.log(req.session.user);
        // en stockant l'user dans locals ici, on évite de le faire dans chaque res.render
        // avantage de ce middleware : pas de répétition et on alimente la vue
        res.locals.user = req.session.user;
    } else {
        res.locals.user = false;
    }
    // une fois nos vérifications faites, on envoie notre exécution du code au middleWare suivante (notre routeur)
    next();

};


module.exports = userMiddleware;