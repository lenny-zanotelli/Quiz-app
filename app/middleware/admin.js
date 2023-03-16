const adminMiddleware = (req, res, next) => {

    // si l'utilisateur possède un rôle admin
    if (!req.session.user) {
        return res.redirect('/');
        next();
    }

    if (req.session.user === 'admin') {
        // tout a été validé, on peut passer à la suite de l'opération du routeur (adminController.adminPage)
        next();

    } else {
        return res.render('401');
    }
};


module.exports = adminMiddleware;