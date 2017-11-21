var gl;

function tick() {
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
