const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
require('dotenv').config()

const app = express()

app.use(cors())

const connection = mysql.createConnection({
    host: 'database',
    user: process.env.USUARIO_DB,
    password: process.env.SENHA_DB,
    database: 'produtos'
})

app.get('/produtos', (req,res)=>{
    console.log(process.env.USUARIO_DB)
    console.log(process.env.SENHA_DB)
    connection.query('SELECT * FROM produtos', (error, results)=>{
        if(error){
            res.json(error)
        }else{
            res.json(results)
        }
    })
})

app.listen(8888, ()=>{
    console.log('http://localhost:8080/produtos/')
})