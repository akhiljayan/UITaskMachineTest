'use strict';
app.controller('StaticUiController', function($scope, $route, $filter, StaticUiService) {
  $scope.tablelist = [];
  $scope.default = true;
  $scope.graph = false;
  $scope.view_tab = 'tab1';
  $scope.view_tab_inside = 'explore_tab';
  $scope.color = [];

  $scope.dataval = [];

  getCsvData();


  $scope.changeTab = function(tab) {
    $scope.view_tab = tab;
    $scope.view_tab_inside = 'explore_tab';
  }

  $scope.changeInsideTab = function(tab){
    $scope.view_tab_inside = tab;
  }

  $scope.showGraph = function(tab){
    $scope.view_tab_inside = tab;
    $scope.default = false;
    $scope.graph = true;
  }

  $scope.closeChart = function(tab){
    $scope.view_tab_inside = tab;
    $scope.default = true;
    $scope.graph = false;
  }


  function getCsvData() {
        StaticUiService.getCsvData().then(function (response) {
          var csvArray = response.data.split("\n");
          for(var i=0; i<csvArray.length; i++){
            var temp = csvArray[i].split(',');
            var name = "";
            var data = "";
            for(var j=0; j<temp.length; j++){
              if(j == 0){
                name = temp[j];
              }else{
                if(j==1){
                  data = data + temp[j].trim();
                }else{
                  data = data +","+ temp[j].trim();
                }
              }
            }
            var dataJson = {'name':name, 'data':data, 'color':getRandomColor()};
            $scope.dataval.push(dataJson);
          }
          console.log($scope.dataval);
        },
        function (response) {
            console.log(response);
        });
    };

    function getRandomColor() {
        var color = '#' + Math.floor(Math.random()*16777215).toString(16);
        return color;
    };

});
