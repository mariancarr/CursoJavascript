let rango =[]
let maximo = 0
let minimo = 0

function init(){
    cargarProductos()
    btnAccionRango()
    btnAccionFiltro()
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
                                    ${disponible(producto.id)}
                                    <button class="btn btn-danger" id="eliminar">
                                        Eliminar
                                    </button>
                                </div>
                            </div>
                        </div>`
                                     
        nodoProductos.appendChild(col)                           
    })
      
}


function disponible(id){
    const stockDisponible = productos.find((producto) =>  producto.id === id)
    if (stockDisponible.stock === 0){
        return "Sin stock"
    }

    else{
        return  `<button class="btn btn-success" id="agregar">
                        Agregar
                </button>`
    }
}

function btnAccionRango(){
    const btnRangos = document.getElementById("buscarPrecios")
    btnRangos.addEventListener("click", () => {tomarValores()})

    const btnDescendente = document.getElementById("ordenarDescendente")
    btnDescendente.addEventListener("click", () => {ordenarDescendente()})

    const btnAscendente = document.getElementById("ordenarAscendente")
    btnAscendente.addEventListener("click", () => {ordenarAscendente()})
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
    rango.forEach((r) =>
    console.table(r.producto, r.especificaciones, r.color,":.............$",  r.precio))
}

function btnAccionFiltro(){
    const btnFiltro = document.getElementById("btnBuscarCoincidencias")
    btnFiltro.addEventListener("click", () => buscarCoincidencias())
}

function buscarCoincidencias(){
    let filtro = document.getElementById("buscarCoincidencias").value
    productos = productos.filter((p) =>{
        return p.producto.includes(filtro) || p.especificaciones.includes(filtro) || p.color.includes(filtro)})
    
    cargarProductos()
                        
}



function ordenarDescendente(){
    productos =  productos.sort((a, b) => b.precio - a.precio)
    cargarProductos()
}

function ordenarAscendente(){
    productos =  productos.sort((a, b) => a.precio - b.precio)
    cargarProductos()
}
