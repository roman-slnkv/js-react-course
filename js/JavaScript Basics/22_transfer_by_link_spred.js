let a = 5,
    b = a;

b = b + 5;

// console.log(b);
// console.log(a);

// При работе с объектами передача идет не по значению, а по ссылке 

const obj = {
    a: 5,
    b: 1
};

const copy = obj; // В данном случае мы не создаем новый объект, а передаем сыылку на существующий

copy.a = 10; // Таким образом мы модифицируем изначальный объект

// console.log(copy);
// console.log(obj);

// .....Способы создания копий..............

//1. Создадим функцию для создания копий
function copy2(mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
       x: 7,
       y: 4 
    }
};

const newNumbers = copy2(numbers); // Создаем копию объекта

newNumbers.a = 10; // Изменяем копию

// console.log(newNumbers);
// console.log(numbers);

newNumbers.c.x = 10; // Такой способ не сработает и в данном случае измениться и изначальный объект

/* Существует несколько способов копирования - поверхностый и глубокий. 
Выше пример поверхтностного копирования*/


// 2. Метод Object.assign для добавления объекта к существующему объекту. Тоже создает независимую копию и так же поверхностный способ
    
const add = {
    d: 17,
    e: 20
};

console.log(Object.assign(numbers, add)); // Добавляем  к обьекту number новые свойства и значения объекта add

const clone = (Object.assign({}, add)); // Создание поверхностой копии

clone.d = 20;

// console.log(add);
// console.log(clone);

//3. Создаем копию массива с помощью метода slice
const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice(); // Метод slice для создания копии массива

newArray[1] = 'adadadadad';
console.log(oldArray);
console.log(newArray);

// 4. Спред оператор разворота - '...'
const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournel', 'blogger'],
      internet =[...video, ...blogs, 'vk', 'facebook'];

console.log(internet);

// Ещё один пример работы со спред оператором. 
function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num);

// 4
const array = ['a', 'b'];
const newArray2 = [...array];

const q = {
    one: 1,
    two: 2
};

const newObj = {...q};
