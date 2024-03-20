const User = require("../models/user");
const ctrl = {};

ctrl.inicio = (req,res)=>{
    res.render("index.hbs", {session: req.session})
};

ctrl.principal = async (req,res)=>{

    const user = await User.findOne({"_id":req.session._id}).select("-password");

    var notas = [{"titulo":"nota1","detalle":"detalle1"},{"titulo":"nota2","detalle":"detalle2"},{"titulo":"nota3","detalle":"detalle3"} ];

    res.render("principal.hbs", {session: req.session, user, notas})
};

ctrl.about = (req,res)=>{
    res.render("about.hbs", {session: req.session})
};

module.exports = ctrl;