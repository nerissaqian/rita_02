// FOR INTRO
var planets = [];
var stars = [];
var slide = 0;

// FOR SLIDE 1:
var bootesX = [10, 11, 13, 16, 18, 17, 14, 11];
var bootesY = [14, 16, 18, 19, 18, 16, 17, 16];

var ursaX = [27, 25, 26, 28, 27, 28, 29, 29];
var ursaY = [13, 14, 15, 14, 13, 12, 11, 10];

var cassX = [31, 33, 34, 36, 36];
var cassY = [6, 6, 8, 7, 9];

var andX = [33, 36, 38, 40, 39, 37, 34];
var andY = [2, 3, 4, 5, 3, 1, 0];

var leoX = [15, 15, 14, 13, 12, 14, 15, 16, 18, 18];
var leoY = [3, 2, 1, 4, 6, 5, 3, 3, 2, 1];

var select;
var check = [true];
var aX, aY;
var name;
var counter2 = 0;
var finish = false;
var colchoice;

// FOR SLIDE 2
var array1 = ["sentence", "paragraph", "phrase", ""];
var array2 = ["pain", "hurt", "agony", "ache", "sorrow", ""];
var array3 = ["floating", "drifting", "wandering", ""];
var array4 = ["pressed", "shattered", ""];

var n, n2, n3, n4, n5, n6, np;
var counter;

// FOR SLIDE 3
var keys = [];
var x = [];
var y = [];
var opacityArray = [];
var choice;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont("mrs-eaves");
  textSize(20);
  colorMode(HSB, 360, 100, 100, 100);

  for (var i = 0; i < 3; i++) {
    planets.push(new Planet());
  }
  for (var i = 0; i < 700; i++) {
    stars.push(new Star());
  }

  // FOR SLIDE 2
  n = random(1000);
  n2 = random(1000);
  n3 = random(1000);
  n4 = random(1000);
  n5 = random(1000);
  n6 = random(1000);
  np = random(1000);
  counter = 255;
}

