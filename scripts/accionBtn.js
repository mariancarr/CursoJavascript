function btnAccion(){
    const btnRangos = document.getElementById("buscarPrecios")
    btnRangos.addEventListener("click", () => {tomarValores()})

    const btnFiltro = document.getElementById("btnBuscarCoincidencias")
    btnFiltro.addEventListener("click", () => {buscarCoincidencias()})

    const menuPrincipal = document.getElementById("logo")
    menuPrincipal.addEventListener("click", () => {cargarProductos(productos)})
}