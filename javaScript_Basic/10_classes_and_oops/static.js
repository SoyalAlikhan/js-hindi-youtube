class User{
    constructor(username){
        this.username =username;
    }
    logMe(){
        console.log(`UserName is ${this.username}`);
    }
    static createId(){
        return `123`
    }
}
const user1 = new User("Soyal")
//console.log(user1.createId())   //error
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
const user2 = new Teacher("soyal","soyal@gmail.com")
console.log(user2.createId()) // error