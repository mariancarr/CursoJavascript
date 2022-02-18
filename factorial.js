let numero = parseInt(prompt("Ingrese un numero"))

let resultado = 1
let factorial = 1

while(isNaN(numero) || (numero < 0))
    {
        alert ("El factorial ingresado no es valido")
        numero = parseInt(prompt("Ingrese nuevamente el numero"))
    }

for (factorial; factorial <= numero; factorial++)
    {
        resultado = resultado*factorial         
    }

console.log("El " + numero +"! " + "es " + resultado)
