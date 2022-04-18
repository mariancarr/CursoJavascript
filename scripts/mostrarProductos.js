/* funcion para mostrar los productos*/

function cargarProductos(array){
    document.getElementById("formRangoPrecios").style = "display:block"
    
    
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
        btnAgregar !== null && btnAgregar.addEventListener("click", () => {agregarCarrito(a.id)})          
        
                          
    })

    function disponible(a,id){
        const dispo =  productos.find((element) => element.id === id)
        
        if (dispo.stockVariable < 1 ){
            return "Sin stock"
        }
    
        else{
            return `<button class="btn btn-success" id="agregar${a.id}">
                        Agregar
                    </button>`
        }
    }
}



/* verifico la disponibilidad de los productos en el local Storage*/
function verificarProductosStorage(){
    let productoEnStorage = localStorage.getItem("productosStorage")
    
    if (productoEnStorage !== null){
            productos = JSON.parse(localStorage.getItem("productosStorage"))

            cargarProductos(productos)
        }
}