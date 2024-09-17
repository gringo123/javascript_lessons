//1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
function simpleNumber (num) {
    if( num < 2 ) return false;
    let count = 2;
    while(count < num) {
      if(num % count === 0) {
        return false;
      }
      count++;
    }
    return true;
  }
  
  function getSimple(max) {
    let i = 0;
    let list = [];
  
    while (i < max) {
      if(simpleNumber(i)){
		  list.push(i);
		  }
      i++;
    }
    console.log(list);
  }
  
  getSimple(100)

  // 2 С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров. 

var goods = [
    ['шорты' , 1000, 2],
    ['майки' , 500, 3],
    ['шляпы', 800, 5]

];
var count = 0;
var sum = 0;
function countBasketPrice(goods){
    for (var i = 0 ; i < goods.length; i++){
      for (var j = 0 ; j < goods[i].length ; j++){
        
            count =  goods[i][j + 1 ] *  goods[i][j + 2 ]
            if (!isNaN(count)){ 
                sum += count; 
        
            } 
        }   
    }
    return sum;
}
console.log(countBasketPrice(goods))

//Вывести с помощью цикла for числа от 0 до 9, НЕ используя тело цикла.
for(var i = 0; i < 9; i++, console.log(i)) {}
// Нарисовать пирамиду с 20 рядами с помощью console.log, как показано на рисунке:
var pyramyd = "";
for(var i = 1; i < 20; i++) {
    pyramyd += "x";
    console.log(pyramyd)
}