const userMiddleware = {

    showUserDetail: (request, response, next) => {

        // A l'arrivé sur notre application la variable user n'éxiste pas on va donc la créé en prévision de la connexion de l'utilisateur 
        if(request.session.user === undefined){
            request.session.user = {};
        }
        response.locals.user =  request.session.user;
        next();
    },

    isNotLogged: (request, response, next) => {
        // si le user n'est pas connecté on le redirige vers la page d'accueil
        if(request.session.user.email === undefined){
            response.redirect('/login');
        }
        next();
    }
}

module.exports = userMiddleware;