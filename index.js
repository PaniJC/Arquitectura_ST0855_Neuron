'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const project = require('./Models/Projects')
const app = express()

//Definimos el puerto como parámetro
const port = process.env.port || 3000

//Middleware
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//A partir de aá la definición de la Api RestFull
//Get - Con métodos para consultar todos los elementos de la BD
app.get('/api/Neuron', (req,res) => {
    project.find({},(err, projects)=>{
        if(err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
        if(!projects) return res.status(404).send({message: `No existen proyectos`}) 
        res.status(200).send({projects})
    })
})

//Get - Con método para consultar un elemento en particular por ID
app.get('/api/Neuron/:IdPro', (req, res) => {
    let IdPro = req.params.IdPro
    project.findById(IdPro, (err, project) =>{
        if(err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
        if(!project) return res.status(404).send({message: `El proyecto no existe`})

        res.status(200).send({project})
    })
})

//Post --------------------------------
app.post('/api/Neuron', (req, res) =>{
 console.log('POST/api/Neuron')
 console.log(req.body)

 let pro = new project()
 
 pro.IdPro = req.body.IdPro
 pro.nombre = req.body.nombre
 pro.descripcion = req.body.descripcion
 pro.Fecha_Solicitud = req.body.Fecha_Solicitud
 pro.Fecha_Entrega = req.body.Fecha_Entrega
 pro.Responsable_Actual = req.body.Responsable_Actual
 pro.Estado = req.body.Estado
 pro.Garantia = req.body.Garantia
 pro.Roi = req.body.Roi
 

 pro.save((err, proStored)=> {
    if(err) res.status(500).send({message:`Error al almacenar la infomración en la BD: ${err} `})

    res.status(200).send({pro: proStored})
 })

})

//Put ----------------------------
app.put('/api/Neuron/:IdPro', (req, res) =>{
    let IdPro = req.params.IdPro
    let update = req.body

    project.findByIdAndUpdate(IdPro,update,(err,projectUpdated)=>{
        if(err) res.status(500).send({message: `Error al actualizar el elemento: ${err}`})

        res.status(200).send({ IdPro: projectUpdated })
    })


})

//Delete -------------------------
app.delete('/api/Neuron/:IdPro', (req, res) =>{
    let IdPro = req.params.IdPro

    project.findById(IdPro, (err, project) =>{
        if(err) res.status(500).send({message: `Error al eliminar el elemento: ${err}`})

        project.remove(err=>{
            if(err) res.status(500).send({message: `Error al eliminar el elemento: ${err}`})

            res.status(200).send({message: `El elemento ha sido eliminado`})
        })
    })
})


mongoose.connect('mongodb://localhost:27017/NeuronBD', (err, res) =>{
    if(err){
        return console.log('Error al conectar a la BD: ' + err)
    }
    console.log("Conexión a la BD establecida exitosamente")

app.listen(port, () => {
    console.log('API REST corriendo en puerto 3000')
})
})