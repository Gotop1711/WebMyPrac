	console.log('this is my test!!');

	// var _url = 'https://api.flickr.com/services/feeds/photos_public.gne?id=12333282@N07&format=json';
	// var xhr = new XMLHttpRequest();
	// xhr.open('get', _url_2, true);
	// // xhr.setRequestHeader('Content-type', 'application/json');

	// // var data = JSON.stringify();
	// xhr.send();
	// xhr.onload = function(){
	// 	console.log(xhr);
	// 	// var callBackData = JSON.parse(xhr.responseText);
	// 	// console.log(callBackData);

	// }//onload


	// _______________________________________________________________

	// function jsonFlickrFeed(data){
	// 	console.log(data);

	// $(function(){

	// 	var _imgs = data.items;
	// 	var _the_ul = $('.big ul');
	// 	var _imgs_html = '';

		// console.log(_imgs);

		// for(var i=0; i<data.items.length; i++){
		// // (function(m){
		// 	_imgs_html += '<li><img src="' + data.items[i].media.m + '" ' + '></li>';
		// // }(i))
		// }//for

	// 	_the_ul.html(_imgs_html);


	// });//ready

	// }//jsonFlickrFeed

	// _______________________________________________________________

	// function jsonFlickrApi(rsp){
	// 	console.log(rsp);
	// }//jsonFlickrApi

	// _______________________________________________________________


		//assign your api key equal to a variable
	var apiKey = 'ca21b0faf12454de968d68a74d5005c5';
	var userID = '12333282@N07';
	var _url_2 = 'https://api.flickr.com/services/rest/?\&method=flickr.people.getPublicPhotos\&api_key=' + apiKey + '\&user_id='+ userID +'\&format=json\&jsoncallback=?';

	console.log(_url_2);

	//the initial json request to flickr
	//to get your latest public photos, use this request: http://api.flickr.com/services/rest/?\&method=flickr.people.getPublicPhotos&amp;api_key=' + apiKey + '&amp;user_id=12333282@N07&amp;per_page=15&amp;page=2&amp;format=json&amp;jsoncallback=?
	// $.getJSON('http://api.flickr.com/services/rest/?&amp;method=flickr.photosets.getPhotos&amp;api_key=' + apiKey + '&amp;photoset_id=&amp;format=json&amp;jsoncallback=?', receiving);

	//id=12333282@N07
	//photoset_id=2157687820672983

	function receiving(data){
		// console.log(data);
	}//receiving

	var jqxhr = $.getJSON(_url_2, receiving)
  .done(function(data) {
    console.log( "second success" );
    console.log(data);

	$(function(){

		var _imgs = data.photos.photo;
		var _the_ul = $('.big ul');
		var _imgs_html = '';

		console.log(_imgs);

		for(var i=0; i<_imgs.length; i++){
			var farmId = _imgs[i].farm;
			var serverId = _imgs[i].server;
			var ownId = _imgs[i].owner;
			var oSecret = _imgs[i].secret;

		// (function(m){
			// _imgs_html += 'https://farm'+farmId+'.staticflickr.com/'+serverId+'/' +ownId+'_'+oSecret+'_o.(jpg|gif|png)';
			_imgs_html += '<li><img src="https://farm'+farmId+'.staticflickr.com/'+serverId+'/' +ownId+'_'+oSecret+'.jpg'+ '"></li>';
		// }(i))
		}//for

		// console.log(_imgs_html);
		_the_ul.html(_imgs_html);

	});//ready
  })
  .fail(function() {
    console.log( "error" );
  })
  .always(function() {
    console.log( "complete" );
  });
 
// Perform other work here ...
 
// Set another completion function for the request above
// jqxhr.complete(function() {
//   console.log( "second complete" );
// });