function draw() {

  // INTRO
  if (slide == 0) {
    background(0, 0, 50);
    gridbackground(15, 0.2, 100, 500, height, 400, 0, 0);

    textAlign(CENTER, CENTER);
    textStyle(ITALIC);
    fill(0, 0, 100, 50);
    text("click on a planet to explore", width / 2, height - 50);
  //  text("press esc at any time to return here", width/2, height - 30);

    for (var i = 0; i < planets.length; i++) {
      planets[i].display();
      planets[i].move();
      planets[i].hover();
    }

    // white stars
    for (var i = 0; i < stars.length / 2; i++) {
      stars[i].display();
      stars[i].nocolour();
    }
    // coloured stars
    for (var i = stars.length / 2; i < stars.length; i++) {
      stars[i].display();
      stars[i].colour();
    }
  }

  // SLIDE 1
  else if (slide == 1) {
    background(0, 0, 0);
    gridbackground(15, 0.2, 100, 300, 300, 100, -90, 200);
    for (var i = 0; i < stars.length / 2; i++) {
      stars[i].display();
      stars[i].nocolour();
    }

    if (select <= 0.2) {
      constellation(bootesX, bootesY);
      aX = bootesX;
      aY = bootesY;
      name = "Boötes";
    } else if (select > 0.2 && select <= 0.4) {
      constellation(ursaX, ursaY);
      aX = ursaX;
      aY = ursaY;
      name = "Ursa Minor";
    } else if (select > 0.4 && select <= 0.6) {
      constellation(cassX, cassY);
      aX = cassX;
      aY = cassY;
      name = "Cassiopeia"
    } else if (select > 0.6 && select <= 0.8) {
      constellation(andX, andY);
      aX = andX;
      aY = andY;
      name = "Andromeda";
    } else if (select > 0.8) {
      constellation(leoX, leoY);
      aX = leoX;
      aY = leoY;
      name = "Leo";
    }

    textAlign(CENTER, CENTER);
    if (finish == true) {
      textStyle(NORMAL);
      fill(0, 0, 100);
      text(name, width / 2, 150);
    } else {
      textStyle(ITALIC)
      fill(0, 0, 50);
      text("click on the coloured dots as they appear", width / 2, height - 50);
      //text("to complete the constellation", width / 2, height - 30);
    }
  }

  // SLIDE 2
  else if (slide == 2) {
    background(0, 0, 0);
    gridbackground(10, 0.1, 100, 300, 100, 200, -300, 50);
    for (var i = 0; i < stars.length / 2; i++) {
      stars[i].display();
      stars[i].nocolour();
    }

    // counter for black screen
    if (counter < 255) {
      counter += 0.3;
    }

    // incrementing noises
    n += 0.1;
    n2 += 0.05;
    n3 += 0.05;
    n4 += 0.05;
    n5 += 0.05;
    n6 += 0.1;

    // flickering opacity and choices
    var opacity = map(noise(n), 0, 1, -10, 500);
    var opacity2 = map(noise(n6), 0, 1, -10, 500);
    var arrayChoose = map(noise(n2), 0, 1, 0, 4);
    var arrayChoose2 = map(noise(n3), 0, 1, 0, 6);
    var arrayChoose3 = map(noise(n4), 0, 1, 0, 4);
    var arrayChoose4 = map(noise(n5), 0, 1, 0, 3);

    textStyle(NORMAL);
    textAlign(LEFT, CENTER);

    fill(0, 0, 100, opacity);
    text("the " + array1[int(arrayChoose)] + " is a blur—", width / 2 - 225, height / 2 - 175);
    text("a blur that obscures", width / 2 - 225, height / 2 - 150);
    text("the " + array2[int(arrayChoose2)] + " and suffering", width / 2 - 175, height / 2 - 125);
    text("that is still present in me.", width / 2 - 175, height / 2 - 100);

    fill(0, 0, 100, opacity2);
    text("I feel like I'm " + array3[int(arrayChoose3)] + " through space,", width / 2 - 125, height / 2 + 50);
    text("the void bewteen my fingers—", width / 2 - 75, height / 2 + 75);
    text("like a sheet of ice " + array4[int(arrayChoose4)], width / 2 - 75, height / 2 + 100);
    text("between the pressure of two thumbs.", width / 2 - 75, height / 2 + 150);

    // black screen cover
    background(0, 0, 0, counter);
    gridbackground(10, 0.1, 100);
    if (counter > 100) {
      textStyle(ITALIC);
      textAlign(CENTER, CENTER);
      fill(0, 0, 100, 50);
      text("move mouse to wake", width / 2, height - 50);
    }
  }

  // SLIDE 3
  else if (slide == 3) {
    background(0, 0, 0);
    gridbackground(10, 0.1, 100, 100, height, 150, -300, 70);
    for (var i = 0; i < stars.length / 4; i++) {
      stars[i].display();
      stars[i].nocolour();
    }

    textStyle(ITALIC);
    textAlign(CENTER, CENTER)
    fill(0, 0, 100, 50);
    text("type into the void", width / 2, height - 50);

    // splicing arrays
    if (opacityArray.length > 0) {
      if (opacityArray[0] < 0) {
        opacityArray.splice(0, 1);
        keys.splice(0, 1);
        x.splice(0, 1);
        y.splice(0, 1);
      }
    }

    // fading out letters
    for (var i = 0; i < opacityArray.length; i++) {
      opacityArray[i] -= 1;
    }

    // flickering between italic and normal
    for (var i = 0; i < keys.length; i++) {
      if (choice >= 0.5) {
        textStyle(NORMAL);
      } else {
        textStyle(ITALIC);
      }
      // displaying letters in random positions
      fill(255, opacityArray[i]);
      text(keys[i], x[i], y[i]);
    }
  }
}

//------ interactions ------

function mousePressed() {
  if (slide == 0) {
    for (var i = 0; i < planets.length; i++) {
      planets[i].clicked(i + 1);
    }

    // SLIDE 2 reset black screen
    counter = 100;

    // SLIDE 3 reset arrays
    keys = [];
    x = [];
    y = [];
    opacityArray = [];

    // SLIDE 1 reset selection, colour, counter, arrays, and boolean
    select = random(1);
    colchoice = random(150, 325);
    counter2 = 0;
    check = [true];
    finish = false;

  } else if (slide == 1) {
    // only return when constellation is complete
    if (finish == true) {
      slide = 0;
    }
  } else {
    slide = 0;
  }
}

function mouseMoved() {
  // for black screen wake
  if (slide == 2) {
    if (counter > 0) {
      counter -= 3;
    } else {
      counter = 0;
    }
  }
}

