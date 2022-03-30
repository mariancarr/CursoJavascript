/* ordeno por precios*/

function ordenarDescendente(){
    if (coincidencias.length !== 0 && rango.length === 0 && rangoDos.length === 0){
        let ordenarDesc =  coincidencias.sort((a, b) => b.precio - a.precio)
        cargarProductos(ordenarDesc)
        
    }

    else if (rango.length !== 0 && coincidencias.length !== 0){
        let ordenarDesc =  rango.sort((a, b) => b.precio - a.precio)
        cargarProductos(ordenarDesc)
    }

    else if(coincidencias.length === 0 && rangoDos.length !== 0){
        let ordenarDesc =  rangoDos.sort((a, b) => b.precio - a.precio)
        cargarProductos(ordenarDesc)
       
    }

    else if(rango.length === 0 && rangoTres.length !== 0){
        let ordenarDesc =  rangoTres.sort((a, b) => b.precio - a.precio)
        cargarProductos(ordenarDesc)  
    }

    else if(rango.length === 0 && coincidencias.length === 0){
        let ordenarDesc =  productos.sort((a, b) => b.precio - a.precio)
        cargarProductos(ordenarDesc)  
    }
 }
 

function ordenarAscendente(){
    let ordenarAsc =  productos.sort((a, b) => a.precio - b.precio)
    cargarProductos(ordenarAsc)

    if (coincidencias.length !== 0 && rango.length === 0 && rangoDos.length === 0){
        let ordenarAsc =  coincidencias.sort((a, b) => a.precio - b.precio)
        cargarProductos(ordenarAsc)
        
    }

    else if (rango.length !== 0 && coincidencias.length !== 0){
        let ordenarAsc =  rango.sort((a, b) => a.precio - b.precio)
        cargarProductos(ordenarAsc)
    }

    else if(coincidencias.length === 0 && rangoDos.length !== 0){
        let ordenarAsc =  rangoDos.sort((a, b) => a.precio - b.precio)
        cargarProductos(ordenarAsc)
       
    }

    else if(rango.length === 0 && rangoTres.length !== 0){
        let ordenarAsc =  rangoTres.sort((a, b) => a.precio - b.precio)
        cargarProductos(ordenarAsc)  
    }

    else if(rango.length === 0 && coincidencias.length === 0){
        let ordenarAsc =  productos.sort((a, b) => a.precio - b.precio)
        cargarProductos(ordenarAsc)  
    }

    else {
        
    }
}