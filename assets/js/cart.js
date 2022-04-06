"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var allProductsInCart = document.querySelectorAll('#cart .product');
  var quantityOfEachProduct = document.querySelectorAll('#cart [name="quantity of product"]');
  var orderTotal = document.getElementById('order-total');

  function getCostOfAllProducts(products) {
    var totalCost = [];
    products.forEach(function (item) {
      totalCost.push("".concat(item.querySelector('.product-price').innerText * item.querySelector('[name="quantity of product"]').value, ".000"));
    });
    return totalCost;
  }

  orderTotal.innerText = getCostOfAllProducts(allProductsInCart).reduce(function (sum, item) {
    return "Total: ".concat(+sum + +item, ".000");
  });
  quantityOfEachProduct.forEach(function (item) {
    item.addEventListener('change', function (e) {
      orderTotal.innerText = getCostOfAllProducts(allProductsInCart).reduce(function (sum, item) {
        return "Total: ".concat(+sum + +item, ".000");
      });
    });
  });
  allProductsInCart.forEach(function (item) {
    item.querySelector('.product-remove').addEventListener('click', function (e) {
      item.remove();
      orderTotal.innerText = getCostOfAllProducts(document.querySelectorAll('#cart .product')).reduce(function (sum, item) {
        return "Total: ".concat(+sum + +item, ".000");
      }, 0) || 'empty cart';
    });
  });
});
//# sourceMappingURL=cart.js.map
