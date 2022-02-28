
const productos = [
    {id: 1, producto: "pizza", ingredientes: "muzzarella", tamano: "grande", precio: 800, vegetariana: "vegetariana"},
    {id: 2, producto: "pizza", ingredientes: "jamon y muzzarella", tamano: "grande", precio: 970, vegetariana: "no"},
    {id: 3, producto: "pizza", ingredientes: "fugaza", tamano: "grande", precio: 900, vegetariana: "vegetariana"},
    {id: 4, producto: "pizza", ingredientes: "morron y jamon",ingredientes: "muzzarela", tamano: "grande", precio: 1020, vegetariana: "no"},
    {id: 5, producto: "pizza", ingredientes: "margarita", tamano: "grande", precio: 900, vegetariana: "vegetariana"},
    {id: 6, producto: "empanada", ingredientes: "jamon y queso", tamano: "unidad", precio: 100, vegetariana: "no"},
    {id: 7, producto: "empanada", ingredientes: "cebolla y queso", tamano: "unidad", precio: 100, vegetariana: "vegetariana"},  
    {id: 8, producto: "empanada", ingredientes: "carne picada suave", tamano: "unidad", precio: 100, vegetariana: "no"}, 
    {id: 9, producto: "empanada", ingredientes: "pollo", tamano: "unidad", precio: 100, vegetariana: "no"},
    {id: 10, producto: "empanada", ingredientes: "humita", tamano: "unidad", precio: 100, vegetariana: "vegetariana"} ,  
    {id: 11, producto: "bebida", ingredientes: "agua sin gas", tamano: "600ml", precio: 120, vegetariana: "vegetariana"  },
    {id: 12, producto: "bebida", ingredientes: "agua con gas", tamano: "600ml", precio: 120, vegetariana: "vegetariana" },
    {id: 13, producto: "bebida", ingredientes: "coca-Cola zero", tamano: "500ml", precio: 140, vegetariana: "vegetariana"},
    {id: 14, producto: "bebida", ingredientes: "sprite", tamano: "500ml", precio: 140, vegetariana: "vegetariana"},
    {id: 15, producto: "bebida", ingredientes: "anta", tamano: "500ml", precio: 140, vegetariana: "vegetariana"}
]

for (const p of productos){
    console.log(p.producto, p.ingredientes, p.tamano,":.................... $",  p.precio)
    
}

let busqueda = prompt("Que quiere comer? Tenemos pizzas, empanadas y bebias no alcoholicas (debajo de cada una se muestra el precio). O si prefiere puede ordenar los productos de mayor precio a menor precio escribiendo +, o al reves escribiendo -").toLowerCase()

function ordenar(){
    if(busqueda === "-"){
        productos.sort((a, b) => a.precio - b.precio)
        console.log("")
        console.log("LISTA PRODUCTOS ORDENADA DE MENOR A MAYOR")
        for (const p of productos){
            console.log(p.producto, p.ingredientes, p.tamano,":.................... $",  p.precio)
        }
    }

    if(busqueda === "+"){
        productos.sort((a, b) => b.precio - a.precio)
        console.log("")
        console.log("LISTA PRODUCTOS ORDENADA DE MAYOR A MENOR")
        for (const p of productos){
            console.log(p.producto, p.ingredientes, p.tamano,":.................... $",  p.precio)
        }
    } 

    else{
        console.log("\n RESULTADOS DE BUSQUEDA SIMILARES A  " + busqueda)
        filtro = productos.filter(p =>{
            return p.producto.includes(busqueda) || p.ingredientes.includes(busqueda) || p.vegetariana.includes(busqueda)
            } )
        for (const f of filtro){
            console.log(f.producto, f.ingredientes,f.tamano, ":.................... $",  f.precio )
        }
    }
}
    


/*unction sumar(){
    for (const producto of productos){
        (producto.producto)
        
    }
}
*/




ordenar()