(function (){

//best practice so we dont bleed things in global scope
'use strict';

angular.module('myFirstApp',[])
.controller('myFirstController',function($scope, $filter){
  $scope.inputName = "";
  $scope.totalValue = 0;

  $scope.calculateValue = function(){
    var funcCalculatedValue = backEndFunction($scope.inputName);
    $scope.totalValue = funcCalculatedValue;
  }

  function backEndFunction(stringa){
    var sum = 0;
    for(var x=0; x < stringa.length; x++){
      sum = sum + stringa.charCodeAt(x);
    }

    return sum;
  }


  $scope.upperNameInput = "upperName Goes here";

  $scope.convertToUpper = function(){
    var upcase = $filter('uppercase');

    $scope.upperNameInput = upcase($scope.upperNameInput);
  }


});


})();
