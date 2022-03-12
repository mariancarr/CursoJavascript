
function init(){
    cargarProductos()
    btnAccion()
    
}



function cargarProductos(){
    const nodoProductos = document.getElementById("gridProductos")
    nodoProductos.innerHTML = ""
    
    productos.forEach((producto)=>{
        const col = document.createElement("div")
        col.setAttribute("class", "col-3")
        col.innerHTML = 
                        `<div class = "card" style="width: 18rem">
                            <div class = "card-body">
                                <img src = "${producto.img}" class="card-img-top"> 
                                <h5 class="card-title">${producto.producto}</h5>
                                <p class = "card-text"> ${producto.especificaciones}</p>
                                <span> $ ${producto.precio}</span>
                                <div class="buttonsProducto">
                                    <button class="btn btn-success" id="agregar${producto.id}">
                                        Agregar
                                    </button>
                                    <button class="btn btn-danger" id="eliminar${producto.id}">
                                        Eliminar
                                    </button>
                                </div>
                            </div>
                        </div>`
                                     
        nodoProductos.appendChild(col) 

        const btnAgregar = document.getElementById(`agregar${producto.id}`)
        btnAgregar.addEventListener("click", () => {agregarCarrito(producto.id)})           
        
        const btnEliminar = document.getElementById(`eliminar${producto.id}`)
        btnEliminar.addEventListener("click", () => {eliminarCarrito(producto.id)})                     
    })
}
      



function btnAccion(){
    const btnRangos = document.getElementById("buscarPrecios")
    btnRangos.addEventListener("click", () => {tomarValores()})

    const btnDescendente = document.getElementById("ordenarDescendente")
    btnDescendente.addEventListener("click", () => {ordenarDescendente()})

    const btnAscendente = document.getElementById("ordenarAscendente")
    btnAscendente.addEventListener("click", () => {ordenarAscendente()})

    
    const btnFiltro = document.getElementById("btnBuscarCoincidencias")
    btnFiltro.addEventListener("click", () => {buscarCoincidencias()})
  
}




function cargarCarrito(array){
    let divCarrito = document.getElementById("carrito")
    divCarrito.innerHTML =""
    let precioTotal = obtenerPrecioTotal(array)

    let cardTotal = document.createElement("div")
    cardTotal.setAttribute("class", "row")
    cardTotal.setAttribute("id", "rowTotal")
    cardTotal.innerHTML = ` <h3 class="tituloCarrito">CARRITO DE COMPRAS</h3>
                            <div class="row">
                                <div class="col" id="btnVaciarCarrito">
                                    <button type="button" class="btn btn-danger" id="vaciarCarrito">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                                            <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
                                        </svg>
                                        Vaciar Carrito
                                    </button>
                                </div>
                                <div class="col" id="precioTotalCarrito">
                                    <span id="totalTxt">TOTAL: &nbsp &nbsp</span> <span id="totalTxtPrecio">$${precioTotal.toLocaleString('es-AR', { minimumFractionDigits: 2})}</span>
                                </div>
                            </div>`

    divCarrito.appendChild(cardTotal)

    array.forEach((c)=>{
        let card = document.createElement("div")
        card.setAttribute("class", "card mt-4")
        card.setAttribute("id", "carritoCard")
        card.innerHTML = 
                        `
                            <div class= "row" id="rowCarrito">
                                <div class= "col-3" id="imgCarrito">
                                    <img src = "${c.img}" class="img-fluid">
                                </div>
                                <div class= "col-6" >
                                    <div class = "card-body" id="productoCarrito">
                                        <div class="textoCarrito">
                                            <h5 class="card-title">${c.producto}</h5>
                                            <p class = "card-text"> ${c.especificaciones}</p>
                                        </div>    
                                        
                                        <div class="buttonsCarrito">
                                            <div class="btnsC">
                                                <button type="button" class="btn btn-light" id="eliminarCarrito${c.id}">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-lg" viewBox="0 0 16 16">
                                                        <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
                                                    </svg>
                                                </button>

                                                <span>${c.cantidad}</span>

                                                <button type="button" class="btn btn-light" id="agregarCarrito${c.id}">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                                                        <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
                                                    </svg>
                                                </button>
                                            </div>
                                            <div id="precioCarritoUnidad">
                                                <span> $ ${c.precioTotal}</span>
                                            </div>    
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>    
                        `
                                     
        divCarrito.appendChild(card)   

        let btnEliminarCarrito = document.getElementById(`eliminarCarrito${c.id}`)
        btnEliminarCarrito.addEventListener("click",() =>{ eliminarCarrito(c.id)})

        let btnAgregarrCarrito = document.getElementById(`agregarCarrito${c.id}`)
        btnAgregarrCarrito.addEventListener("click",() =>{ agregarCarrito(c.id)})

        let btnVaciarCarrito = document.getElementById("vaciarCarrito")
        btnVaciarCarrito.addEventListener("click",() => vaciarCarrito())
        
    })
    
}

