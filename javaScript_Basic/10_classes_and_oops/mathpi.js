const descripter = Object.getOwnPropertyDescriptor(Math,'PI');
console.log(descripter);

// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI);

const User={
    name:"soyal",
    age:20,
    city:'ajmer',
    greeting:function () {
        console.log(`hello ${this.name}`);
        
    }
}

const Userdescripter = Object.getOwnPropertyDescriptor(User,'name')
//console.log(Userdescripter);

Object.defineProperty(User,'name',{
    writable:false,  // ab name ko change nhi kr skte    
    enumerable:false // ab name ko iterate nhi kr skte
})

// for (const [key,value] of Object.entries(User)) {
//     if(typeof value !== 'function'){
//         console.log(`${key} -> ${value}`);
        
//     }
// }
const Userdescripter1 = Object.getOwnPropertyDescriptor(User,'name')
//console.log(Userdescripter1);


