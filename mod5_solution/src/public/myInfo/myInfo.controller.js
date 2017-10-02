(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['MenuService','ApiPath'];



function MyInfoController(MenuService,ApiPath) {
  var $ctrl = this;

  $ctrl.basePath = ApiPath;

  $ctrl.userInfo = MenuService.getUserData();
  console.log($ctrl.userInfo);

}


})();
