(function() {
    angular.module('testProject')
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        $stateProvider
        .state('app', {
            abstract: true,
            url: '/',
            templateUrl: 'modules/core/views/app.html',
            controller: 'AppCtrl'
        })
        .state('app.landing', {
            url: '',
            templateUrl: 'modules/core/views/landing.html'
        })
        .state('app.sell', {
            url: 'sell',
            templateUrl: 'modules/core/views/sell-page.html'
        })

        $urlRouterProvider.otherwise('/');
    }])
})();