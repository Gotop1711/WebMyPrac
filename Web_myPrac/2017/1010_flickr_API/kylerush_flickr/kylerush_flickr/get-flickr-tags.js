$.getJSON('http://api.flickr.com/services/rest/?&amp;method=flickr.photos.getInfo&amp;api_key=' + apiKey + '&amp;photo_id=' + photoID + '&amp;format=json&amp;jsoncallback=?',
    function(data){

        //if the image has tags
        if(data.photo.tags.tag != '') {

        //create an empty array to contain all the tags
        var tagsArr = new Array();

        //for each tag, run this function
        $.each(data.photo.tags.tag, function(j, item){

            //push each tag into the empty 'tagsArr' created above
            tagsArr.push('<a href="http://www.flickr.com/photos/tags/' + item._content + '">' + item.raw + '</a>');

            });

            //turn the tags array into a string variable
            var tags = tagsArr.join(', ');
        }