(function (angular) {
    'use strict';

    angular.module('itemSetApp')
           .directive('itemList', itemList);

    function itemList($templateCache, $timeout) {
        return {
            restriction: 'EA',
            scope: {
                modalState: '=',
                callback: '&',
                blockToAddItemTo: '='
            },
            controller: ItemList,
            controllerAs: 'itemListVm',
            template: $templateCache.get('build/item.list.html')
        };
    }
    
    function ItemList($scope, staticDataService) {
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

        function closeModal() {
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
            if (filter && filter.tag) {
                vm.filter.tag = filter.tag
            }
        }
        
        function filterItemList(item,v2,v3) {
            if (vm.filter.name.length > 0) {
                if (item.name.indexOf(vm.filter.name) === -1) {
                    return false;
                }
            }
            if (vm.filter.tag.length > 0) {
                if (item.tags.indexOf(vm.filter.tag) === -1) {
                    return false;
                }
            }
            return true;
        }

    }

}(window.angular));
