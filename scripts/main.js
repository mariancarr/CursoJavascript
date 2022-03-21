let rango = []
let rangoDos = []
let rangoTres = []
let coincidencias = []
let coincidenciasDos = []

function init(){
    cargarProductos(productos)
    btnAccion()
}



function cargarProductos(array){
    let nodoProductos = document.getElementById("gridProductos")
    nodoProductos.innerHTML = ""
    
    array.forEach((a)=>{
        const col = document.createElement("div")
        col.setAttribute("class", "col-3")
        col.innerHTML = 
                        `<div class = "card"  style="width: 18rem" id="cardProd">
                            <div class = "card-body">
                                <img src = "${a.img}" class="card-img-top" id="productosImg${a.id}"> 
                                <h5 id="productosTit${a.id}" class="card-title">${a.producto}</h5>
                                <p  id="productosTxt${a.id}" class = "card-text"> ${a.especificaciones}</p>
                                <span> $ ${a.precio}</span>
                                <div class="buttonsProducto">
                                    ${disponible(a,a.id)}
                                    <button class="btn btn-danger" id="eliminar${a.id}">
                                        Eliminar
                                    </button>
                                </div>
                            </div>
                        </div>`
                                     
        nodoProductos.appendChild(col) 

        let btnProducto = document.getElementById(`productosImg${a.id}`)
        btnProducto.addEventListener("click", () => {mostrarProducto(a.id)})

        let btnProducto2 = document.getElementById(`productosTit${a.id}`)
        btnProducto2.addEventListener("click", () => {mostrarProducto(a.id)})

        let btnProducto3 = document.getElementById(`productosTxt${a.id}`)
        btnProducto3.addEventListener("click", () => {mostrarProducto(a.id)})

        const btnEliminar = document.getElementById(`eliminar${a.id}`)
        btnEliminar.addEventListener("click", () => {eliminarCarrito(a.id)})   

        const btnAgregar = document.getElementById(`agregar${a.id}`)
        if(btnAgregar === null){
            return false
        }
        else{

            btnAgregar.addEventListener("click", () => {agregarCarrito(a.id)})           
        }
        
                          
    })

    function disponible(array,id){
        const tarea =  productos.find((element) => element.id === id)
        
        if (tarea.stock < 1 ){
            return "Sin stock"
        }
    
        else{
            return `<button class="btn btn-success" id="agregar${array.id}">
                        Agregar
                    </button>`
        }
    }
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

    const menuPrincipal = document.getElementById("divLogo")
    menuPrincipal.addEventListener("click", () => {cargarProductos(productos)})

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

function vaciarCarrito(){
    carrito = []
    cargarCarrito(carrito)
    
}

function agregarCarrito(idProducto){
    let productoEnCarrito = carrito.find((elemento) => elemento.id === idProducto)
    let prod = productos.find((e) => e.id === idProducto)
    

    if(productoEnCarrito !== undefined){
       let idx = carrito.indexOf(productoEnCarrito)
       if(productoEnCarrito.stock < 1){
            alert("No hay Stock")
            cargarCarrito(carrito)
       } 

       else{
           prod.stock--
           carrito[idx].agregarUnidad()
           carrito[idx].actualizarPrecioTotal()
           cargarCarrito(carrito)

       } 
       
    }

    else{
        if(productos.stock === 0){
            alert("No hay Stock") 
            cargarCarrito(carrito)
           } 

        else{
            carrito.push(new Inventario(productos[idProducto],1))
            prod.stock--
            cargarCarrito(carrito)
        }
    }

    localStorage.setItem("carritoStorage", JSON.stringify(carrito))
    
    
}

function eliminarCarrito(idProducto){
    let productoEnCarrito = carrito.find((elemento) => elemento.id === idProducto)
    let idx = carrito.findIndex((elemento) =>elemento.id === productoEnCarrito.id)
    let prod = productos.find((e) => e.id === idProducto)
    
    if(productoEnCarrito.cantidad > 1){
        carrito[idx].eliminarUnidad()
        carrito[idx].actualizarPrecioTotal()
        prod.stock++
        cargarCarrito(carrito)
        
    }

    else{
        carrito.splice(idx,1)
        prod.stock++
        cargarCarrito(carrito) 
    }

    localStorage.setItem("carritoStorage", JSON.stringify(carrito))
    
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
            alert("ERROR: Rango de precios ingresado invalido")
        }
        
        else if((maximo === "0" || minimo === "" || maximo === "") && coincidenciasDos.length === 0){
            cargarProductos(productos)
          }

        else if(( maximo === "0" || minimo === "" || maximo === "") && coincidenciasDos.length !== 0){
          cargarProductos(coincidenciasDos)
        }

        else {
            rangoPrecios()
        }
}

function rangoPrecios(){
    if(coincidencias.length === 0 ){

        rango = productos.filter((p) =>{ return p.precio <= maximo && p.precio >= minimo})
        console.log(rango)
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

        else if(rango.length === 0 && coincidencias.length === 0 && rangoDos.length !== 0) {
            cargarProductos(rangoDos)
        } 

        else if(rango.length === 0 && coincidencias.length !== 0 ) {
            noHayCoincidencias()
        } 

        else if(rango.length !== 0 && coincidencias.length !== 0) {

            cargarProductos(rango)
        } 

        else {

            cargarProductos(rangoTres)
        } 
    }

   
    
}


