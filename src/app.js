//IMPORTANDO LIBRERIAS
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const path = require("path");
const morgan = require("morgan");

//INICIO DE CONFIGURACIÓN DEL SERVIDOR
const app = express();
//DEFINICION DE PUERTO
app.set("port", process.env.PORT);
//LLAMADO A CARPETA PUBLIC
app.use(express.static(path.join(__dirname,"public")));
//LLAMADO A CARPETA VIEWS
app.set("views", path.join(__dirname, "views"));

//CONFIGURACION DE HANDLEBARS
app.engine(".hbs", exphbs.engine({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get("views"),"layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    extname: ".hbs",
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true
    }
}))

//DEFINICION DE VISTAS
app.set('view engine', '.hbs');

//CONFIGURACIÓN DE SESION
var op_session = {
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
}
app.use(session(op_session))


//MODO DESARROLLADOR
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(morgan('dev'))

//CONEXION A MONGODB
require("./database/mongodb")

//DEFINICION DE RUTAS
require("./routes/index")(app)
require("./routes/auth")(app)

//EXPORTANDO MODULO APP
module.exports = app;