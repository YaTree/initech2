(function () {
    'use strict';

    angular
        .module('myApp')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$location', '$http'];
    function LoginController($location, $http) {
        var vm = this;

        vm.login = login;
        vm.error = false;


        function login() {
            vm.dataLoading = true;
            $http({
                method: 'POST',
                url: 'http://178.62.182.182/login',
                data: {username: vm.username, password: vm.password},
                headers: {'Content-Type': 'application/json'}
            }).then(function successCallback(response) {

                window.localStorage.setItem('token', response.data.token);
                $location.path( "/home" );
                vm.dataLoading = false;
                vm.error = false;
            }, function errorCallback(response) {
                vm.error = true;
                vm.dataLoading = false;
            });
        }
    }
})();