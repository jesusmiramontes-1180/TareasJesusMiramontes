const express = require('express');
const router = express.Router();
const controladorTareas = require("..//controladores/controladorTareas");

/**
 * @swagger
 * /tareas:
 *  get:
 *    description: Obtener todas las tareas
 *    responses:
 *      '200':
 *        description: Se encontraron tareas
 *      '400':
 *        description: No se encontraron tareas
 */
router.get('/tareas', controladorTareas.Mostrar);

/**
 * @swagger
 * /tareas/{id}:
 *  get:
 *    description: Buscar una tarea especifica
 *    parameters:
 *      - in: path
 *        name: id
 *        description: ID para buscar una tarea
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: Se encontró la tarea
 *      400:
 *        description: No se encontró la tarea
 */
router.get('/tareas/:id', controladorTareas.Buscar);

/**
 * @swagger
 * /tareas:
 *  post:
 *    description: Crear una nueva tarea en la base
 *    parameters:
 *      - in: body
 *        name: Body
 *        description: titulo, descripcion, estado y fecha
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: La tarea fue creada con éxito
 *      400:
 *        description: La tarea no pudo ser creada
 */
router.post('/tareas',express.json(), controladorTareas.Crear);

/**
 * @swagger
 * /tareas/{id}:
 *  put:
 *    description: Modificar una tarea existente
 *    parameters:
 *      - in: path
 *        name: id
 *        description: ID para buscar una tarea
 *        required: true
 *        schema:
 *          type: string
 *      - in: body
 *        name: Body
 *        description: Body en JSON que recibe los parametros
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: La tarea fue modificada
 *      400:
 *        description: La tarea no fue encontrada 
 */
router.put('/tareas/:id',express.json(), controladorTareas.Modificar);

/**
 * @swagger
 * /tareas/{id}:
 *  delete:
 *    description: Modificar una tarea existente
 *    parameters:
 *      - in: path
 *        name: id
 *        description: ID para buscar una tarea
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: La tarea fue elminada
 *      400:
 *        description: La tarea no fue encontrada
 */
router.delete('/tareas/:id', controladorTareas.Eliminar);

module.exports = router;