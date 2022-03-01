const express = require('express')
const mysql = require('mysql')
const cors = require('cors')

const app = express()

app.use(cors())

const connection = mysql.createConnection({
    host: 'database',
    user: 'root',
    password: 'fullstack',
    database: 'produtos'
})

app.get('/produtos', (req,res)=>{
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