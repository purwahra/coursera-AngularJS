(function () {
'use strict';

angular.module('MenuApp')
.component('categories', {
  templateUrl: 'templates/categorieslist.template.html',
  bindings: {
    items: '<'
  }
});

})();
