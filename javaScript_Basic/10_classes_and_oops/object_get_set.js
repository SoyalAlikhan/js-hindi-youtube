const User = {
    _email:"sk@gmail.com",
    _password:"abc",
    set email(value){
        this._email = value;
    },
    get email(){
        return this._email.toUpperCase()
    },
    set password(value){
        this._password = value;
    },
    get password(){
        return `${this._password}khan`
    }

}

const user1 = Object.create(User);  //Factory function
console.log(user1.email);
console.log(user1.password);

