const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() { // Создание собственного метода внутри объекта
        console.log('Test');
    }
};

options.makeTest(); // запуск метода

const {border, bg} = options.colors; // Деструктуризация 
console.log(border);

console.log(Object.keys(options).length);

// console.log(options);

// console.log(options.name);

// delete options.name; // Удаление внутри объекта

// console.log(options);

// let counter = 0;

// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`); //console.log(options['colors']['border']);
//             counter++;
//         }
//     }else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//         counter++;
//     }
// }
// console.log(counter);