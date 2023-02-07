function setup() {
    // Create the canvas
    createCanvas(windowWidth,windowHeight);
}

function draw() {
    background('white');
    noStroke();

    fill(107,142,35);
    rect(windowWidth/2,windowHeight/2, 4, 200);

    rect(0,windowHeight/2 + 200, windowWidth, 200);

    translate(windowWidth/2,windowHeight/2);
    for (let i = 0; i < 20; i ++) {
        fill(233,150,122, 127);
        ellipse(0, 10, 15, 80);
        rotate(PI/10);
    }

    fill(205,92,92);
    ellipse(0, 0, 20, 20);
}