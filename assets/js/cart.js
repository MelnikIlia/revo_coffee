'use strict';

document.addEventListener('DOMContentLoaded', function () {
  var allProductsInCart = document.querySelectorAll('#cart .product');
  var quantityOfEachProduct = document.querySelectorAll('#cart [name="quantity of product"]');
  var orderTotal = document.getElementById('order-total');

  function getCostOfAllProducts(products) {
    var totalCost = [];
    products.forEach(function (item) {
      totalCost.push(
        item.querySelector('.product-price').innerText * item.querySelector('[name="quantity of product"]').value
      );
    });
    return totalCost;
  }

  function writeTotalCost() {
    orderTotal.innerText =
      'Total: ' +
      getCostOfAllProducts(document.querySelectorAll('#cart .product'))
        .reduce((sum, item) => sum + item, 0)
        .toFixed(3);
  }

  writeTotalCost();

  quantityOfEachProduct.forEach(function (item) {
    item.addEventListener('change', writeTotalCost);
  });

  allProductsInCart.forEach(function (item) {
    item.querySelector('.product-remove').addEventListener('click', function (e) {
      item.remove();
      writeTotalCost();
    });
  });
});
//# sourceMappingURL=cart.js.map
