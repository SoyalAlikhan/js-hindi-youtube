function setUsername(username) {
    this.username = username;
    console.log('called');
    
}
function createUser(username,password) {
    setUsername.call(this,username)
    this.password = password
}
const user1 = new createUser("soyal","123")
console.log(user1);
