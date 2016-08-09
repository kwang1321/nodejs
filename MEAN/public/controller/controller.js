var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http',
    function($scope, $http) {
        console.log("Hello world from controller!");

        person1 = {
            name: 'Tim',
            email: 'tim@email.com',
            number: '(111) 111-1111'
        };

        person2 = {
            name: 'Emily',
            email: 'emily@email2.com',
            number: '(222) 222-2222'
        };

        person3 = {
            name: 'John',
            email: 'john@email3.com',
            number: '(333) 333-3333'
        };

        var contactList = [person1, person2, person3];
        $scope.contactList = contactList;
    }
]);
