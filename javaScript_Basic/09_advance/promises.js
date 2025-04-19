const promiseOne = new Promise(function (resolve,reject) {
    setTimeout(function () {
        console.log('Async task is completed');
        resolve()
    },1000)
})

promiseOne.then(function () {
    console.log('promise consume');
})

new Promise(function (resolve,reject) {
    setTimeout(function(){
        console.log('Async promise 2');
        resolve()
    }, 1000);
}).then(function(){
    console.log('Promise 2');
})

