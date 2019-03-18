app.factory('EventsService' , ['$http', function($http) {
    let filteredEvents = [];
    let service = {};
    service.getEvents = function(id) {
        return $http.get('../data/events.json')
            .then(function(data) {
                filteredEvents = data.data.filter((event) => {
                    return event.club == id;
                })
                return filteredEvents;
            }, function(error) {
                console.log('Sorry, ' + error.statusText);
            })
    }
    return service;
}])
