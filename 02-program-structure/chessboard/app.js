let size = 8;
let black = '#';
let white = ' ';

console.log('\n', 'Chessboard');

function createLine(firstColour, secondColour) {
    let line = '';
    for (let count = 0; count < size; count++) {
        if (count % 2 === 0) {
            line = line + firstColour;
        } else {
            line = line + secondColour;
        }
    }
    line += '\n';
    console.log(line);
}

for (let count = 0; count < size; count++) {
    if (count % 2 === 0) {
        createLine(black, white);
    } else {
        createLine(white, black);
    }
}