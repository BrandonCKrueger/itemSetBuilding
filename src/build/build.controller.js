(function (angular) {
    'use strict';

    angular
        .module('itemSetApp')
        .controller('BuildController', BuildController);

    function BuildController($scope, $q, $state, $stateParams, $timeout, staticDataService, itemSetDetailsService, accountManager) {
        var vm = this;
        vm.summonerLevelRange = summonerLevelRange;
        vm.updateCount = updateCount;
        vm.addBlock = addBlock;
        vm.addItemToBlock = addItemToBlock;
        vm.blockToAddItemTo = null;
        vm.editBlock = editBlock;
        vm.removeItemFromBlock = removeItemFromBlock;
        vm.getItemById = getItemById;
        vm.scrollToCallback = scrollToCallback;
        vm.saveItemSet = saveItemSet;
        
        if ($stateParams.buildId) {
            itemSetDetailsService.getItemBuildById($stateParams.buildId).then(function(itemBuild) {
                vm.itemSet = itemBuild[0];
                updateEditableStatus(accountManager.getAccount());
                $scope.$on('login', function(event, account) {
                    updateEditableStatus(account);
                });
                $scope.$on('logout', function(event) {
                    updateEditableStatus(null);
                });
            }).catch(function(error) {
                console.log({error: error});
            });
        } else if ($stateParams.build) {
            vm.itemSet = $stateParams.build;
            updateEditableStatus(accountManager.getAccount());
            vm.editDetails = true;
        } else {
            $state.go('champions');
        }
        
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
        
        function addItemToBlock(block) {
            vm.blockToEdit = block;
            vm.blockToAddItemTo = block;
            vm.showItemList = true;
        }

        function editBlock(block, $event) {
            vm.blockToEdit = block;
            vm.editBlockDetails = true;
            vm.blockToEdit.distanceFromTop = angular.element($event.toElement.parentNode.parentNode.parentNode.parentNode).offset().top - 100;
        }
        
        function removeItemFromBlock(item, block) {
            var index = block.items.indexOf(item);
            if (index > -1) {
                block.items.splice(index, 1);
            }
        }
        
        function getItemById(itemId) {
            console.log(vm.items);
            for (var item in vm.items) {
                if (item.id === itemId) {
                    return item;
                }
            }
        }
        
        function scrollToCallback() {
            var element = angular.element('#block-' + vm.blockToEdit.$$hashKey.replace('object:',''));
            $timeout(function() {
                window.scrollTo(0,element[0].offsetTop);
            });
        }
        
        function updateEditableStatus(account) {
            if (account && vm.itemSet.who.createdBy.userId === account.id) {
                vm.editable = true;
            } else {
                vm.editable = false;
            }
        }

        function saveItemSet() {
            vm.saving = true;
            if (vm.itemSet && vm.itemSet._id) {
                itemSetDetailsService.updateItemSetBuild(vm.itemSet).then(function(response) {
                    vm.saving = false;
                }).catch(function(error) {
                    vm.saving = false;
                    console.log(error);
                });
            } else {
                itemSetDetailsService.insertItemSetBuild(vm.itemSet).then(function(response) {
                    $state.go('build', {buildId: response.data._id});
                }).catch(function(error) {
                    vm.saving = false;
                    console.log(error);
                });
            }
        }

    }

}(window.angular));
