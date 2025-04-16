// Reduce function

const myNums = [1,2,3,4]

const myTotal = myNums.reduce(function(acc,curr){
    //console.log(`accumalator: ${acc} and currentvalue: ${curr}`);
    return acc + curr;
},0)
//console.log(myTotal);

const myTotal1 = myNums.reduce((acc,curr)=> acc+curr,0)
//console.log(myTotal1);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2000
    },
    {
        itemName: "mobile course",
        price: 3000
    },
    {
        itemName: "py course",
        price: 4000
    }
]

 const totalPriceOfAllCourse = shoppingCart.reduce( (acc,item) => acc + item.price ,0 );
 //console.log(`Total Price Of All Course Is: ${totalPriceOfAllCourse}`);


// JS Variable Length Argument Function Example Using arguments Object
 function test_fun()
 {
   console.log(`Total passed arguments : ${arguments.length} `);
   for(index in arguments) {
     console.log(`Index ${index} Value : ${arguments[index]} `);  //but Array function like map() या forEach() नहीं use कर सकते हैं।
   }

   /* accessing individual  */
   console.log(`First argument: ${arguments[0]} `);
 }
 /*call function by passig some arrgument*/
 test_fun(46767,67,678,8,8,6532);

    
    