const Nota = require("../models/nota");
const ctrl = {};

ctrl.add = (req,res) =>{
    res.render("notas/add.hbs", {session: req.session});
};

ctrl.edit = async (req,res) => {

    const codigo = req.params.codigo

    const nota = await Nota.findOne({"_id":codigo})

    console.log(nota)

    res.render("notas/edit.hbs", {session: req.session});
}


ctrl.guardar = async (req,res) =>{
    
    const {title, description} = req.body;
    const errores = [];

    if(title == "" || description == ""){
        errores.push({text:"Campos Incompletos"});
    }

    if(errores.length > 0){
        res.render("notas/add.hbs", {error_msg : errores, datos: req.body });
    }else{

        user = req.session._id

        const nota = new Nota({
            title,
            description,
            user
        })

        await nota.save();
        res.render("notas/add.hbs", {session: req.session, success_msg : "Nota Creado Correctamente"});

    }

};

module.exports = ctrl;