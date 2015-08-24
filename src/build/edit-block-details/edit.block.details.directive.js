(function (angular) {
    'use strict';

    angular.module('itemSetApp')
           .directive('editBlockDetails', editBlockDetails);

    function editBlockDetails($templateCache, $timeout) {
        return {
            restriction: 'EA',
            scope: {
                block: '=',
                modalState: '=',
                callback: '&'
            },
            controller: EditBlockDetails,
            controllerAs: 'blockDetailsVm',
            template: $templateCache.get('build/edit-block-details/edit.block.details.html')
        };
    }
    
    function EditBlockDetails($scope, staticDataService) {
        var vm = this;
        vm.block = angular.copy($scope.block);
        vm.saveChanges = saveChanges;
        vm.closeModal = closeModal;
        vm.setSpellRestriction = setSpellRestriction;
        vm.isRestrictionType = isRestrictionType;
        vm.selectSpell = selectSpell;
        vm.isSpellSelected = isSpellSelected;

        staticDataService.getSummonerSpells().then(function(summonerSpells) {
            vm.summonerSpells = summonerSpells;
        });
        verifySummonerLevels();

        function saveChanges() {
            verifySummonerLevels();
            $scope.block['hideIfSummonerSpell'] = vm.block['hideIfSummonerSpell'];
            $scope.block['items'] = vm.block['items'];
            $scope.block['maxSummonerLevel'] = vm.block['maxSummonerLevel'];
            $scope.block['minSummonerLevel'] = vm.block['minSummonerLevel'];
            $scope.block['recMath'] = vm.block['recMath'];
            $scope.block['showIfSummonerSpell'] = vm.block['showIfSummonerSpell'];
            $scope.block['type'] = vm.block['type'];

            closeModal();
        }
        
        function closeModal() {
            if ($scope.callback()) {
                $scope.callback()(vm.itemSet);
            }
            $scope.modalState = false;
        }
        
        function setSpellRestriction(restriction) {
            vm.block.hideIfSummonerSpell = '';
            vm.block.showIfSummonerSpell = '';
            vm.block.summonerSpellRestriction = restriction;
        }
        
        function isRestrictionType(restriction) {
            return vm.block.summonerSpellRestriction === restriction;
        }
        
        function selectSpell(summonerSpell) {
            if (vm.block.summonerSpellRestriction === 'show') {
                vm.block.showIfSummonerSpell = summonerSpell;
            } else {
                vm.block.hideIfSummonerSpell = summonerSpell;
            }
        }
        
        function isSpellSelected(summonerSpell) {
            return (vm.block.showIfSummonerSpell === summonerSpell ||
                    vm.block.hideIfSummonerSpell === summonerSpell);
        }
        
        function verifySummonerLevels() {
            if (vm.block.minSummonerLevel < 0) {
                vm.block.minSummonerLevel = 0;
            }
            
            if (vm.block.maxSummonerLevel === -1 || vm.block.maxSummonerLevel > 30) {
                vm.block.maxSummonerLevel = 30;
            }
        }
    }

}(window.angular));
