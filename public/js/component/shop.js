"use strict";
{
  const shop = {
    template: `
    <section>
      <ul>
        <li ng-repeat="item in $ctrl.items track by $index"> Item: {{ item.name }} | Cost: {{ item.price | currency }} </li>
      </ul>
    </section>
    `,
    controller: function(CartService) {
      const vm = this;
      CartService.getAllItems().then(function(response) {
        vm.items = response;
      });
    }
  };

  shop.$inject = ["CartService"];

  angular
    .module("ShopApp")
    .component("shop", shop);
}