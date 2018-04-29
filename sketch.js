
// A HTML range slider
var slider;
var p = 0; //count of points
var numOfpoints = 5; //how many points we want

function setup() {
  createCanvas(600, 600);
  // hue, saturation, and brightness
  colorMode(HSB, 255);
  // slider has a range between 0 and 255 with a starting value of 127
  slider = createSlider(0, 255, 127);
  slider.position (450, 570)
}

function draw() {
  background(25);
  strokeWeight(3);

  //text
  textSize(15);
  textAlign(RIGHT);
  textFont("Helvetica");
  noStroke()
  fill(slider.value(), 255, 255, 127); //text match slider color
  text("Color Slider",530, 565);

  // Set the hue according to the slider
  stroke(slider.value(), 255, 255);
  fill(slider.value(), 255, 255, 127);
  if (mouseIsPressed) { //changes the shape if mouse is pressed
    rect(150, 150, 300, 300)
  } else {
    ellipse(300, 300, 300, 300);
  }

  
  //sparkly sky (points are redrawn randomly on the canvas everytime we go through the draw function
  stroke(slider.value(), 255, 255);
  //loop for 5 points 
  for (p = 0; p < numOfpoints; p ++){
    point(random(0,width),random(0,height));
  }
}