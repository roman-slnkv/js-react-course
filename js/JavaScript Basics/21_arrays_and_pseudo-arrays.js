const arr = [14, 12, 3, 6, 8];
arr.sort(/*compareNum*/); // Изначально массив сортируется как строка. Чтобы избежать неправильныой сортировки чисел создади функцию
console.log(arr);

function compareNum(a, b) {
    return a - b;
}

// arr.pop(); // Удаляет из конца массива
// arr.push(9); // Добавляет в конец массива

// arr[99] = 0;
// console.log(arr.length);

// console.log(arr);


// Способы перебора массива
// for(let i = 0;  i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr) {
//     console.log(value);

// }
// // Перебор массива с помощью метода forEach
// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });

// Метод split. К примеру нужно полученный тип данных ввиде строки (например какие-то товары), превратить в массив
const str = prompt("", "");
const products = str.split(", ");

// console.log(products);

// Метод Join. Формируем строку из массива. (Например чтобы вывести пользователю какие-то данные)
// console.log(products.join('; '));

// Метод сортировки - sort
products.sort();
console.log(products.join('; '));

// У псевдо массивов нет методов