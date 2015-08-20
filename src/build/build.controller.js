(function (angular) {
    'use strict';

    angular
        .module('itemSetApp')
        .controller('BuildController', BuildController);

    function BuildController($q, staticDataService) {
        var vm = this;
        vm.addItemToBlock = addItemToBlock;
        vm.itemSet = {
            "title": "The name of the page",
            "type": "custom",
            "map": "any",
            "mode": "any",
            "priority": false,
            "sortrank": 0,
            "blocks": [
                {
                    "type": "A block with just boots",
                    "recMath": true,
                    "minSummonerLevel": -1,
                    "maxSummonerLevel": -1,
                    "showIfSummonerSpell": "",
                    "hideIfSummonerSpell": "",
                    "items": [
                        {
                            "id": "3725",
                            "count": 1
                        },
                        {
                            "id": "3725",
                            "count": 1
                        },
                        {
                            "id": "3725",
                            "count": 1
                        }
                    ]
                }
            ]
        };
        
        staticDataService.getChampions().then(function(champions) {
            vm.championList = champions;
        });
        staticDataService.getItems().then(function(items) {
            vm.items = items;
        });
        
        function addItemToBlock(event, dragDrop, block) {
            var deferred = $q.defer();

            if (!block.items) {
                block.items = [];
            }

            if (block.items.length < 6) {
                if (dragDrop && dragDrop.draggable && dragDrop.draggable[0] &&
                    dragDrop.draggable[0].attributes && dragDrop.draggable[0].attributes['data-item-id'] &&
                    dragDrop.draggable[0].attributes['data-item-id'].nodeValue) {
                    var itemId = dragDrop.draggable[0].attributes['data-item-id'].nodeValue;
                    block.items.push({
                        count: 1,
                        id: itemId
                    });
                }
            }
            deferred.reject();
            
            return deferred.promise;
        }
    }

}(window.angular));
