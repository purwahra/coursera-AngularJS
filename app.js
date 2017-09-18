(function (){

//best practice so we dont bleed things in global scope
'use strict';

angular.module('myFirstApp',[])
.controller('myFirstController',myFirstController)
.service('menuCategoryService',menuCategoryService);

myFirstController.$inject = ['menuCategoryService'];

function myFirstController(menuCategoryService) {

  var menu = this;

  var promise = menuCategoryService.getMenuCategories();

  promise.then(function (response){
    menu.categories = response.data;
  })
  .catch(function (error){
    console.log("something went wrong!");
  })

}

menuCategoryService.$inject = ['$http'];
function menuCategoryService($http){
  var service = this;

  service.getMenuCategories = function(){
    var response = $http({
      method: "GET",
      url: ("http://davids-restaurant.herokuapp.com/categories.json")
    });

    return response;
  }
}




/*
var ShoppingList1 = ["milk","eggs","bananas","buns","choclate","coke"];

angular.module('myFirstApp',[])
.controller('myFirstController',myFirstController)
.filter('loves',LovesFilter)
.filter('truth',AllTruthFilter);

myFirstController.$inject = ['$scope','lovesFilter'];

function myFirstController($scope,lovesFilter)
{

$scope.ShoppingList1 = ShoppingList1;
$scope.searchListStr = "";

  $scope.button1_output = "he likes choclates";

  $scope.button1Click = function(){
    $scope.button1_output = lovesFilter($scope.button1_output);
  }

  $scope.userText1 = "";

  //------OLD CODE--------------

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


};





function LovesFilter(){
  return function(input){
    input = input || "";
    input = input.replace("likes","loves");
    return input;
  }
}

function AllTruthFilter(){
  return function(input,target,replace){
    input = input || "";
    input = input.replace(target,replace);
    return input;
  }
}

*/

})();
