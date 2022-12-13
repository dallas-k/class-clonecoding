"use strict";

// state : pending -> fulfilled or rejected
// producer vs consumer

// 1.producer
// when new promise is created, the executor runs automatically.
const promise = new Promise( (resolve, reject) => {
    console.log('promise')
    setTimeout( () => {
        resolve('ellie');
        reject(new Error('no network'))
    }, 2000);
});

// 2.consumer : then, catch, finally
promise
    .then( (val) => {
        console.log(val);
    })
    .catch( (err) => {
        console.log(err);
    })
    .finally( () => console.log('final'))

// 3. promise chaining
const fetchNumber = new Promise( (resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
})

fetchNumber
.then(num => num * 2)
.then(num => num * 3)
.then(num => {
    return new Promise((resolve, rejet) => {
        setTimeout(() => resolve(num - 1), 1000);
    });
})
.then(num => console.log(num));


// 4. Error Handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('chicken'), 1000);
  });
const getEgg = hen =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${hen} => egg`), 1000);
  });
const cook = egg =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => cook`), 1000);
  });

  getHen()
  .then(hen => getEgg(hen))
  .then(egg => cook(egg))
  .then(meal => console.log(meal));