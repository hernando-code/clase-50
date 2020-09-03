const Sequelize = require('sequelize')
const sequelize = new Sequelize('mysql://root:@localhost:3306/acamica')

const express =  require('express')
const bodyParser = require('body-parser')

const server = express()

server.use(bodyParser.json())

server.post('/cancion', (req, res) =>{
    const { nombre, duracion, album, banda, fecha_publicacion } = req.body
    sequelize.query('INSERT INTO canciones (nombre, duracion, album, banda, fecha_publicacion) VALUES (?,?,?,?,?)', 
        {replacements: [nombre, duracion, album, banda, fecha_publicacion]}
    ).then(respuesta => res.json(respuesta))
})

/* server.put('/cancion/:id', (req, res) =>{
    const { nombre, duracion, album, banda, fecha_publicacion } = req.body
}) */


server.listen(3000, () =>{
    console.log('server listen on port 3000')
})
