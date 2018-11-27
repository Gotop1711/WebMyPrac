// var overlayGrid = document.createElement('DIV');
//     overlayGrid.id = 'overlayGrid';

// console.log(overlayGrid);

// // Object.assign(yourelement.style,{fontsize:"12px",left:"200px",top:"100px"});

// const setStylesOnElement = function(element, styles){
//   Object.assign(element.style, styles);
// };

// // var some_fancy_gradient = 'linear-gradient(red, blue)';
// // var some_fancy_image = 'your url'
// // var bg_config = 'url('+some_fancy_image+') center center / cover no-repeat,'+some_fancy_gradient+' no-repeat';

// // var some_fancy_gradient = " linear-gradient(white 1px, transparent 0), linear-gradient(90deg, white 1px, transparent 0)";
// // var bg_config = 'center center / cover no-repeat,'+ some_fancy_gradient +' no-repeat';

// setStylesOnElement(overlayGrid, {
//   position: "absolute",
//   top: "0",
//   left: "0",
//   width: "100%",
//   maxWidth: "960px",
//   height: "100%",
//   // background: bg_config,
//   // "background-color": "rgb(85, 136, 170)"
// });

$(document).ready(function(){

  // document.querySelector('.wrapper-outter').prepend(overlayGrid);


  var no = 0;
  var items = $('.item-content');


  items.each(function(idx, val){

    var this_class = 'item' + (idx + 1);
    $(this).addClass(this_class);

    
  });

  // .on('mouseover', function(event){
  //   console.log('mouseover');
  //   console.log(event.currentTarget);

  //   $(event.currentTarget).addClass('origin');

  // })
  // .on('mouseout', function(event){
  //   console.log('mouseover');
  //   console.log(event.currentTarget);

  //   $(event.currentTarget).removeClass('origin');
  // });


});