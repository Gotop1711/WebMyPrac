$(function () {


    // 置頂
    var $btn_top = $('.btn-top_js');
    var $body = $('body,html');

    $btn_top.click(function () {
        $body.animate({
            scrollTop: 0
        }, 600)
    })


    // 送出表單
    var $btnSend = $('.btn-send_js');
    var _sendBox = $('.send-box_js');
    var $btnClose = $('.btn-close_js');

    $btnSend.on('click', function () {
        _sendBox.addClass('active')
    })
    $btnClose.on('click', function () {
        _sendBox.removeClass('active');
    })


    // 翻牌
    var $click_card = $('.click-card_js');
    var $answer_wrong = $('.answer-wrong_js');
    var $answer_box = $('.answer-box_js');

    $click_card.on('click', function () {
        var $this = $(this).parent().index();
        $(this).addClass('active');
        $answer_box.addClass('active').find('.answer-option').eq($this).addClass('active');
    })

    $answer_wrong.on('click', function () {
        $click_card.removeClass('active')
        $answer_box.removeClass('active').find('.answer-option').removeClass('active');
    })
})