document.writeln('这个是main.js文件输出内容<br/> ')

var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

function drawCircle(x, y, radius) {
  context.beginPath()
  context.fillStyle = 'black'
  context.arc(x, y, radius, 0, Math.PI * 2);
  context.fill()
}

drawCircle(100,100,50);