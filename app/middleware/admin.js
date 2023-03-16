const adminMiddleware = (req, res, next) => {

    // si l'utilisateur possède un rôle admin
    if (!req.session.user) {
        return res.redirect('/');
    }

    if (req.session.user.role === 'admin') {
        // tout a été validé, on peut passer à la suite de l'opération du routeur (adminController.adminPage)
        next();

    } else {
        return res.status(401).render('401');
    }
};


module.exports = adminMiddleware;