let mic;
let amplitude;
let micOn = true;



function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(15);
    mic = new p5.AudioIn(print("mic detected"),
    function() {
      print("no mic detected")
    });
  mic.start(print("mic on"),
    function() {
      print("mic off")
    });
}


function draw() {
    fill(233,150,122, 127);
    ellipse(0, 10, 15, 100);

    noStroke();
    background('white');
    fill(107,142,35);
    rect(windowWidth/2,windowHeight/2, 4, 200);

    rect(0,windowHeight/2 + 200, windowWidth, 200);

    let level = mic.getLevel(0.6);
    let size = map(level, 0, 0.6, 10, 600);
    fill(map(level, 0, 0.6, 255, 220),
    map(level, 0, 0.6, 255, 110),
    map(level, 0, 0.6, 110, 255));

    translate(windowWidth/2,windowHeight/2) ;
    for (let i = 0; i < 20; i ++) {
        fill(233,150,122, 127);
        ellipse(0, 10, 15, size);
        rotate(PI/10);
    }
    for (let i = 0; i < 20; i ++) {
        fill(255,255,204,50);
        ellipse(0, 10, 15, size/2);
        rotate(PI/10);
    }

    fill(255,255,204);
    stroke('white');
    ellipse(0, 0, 10, 10);
}