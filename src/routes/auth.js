const ctl_auth = require("../controllers/ctl_auth");
const {isAuth,notAuth} = require("../helpers/auth")

module.exports = (app) => {

    app.get('/login', notAuth, ctl_auth.login);
    app.post('/login', notAuth,  ctl_auth.ingresar);

    app.get('/salir', isAuth, ctl_auth.salir);

    app.get('/registro', notAuth, ctl_auth.registro);
    app.post("/registro",notAuth, ctl_auth.guardar);

}