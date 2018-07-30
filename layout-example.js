// create a canvas to work with
var canvas = document.createElement('canvas');
document.body.appendChild(canvas);

// style canvas
canvas.id     = "canvas";
canvas.width  = 400;
canvas.height = 400;
canvas.setAttribute("style", "border: 1px solid black;");

// get 2D context
var context = canvas.getContext('2d');

// setup some basic boxes to use for our example
var redBox = {x:0, y:0, width: 25, height: 25, color: "red" };
var blueBox = {x:0, y:0, width: 25, height: 25, color: "blue" };

// draws a box to the canvas
function drawBox(x, y, box){
    context.fillStyle = box.color;
    context.fillRect (x, y, box.width, box.height);
}

var box = redBox;
var StartX=5;
var StartY=5;
var padding=5;

// TODO align boxes
for ( var i = 0; i < 10; i ++ ){
  var x =StartX+(box.width+padding)*i;
  var y = StartY;
  drawBox(x, y, box);
}

var box2=blueBox;
for(var i=1;i<10;i++)
  {
   var x=StartX;
   var y=StartY+(box2.height+padding)*i;
    drawBox(x,y,box2);
}
