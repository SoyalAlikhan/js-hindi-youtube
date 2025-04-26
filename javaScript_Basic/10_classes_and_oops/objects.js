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

// user1.increment();
// user1.printMe()

const heros = ["thor","spiderman"]

const herosPower = {
    thor:"hammer",
    spiderman:"spidy",
    spidermanPower : function () {
        console.log(`spiderman is  power ${this.spiderman}`);

    }
}

Object.prototype.soyal = function () {
    console.log('i am available for all objects');
    
}

Array.prototype.khan = function() {
    console.log(`i am available for all array`);
    
}
// herosPower.soyal()
// heros.soyal()
//heros.khan()
//herosPower.khan()   //error


//old inheritance technic

const User = {
    username:'soyal'
}
const Teacher = {
    makeVideo: true
}
const TeacherSuport = {
    isAvailable: true
}
const TASupport = {
    makeAssignment: 'Js assignment',
    fullTime:true,
    __proto__:TeacherSuport   //inherite TeacherSuport
}
// console.log(TASupport.isAvailable);
// console.log(TASupport.makeAssignment);

Teacher.__proto__ = User  // inherite User
// console.log(Teacher.username);
// console.log(Teacher.makeVideo);

//new or modern Syntax of inheritance

Object.setPrototypeOf(TeacherSuport,Teacher) //inherit Teacher object in TeacherSupport
// console.log(TeacherSuport.makeVideo);
// console.log(TeacherSuport.isAvailable);

const userName = "soyalkhan    "
console.log(userName.length);

String.prototype.tureLength = function(){
    console.log(`${this}`);
    console.log(`${this.trim().length}`);
}
userName.tureLength()

"khan".tureLength()
"ALi".tureLength()
