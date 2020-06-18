'use strict';

const input = document.querySelector('#search');
const button = document.querySelector('#btn');


button.addEventListener('click', () => {
    setTimeout(() => {
        let message = input.value;
        if(input.value === 'google') {
            message = 'Yandex круче. Но это не точно!';
            alert(`
        ${message}
        First username: ${users[0].name}`);

        } else {
            alert(`
        ${message}
        First username: ${users[0].name}`);
        }
    }, 3000);

});

//№5
const users = [
    {name: 'Maikl', age: 44 },
    {name: 'Anna', age: 35 },
    {name: 'Aleks', age: 21 },
    {name: 'Masha', age: 15 },

];

//№6
function superSum(number1, number2) {
    alert(+number1 + +number2);
}
superSum(2, 9);

function superSum1(number1, number2) {
    return +number1 + +number2;
}
alert(superSum1(3, 5));

//№7
// максимальный элемент в массиве
const maxArray = [23, 1, 8, 101, 14, 33, 50, 3];
for (let i = 0; i < maxArray.length; i++) {
    if(maxArray[i] > maxArray[0]) {
        maxArray[0] = maxArray[i]
    }
}
alert(maxArray[0]);

// минимальный элемент в массиве
const minArray = [23, 1, 8, 14, 33, 50, -3];
for (let i = 0; i < minArray.length; i++) {
    if(minArray[i] < minArray[0]) {
        minArray[0] = minArray[i]
    }
}
alert(minArray[0]);

//№8
let a = 'Maikl';
let b = 1975;

let box = a;

a = b;
b = box;
console.log(a);
console.log(b);

//№9-10
const array = [23, 1, 8, 101, 14, 33, 50, 3];
function findMax(array) {
    return Math.max(...array);
}

setTimeout(() => {
    console.log(findMax(array));
}, 3000);
