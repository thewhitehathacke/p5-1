let video;
let captureButton;
let downloadButton;
let frameColor = '#3498db'; // Frame color
let frameThickness = 10; // Frame thickness
let framePadding = 20; // Padding between video and frame
let circleSize = 30; // Size of circles at corners

function setup() {
  let canvas = createCanvas(640, 480);
  canvas.parent('p5Canvas'); // Make the canvas a child of the div with id 'p5Canvas'
  
  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide();
  
  captureButton = createButton('Capture Image');
  captureButton.position(width / 2 - 50, height + 20);
  captureButton.mousePressed(captureImage);
  captureButton.center();
}

function draw() {
  background(255);
  
  // Draw the video feed
  image(video, framePadding, framePadding, width - 2 * framePadding, height - 2 * framePadding);
  
  // Draw the frame
  noFill();
  stroke(frameColor);
  strokeWeight(frameThickness);
  rect(framePadding, framePadding, width - 2 * framePadding, height - 2 * framePadding);
  
  // Draw circles at corners
  drawCircles();
}

function drawCircles() {
  fill(frameColor);
  noStroke();
  
  // Top-left corner
  ellipse(framePadding, framePadding, circleSize, circleSize);
  
  // Top-right corner
  ellipse(width - framePadding, framePadding, circleSize, circleSize);
  
  // Bottom-left corner
  ellipse(framePadding, height - framePadding, circleSize, circleSize);
  
  // Bottom-right corner
  ellipse(width - framePadding, height - framePadding, circleSize, circleSize);
}

function captureImage() {
  // Capture the current frame from the video feed
  let img = get(framePadding, framePadding, width - 2 * framePadding, height - 2 * framePadding);
  
  // Display the captured image on the canvas
  image(img, framePadding, framePadding, width - 2 * framePadding, height - 2 * framePadding);
  
  // Create a download link for the captured image
  let downloadLink = document.getElementById('downloadLink');
  img.save('my_image.png');
  downloadLink.href = img.canvas.toDataURL();
  downloadLink.style.display = 'inline-block';
}
