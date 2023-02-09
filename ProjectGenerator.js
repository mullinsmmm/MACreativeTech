//P5.JS sketch 

https://editor.p5js.org/Skweeny/sketches/QM89oGvGD

//Inspired by Tim Holmans Generative Art Speedrun

//https://www.youtube.com/watch?v=4Se0_w0ISYk

//TOOLKIT PROJECT GENERATOR, TAKES ONE TECHNIQUE OF CODING, COMBINED WITH AN ELEMENT & AFFECTED BY A PROCESS

function setup() {
  createCanvas(500, 400);  
}

   function mousePressed() {
  redraw(1);
}

function draw() {
  background(255);
  fill(0);
  textSize(25);
  text("Definitive Practice Project Generator", 40, 100);
  
  
  textSize(15);
  text("Create a project that uses an Input:", 50, 200);
  //text("as an input,", 350, 200);
  text("that draws on a Process:", 50, 250);
  //text("as a process,", 350, 250);
  text("and that creates an Output:", 50, 300);
  
  fill(255,0,0);
  textSize(15);
  text("(CLICK FOR NEW PROJECT)", 140, 145);
  
  var Input = ["Geodata - GPS", "Music", "Pure Data", "Algorithm", "Hardware"];
  text(random(Input),320,200);  
 
  var Process = ["Foundations", "Building Blocks", "Backend", "Frontend"];
  text(random(Process),320,250);  
   
  var Output = ["Audio", "MIDI", "Text", "Physical", "Screen", "Graphics", "Animation"]; 
  text(random(Output),320,300);  

  
  noLoop();
}

