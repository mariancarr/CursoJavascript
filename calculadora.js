let numero1 = parseFloat(prompt("Ingrese un numero"))
let operacion = prompt("Ingrese una operacion: SUMA(+), RESTA(-), MULT(*), DIV(/)")
let numero2 = parseFloat(prompt("Ingrese otro numero"))


while (isNaN(numero1))
        {
            alert("El primer numero ingresado es invalido")
            numero1 = parseFloat(prompt("Ingrese un numero valido"))
        }
 
while (isNaN(numero2))
        {
            alert("El segundo numero ingresado es invalido")
            numero2 = parseFloat(prompt("Ingrese un numero valido"))
        }


while((operacion !== "SUMA") && (operacion !== "suma") && (operacion !== "Suma") && (operacion !== "+") &&
(operacion !== "RESTA") && (operacion !== "resta") && (operacion !== "Resta") && (operacion !== "-") &&
(operacion !== "MULT") && (operacion !== "mult") && (operacion !== "Mult") && (operacion !== "*") &&
(operacion !== "DIV") && (operacion !== "div") && (operacion !== "Div") && (operacion !== "/"))
        {
            operacion = prompt("La operacion ingresada no es valida. Ingrese nuevamente una operacion")
        }
        
if((operacion === "SUMA") || (operacion === "suma") || (operacion === "Suma") || (operacion === "+"))
        {
            alert(numero1 + numero2)
        }

else if((operacion === "RESTA") || (operacion === "resta") || (operacion === "Resta") || (operacion === "-"))
        {
           alert(numero1 - numero2)
        }       

else if((operacion === "MULT") || (operacion === "mult") || (operacion === "Mult") || (operacion === "*"))
        {
            alert(numero1 * numero2)
        }

else if((operacion === "DIV") || (operacion === "div") || (operacion === "Div") || (operacion === "/"))
        {
            while((numero2 === 0)){
                numero2 = parseFloat(prompt("Ingrese un divisor diferente de 0"))
            }
            {
                alert(numero1 / numero2)
            }
        }


