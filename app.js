//usamos express
const express = require('express')

//app de express
const app = express()

//perto en que veremos nuestra app
const port = 3000

//path inicial de nuestra url
app.get('/', (req, res) => {
    res.send('wolis')
})

//otro path
app.get('/launchx', (req, res) => {
    res.send('que onda')
})

//otro path on un objeto dentro
app.get('/objectnodejs', (req, res) => {
    const exp = {name: "Abraham Ariel Arizmendi Grijalva", msg: "wolis"}
    res.send(exp) //response
})

//nuevp path
//la ruta es explorers, pero lo que se ponga despues de exploeres en la ruta (url) sera lo que se guarde en "explorerName" y eso sera lo que se vera en la pagina
app.get('/explorers/:explorerName', (req, res) => {
    res.send(req.params) //require parameters
})

//inicializamos la app
app.listen(port, () => {
    console.log(`Example app ;istetening on port ${port}`);
})