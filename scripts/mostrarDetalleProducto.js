/* Al hacer click sobre el div del producto, muestro los detalles sobre este*/

function mostrarProducto(id){
    document.getElementById("formRangoPrecios").style = "display:none"
    
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
        
        const mediosPago = document.createElement("div")
        mediosPago.setAttribute("id", "mediosPago")
        mediosPago.innerHTML=   `
                                    <img id = "mediosPagoAceptados" src="images/medios-pago.jpg" alt="Metodos de pago">
                                `
        nodoProductos.appendChild(mediosPago)
        
        const btnAgregarPS = document.getElementById(`agregarPS${ps.id}`)
        btnAgregarPS !== null && btnAgregarPS.addEventListener("click", () => {agregarCarrito(ps.id)})           
                           
    })

    function disponible(array,id){
        const btnPS =  productos.find((element) => element.id === id)
        
        if (btnPS.stockVariable < 1 ){
            return "Sin stock"
        }
    
        else{
            return `<button class="btnPS" id="agregarPS${array.id}">
                        Sumar al carrito
                    </button>`
        }
    }

    
}