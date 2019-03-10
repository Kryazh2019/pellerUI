
app.controller('clubsController', ['$scope', '$stateParams', 'ClubsService' , function($scope, $stateParams, ClubsService) {
    $scope.loading = true;
    ClubsService.getClubs().then((response) => {
        $scope.loading = false;
        $scope.clubs = response.data;
        console.log($scope.clubs);
    },()=> {
        $scope.loading = false;
    });
    console.log($scope.clubs);
}]);