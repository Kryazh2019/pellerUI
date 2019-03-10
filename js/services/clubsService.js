app.factory('ClubsService', ['$http', function($http) {
    function getClubs() {
        return $http.get('../data/clubs.json');
    }
    return {
        getClubs: getClubs
    };
}]);