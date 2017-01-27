(function () {
    'use strict';

    angular
        .module('myApp')
        .controller('PageController', PageController);

    PageController.$inject = ['$location', '$http', '$scope'];
    function PageController($location, $http, $scope) {
        var token;
        var headerString;
        var vm = this;

        token = window.localStorage.getItem('token');
        if (token === null) {
            $location.path ('/login');
        }

        headerString = "Token " + token;

        $http({
            method: 'GET',
            url: 'http://178.62.182.182/page',
            headers: {'Authorization': headerString}
        }).then(function successCallback(response) {
            vm.imageUrl = response.data.image_url;
            vm.text = response.data.text;
            vm.title = response.data.title;
            vm.dataLoading = false;
        }, function errorCallback(response) {
            vm.dataLoading = false;
            $location.path ('/login');
        });

        $scope.logout = function () {
            window.localStorage.removeItem('token');
            $location.path ('/login');
        }
    }
})();