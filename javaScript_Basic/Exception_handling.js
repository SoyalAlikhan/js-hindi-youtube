 // Exception handling
// try{
//     console.log(abc);
// }catch(ErrorObj){
//     console.log(`Error Name: ${ErrorObj.name}`);
//     console.log(`Error Message: ${ErrorObj.message}`);
    
    
// }

// exception handling in asynchronous code
// setTimeout(function(){
//     try {
//         console.log(anyvariable); /* script will terminate here */
//     } 
//     catch(error) {
//         // console.log(error.name);
//         // console.log(error.message);
//         console.log(error)
//     }
//   }, 1000);


// use of finally keyword (it is always run) 
//   try
// {
// //let blah = 10;
// console.log(blah); /* here I have print undefined variable */
// } 
// catch(ErrorObj)
// {
// console.log(`Error Name : ${ErrorObj.name} <br>`);  /* print Error name */
// console.log(`Error Message : ${ErrorObj.message} <br>`); /* print Error message */
// }
// finally
// {
// console.log(`it will run always`);
// }

// use of throw keyword to generate custom error
    //   try
    //   {
    //     let num = 0
    //     if(num == 0)
    //       throw new Error("Invalid number");
    //     else
    //       console.log(`You entered : ${num}`);
    //   } 
    //   catch(error)
    //   {
    //     console.log(`Error Name : ${error.name} <br>`);  /* print Error name */
    //     console.log(`Error Message : ${error.message}`); /* print Error message */
    //   }