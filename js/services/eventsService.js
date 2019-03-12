app.factory('EventsService', ['$http', function($http) {
    function getEvents() {
        return $http.get('../data/events.json').then((response) => {
            let filteredResponse = Object.keys(response).filter((event) => {
               return  event.club == 1;
            })
            return filteredResponse;

        })
    }
    return {
        getEvents: getEvents
    }
}])


