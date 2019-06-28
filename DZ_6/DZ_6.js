var $basket = document.getElementById('basket');
var $inner = document.createElement('div');
var $template = document.getElementById('template').children[0];
var $catalog = document.getElementById('catalog');
window.$catalog.addEventListener('click', handleBuyClick );


function indexOf(item){

    for (var i = 0 ; i < goods.length; i ++){
        if(goods[i].id === item.id){
            return i;
        }
    
    }
    return -1;
}
function handleBuyClick(event){
    event.preventDefault();
    if(event.target.classList.contains('buy')){
        var cartItem = {
            id: +event.target.dataset.id,
            name:event.target.dataset.name,
            price: event.target.dataset.price,
        }
    var idx = indexOf(cartItem);
        if(idx === -1 ){
            cartItem.quantity = 1 ; 
            goods.push(cartItem);
        }else{
            goods[idx].quantity++;
        }
    countBasketPrice(goods);
    }

}
var products = [
    {
    id: 1,
    name : 'shorts',
    price : 100,
    
    },
    {
    id: 2,    
    name : 't-shirts',
    price : 200,
     
    },   
    {
    id: 3,
    name : 'hats',
    price : 1000,
      
    }
];

var goods = [];







$basket.appendChild($inner);
function buildCatalog(products){
    for(var i = 0 ; i < products.length; i++){
        var $item = $template.cloneNode(true);
        var keys = Object.keys(products[i]);
        var $button = $item.querySelector('.buy');

        for (var j = 0 ; j < keys.length; j++){
            var key = keys[j];
            var $element = $item.querySelector('.' + key );
            if($element){
                $element.textContent = key + ' ' + products[i][key] ;
            }
            
            $button.dataset[key] = products[i][key];
        }
        
        $catalog.appendChild($item);
             
    }

      
        
}

buildCatalog(products);

function countBasketPrice(goods){
    
    if (goods && goods.length > 0  ){
        var sum = 0;
        var count = 0;
        for (var i = 0 ; i < goods.length; i++){
            sum += goods[i].price * goods[i].quantity;
            count += goods[i].quantity; 
        }
        if (sum === 0){
            $inner.textContent ='Ваша корзина пуста'
            return $inner;
        }else {
            $inner.textContent='в корзине '+ count + ' товаров на сумму '+ sum;
            return $inner;
        }
    } 
    
}

countBasketPrice(goods);      
    
        
        
 
          


      
    
    
    
    
    
    
    
  

    
    
     

