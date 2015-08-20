(function (angular) {
    'use strict';

    angular.module('itemSetApp')
           .directive('buildBlockItem', buildBlockItem);

    function buildBlockItem($templateCache) {
        return {
            restriction: 'EA',
            scope: {
                itemId: '=',
                index: '='
            },
            controller: buildItemController,
            controllerAs: 'buildItemVm',
            template: $templateCache.get('build/build.block.item.html'),
        };
    }
    
    function buildItemController($scope, staticDataService) {
        var vm = this;
        vm.itemId = $scope.itemId;
        vm.index = $scope.index;
        vm.recMath = recMath;
        vm.isLastItem = isLastItem;

        staticDataService.getItemById(vm.itemId).then(function(item) {
            vm.item = item;
        }).catch(function(error) {
            console.log(error);  
        });
        
        function recMath() {
            return $scope.$parent.block.recMath;
        }
        
        function isLastItem() {
            return (vm.index + 1 === $scope.$parent.block.items.length);
        }
    }

}(window.angular));
