/**
 * Created by vol on 2017/2/21.
 */
angular.module("myApp", []).controller("myCtrl", function ($scope) {
    $scope.cart = [];
    $scope.addProduct = function () {
        $scope.cart.push({
            price: Math.ceil(Math.random() * 100),
            num: 1
        });
    };
    $scope.total = function () {
        console.log('重新计算购物车总金额....', $scope.cart);
        var sum = 0;
        for (var i = 0; i < $scope.cart.length; i++) {
            var p = $scope.cart[i];
            sum += p.price * p.num;
        }
        return sum;
    };
});