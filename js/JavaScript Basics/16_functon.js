function calc(a, b) {
    return (a + b);
}

console.log(calc(4, 3));

function ret() {
    let num = 50;
    // Какой-то код

    return num;
}

const anotherNum = ret();
console.log(anotherNum);

/* function declaration - особенность функции в том, 
    что она существует до того как объявлена, 
    что позволяет вызвать её до объявления 
*/

console.log(calc(4, 3));

function calc(a, b) {
    return (a + b);
}

console.log(calc(4, 3));

/* function expression - создается только когдв до нее доходит поток кода.
    Вызвать можно только после объявления
*/
const logger = function() {
    console.log('Hello');
};

logger();

/* Стрелочные функции. Если аргумент один,в то скобки
    можно опустить.
*/

const calc2 = (a, b) => a + b;
const calc3 = (a, b) => {
    console.log('1');
    return a + b;
};