app.factory('EventsService', ['$http', function($http) {
    function getEvents(clubId) {
        return $http.get('../data/events.json').then((response) => {
            let filteredResponse = Object.keys(response).filter((event) => {
               return  event.club == clubId;
            })
            return filteredResponse;

        })
    }
    return {
        getEvents: getEvents
    }
}])


