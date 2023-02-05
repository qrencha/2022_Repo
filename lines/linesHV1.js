// Need the P5js library to run below code, add below in index.html
//   <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.5.0/p5.min.js"></script>

let dim = 600;
let p0;
let col = 10;
let row = col;

function setup() {
    createCanvas(dim, dim);
    strokeWeight(3);
    frameRate(1);
}

function draw() {
    background('darkgray');

    for (let x = 0; x < col; x++) {
        for (let y = 0; y < row; y++) {
            if (random(1) < 0.5) {
                stroke('pink');
                console.log('horizontal');
                line(x * dim / col, (y+0.5) * (dim / col), (x + 1) * dim / col, (y+0.5) * (dim /col));
            } else {
                stroke('navyblue')
                console.log('vertical')
                line((x+0.5) * (dim / col), y * dim / col, (x + 0.5) * (dim /col), (y+1) * dim / col);
            }
        }
    }

}