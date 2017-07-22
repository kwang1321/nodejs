
describe('PieController', function() {
    beforeEach(module('pie'));

    var $controller;

    beforeEach(inject(function(_$controller_) {
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
    }));

    // first parameter is describe name, we can use any name.
    describe('eatSlice', function() {
        it('should decrease the number of slices', function() {
            var $scope = {};
            var controller = $controller('PieController', { $scope: $scope });
            $scope.eatSlice();
            expect($scope.slices).toEqual(7);
        });

        it('should do nothing when slices is 0', function() {
            var $scope = {};
            var controller = $controller('PieController', { $scope: $scope });
            $scope.slices = 0;
            $scope.eatSlice();
            expect($scope.slices).toEqual(0);
        });
    });
});