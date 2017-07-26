'use strict';
app.factory('StaticUiService', function ($http, toaster) {
  var csvUrl = "https://gist.githubusercontent.com/li-xinyang/040cfc2f69ee76e3508124fc11eeda33/raw";
  var mainDataFactory = {};

  var _getCsvData = function(userObject) {
    return $http.get(csvUrl).then(function(results) {
      return results;
    });  };

    mainDataFactory.getCsvData = _getCsvData;

    return mainDataFactory;
});
