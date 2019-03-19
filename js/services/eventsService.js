app.factory('EventsService' , ['$http', function($http) {
    let filteredEvents = [];
    let service = {};
    service.getEvents = function(id) {
        return $http.get('../data/events.json')
            .then(function(data) {
                filteredEvents = data.data.filter((event) => {
                    return event.club == id;
                })
                console.log('qaz' + data);
                return filteredEvents;
            }, function(error){
                throw new Error(error.status);
                // return error.statusText;
            })

    }
    return service;
}])


// // $http({
//     method: 'GET',
//     url: '/someUrl'
// }).then(function successCallback(response) {
//     // this callback will be called asynchronously
//     // when the response is available
// }, function errorCallback(response) {
//     // called asynchronously if an error occurs
//     // or server returns response with an error status.
// });