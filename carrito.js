const productos = []
let busqueda = ""
let filtro = []
let precioMinimo = 0
let precioMaximo = 0


class inventario{
    constructor(id, producto, ingredientes, tamano, precio, vegetariana){
        this.id = parseInt(id)
        this.producto = producto.toLowerCase()
        this.ingredientes = ingredientes.toLowerCase()
        this.tamano = tamano.toLowerCase()
        this.precio = parseFloat(precio).toFixed(2)
        this.vegetariana = vegetariana.toLowerCase()
    }
}

productos.push(new inventario(1, "pizza", "muzzarella", "grande", 800, "vegetariana"))
productos.push(new inventario(2, "pizza", "jamon y muzzarella", "grande", 970, "no"))
productos.push(new inventario(3, "pizza", "fugaza", "grande", 900, "vegetariana"))
productos.push(new inventario(4, "pizza", "jamon y morron", "grande", 1020, "no"))
productos.push(new inventario(5, "pizza", "margarita", "grande", 900, "vegetariana"))
productos.push(new inventario(6, "pizza", "napolitana", "grande", 950, "vegetariana"))
productos.push(new inventario(7, "empanada", "jamon y queso", "unidad", 100, "no"))
productos.push(new inventario(8, "empanada", "cebolla y queso", "unidad", 105, "vegetariana"))
productos.push(new inventario(9, "empanada", "carne suave", "unidad", 105, "no"))
productos.push(new inventario(10, "empanada", "pollo", "unidad", 110, "no"))
productos.push(new inventario(11, "empanada", "humita", "unidad", 105, "vegetariana"))
productos.push(new inventario(12, "empanada", "carne picante", "unidad", 105, "no"))
productos.push(new inventario(13, "empanada", "capresse", "unidad", 110, "vegetariana"))
productos.push(new inventario(14, "empanada", "verdura", "unidad", 105, "vegetariana"))
productos.push(new inventario(15, "bebida", "agua con gas", "600ml", 150, "vegetariana"))
productos.push(new inventario(16, "bebida", "agua sin gas", "600ml", 150, "vegetariana"))
productos.push(new inventario(17, "bebida", "coca-Cola", "500ml", 170, "vegetariana"))
productos.push(new inventario(18, "bebida", "sprite", "500ml", 170, "vegetariana"))
productos.push(new inventario(19, "bebida", "fanta", "500ml", 170, "vegetariana"))
productos.push(new inventario(21, "bebida", "pomelo", "500ml", 170, "vegetariana"))
productos.push(new inventario(22, "postre", "volcan chocolate", "", 375, "vegetariana"))
productos.push(new inventario(23, "postre", "cheesecake", "", 350, "vegetariana"))
productos.push(new inventario(24, "postre", "flan con crema", "", 300, "vegetariana"))



productos.forEach((p) => console.log(p.producto, p.ingredientes, p.tamano,":.............$",  p.precio))

busqueda = prompt("Que quiere comer?. Ordenar los productos de mayor precio a menor precio escribiendo +, o al reves escribiendo -. Si quiere agregar un rango de precios escriba la palabra RANGO" ).toLowerCase()


function rangoPrecios(){
    precioMinimo = parseFloat(prompt("Escriba el precio minimo que esta buscando(a partir de 0)"))
    precioMaximo = parseFloat(prompt("Ahora escriba el precio maximo que quiera(a partir de 100)"))
        if(isNaN(precioMinimo) || isNaN(precioMaximo) || precioMinimo < 0 || precioMaximo < 100){
            while(isNaN(precioMinimo) || precioMinimo < 0){
                alert("El valor MINIMO introducido es invalido")
                precioMinimo = parseFloat(prompt("Vuelva a ingresar el precio MINIMO"))
            }    

            while(isNaN(precioMaximo) || precioMaximo < 100){
                alert("El valor MAXIMO introducido es invalido")
                precioMaximo = parseFloat(prompt("Vuelva a ingresar el precio MAXIMO"))
            }  
        }

        filtro = productos.filter((p) => p.precio <= precioMaximo && p.precio >= precioMinimo)
        console.log(" \n PRODUCTOS DENTRO DEL RANGO DE PRECIOS  $" + precioMinimo + " - $" + precioMaximo)
        filtro.forEach((f) =>
        console.log(f.producto, f.ingredientes, f.tamano,":.............$",  f.precio))
}

if (busqueda === "rango"){
    rangoPrecios()
    busqueda = prompt("Que quiere comer?. Ordenar los productos de mayor precio a menor precio escribiendo +, o al reves escribiendo -.")
}

 
ordenar()
filtrar()

function ordenar(){
        if(busqueda === "-"){
            if(filtro.length === 0){
                filtro = productos.sort((a, b) => a.precio - b.precio)
                console.log(" \n LISTA PRODUCTOS ORDENADA DE MENOR A MAYOR")
                filtro.forEach((f) =>
                console.log(f.producto, f.ingredientes, f.tamano,":.............$",  f.precio))
            }
        
            else{
            filtro = filtro.sort((a, b) => a.precio - b.precio)
            console.log(" \n LISTA PRODUCTOS ORDENADA DE MENOR A MAYOR")
            filtro.forEach((f) =>
            console.log(f.producto, f.ingredientes, f.tamano,":.............$",  f.precio))
            
            }
        }
        else if(busqueda === "+"){
            if(filtro.length === 0){
                filtro = productos.sort((a, b) => a.precio - b.precio)
                console.log(" \n LISTA PRODUCTOS ORDENADA DE MENOR A MAYOR")
                filtro.forEach((f) =>
                console.log(f.producto, f.ingredientes, f.tamano,":.............$",  f.precio))
            }
        
            else{
            filtro = filtro.sort((a, b) => a.precio - b.precio)
            console.log(" \n LISTA PRODUCTOS ORDENADA DE MAYOR A MENOR")
            filtro.forEach((f) =>
            console.log(f.producto, f.ingredientes, f.tamano,":.............$",  f.precio))
            }
        } 
      
    }

function filtrar(){
    if (busqueda !== "+" && busqueda !== "-"){
        console.log("\n RESULTADOS DE BUSQUEDA SIMILARES A  " + busqueda)
        if (filtro.length === 0){
            filtro = productos.filter(f =>{
                return f.producto.includes(busqueda) || f.ingredientes.includes(busqueda) || f.vegetariana.includes(busqueda)
            })
            filtro.forEach((f) =>
            console.log(f.producto, f.ingredientes, f.tamano,":.............$",  f.precio))
        }

        else {
            coincidencias = filtro.filter(f =>{
                return f.producto.includes(busqueda) || f.ingredientes.includes(busqueda) || f.vegetariana.includes(busqueda)
                } )
                if (coincidencias.length === 0){
                    console.log("Lo siento. No encontramos lo que buscas")
                }
            
                coincidencias.forEach((f) =>
                console.log(f.producto, f.ingredientes, f.tamano,":.............$",  f.precio))
        }
    }
}    


