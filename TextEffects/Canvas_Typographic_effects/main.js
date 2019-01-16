// window.addEventListener("load", function(){
//   Canvas_anaglyph("#anaglyph", "Hello world !");
// })

function Canvas_anaglyph( selector, text ){

  var canvas = document.querySelector(selector);
  var cvs_w = canvas.width;
  var cvs_h = canvas.height;
  var center = {x: cvs_w / 2, y: cvs_h / 2};
  var ctx = canvas.getContext('2d');
  
  ctx.font = '50px serif';
  ctx.translate(center.x, center.y)
  ctx.fillStyle = "#000"
  ctx.fillText(text, -7, 0);
  ctx.fillStyle = "#f00"
  ctx.fillText(text, 0, 0);
  ctx.fillStyle = "cyan"
  ctx.fillText(text, 7, 0);

};

Canvas_anaglyph("#anaglyph", "Hello world !");

function emToPx(){
  var font = "20px snas-serif"
  var node = document.createElement("span");
  // var textnode = document.createTextNode("test texts!");

  // node.appendChild(textnode);
  node.textContent = "test texts!";

  node.style.cssText = "font: " + font + "height: 1em; display: block"

  // the value to multiply PX's by to convert to EM's
  var EM2PX = 1 / node.offsetHeight;
      console.log(node.offsetHeight);

  document.querySelector('#emToPx').appendChild(node);
  // console.log(document.querySelector('#emToPx span').offsetHeight);
}

emToPx();