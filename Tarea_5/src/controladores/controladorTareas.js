const Tarea = require("../modelos/tareas");

function MostrarTareas(req, res){
    Tarea.find()
    .then(tareas => {
        console.log(tareas);

        res.status(200).send(tareas);
    })
    .catch(error => {
        res.status(400).send('Algo salio mal');
    });
    
}

function BuscarTarea(req, res){
    let idTarea = req.params.id;
    console.log('Buscando tarea con ID: ' + idTarea);

    Tarea.findOne({_id: idTarea})
    .then(tarea =>{
        if(tarea == null){
            res.status(400).send('No se encontró tarea con el ID ingresado');
        }else{
            console.log("Tarea Encontrada:\n"+ tarea)
            res.status(200).send(tarea);
        }

        
    })
    .catch(error =>{
        res.status(400).send('No se encontró tarea con el ID ingresado');
    })
}   

function CrearTarea(req, res){
    console.log("Datos recibidos:\n"+req.body);
    let body = req.body;

    Tarea.create(body)
    .then(tarea => {
        console.log("Tarea creada\n" + tarea);
        res.status(200).send("Tarea creada con éxito:\n" + tarea)
    })
    .catch(error => {
        res.status(400).send('No se pudo crear la tarea!');
    })
}



function ModificarTarea(req, res){
    let body = req.body;
    let idTarea = req.params.id;

    if(body.estado != undefined && (body.estado != "Abierta" && body.estado != "Cerrada" && body.estado != "Eliminada")){
        res.status(400).send('El estado no es válido');
    }else{
        console.log("ID de tarea a modificar: " + idTarea +"\nDatos recibidos:\n"+body);
    
        Tarea.findOne({_id: idTarea})
        .then(tarea =>{
            if(tarea == null){
                res.status(400).send('No se encontró tarea con el ID ingresado');
            }else{

                let cambios = { $set: body};
                Tarea.updateOne({_id: idTarea}, cambios)
                .then(tarea =>{
                    
                    Tarea.findOne({_id: idTarea})
                    .then(tarea =>{
                        if(tarea == null){
                            res.status(400).send('No se encontró tarea con el ID ingresado');
                        }else{
                            console.log("Tarea modificada:\n" + tarea);
                            res.status(200).send("Tarea modificada:\n" + tarea);
                        }

                        
                    })
                })
                .catch(error =>{
                    res.status(400).send('No se encontró tarea con el ID ingresado');
                })
            }
            
        })
        .catch(error =>{
            res.status(400).send('No se encontró tarea con el ID ingresado');
        })
    }

    

}


function EliminarTarea(req, res){
    let idTarea = req.params.id;
    console.log('Buscando tarea con ID: ' + idTarea);

    Tarea.findOne({_id: idTarea})
    .then(tarea =>{
        if(tarea == null){
            res.status(400).send('No se encontró tarea con el ID ingresado');
        }else{
            let tareaAEliminar = tarea; //Esto se hace para poder mostrar la tarea borrada
            Tarea.deleteOne({_id: idTarea})
            .then(tarea =>{
                console.log("Tarea eliminada: \n" + tareaAEliminar);
                res.status(200).send("Tarea eliminada: \n" + tareaAEliminar);
            })
            .catch(error =>{
                res.status(400).send('No se encontró tarea con el ID ingresado');
            })
        }
        
    })
    .catch(error =>{
        res.status(400).send('No se encontró tarea con el ID ingresado');
    })


    
}




let controladorDeTareas = {"Crear": CrearTarea,"Modificar": ModificarTarea,
"Mostrar": MostrarTareas,"Buscar": BuscarTarea, "Eliminar": EliminarTarea};
module.exports = controladorDeTareas;