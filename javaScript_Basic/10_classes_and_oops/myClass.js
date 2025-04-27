// My First Class
// class User{
//     constructor(username,email,password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }
//     encrtyptPassword(){
//         return `${this.password}`
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const user1 = new User("soyal","soyal@gmail.com","123");
// console.log(user1.encrtyptPassword())
// console.log(user1.changeUsername());


//behind the seen
function User(username,email,password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encrtyptPassword = function () {
    return `${this.password}`
}
User.prototype.changeUsername = function() {
    return `${this.username.toUpperCase()}`
}
const user1 = new User("soyal","soyal@gmail.com","123")
console.log(user1.encrtyptPassword());
console.log(user1.changeUsername());
