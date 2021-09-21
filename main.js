const inputnuevaActividad = document.getElementById('agregar_nuevatarea')
const botonAgregar = document.getElementById('btn_agregar')
const listadeActividades = document.getElementById('lista')
var actividades =[{tarea:'uno'},{tarea:'dos'}]
window.onload = () => {
    console.log(actividades)
}

//Funciones 
function agregarTarea(actividad){
    actividades.push(actividad)
    return actividades

}
function eliminarTarea(tarea){
    const actividadesfiltradas=actividades.filter((actividad) => {
    return actividad.tarea != tarea
    })
   console.log(actividadesfiltradas)
}

