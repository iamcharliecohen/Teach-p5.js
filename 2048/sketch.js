let grid;
let grid_new;
let score = 0;

function setup() {
    createCanvas(400, 400);
    noLoop();
    grid = blankGrid();
    grid_new = blankGrid();

    addNumber();
    addNumber();
    updateCanvas();
}

function updateCanvas() {
    background(255);
    drawGrid();
    select('#score').html(score);
}