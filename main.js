let video;
let captureButton;
let downloadButton;
let frameColor = '#3498db'; // Frame color
let frameThickness = 10; // Frame thickness

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
  image(video, 0, 0, width, height);
  
  // Draw the frame
  stroke(frameColor);
  strokeWeight(frameThickness);
  noFill();
  rect(frameThickness / 2, frameThickness / 2, width - frameThickness, height - frameThickness);
}

function captureImage() {
  // Capture the current frame from the video feed
  let img = get(0, 0, width, height);
  
  // Display the captured image on the canvas
  image(img, 0, 0, width, height);
  
  // Create a download link for the captured image
  let downloadLink = document.getElementById('downloadLink');
  img.save('my_image.png');
  downloadLink.href = img.canvas.toDataURL();
  downloadLink.style.display = 'inline-block';
}
