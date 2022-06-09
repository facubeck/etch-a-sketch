// Etch a Sketch

const container = document.querySelector('.container');
document.body.appendChild(container);

let newDiv;

// agregar divs al container
function agregarDivsDOM (){
    let cantidadDivs = 16 * 16;
    for(let i = 0; i < cantidadDivs; i++){
        newDiv = document.createElement('div');
        container.appendChild(newDiv);
    }
}

agregarDivsDOM();