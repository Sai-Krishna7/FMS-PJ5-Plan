let button1, button2, button3;

function setup() {
  createCanvas(400, 400);
  
  
  
  
  textSize(22);
  textAlign(CENTER, CENTER);
  
  
  
  button1 = createButton("Building Game");
  button1.position(140,100);
  button1.size(125,40);
  button1.mousePressed(buildingGame);
  
  button2 = createButton("Tracing the Pattern");
  button2.position(140,200);
  button2.size(125,40);
  button2.mousePressed(tracingThePattern);
  
  button3 = createButton("Tracing the Letters");
  button3.position(140,300);
  button3.size(125,40);
  button3.mousePressed(tracingTheLetter);
  
  
}
  
function buildingGame() {
  window.open("https://editor.p5js.org/Sai-Krishna7/present/TY5RyS87f")
}

function tracingThePattern() {
  window.open("https://editor.p5js.org/Sai-Krishna7/present/2cpb1u2dW")
}

function tracingTheLetter() {
  window.open("https://editor.p5js.org/Sai-Krishna7/present/stNuGJGAv")
}

function draw() {
    background(240);
    fill('blue');
  rect(0,0,400,10);
    fill('red');
  rect(0,0,10,400);
    fill('yellow');
  rect(390,0,10,400)
    fill('green');
  rect(0,390,390,10)
  textSize(20)
  fill('orange')
  text('Welcome!', 200, 30);
  fill('purple')
  text('Choose A Game!', 200, 60)
}

