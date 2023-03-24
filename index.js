const express = require('express')
const app = express()
const redes = require('./mocks/rede.json')
const links = require('./mocks/links.json')
var path = require('path')

app.use(express.static('public'))
app.listen(3000,()=>{
    console.log('App Rodando')
})
app.get('/',(req,res)=>{
    try {
        res.render('teste', {links: links, redes: redes})
    } catch (error) {
        res.send ("erro")
    }
})
app.set('view engine','ejs')
