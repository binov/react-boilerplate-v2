// We will not see this type of code ususlly.This will be inside firebase library
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('This is my resolved data');
     //reject('Something went wrong!');
    }, 5000);
    
});

console.log('before');
//usage
// promise.then((data) => {
//     console.log(data);
//     return 'some data';
// }).then((str) =>{
//     console.log('promise chaining',str);
// }).catch((error) =>{
//     console.log('error:',error);
// });

promise.then((data) => {
    console.log(data);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('This is my OTHER PROMISE');
            //reject('Something went wrong!');
        }, 5000);
    });
}).then((str) =>{
    console.log('promise chaining',str);
}).catch((error) =>{
    console.log('error:',error);
});

console.log('after');
