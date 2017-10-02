(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;

  service.globalUserData = null;

  service.addUserData = function(userData){
    service.globalUserData = userData;
    console.log(service.globalUserData);
  }


  service.getUserData = function(){
    return service.globalUserData;
  }

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getData = function () {
    return "DATA STRING";
  };

  service.getMenuItems2 = function (category) {
    return $http.get(ApiPath + '/menu_items/'+category+'.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };
  

}



})();
