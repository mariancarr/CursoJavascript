/* permite ver cuantos articulos hay en el carrito, y tambien si presionamos el boton aparece o desparece el display del carrito*/

function carritoHeader(array){
    
    let carritoHeaderLength = document.getElementById("indicator")
    const spanLength = document.createElement("div")
    spanLength.setAttribute("id", "indicator__value")
    spanLength.innerHTML = `<span>${array.length}</span>`
    carritoHeaderLength.appendChild(spanLength)

    const btnCarritoPS = document.getElementById("indicator")
    btnCarritoPS.addEventListener("click", () => {carritoPS()})   

        let click = 0
    function carritoPS(){
        click++
        let cantClicks = (click % 2 === 0) ? true : false
        cantClicks ? document.getElementById("carrito").style = "display:block"   : document.getElementById("carrito").style = "display:none"  
    }
}

