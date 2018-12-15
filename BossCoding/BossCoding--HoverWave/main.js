// window.AudioContext = window.AudioContext || window.webkitAudioContext;
// var context = new AudioContext();

var blingfunc_list=[];

$(".blingtext").each(function( index, value ) {
    var canvasname="blingcanvas"+Math.random()*100000;
    var text=$(value).html();
    console.log(text);
    var texthtml="";
    var oricolor=$(value).css("color");
    for(var i=0;i<text.length;i++)
        texthtml+="<span class=text"+i+"' style='margin: 0px;padding: 0px;'>"+text[i]+"</span> ";
    //sound
    
    
    // var gainNode =context.createGain();
    // var waven=[];
    // for(var i=0;i<1000;i++)
    //       waven.push(Math.random()*0.2); 
    //     //console.log(waven);
    // var audioBuffer = context.createBuffer(1, 1000, 44100);
    // audioBuffer.getChannelData(0).set(waven); 
    // var source = context.createBufferSource();   
    // source.buffer=audioBuffer;
    // source.connect(gainNode);
    // source.loop=true;
    // source.start(0);
    // gainNode.connect(context.destination);
    function play_noise(volume){
      // gainNode.gain.value=volume;
    }
     
  
    //
    $(value).css("position","relative").css("cursor","pointer");
    $(value).html(texthtml+"<canvas id='"+canvasname+"' class='blingcanvas' style='position: absolute;width: 100%;height: 100%;left: 0px;top: 0px'> </canvas>");
    $(value).children("span").css("opacity","0");
  
    var jointcount=50;
    var waveamp=50;
    var hovering=false;
    var hovercount=1;
    var nowtextindex=0;
  
    var time_noise=35;
    var time_startfade=20;
    var time_startflash=10;
    var time_startstatic=70;
    var time_end=120;
  
    var noise_volume=0.05;
    //getcanvas
    var c = document.getElementById(canvasname);
    var ctx = c.getContext("2d");
    var wave=[];
  
    function drawwave(startid){
         var stid=startid;
        if (stid<0) stid=0;
        if (stid<=jointcount){
            ctx.clearRect(0, 0, c.width, c.height);
            ctx.beginPath();
            ctx.lineWidth="2";
            ctx.strokeStyle="#c9a063";
            ctx.moveTo(wave[stid][0],wave[stid][1]);
            for(var i=stid;i<=jointcount;i++){
              ctx.lineTo(wave[i][0],wave[i][1]);
                //console.log(wave[i][0],wave[i][1]);
            }
            ctx.stroke();
         }
    }
  
    blingfunc_list.push(function(){
      if (hovering || (hovercount>0 && hovercount<time_end)){
        hovercount++;
        // play_noise(noise_volume*(hovercount-time_end)/time_end);
        if (hovercount<time_noise){
          wave=[];
          for(var i=0;i<=jointcount;i++){
            wave.push([i*(c.width/jointcount),Math.random()*waveamp*2-waveamp+c.height/2]);
          }
          drawwave(0);
          
        }
        if (hovercount>time_startflash && hovercount<120 && hovercount%2==0){
          
          
          for(var i=0;i<=jointcount;i++){
            
            wave[i][1]=((wave[i][1]-c.height/2)*0.7+c.height/2)+Math.sin((hovercount-time_startfade)/120);
          }
          for(var i=0;i<=nowtextindex;i++){
              $(value).children("span:nth-child("+i+")").css("opacity",Math.random())
              .css("color","#c9a063");
               
          }
          drawwave((hovercount-time_startfade)<jointcount?(hovercount-time_startfade):jointcount);
          if (hovercount%parseInt(time_startfade/text.length)==0 && nowtextindex<text.length)
            nowtextindex++;
        }
        
        if (hovercount>time_startstatic && hovercount<time_end){
          
          for(var i=0;i<=nowtextindex;i++){
              $(value).children("span:nth-child("+i+")")
                .css("opacity",Math.random()*(time_end-hovercount)/20+ (hovercount-time_startstatic)/(20) )
                .css("color",oricolor);
               
          }
          drawwave((hovercount-time_startfade)<jointcount?(hovercount-time_startfade):jointcount);
          if (hovercount%3==0 && nowtextindex<text.length)
            nowtextindex++;
        }
        
      }else{
        hovercount=0;
      }
    });
  
    $(value).hover(function(){
      hovering=true;
      hovercount=1;
      nowtextindex=0;
      $(value).children("span").css("opacity","0");

    },function(){
      hovering=false;
      var c = document.getElementById(canvasname);
      var ctx = c.getContext("2d");
      ctx.clearRect(0, 0, c.width, c.height);
  
    });
    
});//$(".blingtext").each(

function repeatOften() {
  for(ind=0;ind<blingfunc_list.length;ind++){
    (blingfunc_list[ind])();
  }
  requestAnimationFrame(repeatOften);
}
requestAnimationFrame(repeatOften);


// function intervalAni(){
//   console.log('doing intervalAni !!!');
//   blingfunc_list[0]()
// }
// setInterval(intervalAni, 60);