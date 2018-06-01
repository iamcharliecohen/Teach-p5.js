function addNumber() {
    let options = [];
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (grid[i][j] === 0) {
                options.push({
                    x: i,
                    y: j
                });
            }
        }
    }
    if (options.length > 0) {
        let spot = random(options);
        let r = random(1);
        grid[spot.x][spot.y] = r > 0.1 ? 2 : 4;
        grid_new[spot.x][spot.y] = 1;
    }
}

function blankGrid() {
    return [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
    ];
}

// operating on array itself
function combine(row) {
    for (let i = 3; i >= 1; i--) {
        let a = row[i];
        let b = row[i - 1];
        if (a == b) {
            row[i] = a + b;
            score += row[i]
            row[i - 1] = 0;
        }
    }
    return row;
}

function compare(a, b) {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (a[i][j] !== b[i][j]) {
                return true;
            }
        }
    }
    return false;
}

function copyGrid(grid) {
    let extra = blankGrid();
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            extra[i][j] = grid[i][j];
        }
    }
    return extra;
}

function drawGrid() {
    let w = 100;
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            let val = grid[i][j];
            let s = val.toString();    
            strokeWeight(2);    
            stroke(0);
            /* if(grid_new[i][j] === 1){
                stroke(200,0,200);
                strokeWeight(16);
                grid_new[i][j] === 0
            } else {
                strokeWeight(2);
                stroke(0);
            } */

            if(val != 0){                                    
                fill(colorsSizes[s].color);                                
            } else {
                noFill();
            }
            
            rect(i * w, j * w, w, w, 60);            
            if (val !== 0) {
                textAlign(CENTER, CENTER);    
                fill(0);            
                noStroke();
                textSize(colorsSizes[s].size);
                text(val, i * w + w / 2, j * w + w / 2)
            }
        }
    }
}

function flipGrid(grid) {
    for (let i = 0; i < 4; i++) {
        grid[i].reverse();
    }
    return grid;
}

function operate(row) {
    row = slide(row);
    row = combine(row);
    row = slide(row);
    return row;
}

function rotateGrid(grid) {
    let newGrid = blankGrid();
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            newGrid[i][j] = grid[j][i];
        }
    }
    return newGrid;
}



// making new array
function slide(row) {
    let arr = row.filter(val => val);
    let missing = 4 - arr.length;
    let zeros = Array(missing).fill(0);
    arr = zeros.concat(arr);
    return arr;
}