function buscarCoincidencias(){
    let filtro = document.getElementById("buscarCoincidencias").value
    if (filtro.trim() === ""){
        if(rangoDos.length !== 0){
            cargarProductos(rangoDos)
            
        }

        else{
            cargarProductos(productos)
        }
    }
    
    else if (rango.length === 0 && rangoDos.length === 0){
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


function ordenarDescendente(){
    if (coincidencias.length !== 0 && rango.length === 0 && rangoDos.length === 0){
        let ordenarDesc =  coincidencias.sort((a, b) => b.precio - a.precio)
        cargarProductos(ordenarDesc)
        
    }

    else if (rango.length !== 0 && coincidencias.length !== 0){
        let ordenarDesc =  rango.sort((a, b) => b.precio - a.precio)
        console.log(rango)
        console.log(ordenarDesc)
        cargarProductos(ordenarDesc)
    }

    else if(coincidencias.length === 0 && rangoDos.length !== 0){
        let ordenarDesc =  rangoDos.sort((a, b) => b.precio - a.precio)
        cargarProductos(ordenarDesc)
       
    }
    }
 

function ordenarAscendente(){
    let ordenarAsc =  productos.sort((a, b) => a.precio - b.precio)
    cargarProductos(ordenarAsc)
}


function noHayCoincidencias(){
    nodoProductos = document.getElementById("gridProductos")
    nodoProductos.innerHTML = ""
    const noCoincidencias = document.createElement("div") 
    noCoincidencias.setAttribute("class", "col")
    noCoincidencias.setAttribute("id", "noCoincidencias")
    noCoincidencias.innerHTML = `
                    <img id = "noCoincidenciasImg" src="images/no-results.PNG" alt="No hay coincidencias">
                    <div>
                        <h3 id="noCoincidenciasTxt">No hay publicaciones que coincidan con tu búsqueda.</h3>
                        <ul id="noCoincidenciasLista">
                            <li>Revisá la ortografía de la palabra.</li>
                            <li>Utilizá palabras más genéricas o menos palabras.</li>
                            <li>Revisá el rango de precios</li>
                        </ul>
                    </div>
                    
                    `             
    nodoProductos.append(noCoincidencias)
}


function mostrarProducto(id){
    const bodyRango = document.getElementById("formRangoPrecios")
    bodyRango.innerHTML=""
    const bodyOrdenar = document.getElementById("ordenar")
    bodyOrdenar.innerHTML=""
    nodoProductos = document.getElementById("gridProductos")
    nodoProductos.innerHTML = ""
    let productoSeleccionado = productos.filter((p) => p.id === id)

    productoSeleccionado.forEach((ps) => {
        const divPS= document.createElement("div") 
        divPS.setAttribute("class", "col")
        divPS.setAttribute("id", "productoSeleccionado")
        divPS.innerHTML = `
                        <div class="container">
                            <div class="row" id="rowPS">
                                <div class ="col-6"id = "divImgPS">
                                    <img id = "imgPS" src="${ps.img}" alt="No hay coincidencias">
                                </div>
                                <div class ="col-6"id="divTxtPS">
                                    <h5 class="productoPS">${ps.producto} ${ps.especificaciones}</h5>
                                    <span id="precioPS"> $ ${ps.precio.toLocaleString('es-AR', { minimumFractionDigits: 2})}</span>
                                    <div class="buttonsProductoPS">
                                            ${disponible(ps,ps.id)}
                                           
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16" id="carritoPS">
                                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                                            </svg>
                                    </div> 
                                </div>
                            </div>
                        </div>
                        `
        nodoProductos.appendChild(divPS)
        const table = document.createElement("table")
        table.setAttribute("id", "listaEspecificaciones")
        table.setAttribute("class", "table")

        table.innerHTML= `
                            <thead>
                                <tr>
                                    <th> Tipo Conexion </th>
                                    <th> USB </th>
                                    <th> Largo del Cable </th>
                                    <th> Compatibilidad </th>
                                    <th> Color </th>
                                </tr>
                            </thead> 
                            
                            `

        nodoProductos.appendChild(table)

        const tbody = document.createElement("tbody")
            const tr = document.createElement("tr")
            tr.innerHTML=`  
                            <td> ${ps.conexion}</td>
                            <td> ${ps.usb}</td>
                            <td> ${ps.largoCable}</td>
                            <td> ${ps.compatibilidad}</td>
                            <td> ${ps.color}</td>
                            `
        tbody.appendChild(tr)
        table.appendChild(tbody)            
        

        
        const btnCarritoPS = document.getElementById(`carritoPS`)
        btnCarritoPS.addEventListener("click", () => {carritoPS()})   

        const btnAgregarPS = document.getElementById(`agregarPS${ps.id}`)
        if(btnAgregarPS === null){
            return false
        }
        else{

            btnAgregarPS.addEventListener("click", () => {agregarCarrito(ps.id)})           
        }
        
                          
    })

    function disponible(array,id){
        const btnPS =  productos.find((element) => element.id === id)
        
        if (btnPS.stock < 1 ){
            return "Sin stock"
        }
    
        else{
            return `<button class="btnPS" id="agregarPS${array.id}">
                        Sumar al carrito
                    </button>`
        }
    }

    let click = 0
    function carritoPS(){
        click = click + 1
        console.log(click)
        if (click%2=== 0 ){
            cargarCarrito(carrito)
        }

        else{
            let divCarrito = document.getElementById("carrito")
            divCarrito.innerHTML =""
        }
    }
}
