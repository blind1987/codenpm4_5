const Hardware = require("../models/hardware")

const  readHardware = async(_, res)=>{
    try{
        const producto = await Hardware.find({})

        if(producto.length === 0)
            return res.render("index",{ok: false});

        return res.render("index", {ok: true, hardware: producto});
    }catch(error){
        console.log(error);
        return res.json({ok: false, msg: "Error en el servidor, contacta con el administrador"});
    }
}
const vista_crear = (_,res)=>{
    try {
        return res.render("novo_hard", {ok: true});
    } catch (error) {
        console.log(error);
        return res.json({ok: false, msg: "Error en el servidor, contacta con el administrador"});
    }
}
const createHardware = async(req, res) => {
    try {
        const hardware_nuevo = new Hardware(req.body);
        await hardware_nuevo.save();
        return res.redirect("/");
    } catch (error) {
        console.log(error);
        return res.json({ok: false, msg: "Error en el servidor, contacta con el administrador"});
    }
}

const deleteHardware = async(req, res) => {
    const id =  req.params.id;
    try {
         await Hardware.findByIdAndDelete(id);
         return res.redirect("/");
    } catch (error) {
        console.log(error);
        return res.json({ok: false, msg: "Error en el servidor, contacta con el administrador"});
    }
}

const updateHardware = async(req, res) => {
    const id = req.body.edit_id;
    try {
        await Hardware.findByIdAndUpdate(id, req.body);
        return res.redirect("/");
    } catch (error) {
        console.log(error);
        return res.json({ok: false, msg: "Error en el servidor, contacta con el administrador"});
    }
}

module.exports = {readHardware, createHardware, deleteHardware, updateHardware, vista_crear};
