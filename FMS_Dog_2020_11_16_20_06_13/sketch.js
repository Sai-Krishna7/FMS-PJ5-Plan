let button;
let val = 0;
let val2 = 0;
let val3 = 0;
let val4 = 0;

function setup() {
  createCanvas(400, 400);
  background("Blue");
  button = createButton('Begin');
  button.position(150, 170);
  button.size(100, 50);
  button.mousePressed(setVal);

  button2 = createButton('Next');
  button2.position(150, 340);
  button2.size(100, 50);
  button2.mousePressed(setVal2);
  button2.hide();

  button3 = createButton('Fill');
  button3.position(150, 15);
  button3.size(100, 50);
  button3.mousePressed(setVal3);
  button3.hide();

  button4 = createButton('Play Again');
  button4.position(150, 15);
  button4.size(100, 50);
  button4.mousePressed(setVal4);
  button4.hide();

  textAlign(CENTER, CENTER);
  textSize(30);
  fill("yellow");
  text("Tracing the Pattern", 200, 150);
}

function draw() {
  if (val == 1) {
    displayDog();
  }
  if (val2 == 0 && val == 1) {
    button2.show();
  }
  if (val2 == 1 && val3 == 0) {
    button3.show();
    clear();
    button2.hide();
    background(220);
    // fill('brown')
    circle(200, 200, 250);
    // fill('black')
    circle(200, 225, 40);
    // fill('white')
    ellipse(150, 150, 50, 50);
    ellipse(250, 150, 50, 50);
    // fill('black')
    ellipse(150, 150, 25, 25);
    ellipse(250, 150, 25, 25);
    noFill();
    arc(175, 245, 50, 55, 0, HALF_PI);
    arc(225, 245, 50, 55, HALF_PI, PI);


    // point(250, 86);
    // point(220, 104);
    // point(220, 70);
    // strokeWeight(1);

    //Tongue
    // fill('red')
    beginShape();
    curveVertex(185, 270);
    curveVertex(185, 270);
    curveVertex(200, 295);
    curveVertex(215, 270);
    curveVertex(215, 270);
    endShape();

    //Left Ear
    // fill('black')
    beginShape();
    curveVertex(150, 86);
    curveVertex(150, 86);
    curveVertex(120, 70);
    curveVertex(120, 104);
    curveVertex(120, 104);
    endShape();

    //Right Ear
    beginShape();
    curveVertex(250, 86);
    curveVertex(250, 86);
    curveVertex(280, 70);
    curveVertex(280, 104);
    curveVertex(280, 104);
    endShape();
  }

  if (val3 == 1 && val4 == 0) {
    clear();
    button3.hide();
    background("blue");
    fill('brown')
    circle(200, 200, 250);
    fill('black')
    circle(200, 225, 40);
    fill('white')
    ellipse(150, 150, 50, 50);
    ellipse(250, 150, 50, 50);
    fill('black')
    ellipse(150, 150, 25, 25);
    ellipse(250, 150, 25, 25);
    noFill();
    arc(175, 245, 50, 55, 0, HALF_PI);
    arc(225, 245, 50, 55, HALF_PI, PI);


    // point(250, 86);
    // point(220, 104);
    // point(220, 70);
    // strokeWeight(1);

    //Tongue
    fill('red')
    beginShape();
    curveVertex(185, 270);
    curveVertex(185, 270);
    curveVertex(200, 295);
    curveVertex(215, 270);
    curveVertex(215, 270);
    endShape();

    //Left Ear
    fill('black')
    beginShape();
    curveVertex(150, 86);
    curveVertex(150, 86);
    curveVertex(120, 70);
    curveVertex(120, 104);
    curveVertex(120, 104);
    endShape();

    //Right Ear
    beginShape();
    curveVertex(250, 86);
    curveVertex(250, 86);
    curveVertex(280, 70);
    curveVertex(280, 104);
    curveVertex(280, 104);
    endShape();

    textAlign(CENTER, CENTER);
    textSize(20);
    fill("yellow");
    text("Thanks For Playing", 200, 350);
  }
  if (val3 == 1 && val4 == 0) {
    button4.show();
  }
  if (val4 == 1) {
    val = 1;
    val2 = 0;
    val3 = 0;
    val4 = 0;
    button4.hide();
  }
}

