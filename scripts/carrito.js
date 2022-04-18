/* cargar al html el array carrito*/
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
                                <div class= "col-5" id="imgCarrito">
                                    <img src = "${c.img}" class="img-fluid" id="productosCartImg${c.id}">
                                </div>
                                <div class= "col-5" >
                                    <div class = "card-body" id="productoCarrito">
                                        <div class="textoCarrito">
                                            <h5 class="card-title" id="productosCartTit${c.id}">${c.producto}</h5>
                                            <p class = "card-text" id="productosCartTxt${c.id}"> ${c.especificaciones}</p>
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
                                            ${disponibleCarro(c.id)}
                                            <div id="precioCarritoUnidad">
                                                <span> $ ${c.precioTotal}</span>
                                            </div>    
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>    
                        `
                                     
        divCarrito.appendChild(card)   

        let btnProducto1 = document.getElementById(`productosCartImg${c.id}`)
        btnProducto1.addEventListener("click", () => {mostrarProducto(c.id)})

        let btnProducto2 = document.getElementById(`productosCartTit${c.id}`)
        btnProducto2.addEventListener("click", () => {mostrarProducto(c.id)})

        let btnProducto3 = document.getElementById(`productosCartTxt${c.id}`)
        btnProducto3.addEventListener("click", () => {mostrarProducto(c.id)})

        let btnEliminarCarrito = document.getElementById(`eliminarCarrito${c.id}`)
        btnEliminarCarrito.addEventListener("click",() =>{ eliminarCarrito(c.id)})

        let btnAgregarrCarrito = document.getElementById(`agregarCarrito${c.id}`)
        btnAgregarrCarrito.addEventListener("click",() =>{ agregarCarrito(c.id)})

        let btnVaciarCarrito = document.getElementById("vaciarCarrito")
        btnVaciarCarrito.addEventListener("click",() => vaciarCarrito())
        
    })
    
}


function disponibleCarro(id){
    let dispoCarro = carrito.find((element) => element.id === id)
    
    if(dispoCarro.stockVariable < 1){
        return `
                <span id="sinStockCarrito"> Sin stock </span>
                `
    }

    else{
        return ``
    }

}

/* verifico si hay un carrito en el local Storage*/
function verificarCarritoStorage(){
    let carritoEnStorage = JSON.parse(localStorage.getItem("carritoStorage"))
    
    if (carritoEnStorage !== null){
            carrito = carritoEnStorage.map((e) => new Inventario(productos[e.id],e.cantidad))
            carrito.forEach((e) => e.stockVariable ++)
            cargarCarrito(carrito)
            carritoHeader(carrito)
        }
    }



   


function vaciarCarrito(){
    carrito = []
    productos.forEach((p) => p.stockVariable = p.stockFijo)
    cargarCarrito(carrito)
    carritoHeader(carrito)
    localStorage.setItem("carritoStorage", JSON.stringify(carrito))
    localStorage.setItem("productosStorage", JSON.stringify(productos))
    
}

function agregarCarrito(idProducto){
    let productoEnCarrito = carrito.find((elemento) => elemento.id === idProducto)
    let prod = productos.find((e) => e.id === idProducto)

    if(productoEnCarrito !== undefined){
       let idx = carrito.indexOf(productoEnCarrito)
        
       if(productoEnCarrito.stockVariable < 1){
            
            Swal.fire({
                toast: true,
                icon: 'warning',
                iconColor: `rgba(255, 0, 0, 1)`,
                title: 'ATENCIÓN',
                text:  `No hay más stock disponible`,
                color: `rgb(255, 255, 255)`,
                showConfirmButton: false,
                timer: 2200,
                background: `rgba(255, 70, 70, 0.541)`,
                position: 'top-end',
                timerProgressBar: true,
              })
              
            cargarCarrito(carrito)
            carritoHeader(carrito)
       } 

       else{
           prod.stockVariable--
           carrito[idx].agregarUnidad()
           carrito[idx].actualizarPrecioTotal()
           cargarCarrito(carrito)
           carritoHeader(carrito)

       } 
       
    }

    else{
        if(prod.stockVariable === 0){
            Swal.fire({
                toast: true,
                icon: 'warning',
                iconColor: `rgba(255, 0, 0, 1)`,
                title: 'ATENCIÓN',
                text:  `No hay más stock disponible`,
                color: `rgb(255, 255, 255)`,
                showConfirmButton: false,
                timer: 2200,
                background: `rgba(255, 70, 70, 0.541)`,
                position: 'top-end',
                timerProgressBar: true,
              })
            cargarCarrito(carrito)
            carritoHeader(carrito)
           } 

        else{
            carrito.push(new Inventario(productos[idProducto],1))
            
            prod.stockVariable--
            cargarCarrito(carrito)
            carritoHeader(carrito)
        }
    }

    localStorage.setItem("carritoStorage", JSON.stringify(carrito))
    localStorage.setItem("productosStorage", JSON.stringify(productos))
    
    
}

function eliminarCarrito(idProducto){
    let productoEnCarrito = carrito.find((elemento) => elemento.id === idProducto)
    let idx = carrito.indexOf(productoEnCarrito)
    let prod = productos.find((e) => e.id === idProducto)
   
    
    if(productoEnCarrito.cantidad > 1){
        carrito[idx].eliminarUnidad()
        carrito[idx].actualizarPrecioTotal()
        prod.stockVariable++
        cargarCarrito(carrito)
        carritoHeader(carrito)
        
    }

    else{
        carrito.splice(idx,1)
        prod.stockVariable++
        cargarCarrito(carrito) 
        carritoHeader(carrito)
    }

    localStorage.setItem("carritoStorage", JSON.stringify(carrito))
    localStorage.setItem("productosStorage", JSON.stringify(productos))
}

function obtenerPrecioTotal(array){
    precioTotalCarrito = 0

    for (const producto of array){
        precioTotalCarrito += producto.precio * producto.cantidad
    }
    
    return precioTotalCarrito   
}