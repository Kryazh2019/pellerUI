var app = angular.module('pellerTest', ['ui.router']);


 app.config(['$stateProvider','$locationProvider', function($stateProvider, $locationProvider) {
     $locationProvider.html5Mode({
         enabled: true,
         requireBase: false
     })
     $stateProvider
         .state('homePage', {
            url: '/',
             templateUrl:'./pages/home.html',
             controller: 'homeController'
         })
         .state('clubs', {
             url: '/clubs',
             templateUrl:'./pages/clubs.html',
             controller: 'clubsController'
         })
         .state('events', {
             url:'/clubs/:id',
             templateUrl:'./pages/events.html',
             controller: 'eventsController'
         })
 }]);

app.controller('homeController', ['$scope', '$stateParams', function($scope, $stateParams) {
    console.log('It is homeController');
}]);


app.controller('eventsController', ['$scope', '$stateParams', function($scope, $stateParams) {
    console.log('It is eventsController');
}]);

// myApp.controller('eventsController', ['$scope', '$stateParams', function($scope, $stateParams) {
//     console.log(';lwf;el')
// }]);
//
// myApp.controller('clubsController', ['$scope','GetDataService', function($scope, GetDataService) {
//     let urlClubs = '../data/clubs.json';
//     $scope.clubs = GetDataService.getAll(urlClubs);
// }]);
//
//
// myApp.service('GetDataService', ['$http', function($http) {
//     var arrayData = [];
//     function getClubs(url) {
//         $http.get(url).success(function(data) {
//             arrayData = data;
//         })
//             .error(function(data) {
//                 console.log(data);
//             })
//     }
//     getClubs();
//     var service = {};
//     service.getAll = function() {
//         return arrayData;
//     }
//
//     return service;
//
// }]);
//
//
