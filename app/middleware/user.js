const userMiddleware = (req, res, next) => {
    if (req.session.user) {
        res.locals.user = req.session.user;
    } else {
        res.locals.user = false;
    }
    // une fois nos vérifications faites, on envoie notre exécution du code au middleWare suivante (notre routeur)
    next();

};


module.exports = userMiddleware;