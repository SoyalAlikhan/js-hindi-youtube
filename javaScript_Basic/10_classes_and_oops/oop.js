// object literals

const user = {
    username:"soyal",
    loginCount: 8,
    signrdIn: true,
    getUserDetails :function () {
        //console.log(this.username);
        console.log(this);
        
    }
}
// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

function User(userName,loginCount,signrdIn) {
    this.userName = userName;
    this.loginCount = loginCount;
    this.signrdIn = signrdIn;
    this.greeting = function () {
        console.log(`welcome ${this.userName}`);
        
    }
    return this;
}

// const user1 = User("soyal",8,true)
// const user2 = User("khan",10,false)  // overwrite the user1 value 
// console.log(user1);

const user1 = new User("soyal",8,true)
const user2 = new User("khan",10,false)
// console.log(user1.greeting());
// console.log(user2);
console.log(user1.constructor);  //ye class ka naam btata h
console.log(user1 instanceof User); // ye check krta h ki ye object di gyi class ka ya nhi

