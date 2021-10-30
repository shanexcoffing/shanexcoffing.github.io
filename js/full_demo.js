var canvas = document.getElementById("canvas");
var drawing = canvas.getContext("2d");
var T = 0;

window.onload = init();

function init()
{
  window.requestAnimationFrame(animationLoop);
}

function animationLoop(timeStamp)
{
  update();
  draw();
  window.requestAnimationFrame(animationLoop);
}

function update()
{
  T += 1;
}

function draw()
{
  drawing.beginPath();
  drawing.arc(120, 120, 100, 10, 1 * Math.PI);
  drawing.stroke();
}
