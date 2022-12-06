const express= require("express")

const clientes = express.Router();

module.exports = {
    clientes
}



clientes.get("/", (req, res) => {
    res.send('soy de clientes')
})

clientes.get("/welcome", (req, res) => {
    res.send('Bienvenido a clientes')})