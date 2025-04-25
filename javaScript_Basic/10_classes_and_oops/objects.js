function multiplyByFive(num) {
    return num*5
}

multiplyByFive.power = 2; // declear custom property
// console.log(multiplyByFive(5));
// console.log(multiplyByFive.power);
// console.log(multiplyByFive.prototype);

function createUser(username,score) {
    this.username = username;
    this.score = score;
}

createUser.prototype.increment = function () {
    this.score++;
}

createUser.prototype.printMe = function () {
    console.log(`price is ${this.score}`);
    
}
const user1 = new createUser('soyal',10)
const user2 = new createUser('khan',20)

user1.increment();
user1.printMe()



