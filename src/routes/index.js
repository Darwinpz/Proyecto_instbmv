
const ctl_index = require("../controllers/ctl_index");
const {isAuth} = require("../helpers/auth");

module.exports = (app) => {
    
    app.get('/',ctl_index.inicio);

    app.get('/principal', isAuth, ctl_index.principal);

    app.get('/about', ctl_index.about);

}

