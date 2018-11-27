$(function(){
    var img_width;sushi_position = 0;
    function sushi_move(){
        if (img_width){
            sushi_position += 1;
            if (sushi_position >= img_width){
                sushi_position = 0;
            }
            $(".sushi").eq(0).scrollLeft(sushi_position);
        }else{
            img_width = $(".sushi ul li").eq(0).find('img').width();
        }
    }
    timer = setInterval(sushi_move,50);

    $("img").error(function(){
        $(this).unbind("error").attr("src", base_url + "/images/icon_280280.jpg");
    });
});
