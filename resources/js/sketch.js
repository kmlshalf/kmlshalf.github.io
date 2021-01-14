
var s = function(sketch) {
  //original code from https://p5js.org/examples/hello-p5-drawing.html

  // All the paths
  let paths = [];
  // Are we painting?
  let painting = false;
  // How long until the next circle
  let next = 0;
  // Where are we now and where were we?
  let current;
  let previous;

  sketch.setup = function() {
    var cnvs = sketch.createCanvas(sketch.windowWidth, 560);
    cnvs.parent("sketch-holder");
    current = sketch.createVector(0,0);
    previous = sketch.createVector(0,0);
  };

  sketch.draw = function() {
    painting=true;
    paths.push(new Path());
    sketch.background(255);
    
    // If it's time for a new point
    if (sketch.millis() > next && painting) {

      // Grab mouse position      
      current.x = sketch.mouseX;
      current.y = sketch.mouseY;

      // New particle's force is based on mouse movement
      let force = p5.Vector.sub(current, previous);
      force.mult(0.05);

      // Add new particle
      paths[paths.length - 1].add(current, force);
      
      // Schedule next circle
      next = sketch.millis() + sketch.random(100);

      // Store mouse values
      previous.x = current.x;
      previous.y = current.y;
    }

    // Draw all paths
    for( let i = 0; i < paths.length; i++) {
      paths[i].update();
      paths[i].display();
    }
  }

  sketch.windowResized = () =>{
    sketch.resizeCanvas(sketch.windowWidth, sketch.windowHeight);
  }

  // Start it up
  // function mousePressed() {
  //   next = 0;
  //   painting = true;
  //   previous.x = mouseX;
  //   previous.y = mouseY;
  //   paths.push(new Path());
  // }

  // Stop
  // function mouseReleased() {
  //   painting = false;
  // }

  // A Path is a list of particles
  class Path {
    constructor() {
      this.particles = [];
      this.hue = sketch.random(100);
    }

    add(position, force) {
      // Add a new particle with a position, force, and hue
      this.particles.push(new Particle(position, force, this.hue));
    }
    
    // Display plath
    update() {  
      for (let i = 0; i < this.particles.length; i++) {
        this.particles[i].update();
      }
    }  
    
    // Display plath
    display() {    
      // Loop through backwards
      for (let i = this.particles.length - 1; i >= 0; i--) {
        // If we shold remove it
        if (this.particles[i].lifespan <= 0) {
          this.particles.splice(i, 1);
        // Otherwise, display it
        } else {
          this.particles[i].display(this.particles[i+1]);
        }
      }
    
    }  
  }

  // Particles along the path
  class Particle {
    constructor(position, force, hue) {
      this.position = sketch.createVector(position.x, position.y);
      this.velocity = sketch.createVector(force.x, force.y);
      this.drag = 0.95;
      this.lifespan = 255;
    }

    update() {
      // Move it
      this.position.add(this.velocity);
      // Slow it down
      this.velocity.mult(this.drag);
      // Fade it out
      this.lifespan--;
    }

    // Draw particle and connect it with a line
    // Draw a line to another
    display(other) {
      sketch.noStroke();
      sketch.fill(255, 223, 111);    
      sketch.ellipse(this.position.x,this.position.y, 100, 100);    
      // If we need to draw a line
      if (other) {
        sketch.line(this.position.x, this.position.y, other.position.x, other.position.y);
      }
    }
  }
}

const p = (sketch) => {
  sketch.setup = function() {
    var cnvs = sketch.createCanvas(900, 550);
    cnvs.parent("workarea");
    colorchange = sketch.second() + 2;
    sketch.fill(50);
}

sketch.windowResized = function() {
  sketch.resizeCanvas(900, 550);
}

sketch.draw = function() {
  sketch.blendMode(sketch.OVERLAY);
  sketch.rect(sketch.mouseX, sketch.mouseY,100, 100);
  if (sketch.second() == colorchange) {
    colorchange = sketch.second() + 2;
    r1= sketch.random(255);
    r2 = sketch.random(255);
    r3= sketch.random(255);
    cfill = sketch.color(r1, r2, r3);
    cstroke = sketch.color(r1+20, r2+20, r3+20)
    sketch.fill(cfill);
    sketch.stroke(cstroke);
  }
  
  if (sketch.second() == 58) {
    colorchange = 0;
  }
}
}

new p5(s);
new p5(p)
