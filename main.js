function init(){
    cargarProductos()
   
}

function cargarProductos(){
    const nodoProductos = document.getElementById("listaProductos")
    const table = document.createElement("table")
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
                        <td>
                            <input type="number" class="form-control d-flex justify-content-center align-items-center" id=canitdad style= width:50px></td>
                        <td>
                            <button class="btn btn-success" id="agregar">
                                Agregar producto
                            </button>
                            <button class="btn btn-danger" id="eliminar">
                                Eliminar
                            </button>
                        </td>
                        `
        tbody.append(tr)
    })
    table.append(tbody)
    nodoProductos.append(table) 

    let minimo = document.getElementById("precioMinimo")
    minimo.onchange = () =>{console.log(minimo.value)}

    let maximo = document.getElementById("precioMaximo")
    
    maximo.onchange = () =>{let multi = (maximo.value)*3
                            console.log(multi)
                            }
    
    
    
}

