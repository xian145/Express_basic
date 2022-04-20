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
    res.send(exp)
})

//inicializamos la app
app.listen(port, () => {
    console.log(`Example app ;istetening on port ${port}`);
})