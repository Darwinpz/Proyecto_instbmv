const helpers = {};

                //  /login , login
helpers.obt_ruta = (ubicacion,texto) =>{
    // /login / principal /registro
    if(ubicacion != undefined){
        if(ubicacion.includes(texto)){
            return "active";
        }
    }

}

module.exports = helpers;