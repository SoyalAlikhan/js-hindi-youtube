// const promiseOne = new Promise(function (resolve,reject) {
//     setTimeout(function () {
//         console.log('Async task is completed');
//         resolve()
//     },1000)
// })

// promiseOne.then(function () {
//     console.log('promise consume');
// })

// new Promise(function (resolve,reject) {
//     setTimeout(function(){
//         console.log('Async promise 2');
//         resolve()
//     }, 1000);
// }).then(function(){
//     console.log('Promise 2');
// })

// const promiseThree = new Promise(function(resolve,reject){
//       setTimeout(function(){
//             console.log("Asyn task is completed");
//             resolve({userName:'soyal khan',password:'123456789',email:'soyalkhan53313@gmail.com'})
//       },1000)
// })

// promiseThree.then(function(user){
//       console.log(user);
//       console.log(user.userName);
      
// })

// const promiseFour = new Promise(function(resolve,reject){
//       setTimeout(function(){
//             let error = true
//             if (error) {
//                   resolve({userName:'soyal khan',password:'123456',email:'soyalkhan@53133@gmail.com'})  
//             }else{
//                   reject('ERROR: something want wrong')
//             }
//       },1000)
// })

// promiseFour.then(function(user){
//       console.log(user);
//       return user.userName
// }).then(function(userName){
//       console.log(`2nd then value : ${userName}`);
      
// }).catch(function(error){
//       console.log(error);
// }).finally(() => console.log('Finally promise is resolve or rejected'))

const promiseFive =new Promise(function(resolve,reject){
    let flag = false;
    if(!flag){
          resolve({username:'soyal khan',password:'123456',email:'soyalkhan@gmail.com'})
    }else{
          reject('something is wrong')
    }
})

async function consumePromiseFive() {
    try{
          const response = await promiseFive
          console.log(response);
    }catch(error){
          console.log(error); 
    }
}
//  consumePromiseFive()

async function getAllUser() {
    try{
          //const response = await fetch('https://jsonplaceholder.typicode.com/users')  // https://api.github.com/users/SoyalAlikhan
          const response = await fetch('https://api.github.com/users/SoyalAlikhan')  
          // console.log(response);
          // console.log(Object.entries(response));
          const data = await response.json();
          //console.log(Object.entries(data));
          console.log(data);
          
          
    }catch(error){
          console.log("E:  ", error);
          
    }
}
//getAllUser()

fetch('https://api.github.com/users/SoyalAlikhan')
.then((response) => {
  return response.json()
})
.then((data) => {
  console.log(data);
})
.catch((error) => console.log(error))