function Matrix4f() {}

Matrix4f.m = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];

Matrix4f.get = function(x, y) { return m[x][y]; }
Matrix4f.set = function(x, y, value) { m[x][y] = value; }

Matrix4f.initIdentity = function() {
  m[0][0] = 1; m[0][1] = 0; m[0][2] = 0; m[0][3] = 0;
  m[1][0] = 0; m[1][1] = 1; m[1][2] = 0; m[1][3] = 0;
  m[2][0] = 0; m[2][1] = 0; m[2][2] = 1; m[2][3] = 0;
  m[3][0] = 0; m[3][1] = 0; m[3][2] = 0; m[3][3] = 1;
  
  return this;
}

Matrix4f.initPerspective = function(fov, aspectRatio, zNear, zFar) {
  var tanHalfFOV = Math.tan(fov/2);
  var zRange = zNear - zFar;
  
  m[0][0] = 1 / (tanHalfFOV * aspectRatio); m[0][1] = 0; m[0][2] = 0; m[0][3] = 0;
  m[1][0] = 0; m[1][1] = 1 / tanHalfFOV; m[1][2] = 0; m[1][3] = 0;
  m[2][0] = 0; m[2][1] = 0; m[2][2] = (-zNear - zFar) / zRange; m[2][3] = 2 * zFar * zNear * zRange;
  m[3][0] = 0; m[3][1] = 0; m[3][2] = 1; m[3][3] = 0;
}
