/* si no hay coincidencias de cualquier tipo de filtro aparece este cartel en el html*/
function noHayCoincidencias(){
    nodoProductos = document.getElementById("gridProductos")
    nodoProductos.innerHTML = ""
    const noCoincidencias = document.createElement("div") 
    noCoincidencias.setAttribute("class", "col")
    noCoincidencias.setAttribute("id", "noCoincidencias")
    noCoincidencias.innerHTML = `
                    <img id = "noCoincidenciasImg" src="images/no-results.PNG" alt="No hay coincidencias">
                    <div>
                        <h3 id="noCoincidenciasTxt">No hay publicaciones que coincidan con tu búsqueda.</h3>
                        <ul id="noCoincidenciasLista">
                            <li>Revisá la ortografía de la palabra.</li>
                            <li>Utilizá palabras más genéricas o menos palabras.</li>
                            <li>Revisá el rango de precios</li>
                        </ul>
                    </div>
                    
                    `             
    nodoProductos.append(noCoincidencias)
}