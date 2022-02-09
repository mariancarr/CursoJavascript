const numero1 = parseFloat(prompt("Ingrese un numero"))
const operacion = prompt("Ingrese una operacion: SUMA(+), RESTA(-), MULT(*), DIV(/)")
const numero2 = parseFloat(prompt("Ingrese otro numero"))

 if(isNaN(numero1) || isNaN(numero2)){
        if((isNaN(numero1)) && (isNaN(numero2))){
            alert("Ambos numeros ingresados son invalidos")
        } 

        else if (isNaN(numero1)){
            alert("El primer numero ingresado es invalido")
         }

        else {
            alert("El segundo numero ingresado es invalido")
        }
    }


 else {
        if  ((operacion !== "SUMA") && (operacion !== "suma") && (operacion !== "Suma") && (operacion !== "+") &&
            (operacion !== "RESTA") && (operacion !== "resta") && (operacion !== "Resta") && (operacion !== "-") &&
            (operacion !== "MULT") && (operacion !== "mult") && (operacion !== "Mult") && (operacion !== "*") &&
            (operacion !== "DIV") && (operacion !== "div") && (operacion !== "Div") && (operacion !== "/"))
                {
                    alert("La operacion ingresada no es valida")
                }
        
        else if((operacion === "SUMA") || (operacion === "suma") || (operacion === "Suma") || (operacion === "+"))
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
                        if(numero2 === 0){
                            alert("Ingrese un divisor diferente de 0")
                        }
                        else{
                            alert(numero1 / numero2)
                        }
                        
                    }
    }