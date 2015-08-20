(function (angular) {
    'use strict';

    angular
        .module('itemSetApp')
        .controller('BuildController', BuildController);

    function BuildController($q, staticDataService) {
        var vm = this;
        vm.currentBlock = null;
        vm.summonerLevelRange = summonerLevelRange;
        vm.addItemToBlock = addItemToBlock;
        vm.updateCount = updateCount;
        vm.addBlock = addBlock;
        vm.modifyBuildDetails = modifyBuildDetails;
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
        
        function summonerLevelRange(block) {
            var output = '';
            if (block.minSummonerLevel === -1 && block.maxSummonerLevel === -1) {
                output = '1 - 30';
            } else if (block.minSummonerLevel === -1) {
                output = '1 - ' + block.maxSummonerLevel;
            } else if (block.maxSummonerLevel === -1) {
                output = block.minSummonerLevel + ' - 30';
            } else {
                output = block.minSummonerLevel + ' - ' + block.maxSummonerLevel;
            }
            return output;
        }
        
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
        
        function updateCount(item, increment) {
            if (item && item.count + increment >= 1 && item.count + increment <= 999 ) {
                item.count += increment;
            }
        }
        
        function addBlock() {
            if (vm.itemSet && !vm.itemSet.blocks) {
                vm.itemSet.blocks = [];
            }

            vm.itemSet.blocks.push({
                "type": "",
                "recMath": false,
                "minSummonerLevel": -1,
                "maxSummonerLevel": -1,
                "showIfSummonerSpell": "",
                "hideIfSummonerSpell": "",
                "items": []
            });
        }
        
        function modifyBuildDetails(item) {
            console.log(item);
        }

    }

}(window.angular));
