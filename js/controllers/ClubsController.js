
app.controller('clubsController', ['$scope', '$stateParams', 'ClubsService' , function($scope, $stateParams, ClubsService) {
    $scope.loading = true;
    ClubsService.getClubs().then((response) => {
        $scope.loading = false;
        $scope.clubs = response.data;

    },()=> {
        $scope.loading = false;
    });
}]);