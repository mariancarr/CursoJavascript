
let total = 0
let precio = 0
let usuario = ""
let cantidadcuotas = 0
const trescuotas = 1.09
const seiscuotas = 1.2
const docecuotas = 1.45


/*FUNCION SUMAR PRODUCTOS A MEDIDA QUE INGRESE EL USUARIO*/
function sumarproductos (){
        while(true)
            {
                usuario = prompt("Ingrese el precio del producto (Escriba LISTO para finalizar).") .toLowerCase()
                if (usuario === "listo")
                    {
                        break
                    }
                precio = parseFloat(usuario)   
                while (precio < 1 || isNaN(precio))
                    {
                        alert("El precio ingresado es invalido. Ingresar nuevamente")
                        precio = parseFloat(prompt("Ingrese el precio del producto"))
                    }

                total += precio
                console.log("$" + precio)
            }
    }

/*FUNCION MOSTRAR TOTAL*/    
function mostrarTotal (mensaje){
    console.log("TOTAL: $" + mensaje .toFixed(2))
}

/* FUNCION ELEGIR CANTIDAD DE CUOTAS Y MOSTRAR EL PRRECIO TOTAL*/
function cuotas(){
    cantidadcuotas = parseInt(prompt("Ingrese la cantidad de cuotas en las que quiere abonar:\n 1 cuota(0%)\n 3 cuotas (9%)\n 6 cuotas (20%)\n 12 cuotas (45%)"))
        while(isNaN(cantidadcuotas) && cantidadcuotas !== 1 && cantidadcuotas !== 3 && cantidadcuotas !== 6 && cantidadcuotas !== 12 ){
            cantidadcuotas = parseInt(prompt("Cantidad cuotas invalidas. Ingrese la cantidad de cuotas en las que quiere abonar:\n 1 cuota(0%)\n 3 cuotas (9%)\n 6 cuotas (20%)\n 12 cuotas (45%)"))
        }
        if (cantidadcuotas === 1)
            {
                alert("Total con una cuota: $" + total.toFixed(2))
            }

        else if (cantidadcuotas === 3)
            {
                const total3cuotas= (total * trescuotas).toFixed(2)
                alert("Total con tres cuotas: $" + total3cuotas+ ".\n Tres cuotas de $" + (total3cuotas / 3) .toFixed(2))
            }
        else if (cantidadcuotas === 6)
            {
                const total6cuotas= (total * seiscuotas).toFixed(2)
                alert("Total con seis cuotas: $"  + total6cuotas+ ".\n Seis cuotas de $" + (total6cuotas / 6) .toFixed(2))
            }
        else if (cantidadcuotas === 12)
            {
                const total12cuotas= (total * docecuotas).toFixed(2)
                alert("Total con doce cuotas: $"  + total12cuotas+ ".\n Doce cuotas de $" + (total12cuotas / 12) .toFixed(2))
            }
}

sumarproductos()
mostrarTotal(total)
cuotas()