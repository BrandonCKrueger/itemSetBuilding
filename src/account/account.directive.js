(function (angular) {
    'use strict';

    angular.module('itemSetApp')
           .directive('accountDirective', accountDirective);

    function accountDirective($templateCache) {
        return {
            restriction: 'EA',
            scope: {},
            controller: AccountController,
            controllerAs: 'accountVm',
            template: $templateCache.get('account/account.html')
        };
    }
    
    function AccountController($scope, accountManager) {
        var vm = this;
        vm.account = null;
		vm.login = login;
		vm.closeModal = closeModal;
        vm.showAccountInfo = false;
        vm.processing = false;
        
		function login() {
            vm.processing = true;
			accountManager.login(vm.email, vm.password).then(function(account) {
                vm.account = account;
                vm.processing = false;
            });
		}
        
        function logout() {
            accountManager.logout().then(function() {
                vm.account = null;
            });
        }

        function closeModal() {
            vm.showAccountInfo = false;
        }
    }

}(window.angular));
