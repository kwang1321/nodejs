var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http',
    function($scope, $http) {
        console.log("Hello world from controller!");

        person1 = {
            name = 'Tim',
            email='tim@email.com',
            number='(111) 111-1111'
        };

        person2 = {
            name = 'Tim',
            email='tim@email.com',
            number='(111) 111-1111'
        };
    }
]);
