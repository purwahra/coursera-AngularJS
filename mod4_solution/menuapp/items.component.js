(function () {
'use strict';

angular.module('MenuApp')
.component('items', {
  templateUrl: 'templates/itemslist.template.html',
  bindings: {
    items: '<'
  }
});

})();
