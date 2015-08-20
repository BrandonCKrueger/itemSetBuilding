(function (angular) {
    'use strict';

    angular
        .module('itemSetApp')
        .controller('ChampionsController', ChampionsController);

    function ChampionsController(staticDataService) {
        var vm = this;
        
        staticDataService.getChampions().then(function(champions) {
            vm.championList = champions;
        });
    }

}(window.angular));
