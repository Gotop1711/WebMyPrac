function(data){
				
//loop through the results with the following function
$.each(data.photoset.photo, function(i,item){

    //build the url of the photo in order to link to it
    var photoURL = 'http://farm' + item.farm + '.static.flickr.com/' + item.server + '/' + item.id + '_' + item.secret + '_m.jpg'

    //turn the photo id into a variable
    var photoID = item.id;

    //use another ajax request to get the geo location data for the image
    $.getJSON('http://api.flickr.com/services/rest/?&amp;method=flickr.photos.geo.getLocation&amp;api_key=' + apiKey + '&amp;photo_id=' + photoID + '&amp;format=json&amp;jsoncallback=?',
    function(data){

        //if the image has a location, build an html snippet containing the data
        if(data.stat != 'fail') {
            pLocation = '<a href="http://www.flickr.com/map?fLat=' + data.photo.location.latitude + '&amp;fLon=' + data.photo.location.longitude + '&amp;zl=1" target="_blank">' + data.photo.location.locality._content + ', ' + data.photo.location.region._content + ' (Click for Map)</a>';
        }
        
    });
    
}