function vaciarCarrito(){
    carrito = []
    cargarCarrito(carrito)
}

function agregarCarrito(idProducto){
    let productoEnCarrito = carrito.find((elemento) => elemento.id === idProducto)

    if(productoEnCarrito){
       let idx = carrito.indexOf(productoEnCarrito)
       if(productoEnCarrito.stock === 0){
            alert("No hay Stock")
            cargarCarrito(carrito)
       } 

       else{
           carrito[idx].agregarUnidad()
           carrito[idx].actualizarPrecioTotal()
       } 
       
    }

    else{
        if(productos.stock === 0){
            alert("No hay Stock") 
            cargarCarrito(carrito)
           } 

        else{
            carrito.push(new Inventario(productos[idProducto],1))
        }
    }

    localStorage.setItem("carritoStorage", JSON.stringify(carrito))
    cargarCarrito(carrito)
    console.log(carrito)
}

function eliminarCarrito(idProducto){
    let productoEnCarrito = carrito.find((elemento) => elemento.id === idProducto)
    let idx = carrito.findIndex((elemento) =>elemento.id === productoEnCarrito.id)
    
    if(productoEnCarrito.cantidad > 1){
        carrito[idx].eliminarUnidad()
        carrito[idx].actualizarPrecioTotal()
    }

    else{
        carrito.splice(idx,1)
    }

    localStorage.setItem("carritoStorage", JSON.stringify(carrito))
    cargarCarrito(carrito)
}

function obtenerPrecioTotal(array){
    precioTotalCarrito = 0

    for (const producto of array){
        precioTotalCarrito += producto.precio * producto.cantidad
    }
    
    return precioTotalCarrito
    
}

function tomarValores(){
    minimo = document.getElementById("precioMinimo").value
    maximo = document.getElementById("precioMaximo").value
        if (minimo < 0 || maximo < 0){
            alert("ERROR: Valores ingresados invalidos")
        }
        
        else {
            rangoPrecios()
        }
}

function rangoPrecios(){
    rango = productos.filter((p) => p.precio <= maximo && p.precio >= minimo)
    productos = rango
    cargarProductos()
}


function buscarCoincidencias(){
    let filtro = document.getElementById("buscarCoincidencias").value
    productos = productos.filter((p) =>{
        return p.producto.includes(filtro.toUpperCase()) || p.especificaciones.includes(filtro.toUpperCase()) || p.color.includes(filtro.toUpperCase())})
    if (productos.length === 0){
        console.log(productos)
        cargarProductos()
    }
    else{
        cargarProductos()
    }
    
                        
}


function ordenarDescendente(){
    let rango =  productos.sort((a, b) => b.precio - a.precio)
    productos = rango
    cargarProductos()
}

function ordenarAscendente(){
    productos =  productos.sort((a, b) => a.precio - b.precio)
    cargarProductos()
}
