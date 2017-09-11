(function() {
  'use strict';



  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {

    var toBuy = this;

    toBuy.itemsToBuy = ShoppingListCheckOffService.getItemsToBuy();

    toBuy.addBoughtItems = function(itemIndex){
      ShoppingListCheckOffService.addToBoughtItem(itemIndex);
    }

  }


  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var AlreadyBought = this;

    AlreadyBought.itemsAlreadyBought = ShoppingListCheckOffService.getBoughtItems();


  }


  function ShoppingListCheckOffService() {
    var service = this;

    // List of shopping items
    var itemsToBuy = [{
      name: "Milk",
      quantity: "2"
    },
    {
      name: "Donuts",
      quantity: "200"
    },
    {
      name: "Cookies",
      quantity: "300"
    },
    {
      name: "Chocolate",
      quantity: "5"
    },
    {
      name: "Pepto Bismol",
      quantity: "2"
    },
    {
      name: "Pepsi",
      quantity: "6"
    }];

    var boughtItems = [];

    service.getItemsToBuy = function () {
      return itemsToBuy;
    };

    service.getBoughtItems = function () {
      return boughtItems;
    };

    service.addToBoughtItem = function (itemIndex) {
      var item = {
        name: itemsToBuy[itemIndex].name,
        quantity: itemsToBuy[itemIndex].quantity
      };
      boughtItems.push(item);

      itemsToBuy.splice(itemIndex,1);
    };
  }




}());
