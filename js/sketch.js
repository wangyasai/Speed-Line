var shadow;
var theata = 0;
var myCanvas;
var img;
var r;

function setup() {
    myCanvas = createCanvas(windowWidth, windowHeight);
    background(255);
    if(width > height){
        r = width;
    }else{
        r = height;
    }
}


function p5LoadImage(dataURL){
    img = loadImage(dataURL);
}

function draw() {
    speedline();

}


function speedline(){

    frameRate(0.3);
 
     clear();


    

    for(var i =0;i<TWO_PI;i+=TWO_PI/options.Counts){
        push();
    translate(width/2+options.CenterX,height/2+options.CenterY);
    if(options.Line == 'straight'){
     beginShape();
     rotate(i);
     fill(options.Color);
     noStroke();
     vertex(-random(options.Width),r);
     vertex(0,r/2-random(options.Length));
     vertex(random(options.Width),r);
     endShape(CLOSE);

 }else{
     beginShape();

     var offset = random(30);
     var n = 10;

     var x1 = 0;
     var y1 = r;

     var x4 = n*options.Width;//top
     var y4 = r/2-random(options.Length);//top

     var x7 = 10+random(options.Width);
     var y7 = r;

     var x2 = 0;
     var y2 = y1-options.Length/4;

     var x3 = x4/2;
     var y3 = y1-options.Length/4*3;

     var x5 = x4/4*3;
     var y5 = y1-options.Length/4*3;


     var x6 = x4/2;
     var y6 = y1-options.Length/4;


     rotate(i);


     stroke(options.Color);
     noStroke();
     vertex(x1,y1);
     curveVertex(x4,y4);
     curveVertex(x7,y7);
     // bezierVertex(x2,y2, x3,y3,x4,y4);
     // bezierVertex(x5,y5, x6,y6,x7,y7);
     endShape();

 }
 pop();
 // ellipse(100,100,100,100);

}
}


