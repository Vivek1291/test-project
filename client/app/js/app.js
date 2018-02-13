(function(){
    angular.module('testProject', [
        'ui.materialize',
        'oc.lazyLoad',
        'ui.router'
    ])
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    }])
    // .run(['$rootScope', '$state', function ($rootScope, $state) {

        
    // }])

    .controller('AppCtrl', ['$scope', '$state', function($scope, $state) {
        $scope.products= [
            {
                name: "Bella",
                url: "http://kittenrescue.org/wp-content/uploads/2017/03/KittenRescue_KittenCareHandbook.jpg",
                price: '10',
                age: '1 year'
            },
            {
                name: "Kitty",
                url: "http://r.ddmcdn.com/w_606/s_f/o_1/cx_0/cy_15/cw_606/ch_404/APL/uploads/2014/06/10-kitten-cuteness-1.jpg",
                price: '20',
                age: '2 year'
            },
            {
                name: "Lucy",
                url: "https://steamuserimages-a.akamaihd.net/ugc/861727094491823008/BF4D73E6F5FCA88686AC1FFB496BC6B180E20335/",
                price: '5',
                age: '1.5year'
            },
            {
                name: "Chole",
                url: "https://i.ytimg.com/vi/BgIgKcqPd4k/maxresdefault.jpg",
                price: '15',
                age: '6 month'
            }
        ]
        $scope.getItem = function(index) {
            console.log(index);

            $scope.products.splice(index, 1)

            console.log($scope.products)
        }

        $scope.product={}
        $scope.addProduct = function() {
         
            
            $scope.products.push($scope.product);

            
            $scope.product={};
        }
    }])

})()