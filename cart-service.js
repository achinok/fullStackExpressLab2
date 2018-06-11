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

      const deleteAllItems = (id) => {
        let itemList=[];
        return $http({
          method: "DELETE",
          url: "/items" + id
        }).then((response) => {
          itemList = response.data;
          return response.data;
        });
      };
      const updateAllItems = (updatedItem, id) => {
        let itemList=[];
        return $http({
          url: "items" + id,
          method: "PUT",
          data: updatedItem
        }).then((response) => {
          itemList = response.data;
          return response.data;
        });
      };
      const addAllItems = (newItem) => {
        let itemList=[]; 
        return $http({
          url: "/items",
          method: "POST",
          data: newItem
        }).then((response) => {
          itemList = response.data;
          return response.data;
        });
      };
    };

    return {
      getAllItems,
      deleteAllItems,
      updateAllItems,
      addAllItems
    };
  }

  CartService.$inject = ["$http"];

  angular
    .module("ShopApp")
    .service("CartService", CartService);
}