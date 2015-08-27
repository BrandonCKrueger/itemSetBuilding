(function (angular) {
    'use strict';

    angular.module('itemSetApp')
           .directive('downloadBuild', downloadBuild);

    function downloadBuild($templateCache) {
        return {
            restriction: 'EA',
            scope: {
                modalState: '='
            },
            controller: DownloadController,
            controllerAs: 'downloadVm',
            template: $templateCache.get('download/download.html')
        };
    }
    
    function DownloadController($scope) {
        var vm = this;
        vm.modalState = $scope.modalState;
        vm.closeModal = closeModal;

        function closeModal() {
            vm.showAccountInfo = false;
        }
    }

}(window.angular));
