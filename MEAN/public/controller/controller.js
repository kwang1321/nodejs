var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http',
    function($scope, $http) {
        console.log("Hello world from controller!");

        $http.get("/contactlist").success(function(response) {
            console.log("get data from server side");
            console.log(response);
            $scope.contactList = response;
        });
    }
]);
