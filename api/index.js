const express = require('express')
const mysql = require('mysql')
const cors = require('cors')

const app = express()

app.use(cors())

const connection = mysql.createConnection({
    host: 'mysql-container',
    user: 'root',
    password: 'teste',
    database: 'produtos' // use produtos;
})

app.get('/produtos', (req,res)=>{ // randomuser.me/api
    connection.query('SELECT * FROM produtos', (error, results)=>{
        if(error){
            res.json(error)
        }
        res.json(results)
    })
})

app.listen(8888, ()=>{
    console.log('http://localhost:8080/produtos/')
})