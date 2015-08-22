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
    
    function EditBuildDetails($scope, staticDataService) {
        var vm = this;
        vm.itemSet = angular.copy($scope.itemSet);
        vm.saveChanges = saveChanges;
        vm.closeModal = closeModal;
        vm.getDisplayState = getDisplayState;
        vm.setPriority = setPriority;
        vm.selectMap = selectMap;
        vm.isMapSelected = isMapSelected;
        vm.selectMode = selectMode;
        vm.isModeSelected = isModeSelected;
        vm.setType = setType;
        vm.isTypeSelected = isTypeSelected;
        
        staticDataService.getMaps().then(function(maps) {
            vm.maps = maps;
        });
        staticDataService.getModes().then(function(modes) {
            vm.modes = modes;
        });
        
        
        function saveChanges() {
            if (!parseInt(vm.itemSet.sortrank) || vm.itemSet.sortrank < 0) {
                vm.itemSet.sortrank = 0;
            }
            
            $scope.itemSet['blocks'] = vm.itemSet['blocks'];
            $scope.itemSet['map'] = vm.itemSet['map'];
            $scope.itemSet['mode'] = vm.itemSet['mode'];
            $scope.itemSet['priority'] = vm.itemSet['priority'];
            $scope.itemSet['sortrank'] = vm.itemSet['sortrank'];
            $scope.itemSet['title'] = vm.itemSet['title'];
            $scope.itemSet['type'] = vm.itemSet['type'];

            closeModal();
        }
        
        function closeModal() {
            if ($scope.callback()) {
                $scope.callback()(vm.itemSet);
            }
            $scope.modalState = false;
        }
        
        function getDisplayState() {
            return $scope.modalState;
        }

        function setPriority(state) {
            vm.itemSet.priority = state;
        }

        function selectMap(mapCode) {
            vm.itemSet.map = mapCode;
        }
        
        function isMapSelected(map) {
            return vm.itemSet.map === map.code || vm.itemSet.map === 'any';
        }
        
        function selectMode(modeCode) {
            vm.itemSet.mode = modeCode;
        }

        function isModeSelected(mode) {
            return vm.itemSet.mode === mode.code || vm.itemSet.mode === 'any';
        }
        
        function setType(buildType) {
            vm.itemSet.type = buildType;
        }
        
        function isTypeSelected(buildType) {
            return vm.itemSet.type === buildType;
        }
    }

}(window.angular));
