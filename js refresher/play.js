// "use strict";

// const person = {
//     name: 'Max',
//     age: 29,
//     greet: () => {
//         console.log('Hi, I am ' + this.name);
//     }
// }

// const printName = ({ name }) => {
//     console.log(name);
// }

// printName(person);

// const {name, age} = person;

// console.log(age);

// // const copiedPerson = {...person};

// const hobbies = ['Sports', 'Cooking'];

// const [hobby1, hobby2] = hobbies;

// // hobbies.push('Programming');

// // const copiedArray = [...hobbies];
// // console.log(hobbies)
// // // for(let hobby of hobbies) {
// // //     console.log(hobby);
// // // }

// // const toArray = (...args) => {
// //     return args;
// // }

// // console.log(toArray(1, 2, 3, 4, 5));

// // console.log(hobbies.map(hobby => 'Hobby: ' + hobby));



const fetchData = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Done!');
        }, 1500);
    });
    return promise;
};

setTimeout(() => {
    console.log('Timer is done!');
    fetchData().then(text => {
        console.log(text);
        return fetchData();
    })
    .then(text2 => {
        console.log(text2);
    });
}, 2000);

console.log("Hello!");
console.log("Hi!");