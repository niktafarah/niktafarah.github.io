let randomR;
let randomG;
let randomB;
let petalSize;

function setup() {
  createCanvas(windowWidth, windowHeight);
  randomR = random(100, 250);
  randomG = random(100,250);
  randomB = random(100,250);
  frameRate(15);
}

petalSize = 10 ;

function draw() {
    petalSize = petalSize + 2 ;

    noStroke();
    background('white');
    fill(107,142,35);
    rect(windowWidth/2,windowHeight/2, 4, 200);

    rect(0,windowHeight/2 + 200, windowWidth, 200);
    
    translate(windowWidth/2,windowHeight/2)
    
    for (let i = 0; i < 20; i ++) {
        fill(233,150,122, 127);
        ellipse(0, 10, 15, 10);
        rotate(PI/10);
    }

    leftPetal = windowWidth/2 - petalSize/2
    rightPetal = windowWidth/2 + petalSize/2

    lowerPetal = windowHeight/2 - petalSize/2
    upperPetal = windowHeight/2 + petalSize/2
    if (mouseX > leftPetal && mouseX < rightPetal && mouseY > lowerPetal && mouseY < upperPetal) {
        
        fill(233,150,122, 127);
        for (let i = 0; i < 20; i ++) {
            fill(233,150,122, 127);
            ellipse(0, 10, 15, petalSize);
            rotate(PI/10);
        }   
        
        for (let i = 0; i < 20; i ++) {
            fill(255,255,204,50);
            ellipse(0, 10, 15, petalSize/2);
            rotate(PI/10);
        }
    }
    

    fill(255,255,204);
    stroke('white');
    ellipse(0, 0, 10, 10);
    
    if (petalSize == 150) {
        petalSize = 10 ;
    }
}

function mousePressed() {
    petalSize = 10;
}
