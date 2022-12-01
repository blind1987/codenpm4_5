const { Schema, model } = require("mongoose");
 
const Hardware = Schema({
    nombre:{
        type: String,
        required: true
    },
    modelo:{
        type: String,
        require: true,
    },
    marca:{
        type: String,
        require: true,
    },
    descripcion:{
        type: String,
        require: true,
    },
    fecha_lanzamiento:{
        type: String,
        require: true,
    },
    imagen:{
        type: String,
        require: true,
    },
})

module.exports = model("Hardware",  Hardware);


