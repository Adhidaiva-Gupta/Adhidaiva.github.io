var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

function Draw(){
    //CircleCode
    ctx.strokeStyle= "black";
    ctx.fillStyle= "#FF1493";
    circle(380, 250, 80);

    //Squares(Small)
    ctx.fillStyle="blue";
    rectangle(340, 210, 20, 20);
    rectangle(400, 210, 20, 20);

    //Triangle
    ctx.fillStyle="purple";
    triangle(380, 120, -95, 50, 95, 50);

    //Circle(SmallMouth)
    ctx.fillStyle="red";
    circle(380, 280, 20);
}

function circle(x,y,radius){
ctx.beginPath();
ctx.arc(x,y,radius,0,2*Math.PI);
ctx.fill();
ctx.stroke();
}

function rectangle(x,y,wdth,hght){
    ctx.beginPath();
    ctx.rect(x,y,wdth,hght);
    ctx.fill(); 
    ctx.stroke();
}

function triangle(x,y,dist2x,dist2y,dist3x,dist3y){
ctx.beginPath();
ctx.moveTo(x,y);
ctx.lineTo(x+dist2x,y+dist2y);
ctx.lineTo(x+dist3x, y + dist3y);
ctx.closePath();
ctx.fill();
ctx.stroke();
}

function Erase(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}
