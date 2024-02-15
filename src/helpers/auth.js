const ctrl = {};


ctrl.isAuth = (req,res,next)=>{

    if(req.session._id != null){ //SI HAZ INICIADO SESIÓN
        return next();
    }

    res.redirect("/")
}

ctrl.notAuth = (req,res,next)=>{

    if(req.session._id != null){ //SI HAZ INICIADO SESIÓN
        res.redirect("/principal")
    }

    return next();
    
}



module.exports = ctrl;