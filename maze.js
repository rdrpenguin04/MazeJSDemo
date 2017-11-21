var gl;
var projection;
var sensitivity = 0.005;
var movAmount = 1.0/15;

var keysDown = [];

function tick() {
  if(!loading) {
    var centerX = 360;
    var centerY = 240;
    if()
  }
  
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
}

function main() {
  gl = WebGLUtils.setupWebGL(document.getElementById("mazeCanvas"));
  gl.enable(gl.DEPTH_TEST);
  gl.clearColor(0,0,0,1);
  gl.frontFace(gl.CW);
  gl.cullFace(gl.BACK);
  gl.enable(gl.CULL_FACE);
  gl.depthFunc(gl.LESS);
  gl.depthMask(true);
  gl.disable(gl.BLEND);
  
  document.body.onkeydown = function(event) {
    keysDown[event.keyCode] = 1;
  }
  
  document.body.onkeyup = function(event) {
    keysDown[event.keyCode] = 0;
  }
  
  projection = new Matrix4f(1.221730476393, 1.5, 0.0001, 1000);
  
  window.requestAnimationFrame = window.requestAnimationFrame
    || window.mozRequestAnimationFrame
    || window.webkitRequestAnimationFrame
    || window.msRequestAnimationFrame
    || function(f){return setTimeout(f, 1000/60)} // simulate calling code 60 
 
  window.cancelAnimationFrame = window.cancelAnimationFrame
    || window.mozCancelAnimationFrame
    || function(requestID){clearTimeout(requestID)} //fall back
  
  requestAnimationFrame(tick);
}
