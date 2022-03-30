/* tomo los valores de los input*/

function tomarValores(){
    minimo = document.getElementById("precioMinimo").value
    maximo = document.getElementById("precioMaximo").value
   
        if (minimo < 0 || maximo < 0){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Rango de precios invalidos',
              })
        }

        else if((maximo === "0" || minimo === "" || maximo === "") && rangoTres.length === 0 && coincidenciasDos.length !== 0){
            cargarProductos(coincidenciasDos)
            rango = []
            rangoDos = []
            rangoTres = []
            
          }
        
        else if((maximo === "0" || minimo === "" || maximo === "") && rangoTres.length === 0 && coincidenciasDos.length === 0){
            cargarProductos(productos)
            rango = []
            rangoDos = []
            rangoTres = []
            console.log(rango)
          }

        else if(( maximo === "0" || minimo === "" || maximo === "") && coincidenciasDos.length !== 0){
            cargarProductos(coincidenciasDos)
            rango = []
            rangoDos = []
            rangoTres = []
        }

        else {
            rangoPrecios()
        }
}

/* aplico el rango dependiendo de los valores de los input*/
function rangoPrecios(){
    if(coincidencias.length === 0 && coincidenciasDos.length === 0 ){

        rango = productos.filter((p) =>{ return p.precio <= maximo && p.precio >= minimo})
        
        rangoDos = productos.filter((p) =>{ return p.precio <= maximo && p.precio >= minimo})
        
        if (rango.length === 0){
            noHayCoincidencias()
        }

        else {
            cargarProductos(rangoDos)
        }
        
    }

    else{
        rango = coincidencias.filter((c) =>{ return c.precio <= maximo && c.precio >= minimo})
        rangoDos = productos.filter((p) =>{ return p.precio <= maximo && p.precio >= minimo})
        rangoTres = coincidenciasDos.filter((p) =>{ return p.precio <= maximo && p.precio >= minimo})
        
        if (rangoDos.length === 0){
            noHayCoincidencias()
        }

        else if(rango.length === 0 && coincidencias.length === 0 && coincidenciasDos.length !== 0 && rangoTres.length !== 0) {
            cargarProductos(rangoTres)
            
        } 

        else if(rango.length === 0 && coincidencias.length === 0 && rangoDos.length !== 0) {
            cargarProductos(rangoDos)
            
        } 

        else if(rango.length === 0 && coincidencias.length !== 0 ) {
            noHayCoincidencias()
        } 

        else if(rango.length !== 0 && coincidencias.length !== 0) {

            cargarProductos(rango)
            
        } 

        else if(coincidencias.length === 0 && coincidenciasDos.length !== 0) {

            cargarProductos(rangoTres)
            
        } 

        else {

            cargarProductos(rangoTres)
            
        } 
    }

   
    
}
