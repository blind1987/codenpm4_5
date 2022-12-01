require('dotenv').config()

const express = require("express");
const conexion = require("./databases/config");

conexion();
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.set("view engine", "pug");

app.use("/static",express.static("./public"));

app.use(require("./routes/hardware"));

app.listen(process.env.PORT, ()=>{
    console.log(`conectado correctamente a http://localhost:${process.env.PORT}`);
})