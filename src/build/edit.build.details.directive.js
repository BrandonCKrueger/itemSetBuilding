(function (angular) {
    'use strict';

    angular.module('itemSetApp')
           .directive('editBuildDetails', editBuildDetails);

    function editBuildDetails($templateCache) {
        return {
            restriction: 'EA',
            scope: {
                itemSet: '=',
                modalState: '=',
                callback: '&'
            },
            controller: EditBuildDetails,
            controllerAs: 'buildDetailsVm',
            template: $templateCache.get('build/edit.build.details.html')
        };
    }
    
    function EditBuildDetails($scope) {
        var vm = this;
        vm.itemSet = angular.copy($scope.itemSet);
        vm.modalState = $scope.modalState;
        vm.saveChanges = saveChanges;
        vm.closeModal = closeModal;
        
        function saveChanges() {
            for (var key in vm.itemSet) {
                $scope.itemSet[key] = vm.itemSet[key];
            }
            closeModal();
        }
        
        function closeModal() {
            if ($scope.callback()) {
                $scope.callback()(vm.itemSet);
            }
            $scope.modalState = false;
        }
    }

}(window.angular));
