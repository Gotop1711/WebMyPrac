//create an imgCont string variable which will hold all the link location, title, author link, and author name into a text string
                            var imgCont = '<div class="image-container" style="background: url(' + photoURL + ');"><div class="image-info"><p class="top"><a class="title" href="http://www.flickr.com/photos/' + data.photo.owner.nsid + '/' + photoID + '">' + data.photo.title._content + '</a> <span class="author">by <a href="http://flickr.com/photos/' + data.photo.owner.nsid + '">' + data.photo.owner.username + '</a></span></p><div class="bottom"><p><span class="infoTitle">Comments:</span> ' + data.photo.comments._content + '</p>';
                            
                            //if there are tags associated with the image
                            if (typeof(tags) != 'undefined') {
                            
                                //combine the tags with an html snippet and add them to the end of the 'imgCont' variable
                                imgCont += '<p><span class="infoTitle">Tags:</span> ' + tags + '</p>';
                            }
                            
                            //if the image has geo location information associate with it
                            if(typeof(pLocation) != 'undefined'){
                            
                                //combine the geo location data into an html snippet and at that to the end fo the 'imgCont' variable
                                imgCont += '<p><span class="infoTitle">Location:</span> ' + pLocation + '</p>';
                            }
                            
                            //add the description & html snippet to the end of the 'imgCont' variable
                            imgCont += '<p><span class="infoTitle">Decription:</span> ' + data.photo.description._content + '</p></div></div>';
                            
                            //append the 'imgCont' variable to the document
                            $(imgCont).appendTo('#image-container');
                            
                            //delete the pLocation global variable so that it does not repeat
                            delete pLocation;
                        });
                        
                  });
                });