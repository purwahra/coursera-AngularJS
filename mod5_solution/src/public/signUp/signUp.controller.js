(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService'];

function SignUpController(MenuService) {
  var $ctrl = this;



  $ctrl.submit = function () {

    console.log("dish: "+ $ctrl.user.dish);

    MenuService.getMenuItems2($ctrl.user.dish).then(function(menuData){
        $ctrl.user.menuData = menuData;

        MenuService.addUserData($ctrl.user);

        $ctrl.info = "information has been saved!";
    }).catch(function (err) {
    // handle errors here if needed
    $ctrl.info = "No such menu number exists";
  });


  };



}


})();
