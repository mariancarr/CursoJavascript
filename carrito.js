const productos = []
let busqueda = ""
let filtro = []
let precioMinimo = 0
let precioMaximo = 0
let rango = []
let ordenada = []
let total = 0
let carritoComida = []


class inventario{
    constructor(id, producto, ingredientes, tamano, precio, stock, vegetariana){
        this.id = id.toFixed();
        this.producto = producto.toLowerCase();
        this.ingredientes = ingredientes.toLowerCase();
        this.tamano = tamano.toLowerCase();
        this.precio = parseFloat(precio);
        this.stock = parseInt(stock)
        this.vegetariana = vegetariana.toLowerCase();
    }
}
productos.push(new inventario(1, "pizza", "muzzarella", "grande", 800, 15, "vegetariana"))
productos.push(new inventario(2, "pizza", "jamon y muzzarella", "grande", 970, 15, "no"))
productos.push(new inventario(3, "pizza", "fugaza", "grande", 900, 15, "vegetariana"))
productos.push(new inventario(4, "pizza", "jamon y morron", "grande", 1020, 15, "no"))
productos.push(new inventario(5, "pizza", "margarita", "grande", 900, 15, "vegetariana"))
productos.push(new inventario(6, "pizza", "napolitana", "grande", 950, 15, "vegetariana"))
productos.push(new inventario(7, "empanada", "jamon y queso", "unidad", 100, 15, "no"))
productos.push(new inventario(8, "empanada", "cebolla y queso", "unidad", 105, 15, "vegetariana"))
productos.push(new inventario(9, "empanada", "carne suave", "unidad", 105, 15, "no"))
productos.push(new inventario(10, "empanada", "pollo", "unidad", 110, 15, "no"))
productos.push(new inventario(11, "empanada", "humita", "unidad", 105, 15, "vegetariana"))
productos.push(new inventario(12, "empanada", "carne picante", "unidad", 105, 15, "no"))
productos.push(new inventario(13, "empanada", "capresse", "unidad", 110, 15, "vegetariana"))
productos.push(new inventario(14, "empanada", "verdura", "unidad", 105, 15, "vegetariana"))
productos.push(new inventario(15, "bebida", "agua con gas", "600ml", 150, 15, "vegetariana"))
productos.push(new inventario(16, "bebida", "agua sin gas", "600ml", 150, 15, "vegetariana"))
productos.push(new inventario(17, "bebida", "coca-Cola", "500ml", 170, 15, "vegetariana"))
productos.push(new inventario(18, "bebida", "sprite", "500ml", 170, 15, "vegetariana"))
productos.push(new inventario(19, "bebida", "fanta", "500ml", 170, 15, "vegetariana"))
productos.push(new inventario(21, "bebida", "pomelo", "500ml", 170, 15, "vegetariana"))
productos.push(new inventario(22, "postre", "volcan chocolate", " ", 375, 15, "vegetariana"))
productos.push(new inventario(23, "postre", "cheesecake", " ", 350, 15, "vegetariana"))
productos.push(new inventario(24, "postre", "flan con crema", " ", 300, 15, "vegetariana"))



productos.forEach((p) => console.log(p.id,":", p.producto, p.ingredientes, p.tamano,":.............$", p.precio))

/*DIFERENTES MANERAS DE ORDENAR O FILTRAR LA LISTA DE PRODUCTOS */