function mouseReleased() {
  // for tracing constellations
  if (slide == 1) {
    var a = map(aX[counter2], Math.min.apply(Math, aX), Math.max.apply(Math, aX), width / 2 - 100, width / 2 + 300);
    var b = map(aY[counter2], Math.min.apply(Math, aY), Math.max.apply(Math, aY), height / 2 + 200, height / 2 - 200);
    //var b =
    if (dist(mouseX, mouseY, a, b) < 15) {
      check.push(true);
      counter2 += 1;
    }
    if (counter2 == aX.length - 1) {
      finish = true;
    }
  }
}

function keyTyped() {
// for typing into the void
  if (slide == 3) {
    if (keyCode != 13) {
      keys.push(key);
      x.push(random(width));
      y.push(random(height));
      opacityArray.push(255);

      choice = random(1);
    }
  }
}

// to esc to main screen
function keyPressed() {
  if (keyCode == 27) {
    slide = 0;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// ----- subroutines -------

function gridbackground(gaps, thick, colour, pos1, pos2, pos3, l1, l2) {
  for (var i = 0; i < width; i += gaps) {
    stroke(0, 0, 75);
    strokeWeight(thick);
    line(i, 0, i, height);
  }
  for (var j = 0; j < height; j += gaps) {
    line(0, j, width, j);
  }

  noFill();
  stroke(0, 0, colour);
  ellipse(width - pos1, 200, 450);
  ellipse(100, pos2, 300);
  ellipse(100, height - pos3, 150);
  line(width / 2 - l1, 100, width, 100);
  line(width - 100, 0, width - 100, height - l2);
}

function constellation(arrayX, arrayY) {
  for (var i = 0; i < arrayX.length; i++) {
    var x = map(arrayX[i], Math.min.apply(Math, arrayX), Math.max.apply(Math, arrayX), width / 2 - 100, width / 2 + 300);
    var y = map(arrayY[i], Math.min.apply(Math, arrayY), Math.max.apply(Math, arrayY), height / 2 + 200, height / 2 - 200);

    noStroke();
    if (check[i] == true) {
      if (counter2 == i && i < arrayX.length - 1) {
        fill(colchoice, 40, 100);
      } else {
        fill(0, 0, 100);
      }

      ellipse(x, y, 7, 7);
      if (i > 0) {
        var x2 = map(arrayX[i - 1], Math.min.apply(Math, arrayX), Math.max.apply(Math, arrayX), width / 2 - 100, width / 2 + 300);
        var y2 = map(arrayY[i - 1], Math.min.apply(Math, arrayY), Math.max.apply(Math, arrayY), height / 2 + 200, height / 2 - 200);
        stroke(255, 80);
        strokeWeight(1);
        line(x, y, x2, y2);
      }
    }

  }

}


//----- OBJECTS -------

class Planet {
  constructor() {
    this.d = random(200, 500);
    this.x = random(this.d / 2, width - this.d / 2);
    this.y = random(this.d / 2, height - this.d / 2);


    this.spx = random(0.3, 1);
    this.spy = random(0.3, 1);

    this.col = 0;
    this.hue = random(150, 325);
    this.sat = 0;
  }

  clicked(x) {
    if (dist(mouseX, mouseY, this.x, this.y) < this.d / 2) {
      slide = x;
    }
  }

  hover() {
    if (dist(mouseX, mouseY, this.x, this.y) < this.d / 2) {
      this.col = this.hue;
      this.sat = 25;
    } else {
      this.sat = 0;
    }
  }

  move() {

    this.x += this.spx;
    this.y += this.spy;

    if (this.x >= (width - this.d / 2) || this.x <= this.d / 2) {
      this.spx *= -1;
    }

    if (this.y >= (height - this.d / 2) || this.y <= this.d / 2) {
      this.spy *= -1;
    }
  }

  display() {
    noStroke();
  //  console.log(this.x, this.y, this.spx, this.spy);
    for (var i = 0; i < 10; i++) {
      fill(this.col, this.sat, 90, i + 8);
      ellipse(this.x, this.y, this.d - i * 3);
    }
  }
}


class Star {
  constructor() {
    this.x = random(windowWidth);
    this.y = random(windowHeight);
    this.d = random(0.3, 1.5);

    this.n = random(1000);
    this.n2 = random(1000);
    this.hue = random(366);
    this.sat = 0;
  }

  colour() {
    this.sat = 50;
  }

  nocolour() {
    this.sat = 0;
  }

  display(x, y) {
    this.n += 0.01;
    this.n2 += 0.01;
    fill(this.hue, this.sat, 100);
    ellipse(map(noise(this.n), 0, 1, this.x - 10, this.x + 10), map(noise(this.n2), 0, 1, this.y - 10, this.y + 10), this.d);
  }
}