function displayDog() {
  button.hide();
  background(220);
  // strokeWeight(3);
  // fill('brown')
  circle(200, 200, 250);
  // fill('black')
  circle(200, 225, 40);
  // fill('white')
  ellipse(150, 150, 50, 50);
  ellipse(250, 150, 50, 50);
  // fill('black')
  ellipse(150, 150, 25, 25);
  ellipse(250, 150, 25, 25);
  noFill();
  arc(175, 245, 50, 55, 0, HALF_PI);
  arc(225, 245, 50, 55, HALF_PI, PI);


  // point(250, 86);
  // point(220, 104);
  // point(220, 70);
  // strokeWeight(1);

  //Tongue
  // fill('red')
  beginShape();
  curveVertex(185, 270);
  curveVertex(185, 270);
  curveVertex(200, 295);
  curveVertex(215, 270);
  curveVertex(215, 270);
  endShape();

  //Left Ear
  // fill('black')
  beginShape();
  curveVertex(150, 86);
  curveVertex(150, 86);
  curveVertex(120, 70);
  curveVertex(120, 104);
  curveVertex(120, 104);
  endShape();

  //Right Ear
  beginShape();
  curveVertex(250, 86);
  curveVertex(250, 86);
  curveVertex(280, 70);
  curveVertex(280, 104);
  curveVertex(280, 104);
  endShape();

  if (mouseIsPressed) {
    fill('red');
    ellipse(mouseX, mouseY, 20, 20);
    fill(220);
    if (liesOnLeftEye()) {
      fill('green');
      ellipse(mouseX, mouseY, 20, 20);
      fill(220);
    }
    if (liesOnRightEye()) {
      fill('green');
      ellipse(mouseX, mouseY, 20, 20);
      fill(220);
    }
    if (liesOnLeftPupil()) {
      fill('green');
      ellipse(mouseX, mouseY, 20, 20);
      fill(220);
    }
    if (liesOnRightPupil()) {
      fill('green');
      ellipse(mouseX, mouseY, 20, 20);
      fill(220);
    }
    if (liesOnCircle()) {
      fill('green');
      ellipse(mouseX, mouseY, 20, 20);
      fill(220);
    }
    if (liesOnNose()) {
      fill('green');
      ellipse(mouseX, mouseY, 20, 20);
      fill(220);
    }
    if (liesOnLeftEar()) {
      fill('green');
      ellipse(mouseX, mouseY, 20, 20);
      fill(220);
    }
    if (liesOnRightEar()) {
      fill('green');
      ellipse(mouseX, mouseY, 20, 20);
      fill(220);
    }
    if (liesOnTongue()) {
      fill('green');
      ellipse(mouseX, mouseY, 20, 20);
      fill(220);
    }
    if (liesOnLips()) {
      fill('green');
      ellipse(mouseX, mouseY, 20, 20);
      fill(220);
    }
  }
}

function setVal() {
  val = 1;
}

function setVal2() {
  val2 = 1;
}

function setVal3() {
  val3 = 1;
}

function setVal4() {
  val4 = 1;
}

function validateMainCircle() {
  return (pow(mouseX - 200, 2) + pow(mouseY - 200, 2) - pow(125, 2));
}

function validateNose() {
  return (pow(mouseX - 200, 2) + pow(mouseY - 225, 2) - pow(20, 2))
}

function validateLeftEye() {
  return (pow(mouseX - 150, 2) + pow(mouseY - 150, 2) - pow(25, 2));
}

function validateRightEye() {
  return (pow(mouseX - 250, 2) + pow(mouseY - 150, 2) - pow(25, 2));
}

function validateLeftPupil() {
  return (pow(mouseX - 150, 2) + pow(mouseY - 150, 2) - pow(12.5, 2));
}

function validateRightPupil() {
  return (pow(mouseX - 250, 2) + pow(mouseY - 150, 2) - pow(12.5, 2));
}

function validateLeftEar() {
  return (8 * mouseX - 15 * mouseY + 90);
}

function validateRightEar() {
  return (8 * mouseX + 15 * mouseY - 3290);
}

function validateTongueLeft() {
  return (5 * mouseX - 3 * mouseY - 115);
}

function validateTongueRight() {
  return (5 * mouseX + 3 * mouseY - 1885);
}

function validateLips() {
  if ((mouseX <= 200 && mouseX >= 175) && (mouseY >= 245 && mouseY <= 275))
    return ((mouseY - 245) + 2 * sqrt(200 - mouseX))
  else if ((mouseX >=200 && mouseX <= 225) && (mouseY >= 245 && mouseY <= 275))
    return ((mouseY - 245) + 2 * sqrt(mouseX - 200));
}

function liesOnCircle() {
  if (validateMainCircle() <= 1000 && validateMainCircle() >= -1000)
    return true;
  else
    return false;
}

function liesOnNose() {
  if (validateNose() <= 200 && validateNose() >= -200)
    return true;
  else
    return false;
}

function liesOnLeftEye() {
  if (validateLeftEye() <= 200 && validateLeftEye() >= -200)
    return true;
  else
    return false;
}

function liesOnRightEye() {
  if (validateRightEye() <= 200 && validateRightEye() >= -200)
    return true;
  else
    return false;
}

function liesOnLeftPupil() {
  if (validateLeftPupil() <= 100 && validateLeftPupil() >= -100)
    return true;
  else
    return false;
}

function liesOnRightPupil() {
  if (validateRightPupil() <= 100 && validateRightPupil() >= -100)
    return true;
  else
    return false;
}

function liesOnLeftEar() {
  if ((mouseX < 124 && mouseX > 116) && (mouseY > 71 && mouseY < 105) || (validateLeftEar() <= 100 && validateLeftEar() >= -100))
    return true;
  else
    return false;
}

function liesOnRightEar() {
  if ((mouseX < 284 && mouseX > 276) && (mouseY > 71 && mouseY < 105) || (validateRightEar() <= 100 && validateRightEar() >= -100))
    return true;
  else
    return false;
}

function liesOnTongue() {
  if ((validateTongueLeft() <= 50 && validateTongueLeft() >= -50) || (validateTongueRight() <= 50 && validateTongueRight() >= -50))
    return true;
  else
    return false;
}

function liesOnLips() {
  if (validateLips() <= 50 && validateLips() >= -50)
    return true;
  else
    return false;
}