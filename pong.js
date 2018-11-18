const canvas = document.getElementById("pong");
var context = canvas.getContext("2d");


context.fillStyle = "black";
context.fillRect(100, 200, 50, 75);
context.fillStyle="red";
context.beginPath();
context.arc(300, 350, 100, 0, Math.PI*2, false);
context.closePath();
context.fill();

function drawRect(x, y, w, h, color) { //this is the first of three draw functions
    context.fillStyle = color;
    context.fillRect(x, y, w, h);
}

function drawCircle(x, y, r, color) { //this is the 2nd of three draw functions
    context.fillStyle = color;
    context.beginPath();
    context.arc(x, y, r, 0, Math.PI*2, false);
    context.closePath();
    context.fill();
}

function drawText(text, x, y, color) { //this is the 3rd of three draw functions
    context.fillStyle = color;
    context.font = "75px fantasy";
    context.fillText(text, x, y);
}

let rectX = 0;

function render(){
    drawRect(0, 0, 600, 400, "black");
    drawRect(rectX, 100, 100, 500, "red");
    rectX = rectX + 100;
}

setInterval(render, 1000);

const user = {
    x : 0,
    y : canvas.height/2 - 100/2,
    width : 10,
    height : 100,
    color : "WHITE",
    score : 0
}

const com = {
    x : canvas.width - 10,
    y : canvas.height/2 - 100/2,
    width : 10,
    height : 100,
    color : "WHITE",
    score : 0,
}

const net = {
    x : canvas.width/2 - 2/2,
    y : 0,
    width : 2,
    height: 10,
    color : "WHITE",
}

const ball = {
    x : canvas.width/2,
    y : canvas.height/2,
    radius : 10,
    color: "WHITE"
}

function drawNet() {
    for(let i = 0; i < canvas.height; i+=15) {
        drawRect(net.x, net.y + i, net.width, net.height, net.color);
    }
}

drawCircle(ball.x, ball.y, ball.r, ball.color);
drawText(user.score, canvas.width/4, canvas.height/5, "WHITE");
drawText(com.score, 3*canvas.width/4, canvas.height/5, "WHITE");

function render() {
  drawRect(0, 0, canvas.width, canvas.height, "BLACK");
  drawText(user.score, canvas.width/4, canvas.height/5, "WHITE");
  drawText(com.score, 3*canvas.width/4, canvas.height/5, "WHITE");
  drawNet();
  drawRect(user.x, user.y, user.width, user.height, user.color);
  drawRect(com.x, com.y, com.width, com.height, com.color);
  drawCircle(ball.x, ball.y, ball.radius, ball.color);
}

function game() {
    render();
}

const framePerSecond = 50;

setInterval(game, 1000/framePerSecond); //call game(); 50 times every 1 second
