

//New Promise
/*
let myPromise = new Promise((resolve, rejects) => {
    setTimeout(()=> {
        rejects('FATAL ERROR!');
    }, 1000);
});

//execute and log
myPromise.then((data) => {
    console.log('Promise is fullfilled', data);
}, (err) => {
    console.log('Error in promise: ' + err);
});

console.log('this is the end');
*/

//Get Users
let usersPromise = new Promise ((resolve, reject) => {
    setTimeout(() =>{
        let users = [
            {name: 'Jack'},
            {name: 'Bob'},
            {name: 'Martin'}
        ]
        resolve(users);
    }, 2500);
});

let ordersPromise = new Promise ((resolve, reject) => {
    setTimeout(() =>{
        let orders = [
            {name: 'Jack', date: new Date(2018, 01, 01)},
            {name: 'Bob', date: new Date(2019, 11, 01)},
            {name: 'Martin', date: new Date(2017, 05, 01)}
        ]
        resolve(orders);
    }, 5400);
});

Promise.all([usersPromise, ordersPromise]).then((resolves) =>{
    console.log('Resolves: ', resolves);
}, (rejects) =>{
    console.log('Errors: ', rejects);
});