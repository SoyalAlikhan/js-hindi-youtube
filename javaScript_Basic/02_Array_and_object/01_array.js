
// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()


//myArr.unshift(9)
//myArr.shift()
// console.log(myArr);
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);


// slice, splice

//console.log("A :", myArr);

// const myn1 = myArr.slice(1, 3)

// console.log(myn1);
// console.log("B :", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);

/* you can also declare array like this */
let array_var = [];
    array_var[0] = "first value";
    array_var[1] = "other value";

    /* now skip the array index via associating with new index */
    array_var[20] = "Another value";
    console.log(`Array Values : ${array_var} <br>`);
    console.log(`Array length : ${array_var.length} <br>`);

     /* no manually manupulate the length */
     array_var.length = 90;
     console.log(`New array length : ${array_var.length}`);