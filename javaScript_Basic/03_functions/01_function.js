
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))


function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyobject){
    //console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
//console.log(returnSecondValue([200, 400, 500, 1000]));

// function test_fun()
//       {
//         console.log(`Total passed arguments : ${arguments.length} <br>`);
//         for(index in arguments) {
//           console.log(`Index ${index} Value : ${arguments[index]} <br>`);
//         }

//         /* accessing individual  */
//         console.log(`First argument: ${arguments[0]} <br>`);
//       }
//       /*call function by passig some arrgument*/
//       test_fun(46767,67,678,8,8,6532);

// recursive function
function print_number(number)
      {
        /*print number*/
        //console.log(number );
      
        /*increment by 1*/
        number += 5;
      
        /*if number is less than 100 then call the function*/
        if(number <= 100)
        {
          /*call the function*/
          print_number(number);
        }
      }
      print_number(0)

      // Prime number using recursion
      let fact = function(num){
         return num <= 1 ? 1 : num * fact(num-1)
      }
      console.log(fact(5)); 