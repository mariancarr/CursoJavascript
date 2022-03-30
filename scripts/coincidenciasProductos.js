/* busca coincidencias de palabras sobre el array de los productos*/

function buscarCoincidencias(){
    let filtro = document.getElementById("buscarCoincidencias").value
    if (filtro.trim() === ""){
        coincidencias = []
        coincidenciasDos = []
        if(rangoDos.length !== 0){
            cargarProductos(rangoDos)
            
        }

        else{
            cargarProductos(productos)
        }
    }
    
    else if (rango.length === 0 && rangoDos.length === 0){
        coincidenciasDos = productos.filter((p) =>{
            return p.producto.includes(filtro.toUpperCase()) || p.especificaciones.includes(filtro.toUpperCase()) || p.color.includes(filtro.toUpperCase())})

        coincidencias = productos.filter((p) =>{
            return p.producto.includes(filtro.toUpperCase()) || p.especificaciones.includes(filtro.toUpperCase()) || p.color.includes(filtro.toUpperCase())})
            
        if (coincidencias.length === 0){
            noHayCoincidencias()
        }

        else{
             
            cargarProductos(coincidencias)
        }
    }

    else if (rangoDos.length !== 0){
        coincidenciasDos = productos.filter((p) =>{
            return p.producto.includes(filtro.toUpperCase()) || p.especificaciones.includes(filtro.toUpperCase()) || p.color.includes(filtro.toUpperCase())})

        coincidencias = rangoDos.filter((p) =>{
            return p.producto.includes(filtro.toUpperCase()) || p.especificaciones.includes(filtro.toUpperCase()) || p.color.includes(filtro.toUpperCase())})
            
        if (coincidencias.length === 0){
            noHayCoincidencias()
        }

        else{ 
            cargarProductos(coincidencias)
        }
    }
                     
}