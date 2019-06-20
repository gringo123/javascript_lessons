// задание 1 

var n =  +prompt('Введите трехзначное число от 0 до 999 :')

function split(n){
    var obj = {
        units : 0,
        tens : 0,
        hundreds : 0, 
    }
    if (n > 999){
        console.log('Слишком большое число', obj )
    } else {
        while (n > 0){
            obj.units = n % 10
            n = n / 10
            obj.tens = Math.floor(n) % 10
            n = n / 10
            obj.hundreds = Math.floor(n)
            break ;
            
        };   
    return console.log(obj); 
    };   
}
split(n)

// Задание № 2( из методички )

var goods = [
    {
    name : 'shorts',
    price : 1000,
    quantity : 2,
    },
    {
    name : 't-shirts',
    price : 800,
    quantity : 3,  
    },   
    {
    name : 'hats',
    price : 500,
    quantity : 5,  
    }
];
var sum = 0;
function countBasketPrice(goods){
    for (var i = 0 ; i < goods.length; i++){
      sum += goods[i].price * goods[i].quantity 
    }      
  return sum;
}
console.log(countBasketPrice(goods))
