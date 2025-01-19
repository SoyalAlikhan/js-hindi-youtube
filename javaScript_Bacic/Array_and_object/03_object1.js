const mySym = Symbol("key1")


const jsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
// console.log(jsUser.email)
// console.log(jsUser[mySym])
// console.log(jsUser["full name"])

//Object.freeze(jsUser)
jsUser.age = 20
console.log(jsUser.age)

jsUser.greeting = function(){
    console.log("hello world")
}

jsUser.greetingTwo = function(){
    console.log(`hello , ${this.name}`)
}
console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())