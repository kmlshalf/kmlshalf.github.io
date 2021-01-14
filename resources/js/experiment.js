function setup() {
  canvasDiv = document.getElementById("workarea");
  var cnvs = createCanvas(900, 550);
  cnvs.parent("workarea");
  colorchange = second() + 2;
  fill(50);
}

function windowResized() {
  resizeCanvas(900, 550);
}

function draw() {
  blendMode(OVERLAY);
  rect(mouseX, mouseY,100, 100);
  // noStroke();
  console.log(second());
  if (second() == colorchange) {
    colorchange = second() + 2;
    r1= random(255);
    r2 = random(255);
    r3= random(255);
    cfill = color(r1, r2, r3);
    cstroke = color(r1+20, r2+20, r3+20)
    fill(cfill);
    stroke(cstroke);
  }
  
  if (second() == 58) {
		colorchange = 0;
	}
}