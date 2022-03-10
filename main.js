let rango =[]
let maximo = 0
let minimo = 0

function init(){
    cargarProductos()
    btnAccionRango()
}

function cargarProductos(){
    const nodoProductos = document.getElementById("listaProductos")
    const table = document.createElement("table")
    nodoProductos.innerHTML = ""
    table.setAttribute("id","listaInventario")
    table.setAttribute("class","table align-middle table-sm table-hover table-dark table-bordered")

    table.innerHTML= `<thead>
                    <tr>
                        <th>ID</th>
                        <th>Producto</th>
                        <th>Ingredientes</th>
                        <th>Tamaño</th>
                        <th>Precio</th>
                        <th>Vegetariana</th>
                        <th>Cantidad</th>
                        <th></th>
                    </tr>
                </thead>`

    const tbody = document.createElement("tbody")  
        productos.forEach((producto)=>{
            const tr = document.createElement("tr")
            tr.innerHTML = `<td>${producto.id}</td>
                            <td class="table-active">${producto.producto}</td>
                            <td class="table-active">${producto.ingredientes}</td>
                            <td>${producto.tamano}</td>
                            <td class="table-active">${"$ "+ producto.precio}</td>
                            <td>${producto.vegetariana}</td>
                            <td><input type="number" class="form-control d-flex justify-content-center align-items-center" id=canitdad style= width:50px></td>
                            <td>
                                ${disponible(producto.id)}
                            </td>   
                            <td>
                                <button class="btn btn-danger" id="eliminar">
                                    Eliminar
                                </button>
                            </td>`
            tbody.append(tr)
            
        })
        table.append(tbody)
        nodoProductos.append(table) 
    }
      



function disponible(id){
    const stockDisponible = productos.find((producto) =>  producto.id === id)
    if (stockDisponible.stock === 0){
        return "No disponible"
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
    rango= productos.filter((p) => p.precio <= maximo && p.precio >= minimo)
    
    cargarProductos()
}

