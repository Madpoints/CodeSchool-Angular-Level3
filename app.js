(function() {
    var app = angular.module('store', []);
    
    app.controller('StoreController', function() {
        this.products = gems;    
    });
    // Gems as an array of objects
    var gems = [{
        name: 'Dodecahedron',
        price: 2,
        description: 'Fancy',
        canPurchase: true,
        soldOut: false
    },{
        name: 'Pentagonal Gem',
        price: 5.95,
        description: 'Five sides',
        canPurchase: true,
        soldOut: false        
    }];
})();    