let randomR;
let randomG;
let randomB;
let petalSize;

function setup() {
  createCanvas(windowWidth, windowHeight);
  randomR = random(100, 250);
  randomG = random(100,250);
  randomB = random(100,250);
  petalSize = random(50,200);
}

function draw() {
    
    noStroke();
    background('white');
    fill(107,142,35);
    rect(windowWidth/2,windowHeight/2, 4, 200);

    rect(0,windowHeight/2 + 200, windowWidth, 200);
    
    translate(windowWidth/2,windowHeight/2)
    for (let i = 0; i < 20; i ++) {
        fill(233,150,122, 127);
        ellipse(0, 10, 15, petalSize);
        rotate(PI/10);
    }

    fill(randomR,randomG,randomB);
    stroke('white');
    ellipse(0, 0, 20, 20);
}
