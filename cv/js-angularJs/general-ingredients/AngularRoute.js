upload.config(function($routeProvider, $locationProvider) {
    $routeProvider

        .when('/', { templateUrl: 'content-admin-panel/page/index-home.html', controller: 'Home_Index_Controller' })
        .when('/portfolio/', { templateUrl: 'content-admin-panel/page/portfolio.html' })
        // .when('/portfolio/web-product', { templateUrl: 'content-admin-panel/page/web-product.html' })


    .otherwise({ redirectTo: '/' })

    $locationProvider.html5Mode(true);


});