let numero = parseInt(prompt("Ingrese un numero"))

let multiplicador = 0

while (isNaN(numero))
    {
       numero = parseInt(prompt("El numero ingresado no es valido"))
    }

for (multiplicador; multiplicador<=10; multiplicador++)
    {
        console.log(numero + " X " + multiplicador + " = " + (numero * multiplicador))
    }
