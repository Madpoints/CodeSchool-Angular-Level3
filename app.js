(function() {
    var app = angular.module('store', []);
    
    app.controller('StoreController', function() {
        this.products = gems;    
    });
    
    app.controller('PanelController', function() {
        this.tab = 1;
        
        this.selectTab = function(setTab) {
            this.tab = setTab;
        };
        this.isSelected = function(checkTab){
            return this.tab === checkTab;
        };
    });
    // Gems as an array of objects
    var gems = [{
        name: 'Dodecahedron',
        price: 2,
        description: 'Fancy',
        canPurchase: true,
        soldOut: false,
        reviews: [{
            stars: 5,
            body: "Loveee ittt!",
            author: "very@excited.com"
        },{
            stars: 1,
            body: "Nope",
            author: "very@disappointed.com"            
        }]
    },{
        name: 'Pentagonal Gem',
        price: 5.95,
        description: 'Five sides',
        canPurchase: true,
        soldOut: false,
        reviews: [{
            stars: 4,
            body: "Liked it",
            author: "kinda@excited.com"
        },{
            stars: 3,
            body: "Ok",
            author: "not@disappointed.com"            
        }]        
    }];
})();    