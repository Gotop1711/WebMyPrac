(function(document, window) {
   'use strict';

   // var apiKey = 'YOUR-API-KEY-HERE';
   // var apiURL = 'https://api.flickr.com/services/rest/';

   var apiKey = 'ca21b0faf12454de968d68a74d5005c5';
   var apiURL = 'https://api.flickr.com/services/rest/?method=flickr.people.findByUsername&api_key=6f9c7fa794ea65d6ba6f1c6d0a79a329&format=json&nojsoncallback=1&auth_token=72157686045808012-862f39c87e160899&api_sig=5a3859d1e026fdc3d17e7e1c81e61b55';


   function searchText(parameters) {
      var requestParameters = Utility.extend(parameters, {
         method: 'flickr.photos.search',
         api_key: apiKey,
         format: 'json'
      });

      var script = document.createElement('script');
      script.src = Utility.buildUrl(apiURL, requestParameters);
      document.head.appendChild(script);
      document.head.removeChild(script);
   }

   function buildThumbnailUrl(photo) {
      return 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server +
      '/' + photo.id + '_' + photo.secret + '_q.jpg';
   }

   function buildPhotoUrl(photo) {
      return 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server +
             '/' + photo.id + '_' + photo.secret + '.jpg';
   }

   function buildPhotoLargeUrl(photo) {
      return 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server +
      '/' + photo.id + '_' + photo.secret + '_b.jpg';
   }

   window.Flickr = Utility.extend(window.Flickr || {}, {
      buildThumbnailUrl: buildThumbnailUrl,
      buildPhotoUrl: buildPhotoUrl,
      buildPhotoLargeUrl: buildPhotoLargeUrl,
      searchText: searchText
   });
})(document, window);