app.controller('MainController', ['$scope', 'getTeaDataService', 'shoppingCartService', mainController]);

function mainController($scope, getTeaDataService, shoppingCartService) {
  // var vm = this;
  $scope.title = "Welcome to MEAN tea!";
  $scope.data = getTeaDataService.teaDataArray;
  $scope.total = 0;

  $scope.addToBag = shoppingCartService.addItem;
  $scope.cart = shoppingCartService.getCart();
  $scope.orderTotal = shoppingCartService.getTotal;

  $scope.updateQty = shoppingCartService.updateItem;
  $scope.removeItem = shoppingCartService.removeItem;


  $scope.bagSize = shoppingCartService.calculateBagSize;

  $scope.success = 'Your order has been submitted!';

}
