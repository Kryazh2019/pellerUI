app.factory('ClubsService', ['$http', function($http) {
    let clubs = [];

    function getClubs() {
        $http.get('../data/clubs.json')
            .success(function(data) {
                clubs = data;
            })
            .error(function (data) {
                console.log(data);
            })
    }
    getClubs();
    let service = {};
    service.getAll = function() {
        return clubs;
    }
    return service;
}]);