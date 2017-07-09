var myApp = angular.module('myApp', []);

// custom a filter which is used to reverse a String.
// filter method, creating `reverse` a globally available filter in our `myApp` module
myApp.filter("reverse", function() {
    var rev = function(item) {
        var res = "";
        for (var i = 0; i < item.length; i++) {
            res = item[i] + res;
        }
        return res;
    };
    return rev;
});

myApp.filter('startsWithA', function() {
    // function to invoke by Angular each time
    // Angular passes in the `items` which is our Array
    var res = function(items) {
        var filtered = [];
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            if (/[M,J]/i.test(item.substring(0, 1))) {
                filtered.push(item);
            }
        }
        return filtered;
    };
    return res;
});

myApp.controller('personCtrl', function($scope) {
    $scope.firstName = "John",
        $scope.lastName = "Doe"
});

myApp.controller('namesCtrl', function($scope) {
    $scope.names = [
        { name: 'Jani', country: 'Norway' },
        { name: 'Carl', country: 'Sweden' },
        { name: 'Margareth', country: 'England' },
        { name: 'Hege', country: 'Norway' },
        { name: 'Joe', country: 'Denmark' },
        { name: 'Gustav', country: 'Sweden' },
        { name: 'Birgit', country: 'Denmark' },
        { name: 'Mary', country: 'England' },
        { name: 'Kai', country: 'Norway' }
    ];
});

myApp.controller('filterCtrl', function($scope) {
    $scope.names = [
        'Jani',
        'Carl',
        'Margareth',
        'Hege',
        'Joe',
        'Gustav',
        'Birgit',
        'Mary',
        'Kai'
    ];
});

myApp.controller('tableCtrl', function($scope) {
    $scope.names = [
        { name: 'Jani', country: 'Norway' },
        { name: 'Carl', country: 'Sweden' },
        { name: 'Margareth', country: 'England' },
        { name: 'Hege', country: 'Norway' },
        { name: 'Joe', country: 'Denmark' },
        { name: 'Gustav', country: 'Sweden' },
        { name: 'Birgit', country: 'Denmark' },
        { name: 'Mary', country: 'England' },
        { name: 'Kai', country: 'Norway' }
    ];
    $scope.orderByMe = function(x) {
        $scope.myOrderBy = x;
    }
});
