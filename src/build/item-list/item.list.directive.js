(function (angular) {
    'use strict';

    angular.module('itemSetApp')
           .directive('itemList', itemList);

    function itemList($templateCache) {
        return {
            restriction: 'EA',
            scope: {
                modalState: '=',
                callback: '&',
                blockToAddItemTo: '='
            },
            controller: ItemList,
            controllerAs: 'itemListVm',
            template: $templateCache.get('build/item-list/item.list.html')
        };
    }
    
    function ItemList($scope, $timeout, staticDataService) {
        var vm = this;
        vm.closeModal = closeModal;
        vm.selectItem = selectItem;
        vm.filter = { tag: '', name: '' };
        vm.setItemFilter = setItemFilter;
        vm.filterItemList = filterItemList;

        staticDataService.getItemTags().then(function(itemTags) {
            vm.itemTags = itemTags;
        });
        staticDataService.getItems().then(function(items) {
            vm.items = items;
        });

        $timeout(function() {
            window.scrollTo(0,0);
        });

        function closeModal() {
            $scope.callback()();
            $scope.modalState = false;
        }
        
        function selectItem(item) {
            $scope.blockToAddItemTo.items.push({
                id: item.id,
                count: 1
            });
            closeModal();
        }
        
        function setItemFilter(filter) {
            if (filter) {
                vm.filter.tag = filter.tag
            }
        }
        
        function filterItemList(item) {
            if (vm.filter.name.length > 0 && item.name) {
                if (item.name.indexOf(vm.filter.name) === -1) {
                    return false;
                }
            }
            if (vm.filter.tag.length > 0 && item.tags) {
                if (item.tags.indexOf(vm.filter.tag) === -1) {
                    return false;
                }
            }
            return true;
        }

    }

}(window.angular));
