const express = require('express')
const app = express()
const port = 4000

const jsonfile = require('jsonfile')

app.get('/companies', (req, res) => {    
    jsonfile.readFile('public/mock/companies/companies.json', (err, obj) => {
        res.send(obj)        
    })    
})

const server = app.listen(port)

module.exports = server