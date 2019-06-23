// Первое задание. Почему код дает именно такие результаты
var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2 Потому что префиксная форма оператора
d = b++; alert(d);           // 1 Потому что постфиксная форма оператора
c = (2+ ++a); alert(c);      // 5 Сложение инкрементированного префиксного "a" который был равен 2 ,стал 3 + 2-кой   
d = (2+ b++); alert(d);      // 4 Сложение инкрементированного постфиксного "b" который был равен 1 ,стал 2 + 2-кой
alert(a);                    // 3 После 2 - ного инкрементирования равняется 3
alert(b);                    // 3 После 2 - ного инкрементирования равняется 3

// Второе задание 

var a = 2;
var x = 1 + (a *= 2);
alert(x) // x будет равен 5 так как действие выполняющееся в скобках
// имеет приоритет , а оператор *= присваивание с умножением дает 4 в данном случае

// задание 3 
//Объявить две целочисленные переменные — a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу:
var x = parseInt(prompt('Введите число')) , y = parseInt(prompt('Введите 2-е число')); 
if (x > 0 && y > 0){
    alert (x - y );

}else if (x<0 && y < 0){
    alert (x * y );
}else { 
    alert (x + y );
}
//задание 4
//Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.

a = +prompt ('Введите число от 1 до 15');
switch (a) {
case 1:
	alert ( 'Ваше число 1');
	break;
case 2:
	alert ( 'Ваше число 2');
	break;
case 3:
	alert ( 'Ваше число 3');
	break;
case 4:
	alert ( 'Ваше число 4');
	break;
case 5:
	alert ( 'Ваше число 5');
	break;
case 6:
	alert ( 'Ваше число 6');
	break;
case 7:
	alert ( 'Ваше число 7');
	break;
case 8:
	alert ( 'Ваше число 8');
	break;
case 9:
	alert ( 'Ваше число 9');
	break;
case 10:
	alert ( 'Ваше число 10');
	break;
case 11:
	alert ( 'Ваше число 11');
	break;
case 12:
	alert ( 'Ваше число 12');
	break;
case 13:
	alert ( 'Ваше число 13');
	break;
case 14:
	alert ( 'Ваше число 14');
	break;
case 15:
	alert ( 'Ваше число 15');
	break;	
}	

// Задание 5 
//Реализовать четыре основные арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.
var first = 5
var second = 3

function plus(first, second) {
	return first + second;
}

function minus(first, second) {
	return first - second;
}

function div (first, second) {
	return first / second;
}

function mult (first, second) {
	return first * second;
}
alert(plus(first,second))
alert(minus(first,second))
alert(div(first, second))
alert(mult(first, second))

// Задание 6 
//Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation)

function mathOperation(arg1, arg2, operation){
    switch(operation){
        case '+':
            return alert(plus(arg1,arg2))
        case '-':
            return alert(minus(arg1,arg2))
        case '*':
            return alert(mult(arg1,arg2))
        case '/':
            return alert(div(arg1,arg2))
        
        }
}
mathOperation(3,3,'+')
mathOperation(3,3,'-')
mathOperation(3,3,'*')
mathOperation(3,3,'/')

// 7 - е задание 
alert( null > 0 ); // false
alert( null == 0 ); // false
alert(null >= 0); // true
alert(null <= 0); // true
/*Причина такого результата в том, что алгоритмы проверки равенства == и 
сравнения >= > < <= работают по-разному.
*/
// 8 - е задание Рекурсивное возведение в степень
function power(val, pow){
    if (pow === 1){
        return val;
    }
    else {
        return val*= power(val,pow -1)
    }

    
}
alert(power(3,3))  
