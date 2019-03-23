app.factory('EventsService' , ['$http', function($http) {

    let service = {};
    service.getEvents = function(id) {
        return $http.get('../data/events.json')
            .then(function(data) {
                let filteredEvents = data.data.filter((event) => {
                    return event.club == id;
                })
                return filteredEvents;
            }, function(error){
                throw new Error(error.status);
            })

    }
    return service;
}])
