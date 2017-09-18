(function () {
    'use strict';



    angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
    .directive('foundItems', foundItemsDirective)
    .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

    function foundItemsDirective() {
        var ddo = {
            templateUrl: 'menuList.html',
            scope: {
                items: '<',
                onRemove: '&'
            }

        };

        return ddo;
    }



    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
        var menu = this;



        menu.searchText = "";

        menu.logMenuItems = function (searchText) {

            menu.found = "";

            var promise = MenuSearchService.getMatchedMenuItems(searchText);

            promise.then(function (response) {
                menu.found = response;
            })
            .catch(function (error) {
                console.log(error);
            })
        }


        menu.removeItem = function (itemIndex) {
            MenuSearchService.removeItem(itemIndex);
        };

    }


    MenuSearchService.$inject = ['$http', 'ApiBasePath'];
    function MenuSearchService($http, ApiBasePath) {
        var service = this;

        var results = [];

        service.getMatchedMenuItems = function (searchTerm) {
            return $http({
                method: "GET",
                url: (ApiBasePath + "/menu_items.json")
            }).then(function (result) {

                results = [];

                // process result and only keep items that match
                var foundItems = result.data;

                var menuItemsArray = foundItems.menu_items;

                var lowerSearchTerm = searchTerm.toLowerCase();

                if (lowerSearchTerm === "") {
                    return results;
                }

                for (var i = 0; i < menuItemsArray.length; i++) {

                    var lowerCaseDesc = menuItemsArray[i].description.toLowerCase();

                    if (lowerCaseDesc.indexOf(lowerSearchTerm) !== -1) {
                        results.push(menuItemsArray[i]);
                    }

                }

                return results;
            });
        }


        service.removeItem = function (itemIndex) {
            results.splice(itemIndex, 1);
        };

    }







}());
