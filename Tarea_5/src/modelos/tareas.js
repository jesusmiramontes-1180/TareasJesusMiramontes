const {Schema, model} = require('mongoose');

const tareaSchema = new Schema({
    titulo: {type: String},
    descripcion: {type: String},
    estado: {type: String, default: 'Abierta'}, //Los posibles estados son: Abierta, Cerrada, Eliminada
    fecha: {type: Date}
})

module.exports = model('tareas', tareaSchema);