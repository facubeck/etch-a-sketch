// Etch a Sketch

function crearBoard(size) {
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach(div => div.remove());
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    // bucle que crea los divs
    let amount = size * size;

    for (let i = 0; i < amount; i++) {
        let square = document.createElement('div');
        // cambiar de color
        square.addEventListener('mouseover', colorSquare)
        square.style.backgroundColor = 'black';
        board.appendChild(square)
    }
}

crearBoard(16);


function changeSize(input) {
    if (input >= 2 || input <= 100) {
        crearBoard(input);
    }
    else { alert('too much squares!') }
}

function colorSquare(){
    this.style.backgroundColor = `hsl(${Math.random() *360}, 100%, 50%)`
}
