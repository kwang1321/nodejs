var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http',
    function($scope, $http) {
        console.log("Hello world from controller!");


        var refresh = function() {
            $http.get("/contactlist").success(function(response) {

                console.log("get data from server side");
                console.log(response);
                $scope.contactList = response;
                $scope.contact = {
                    name: "",
                    email: "",
                    number: ""
                };
            });
        };

        refresh();

        $scope.addcontact = function() {
            console.log($scope.contact);
            $http.post("/contactlist", $scope.contact).success(function(response) {
                console.log(response);
                // $scope.contactList.push(response);
                refresh();
            });
        }

        // $scope.remove = function(id) {
        //     console.log("remove id is " + id);
        //     $http.post("/removecontact", { "id": id }).success(function(response) {
        //         console.log(response);
        //         // $scope.contactList.push(response);
        //         refresh();
        //     });
        // }

        //remove should use http.delete
        $scope.remove = function(id) {
            console.log("remove id is " + id);
            $http.delete("/removecontact/" + id).success(function(response) {
                refresh();
            });
        }
    }
]);
