let sun1;
let sun2;
let hills;
let cloud1;
let cloud2;
let cloud3;
let cloud4;
let cloud5;
let cloud6;
let clip1;

let cloud1X;
let cloud2X;
let cloudSpeed = 1;
let cloud1Direction = 1;
let cloud2Direction = 1;
let cloudRange = 30;

let sunImage;

let cloud1MovingOffScreen = false;
let cloud2MovingOffScreen = false;

let showText = false;

let restart = false;

function preload() {
  sun1 = loadImage('sun1.png');
  sun2 = loadImage('sun2.png');
  hills = loadImage('hills.png');
  cloud1 = loadImage('cloud1.png');
  cloud2 = loadImage('cloud2.png');
  cloud3 = loadImage('cloud3.png');
  cloud4 = loadImage('cloud4.png');
  cloud5 = loadImage('cloud5.png');
  cloud6 = loadImage('cloud6.png');
  clip1 = loadSound('clip1.mp3');
}

function keyPressed() {
  if (keyCode == UP_ARROW) {
    clip1.play();
  }
  if (keyCode == DOWN_ARROW) {
    clip1.stop();
  }
}

function setup() {
  createCanvas(800, 800);
  cloud1X = 200;
  cloud2X = 400;

  sunImage = sun1;
}

function draw() {
  background(135, 206, 235);

  let hillsX = (width - hills.width) / 2;
  image(hills, hillsX, height - hills.height);

  image(sunImage, 300, 50);

  if (!cloud1MovingOffScreen) {
    cloud1X += cloudSpeed * cloud1Direction;
    if (cloud1X >= 200 + cloudRange || cloud1X <= 200 - cloudRange) {
      cloud1Direction *= -1;
    }
  } else {
    cloud1X -= 1;
    if (cloud1X + cloud1.width <= 0) {
      cloud1MovingOffScreen = false;
    }
  }
  image(cloud1, cloud1X, 80);

  if (!cloud2MovingOffScreen) {
    cloud2X += cloudSpeed * cloud2Direction;
    if (cloud2X >= 400 + cloudRange || cloud2X <= 400 - cloudRange) {
      cloud2Direction *= -1;
    }
  } else {
    cloud2X += 1;
    if (cloud2X >= width) {
      cloud2MovingOffScreen = false;
    }
  }
  image(cloud2, cloud2X, 80);

  image(cloud3, 550, 50);
  image(cloud4, 50, 50);
  image(cloud5, 700, 80);
  image(cloud6, -100, 80);

  if (showText) {
    textSize(48);
    textAlign(LEFT, CENTER);
    fill(255);
    text("get well soon ;P", width / 2 + 50, height / 2);
  }

  textSize(24);
  textAlign(LEFT, BOTTOM);
  fill(255);
  text("mouse press to reveal the sun", 15, height - 40);

  textSize(24);
  textAlign(LEFT, BOTTOM);
  fill(255);
  text("press top/bottom arrow key to play/pause music", 15, height - 10);

}

function mousePressed() {
  if (restart) {
    cloud1X = 200;
    cloud2X = 400;
    sunImage = sun1;
    cloud1MovingOffScreen = false;
    cloud2MovingOffScreen = false;
    showText = false;
    restart = false;
  } else {

    cloud1MovingOffScreen = true;

    cloud2MovingOffScreen = true;


    sunImage = sun2;


    showText = true;
    restart = true;
  }
}
