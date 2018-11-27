
	var _window = jQuery(window),
		_html = jQuery('body, html'),
		_body = jQuery('body'),
		_main_tabs = jQuery('.main_tabs'),
		_mobile_icon = jQuery('#_mobile_icon'),
		_tabs = jQuery('.main_tabs ul'),
		_tab = jQuery('.main_tabs ul li'),
		_tab_num = _tab.length,
		_tabs_a = jQuery('.main_tabs ul li a'),
		_logo = jQuery('.logo'),
		_search = jQuery('._search'),
		_hd_gadgets = jQuery('.hd_gadgets'),
		_search_icon = jQuery('#_search_icon'),
		_header_ground = jQuery('#header_ground'),
		_header_slider = jQuery('.header_slider'),
		_slider_imgs = jQuery('.slider_imgs'),
		_imgs = _slider_imgs.find('img'),
		_to_left = jQuery('.to_left'),
		_to_right = jQuery('.to_right'),
		_to = jQuery('.to_'),
		_to = jQuery('div[class^="to_"]'),
		_dots_nav = jQuery('.dots_nav'),
		
		aaa = '';




	//navbar_出現隱藏
	_mobile_icon.click(function(e){
		e.stopPropagation();

		_tabs.slideToggle();
		});//click


	// console.log(_header_ground[0].clientHeight);
	/* _header_ground 等比例 */
	function _plus_pad_bottom(e){

		var _this_height = e.height(),
			_tihs_width = e.width(),
			_this_scale = _this_height / _tihs_width,
			ee = 0.56 * _tihs_width - _this_height,
			ee = Math.abs(ee),

			eee = 'eee';

		e.css({'padding-bottom': ee + 'px'});

	}//_plus_pad_bottom


	/*navbar_resize_=====================================*/
	_window.resize(function() {

			var _win_width = _html.width();

			// _imgs.css({'left':_win_width + 'px'});

	/* _header_ground 等比例 */
			if(_win_width >= 400){
				_plus_pad_bottom(_header_ground);
				// _imgs.removeClass('img_150_center');
			}else//if
			{_header_ground.removeAttr('style');
			// _imgs.addClass('img_150_center');
		}//if

			if( _win_width >= 768 ){
				_tab.css({'width':_tab_width});//css
				_logo.addClass("float_left");
				_search.addClass("float_right");
			}else{
				_tab.width('100%');
				_logo.removeClass("float_left");
				_search.removeClass("float_right");
			}//if

		  // _tabs.fadeIn();


		//navbar_調整tab寬度
		var 
			_tab_width = (1 / _tab_num) * 100,
			_tab_width = _tab_width + '%',

			bbb = 'bbba';

		if( _win_width >= 768 ){
			_tab.css({'width':_tab_width});//css
		}else{
			_tab.width('100%');
		}//if


	});//resize



	window.addEventListener("load", adjustNav());

	function adjustNav(){
			console.log('window is loading; adjustNav');

			var _win_width = _html.width();

			/* _header_ground 等比例 */
			if(_win_width >= 400){
				_plus_pad_bottom(_header_ground);
			}else//if
			{_header_ground.removeAttr('style');}

			if( _win_width >= 768 ){
				_tab.css({'width':_tab_width});//css
				_logo.addClass("float_left");
				_search.addClass("float_right");
			}else{
				_tab.width('100%');
				_logo.removeClass("float_left");
				_search.removeClass("float_right");
			}//if

			//navbar_調整tab寬度
			var 
				_tab_width = (1 / _tab_num) * 100,
				_tab_width = _tab_width + '%',

				bbb = 'bbba';

			if( _win_width >= 768 ){
				_tab.css({'width':_tab_width});//css
			}else{
				_tab.width('100%');
			}//if


	}//adjustNav

	_search_icon.click(function(e){
		e.stopPropagation();

		console.log('toggle');

		_search.toggleClass('hide');
		});//click


	/*slider__===================================================*/
	/*_slider_imgs*/

		var	_imgs_length = _imgs.length,
			_idx_start = 0,
			_idx_last = _imgs_length - 1,
			_idx_last2 = _idx_last - 1,

			vvv = 'vvv';


		var _dotHTML = '';


	for(var i=0;i<_imgs_length; i++){

		_dotHTML += '<li class="dot"></li>';}


	_dots_nav.html(_dotHTML);
	jQuery('.dots_nav li').eq(0).addClass('active');

	// ====================================================




	var $dot = jQuery('.dot'),
		_to = jQuery('.to_');


	_click_tihs(_to);
	_click_tihs($dot);

	function _click_tihs(eve){

		eve.on('click', function(e){

		var 
			$this = jQuery(this),

			lll ='lll';



			$this.addClass('to_tapped');

		var removeTapped = function(){
			$this.removeClass('to_tapped');
		};//removeTapped

		setTimeout(removeTapped, 200);



		var boo =judge($this);


			trigger_slide(boo);


		});

	}


	function judge(evt){

	var 

		xxxx ='';


		if ( evt.hasClass('to_') ){
			// console.log('this are arrows!!!!!!!!!');

		var xxxx = checkArrow(evt);

			return xxxx;
		}else//if
		{
		var xxxx =	checkDot(evt);
			return xxxx;
		}//else


	}//judge



	function checkDot(e){

		var 
			// e = jQuery(this),
			e_idx = e.index(),
			_dot_first = jQuery('.dot').eq(0),
			_dot_last = jQuery('.dot').eq(_idx_last),
			_active_idx = jQuery('.dot.active').index(),

			ppp = '';

			e.addClass('active').siblings().removeClass('active');


			if( e_idx > _active_idx) {
				ppp = true;
				// console.log(ppp);
				return ppp;
			}else{
				ppp = false;
				// console.log(ppp);
				return ppp;
			}//else


	};//checkDot


	function checkArrow(e){

	var
		left_arrow_data = jQuery('.to_left').attr('name'),

		ppp = '';


		if(e.attr('name') == left_arrow_data){

			ppp = true;
			console.log(ppp);
			return ppp;
		}else{

			ppp = false;
			console.log(ppp);
			return ppp;
		}


	}//



	function trigger_slide(boo){

		var img = jQuery('.slider_imgs img'),
			img_num = img.length,
			_img_first = img.eq(0),
			_img_last = img.eq(img_num - 1),

			$this = jQuery(this),

			ppp = 'ppp';




		if (boo){

			_img_first.css({'left':'-100%'});
			_img_first.appendTo(_slider_imgs);

			var _left_in = function(){
				_img_first.css({'left':'0'});
			};

			setTimeout(_left_in, 10);

		}//if_to_tapped
		else{

			// var _left_out = function(){
				_img_last.css({'left':'-100%'});
			// };


			var moving02 = function(){
				_img_last.prependTo(_slider_imgs).css({'left':'0'});
			};


			// setTimeout(_left_out, 10);
			setTimeout(moving02, 500);

		}//else_to_tapped


	}//trigger_slide
