var $basket = document.getElementById('basket');
var $inner = document.createElement('div');
var $template = document.getElementById('template').children[0];
var $catalog = document.getElementById('catalog');
window.$catalog.addEventListener('click', handleBuyClick );
var $cart = document.getElementById('cart');  
$cart.addEventListener('click', handleRemoveClick );


function accordion () {
    var $acc = document.getElementsByClassName('accordion');
    
    
    for (var i = 0; i < $acc.length; i++) {
      $acc[i].addEventListener('click', function() {
        this.classList.toggle('active');
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight){
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        } 
      });
    }

}
accordion();
function indexOf(item){

    for (var i = 0 ; i < goods.length; i ++){
        if(goods[i].id === item.id){
            return i;
        }
    
    }
    return -1;
}

function handleRemoveClick(event){
    if(event.target.classList.contains('remove')){
        
        var idx = indexOf({id:+event.target.dataset.id});
        if (goods[idx].quantity > 1){
            goods[idx].quantity--;
        }else{
            goods.splice(idx , 1);
        }
        countBasketPrice(goods)
    }

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
event.preventDefault();
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
    
     
    $cart.innerHTML ='';
    if (goods && goods.length > 0  ){
        
        var $ul = document.createElement('ul');
        var sum = 0;
        var count = 0;
        for (var i = 0 ; i < goods.length; i++){
            var $li = document.createElement('li');
            var $span = document.createElement('span');
            var $remove = document.createElement('button');
            $span.textContent = goods[i].name + '('+ goods[i].quantity + ')';
            $remove.textContent ='x';
            $remove.dataset.id = goods[i].id;
            $remove.classList.add('remove');
            $li.appendChild($span);
            $li.appendChild($remove);
            $ul.appendChild($li);
            sum += goods[i].price * goods[i].quantity;
            count += goods[i].quantity; 
        }
        var $total = document.createElement('div');
        
        $total.textContent='в корзине '+ count + ' товаров на сумму '+ sum;
        
        
        $cart.appendChild($ul);
        $cart.appendChild($total);
            
        
            
        }else{
            $cart.textContent ='Ваша корзина пуста';
        
    }
    
}

countBasketPrice(goods);      
    
        
        
 
          


      
    
    
    
    
    
    
    
  

    
    
     

