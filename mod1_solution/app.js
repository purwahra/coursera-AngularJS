(function() {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.userText = "";
    $scope.finalResult = "";

    $scope.checkIfTooMuch = function (){
      $scope.finalResult = splitString($scope.userText, ",");
    }

    function splitString(stringToSplit, separator) {


      if(stringToSplit == ""){
        return "Please enter data first";
      }

      var arrayOfStrings = stringToSplit.split(separator);

      var numOfItems = arrayOfStrings.length;

      if(numOfItems <= 3){
        return "Enjoy!";
      }else if(numOfItems > 3){
        return "Too Much!";
      }



    }


  }

}());
