class User{
    constructor(username){
        this.username =username;
    }
    logMe(){
        console.log(`UserName is ${this.username}`);
    }
}
class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email
    }
    addCourse(){
        console.log(`new course add by ${this.username}`);
        
    }
    userEmail(){
        console.log(`Teacher email is: ${this.email}`);
        
    }
}
const teacher1 = new Teacher("soyal","soyal@gmail.com")
teacher1.addCourse();
teacher1.logMe();
teacher1.userEmail()

console.log(teacher1 instanceof User);
