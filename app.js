var tobuy=[{name:'cookies',quantity:5},{name:'bananas',quantity:12},{name:'wine',quantity:12}
            ,{name:'cabbage',quantity:1},{name:'apples',quantity:12}];
var bought=[];

(function () {
  angular.module("ShoppingListCheckOff",[])
  .controller("ToBuyController",ToBuyangularController)
  .controller("AlreadyBoughtController",AlreadyBoughtangularController)
  .service("ShoppingListCheckOffService", ShoppingListCheckOffangularService )

ToBuyangularController.$inject=['ShoppingListCheckOffService']
  function ToBuyangularController(ShoppingListCheckOffService) {
    var buyController=this;
    buyController.buyItems=ShoppingListCheckOffService.getItems();

    buyController.boughtItems=function (index) {
      ShoppingListCheckOffService.boughtItems(index);
    }
  }

AlreadyBoughtangularController.$inject=['ShoppingListCheckOffService']
function AlreadyBoughtangularController(ShoppingListCheckOffService) {
  var boughtController=this;
  boughtController.alreadyBoughtItems=ShoppingListCheckOffService.getAlreadyBoughtItems();

}

function  ShoppingListCheckOffangularService(){
  var service=this;

  service.getItems=function () {
    return tobuy;
  }

  service.getAlreadyBoughtItems=function () {
    return bought;
  }

  service.boughtItems=function (index) {
    var selectedItem=tobuy[index];
    // console.log(selectedItem);
    bought.push(selectedItem);
     tobuy.splice(index,1);
  }
}


})();
