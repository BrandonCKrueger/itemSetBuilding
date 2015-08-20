(function (angular) {
    'use strict';

    angular
        .module('itemSetApp')
        .controller('BuildController', BuildController);

    function BuildController(staticDataService) {
        var vm = this;
        
        staticDataService.getChampions().then(function(champions) {
            vm.championList = champions;
        });
        staticDataService.getItems().then(function(items) {
            vm.items = items;
        })
    }

}(window.angular));