while(true){
    busqueda = prompt("Que quiere comer?. Ordenar los productos de mayor precio a menor precio escribiendo +, o al reves escribiendo -. Si quiere agregar un rango de precios escriba la palabra RANGO. Si ya decidió que comprar escriba COMPRAR" ).toLowerCase()
    if(busqueda === "finalizar" || busqueda === "comprar"){
        break
    }

/*rango de precios*/
    function rangoPrecios(){
        precioMinimo = parseFloat(prompt("Escriba el precio minimo que esta buscando"))
        precioMaximo = parseFloat(prompt("Ahora escriba el precio maximo que quiera"))
            if(isNaN(precioMinimo) || isNaN(precioMaximo) || precioMinimo < 0 || precioMaximo < 100){
                while(isNaN(precioMinimo) || precioMinimo < 0){
                    alert("El valor MINIMO introducido es invalido")
                    precioMinimo = parseFloat(prompt("Vuelva a ingresar el precio MINIMO"))
                }    
    
                while(isNaN(precioMaximo) || precioMaximo < 0){
                    alert("El valor MAXIMO introducido es invalido")
                    precioMaximo = parseFloat(prompt("Vuelva a ingresar el precio MAXIMO"))
                }  
            }
    
            rango = productos.filter((p) => p.precio <= precioMaximo && p.precio >= precioMinimo)
            console.log(" \n PRODUCTOS DENTRO DEL RANGO DE PRECIOS  $" + precioMinimo + " - $" + precioMaximo)
            rango.forEach((r) =>
            console.log(r.producto, r.ingredientes, r.tamano,":.............$", r.precio))
    }
    
    if (busqueda === "rango"){
        rangoPrecios()
    }


/*ORDENAR DE MENOR A MAYOR PRECIO O VICEVERSA*/
if(busqueda === "-" || busqueda ==="+"){
    ordenar()
}
    function ordenar(){
             if(busqueda === "-"){
                if(rango.length === 0){
                    ordenada = productos.sort((a, b) => a.precio - b.precio)
                    console.log(" \n LISTA PRODUCTOS ORDENADA DE MENOR A MAYOR")
                    ordenada.forEach((o) =>
                    console.log(o.producto, o.ingredientes, o.tamano,":.............$",  o.precio))
                }
            
                else{
                    ordenada = rango.sort((a, b) => a.precio - b.precio)
                    console.log(" \n LISTA PRODUCTOS ORDENADA DE MENOR A MAYOR")
                    ordenada.forEach((o) =>
                    console.log(o.producto, o.ingredientes, o.tamano,":.............$",  o.precio))
                }
            }
            else if(busqueda === "+"){
                if(rango.length === 0){
                    ordenada = productos.sort((a, b) => b.precio - a.precio)
                    console.log(" \n LISTA PRODUCTOS ORDENADA DE MENOR A MAYOR")
                    ordenada.forEach((o) =>
                    console.log(o.producto, o.ingredientes, o.tamano,":.............$",  o.precio))
                }
            
                else{
                    ordenada = rango.sort((a, b) => b.precio - a.precio)
                    console.log(" \n LISTA PRODUCTOS ORDENADA DE MAYOR A MENOR")
                    ordenada.forEach((o) =>
                    console.log(o.producto, o.ingredientes, o.tamano,":.............$",  o.precio))
                }
            } 
          
        }
    
/*FILTRAR PRODUCTOS POR COINCIDENCIA DE PALABRAS Y LETRAS*/
if (busqueda !== "+" && busqueda !== "-" && busqueda !== "comprar" && busqueda !== "finalizar" && busqueda !== "rango"){
    filtrar()    
}
    function filtrar(){
            console.log("\n RESULTADOS DE BUSQUEDA SIMILARES A  " + busqueda)
            if (rango.length === 0){
                filtro = productos.filter(f =>{
                    return f.producto.includes(busqueda) || f.ingredientes.includes(busqueda) || f.vegetariana.includes(busqueda)
                })
                    if (filtro.length === 0){
                        console.log("Lo siento. No encontramos lo que buscas")
                    }
                filtro.forEach((f) =>
                console.log(f.producto, f.ingredientes, f.tamano,":.............$",  f.precio))
            }
    
            else {
                filtro = rango.filter(r =>{
                    return r.producto.includes(busqueda) || r.ingredientes.includes(busqueda) || r.vegetariana.includes(busqueda)
                    } )
                    if (filtro.length === 0){
                        console.log("Lo siento. No encontramos lo que buscas")
                    }
                
                    filtro.forEach((f) =>
                    console.log(f.producto, f.ingredientes, f.tamano,":.............$",  f.precio))
            }
        }
    }    


/*AGREGAR PRODUCTOS AL CARRITO*/
if(busqueda === "comprar"){
    console.log("\n \n")
    
    agregarPrecios()
    function agregarPrecios(){
        
        while(true){
            let seleccion = prompt("Que desea agregar a su pedido(Escriba el numero del producto que quiera agregar)? Escriba Finalizar para acabar la compra").toLowerCase()
/*VALIDACION DE DATOS*/
            while((isNaN(seleccion) && seleccion !== "finalizar" && seleccion !== "borrar") || (seleccion < 1 || seleccion > 24)){
                seleccion = prompt("Valor invalido. Que desea agregar a su pedido( Escriba el numero del producto que quiera agregar)? Escriba Finalizar para acabar la compra").toLowerCase()
            }  

/*TERMINAR COMPRAR*/
            if(seleccion === "finalizar"){
                break
            }

/*AGREGAR PRECIO PRODUCTO AL TOTAL Y RESTARLE 1 DE STOCK*/         
            numero = parseInt(seleccion)
            let comidaElegida = productos.find(comida => comida.id == numero)
            if(typeof comidaElegida !=="undefined"){
                let precioNuevo = comidaElegida.precio
                total = precioNuevo + total
                comidaElegida.stock -= 1
                carritoComida.push(comidaElegida)
                console.log(comidaElegida.id, ": ",comidaElegida.producto, comidaElegida.ingredientes, " $",comidaElegida.precio)
            }

/*BORRAR UN ITEM DEL CARRITO, RESTAR PRECIO AL TOTAL Y SUMAR 1 AL STOCK*/
            if(seleccion === "borrar"){
                let eliminar = parseInt(prompt("Escriba el numero de la comida que quiera sacar del pedido"))
                let comidaEliminada = carritoComida.find(elimina => elimina.id == eliminar)
                    while(typeof comidaEliminada === "undefined"){
                        eliminar = parseInt(prompt("Numero invalido. Escriba el numero de la comida que quiera sacar del pedido"))
                        comidaEliminada = carritoComida.find(elimina => elimina.id == eliminar)
                    }
                let idx = carritoComida.indexOf(comidaEliminada)
                carritoComida.splice(idx,1)
                let precioEliminado = comidaEliminada.precio
                total = total - precioEliminado
                comidaEliminada.stock += 1
                console.log(comidaEliminada.id,": ", comidaEliminada.producto, comidaEliminada.ingredientes, " -$",comidaEliminada.precio)
                }
            }
        }
    
    console.table(carritoComida)
    console.log("TOTAL: $" + total)  

}




