var c = document.querySelector("#myCanvas");
var ctx = c.getContext("2d");
var color_gold = "185, 147, 98";
var ww, wh;
var center ={x:0, y:0};

function getWindowSize(){
  ww = $(window).outerWidth();
  wh = $(window).outerHeight();

  c.width = ww;
  c.height = wh;
  center = {x: ww/2, y: wh/2};

  ctx.restore();
  ctx.translate( center.x, center.y );

}
getWindowSize();

$(window).on("resize", getWindowSize);

var enemies = Array(10).fill({}).map(
  function(){
    return {
      r: Math.random() * 200,
      deg: Math.random() * 360,
      opacity: 0
    }
  }
);

// setInterval(DRAWING, 10);
requestAnimationFrame(DRAWING);
var time = 0;
var deg_to_pi = Math.PI/180;

function Point(r, deg){
  return {
    x: r*Math.cos(deg_to_pi*deg),
    y: 20
  };
}

function Color(op, newColor){
  if( !newColor ){
    return "rgba(" + color_gold + "," + op +")";
  }else{
    return "rgba(" + newColor + "," + op +")";
  }
}


// { CANVAS } >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  function DRAWING(){
    time += 1;
    ctx.fillStyle = "#111";
    ctx.beginPath();
    ctx.rect(-2000, -2000, 4000, 4000);
    ctx.fill();

    ctx.strokeStyle = "rgba(255, 255, 255, .2)";
    ctx.moveTo(-ww/2, 0);
    ctx.lineTo(ww/2, 0);
    ctx.moveTo(0, -wh/2);
    ctx.lineTo(0, wh/2);
    ctx.stroke();

    ctx.strokeStyle = Color(1);
    var r = 200;
    var deg = time;
    // var newpoint = Point(r, deg);
    var line_deg = time % 360;

    var line_deg_len = 100;

    var i = null;

  // [ 畫出 ]--扇形 ==============================
    for(i=0; i<line_deg_len; i++){
      // var deg = (time - i);
      var deg1 = (time - i - 1);
      var deg2 = (time - i);

      var point1 = Point(r, deg1);
      var point2 = Point(r, deg2);
      var opacity = (i/line_deg_len); // 0 ~ 1
          opacity = 1 - opacity;// 1 ~ 0

      ctx.beginPath(); // 把所有路徑清掉，重頭開始畫
      ctx.fillStyle = Color(opacity);
      ctx.moveTo(0, 0);
      ctx.lineTo(point1.x, point1.y);
      ctx.lineTo(point2.x, point2.y);
      // ctx.stroke();
      ctx.fill();
    }

  //[ 畫出 ]-- enemies ==============================
    enemies.forEach(function(obj){
      
      ctx.fillStyle = Color( obj.opacity );
      var obj_point = Point(obj.r, obj.deg);
      
      ctx.beginPath();
      ctx.arc(
        obj_point.x, 
        obj_point.y,
        4,
        0,
        2 * Math.PI
      );
      ctx.fill();

      // 畫叉叉
      ctx.strokeStyle = Color(obj.opacity)
      var x_size = 6;
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(obj_point.x - x_size, obj_point.y + x_size);// 從 enemy 的位置左上方
      ctx.lineTo(obj_point.x + x_size, obj_point.y - x_size);// 到 enemy 的位置右下方
      ctx.moveTo(obj_point.x + x_size, obj_point.y + x_size);
      ctx.lineTo(obj_point.x - x_size, obj_point.y - x_size);
      ctx.stroke();

      if( Math.abs(obj.deg - line_deg)<=1 ){
        obj.opacity = 1;
        $(".message").text("Detected: " + obj.r.toFixed(3) + "(radius), " + obj.deg.toFixed(3) + " (deg)" )
      }
      obj.opacity *= 0.99;


      // 畫圈圈
      ctx.strokeStyle = Color(obj.opacity);
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(
        obj_point.x, 
        obj_point.y,
        10 * (1/obj.opacity + 0.0001),
        0,
        2 * Math.PI
      );
      ctx.stroke();

    });

  //[ 畫出 ]-- 外圈刻度 ==============================
    ctx.strokeStyle = Color(1);
    var split = 120; // 總切割數
    var feature = 15; // 每隔 15 個的刻度較長
    var start_r = 230; // 刻度離中心半徑
    var len = 5; // 刻度長度

    for(i=0; i < split; i++){
      ctx.beginPath();
      // i/120 變成 0 ~ 1 的數字，再分配到 1~360
      var deg = (i/120) * 360;
      
      if(i % feature == 0){
        len = 10;
        ctx.lineWidth = 3;
      } else {
        len = 5;
        ctx.lineWidth = 1;
      }

      var point1 = Point(start_r, deg);
      var point2 = Point(start_r+len, deg);

      ctx.moveTo(point1.x, point1.y);
      ctx.lineTo(point2.x, point2.y);
      ctx.stroke();
    }
    
  //[ 畫出 ]-- 裝飾圓圈 ==============================
    function CondCircle(r, lineWidth, func_cond, newColor){
      ctx.lineWidth = lineWidth;
      ctx.strokeStyle = Color(1, newColor);

      ctx.beginPath();
      for(i=0; i<=360; i++){
        var point = Point(r, i);

        if( func_cond(i) ){// i%180 < 90
          ctx.lineTo(point.x, point.y);
        }else{
          ctx.moveTo(point.x, point.y);
        }//if

      }
      ctx.stroke();
    }

    CondCircle(300, 2, function(deg){
      return ( (deg + time) % 180) < 90;
    }, "138, 35, 135")
    CondCircle(100, 1, function(deg){
      return (deg % 3) < 1;
    },  "233, 64, 87")
    CondCircle(200, 1, function(deg){
      return true;
    }, "242, 113, 33")

    requestAnimationFrame(DRAWING)
  }// DRAWING >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>