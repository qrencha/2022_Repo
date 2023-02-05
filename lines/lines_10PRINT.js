// Need the P5js library to run below code, add below in index.html
//   <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.5.0/p5.min.js"></script>


let dim = 600;
let p0;
let col = 20; // number of columns and rows
let row = col;

function setup() {
    createCanvas(dim, dim);
    strokeWeight(5);
    frameRate(1);
}

function draw() {
    background('darkgray');

    for (let x = 0; x < col; x++) {
        for (let y = 0; y < row; y++) {
            if (random(1) < random([0.7, 0.3])) {
                stroke(random(50,200),0,0);
                line(x * dim / col, (y + 1) * dim / col, (x + 1) * dim / col, (y) * dim / col);
            } else {
                line(x * dim / col, (y) * dim / col, (x + 1) * dim / col, (y + 1) * dim / col);
            }
        }
    }

}
