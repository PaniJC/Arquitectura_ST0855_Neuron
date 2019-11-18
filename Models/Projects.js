'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProjectSchema = Schema({
    IdPro: String,
    nombre: String,
    descripcion: String,
    Fecha_Solicitud: String,
    Fecha_Entrega: String,
    Responsable_Actual: String,
    Estado: {type: String, enum: ['Diseño', 'Desarrollo', 'Testing', 'Cerrado']},
    Garantia: {type: String, enum: ['Si', 'No']},
    Roi: {type: Number, default: 0}
})

module.exports = mongoose.model('Projects', ProjectSchema)