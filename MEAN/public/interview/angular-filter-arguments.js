var app = angular.module('app', []);

app.filter('startsWithLetter', function() {
    return function(items, letter) {
        var filtered = [];
        var letterMatch = new RegExp(letter, 'i');
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            if (letterMatch.test(item.name.substring(0, 1))) {
                filtered.push(item);
            }
        }
        return filtered;
    };
});

// PersonCtrl
app.controller('PersonCtrl', ['$scope', function($scope) {
    // here's our filter, just a simple function
    $scope.startsWithW = function(item) {
        // note, that inside a Controller, we don't return
        // a function as this acts as the returned function!
        console.log(item);
        return /w/i.test(item.name.substring(0,1));
    };

    $scope.friends = [{
        name: 'Andrew'
    }, {
        name: 'Will'
    }, {
        name: 'Mark'
    }, {
        name: 'Alice'
    }, {
        name: 'Todd'
    }];
}]);
