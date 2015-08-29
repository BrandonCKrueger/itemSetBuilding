(function (angular) {
    'use strict';

    angular.module('itemSetApp')
           .directive('downloadBuild', downloadBuild);

    function downloadBuild($templateCache) {
        return {
            restriction: 'EA',
            scope: {
                build: '=',
                modalState: '='
            },
            controller: DownloadController,
            controllerAs: 'downloadVm',
            template: $templateCache.get('championBanner/download/download.html')
        };
    }
    
    function DownloadController($scope, apiConfig) {
        var vm = this;
        vm.build = $scope.build;
        vm.downloadUrl = apiConfig.domain + '/api/exportBuild/' + vm.build._id;
        vm.modalState = $scope.modalState;
        vm.closeModal = closeModal;

        function closeModal() {
            vm.modalState = false;
        }
    }

}(window.angular));
