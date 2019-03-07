
app.controller('clubsController', ['$scope', '$stateParams', 'ClubsService' , function($scope, $stateParams, ClubsService) {
    $scope.clubs = ClubsService.getAll();
    console.log($scope.clubs);
}]);