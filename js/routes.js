app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/products.html',
      controller: 'MainController'
    })
    .when('/shoppingcart', {
      templateUrl: 'views/cart.html',
      controller: 'MainController'
    })
    .when('/checkout', {
      templateUrl: 'views/checkout.html',
      controller: 'MainController'
    });
});
