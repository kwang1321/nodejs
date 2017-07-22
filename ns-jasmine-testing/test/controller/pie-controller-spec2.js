// file name does not matter. you can use any name.
describe('PieController', function() {
    var $rootScope, $scope, controller;
    beforeEach(function() {
        module("pie");

        inject(function($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            controller = $injector.get('$controller')('PieController', { $scope: $scope });
        });
    });

    describe('Initialization', function() {
        it('should instantiate slices to 8.', function() {
            expect($scope.slices).toEqual(8);
        });

        it('should instantiate name to Peter', function() {
            expect($scope.customer).toEqual("Peter");
        });
    });

    describe('Action Handlers', function() {

        describe('eatSlice', function() {

            it('should decrease the number of slices', function() {
                expect($scope.slices).toEqual(8);
                $scope.eatSlice();
                expect($scope.slices).toEqual(7);
                $scope.eatSlice();
                expect($scope.slices).toEqual(6);
            });

            it('should do nothing when slices is 0', function() {
                $scope.slices = 0;
                $scope.eatSlice();
                expect($scope.slices).toEqual(0);
            });
        });
    });
});