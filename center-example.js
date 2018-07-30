// create a canvas to work with
var canvas = document.createElement('canvas');
document.body.appendChild(canvas);

// style canvas
canvas.width  = 400;
canvas.height = 400;
canvas.setAttribute("style", "border: 1px solid black;");

// get 2D context
var context = canvas.getContext('2d');

// setup some basic squares to use for our example
var map = {x:10, y:10, width: 200, height: 200, color: "maroon" };
var player = {x:0, y:0, width: 25, height: 25, color: "silver" };

// TODO center code
player.x=(map.width-player.width)*0.5+map.x;
player.y=(map.height-player.height)*0.5+map.y;
// draw map
context.fillStyle = map.color;
context.fillRect (map.x,map.y,map.width,map.height);

// draw player
context.fillStyle = player.color;
context.fillRect (player.x,player.y,player.width,player.height);