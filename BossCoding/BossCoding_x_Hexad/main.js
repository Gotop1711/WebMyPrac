  
// var ES6_codes = function(){

  // 新增 canvas ============
  var canvas = document.getElementById("mycanvas")
  var ctx = canvas.getContext("2d")
  var ww = window.innerWidth,
      wh = window.innerHeight

      canvas.width = ww
      canvas.height = wh
    
  /* 三個基礎繪圖函數 ============
      init()
      update()
      draw()
  */

  let degToPi = Math.PI*2/360

  class Ship{
    constructor(args){
      // {x:3}
      let def = {
        x: 0,
        y: 0,
        r: 50,
        deg: 50*degToPi,
        
        rays: 5
      }
      Object.assign(def, args)
      Object.assign(this, def)
    }
    drawCompt(){
      ctx.save()
        ctx.translate(this.x, this.y)

      // 要再 translate 後再旋轉，坐標系才不會亂掉
      ctx.rotate(this.deg)

        ctx.fillStyle="white"
        // ctx.fillRect(100,-25/2,25,25)
        ctx.fillRect(
          this.r,
          -25/2,
          25,
          25)

        // arc(x, y, r, start Angle, end Amdgle)  
        ctx.beginPath()
        ctx.arc(0,0,this.r,0,Math.PI*2)
        ctx.strokeStyle="white"
        ctx.lineWidth = 20

        ctx.shadowBlur = 20
        ctx.shadowColor="white"

        ctx.stroke()

        for(var i=0; i< this.rays; i++){
          ctx.lineWidth = 5
          ctx.beginPath()
          ctx.moveTo(0,0)
          ctx.lineTo(0, -this.r)
          ctx.stroke()
          ctx.rotate(Math.PI*2/this.rays)
        }

        ctx.restore()
    } //drawCompt

  }//class Ship


  class Bullet{
    constructor(args){
      let def = {
        x: 0,
        y: 0,
        v: {
          x: 0,
          y: 0
        }
      }
      Object.assign(def, args)
      Object.assign(this, def)
    }
    update(){
      this.x+= this.v.x
      this.y+= this.v.y
    }
    drawCompt(){
      ctx.save()
        ctx.translate(this.x, this.y)
        ctx.fillStyle = "red"
        ctx.fillRect(0,0,10,10)
      ctx.restore()
    }
  }

  var ship, ship2

  function init(){
    // ship.deg= 0
    // ship.x= Math.random()*ww
    // ship.y= Math.random()*wh

    ship = new Ship({
      x: ww/2,
      y: wh/2,
      deg: 170*degToPi,
    })

    ship2 = new Ship({
      deg: 0,
      r: 120
    })

  }

  var time = 0;
  var bullets = []

  // 遊戲邏輯
  function update(){
    // ship.deg = mousePos.x/50
    // ship2.deg = mousePos.x/50

    if(time % 100 == 0){
      TweenMax.to(ship,1,{ // 花 １ 秒
        // deg: ship.deg + Math.PI,
        deg: mousePos.x/50,
        ease: Elastic.easeOut.config(1, 0.3)
      })
    }

    time++
    if(time % 30 == 0){
      console.log("add Bullet");
      var blt= new Bullet({
        x: ship.x + Math.cos(ship.deg)*ship.r,
        y: ship.y + Math.sin(ship.deg)*ship.r,
        v: {
          x: Math.cos(ship.deg)*2, //取得 x 方向的分量
          y: Math.sin(ship.deg)*2, //取得 y 方向的分量
        }
      })
      bullets.push(blt);
    }//if
    bullets.forEach(function(blt){
      blt.update()
    })
  }
  
  function draw(){
    // 畫出-被景色與隔線
      ctx.fillStyle="#001D2E"
      ctx.fillRect(0,0,ww,wh)

      let span = ship.r
      ctx.beginPath()
      for(var i=0; i<ww; i+=span){
        ctx.moveTo(i, 0)
        ctx.lineTo(i, wh)
      }
      for(var i=0; i<wh; i+=span){
        ctx.moveTo(0, i)
        ctx.lineTo(ww, i)
      }
      ctx.strokeStyle="rgba(255,255,255,0.2)"
      ctx.stroke()

      ctx.save()
        ship.drawCompt()
        ship2.drawCompt()
      ctx.restore()

      bullets.forEach(function(blt){
        blt.drawCompt()
      })

    // 裡再預定更下一次的繪製
      requestAnimationFrame(draw)
  }

  init()

  let fps = 60
  setInterval(update, 1000/fps)

// 預定下一次的繪製
// draw() 裡再預定更下一次的繪製
// requestAnimationFrame 會依照瀏覽器速度去改變繪製平率，最快 120 times/sec
  requestAnimationFrame(draw)


// 滑鼠事件 ＝＝＝＝＝＝＝＝＝＝＝＝

  var mousePos = {
    x: 0,
    y: 0
  }

  canvas.addEventListener("mousemove", function(evt){
    // console.log(evt.x, evt.y)
    mousePos.x = evt.x
    mousePos.y = evt.y
  });

  

// };//ES6_codes
// ES6_codes();
// var output = Babel.transform(ES6_codes, { presets: ['es2015'] }).code;
// console.log( typeof(output) );