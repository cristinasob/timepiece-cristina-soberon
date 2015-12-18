var noiseScale=0.02;
var a = 100;
var diameter;


function setup() {
  // background(255);
	createCanvas(windowWidth, windowHeight);
  diameter = height-200;
}

function draw() {
	console.log('Draw loop');

	background(0);
	for (var x=0; x <width; x++){
		var noiseVal = noise((mouseX+x)*noiseScale, mouseY*noiseScale);
		console.log(noiseVal);
	strokeWeight(2);
  noFill();
	stroke(noiseVal*255);
	//mouseY has to be changed to the amplitude of the music
	line(x,mouseY+noiseVal*80,x,height);
}

  fill(0);
  // var d1 = 20 + (sin(second()) * diameter/2);
	var d1 = millis() / 20;
  var d2 = minute() * 5;
	var d3 = hour() * 20;

  // var d3 = 20 + (sin(angle + PI) * diameter/2) + diameter/2;

  ellipse(700, height/2, d1, d1); // its the millis
	fill("red");
	ellipse(width/6, height/4, d2, d2);//its the minutes
	fill("blue");
	ellipse(200, height/2, d3,d3);//its the hour

	var song, analyzer;

function preload() {
  song = loadSound('assets/Bon_Iver-_Calgary.mp3');
}

function setup() {
  createCanvas(710, 200);
  song.loop();

  analyzer = new p5.Amplitude();

  analyzer.setInput(song);
}

function draw() {
  background(255);

  // Get the average (root mean square) amplitude
  var rms = analyzer.getLevel();
  fill(127);
  stroke(0);

  // Draw an ellipse with size based on volume
  ellipse(width/2, height/2, 10+rms*200, 10+rms*200);
}




}
