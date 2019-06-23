
$basket = document.getElementById('basket');
$inner = document.createElement('div')


var $goods = [
    {
    name : 'shorts',
    price : 100,
    quantity : 5,
    },
    {
    name : 't-shirts',
    price : 200,
    quantity :6,  
    },   
    {
    name : 'hats',
    price : 1000,
    quantity : 1,  
    }
];
var $sum = 0;
var $count = 0;

function countBasketPrice(){
    
    for (var i = 0 ; i < $goods.length; i++){
      $sum += $goods[i].price * $goods[i].quantity;
      $count += $goods[i].quantity;
    } 
    if ($sum === 0){
        $inner.textContent ='Ваша корзина пуста'
        return $inner;
    }else {
        $inner.textContent='в корзине '+ $count + ' товаров на сумму '+ $sum;
        return $inner;
    }
}
countBasketPrice();
$basket.appendChild($inner);

