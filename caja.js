let total = 0
let cantidad = 0
let precio = 0
const maxunidades = 20
const minunidades = 1
let cantidadcuotas = 0
const trescuotas = 1.09
const seiscuotas = 1.2
const docecuotas = 1.45

/*FUNCION ELEGIR CANTIDAD PRODUCTOS Y LUEGO SUMAR CADA UNO DE LOS PRODUCTOS*/
function sumarProductos (){
    cantidad = parseInt(prompt("Ingrese la cantidad de productos que va a ingresar (Maximo 20 unidades)"))
    while (isNaN(cantidad) || cantidad > maxunidades || cantidad < minunidades)
        {
            cantidad = parseInt(prompt("La cantidad de productos es invalida. Por favor introduzcala nuevamente"))
        }
    
    for (i = 1; i <= cantidad; i++)
    {
        precio = parseFloat(prompt("Ingrese el precio del producto nº" + i))
            while (isNaN(precio) || precio < 1)
            {
                alert("El precio ingresado es invalido. Ingresar nuevamente")
                precio = parseFloat(prompt("Ingrese el precio del producto nº" + i))
            }

            total += precio 
            console.log("$" + precio)
    }
}

/*FUNCION MOSTRAR MENSAJE*/
function mostrarTotal (mensaje){
    console.log("TOTAL: $" +  mensaje.toFixed(2))
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

/*FUNCION PARA FINALIZAR O CANCELAR LA COMPRA*/
function finalizar(){
    let final = prompt("Escriba FINALIZR para pagar o CANCELAR para cancelar la compra").toLowerCase()
        while(final !== "finalizar" && final !== "cancelar") 
            {
                final = prompt("Operacion invalida. Vuelva a ingresar FINALIZAR o CANCELAR").toLowerCase()
            }
        if(final === "finalizar") 
            {
                alert("Su compra ha finalizado. Gracias. Hasta luego")
            }

        if(final === "cancelar") 
            {
                alert("Su compra ha sido cancelada")
            } 
}


sumarProductos()
mostrarTotal(total)
cuotas()
finalizar()