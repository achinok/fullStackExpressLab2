"use strict";
{
  const shop = {
    template: `
    <section>
      <ul>
        <li ng-repeat="item in $ctrl.items track by $index"> 
        Item: {{ item.name }} | Cost: {{ item.price | currency }}
        <button ng-click="deleteAllItems($index)">X</button>      
    </li>

        <form>
            ID:<br>
            <input type="text" name="ID">
            <br>
            Product:<br>
            <input type="text" name="Product">
            <br>
            Price:<br>
            <input type="text" name="Price">
            <br>
            Quantity:<br>
            <input type="text" name="Quantity">
            <br>
            
            <br>
            <input type="button" value="Submit" ng-click="addAllItems()">
          </form> 
          

      </ul>
    </section>
`,
    controller: function (CartService) {
      const vm = this;
      CartService.getAllItems().then(function (response) {
        vm.items = response;
      });
      vm.delete = this;
      CartService.deleteAllItems().then(function (response) {
        vm.items = response;
      });
      vm.add = this;
      CartService.addAllItems().then(function (response) {
        vm.items = response;

      });
      vm.update = this;
      CartService.updateAllItems().then((response) => {
        vm.items = response;

      });
    }
  };


  shop.$inject = ["CartService"];

  angular
    .module("ShopApp")
    .component("shop", shop);
}