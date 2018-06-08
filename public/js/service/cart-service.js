"use strict";
{
  function CartService($http) {
    let itemList = [];
    const getAllItems = () => {
      return $http({
        method: "GET",
        url: "/items"
      }).then(function (response) {
        itemList = response.data;
        return response.data;
      });
    };
    return {
      getAllItems
    };
  }
  
  CartService.$inject = ["$http"];

  angular
    .module("ShopApp")
    .factory("CartService", CartService);
}