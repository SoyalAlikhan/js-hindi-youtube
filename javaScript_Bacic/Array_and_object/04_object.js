//const tinderUser = new Object();
const tinderUser = {}

tinderUser.id = "123acb"
tinderUser.name = "Soyal"
tinderUser.email = "soyal@gmail.com"
//console.log(tinderUser)

const ragularUser = {
    email:"s@gmail.com",
    fullName:{
        userFullName:{
            name:"soyal",
            age:21
        }
    }
}
//console.log(ragularUser.fullName.userFullName.age);

const targer ={a:1,b:2}
const source = {c:3,d:4}
const obj3 = {e:5,f:6}

//const obj4 = {targer,source,obj3}
//console.log(obj4);

//const obj4 = Object.assign({},targer,source,obj3)
//console.log(obj4);

const obj4 = {...targer, ...source, ...obj3}
// console.log(obj4)

// console.log(tinderUser)
// console.log(tinderUser.hasOwnProperty("email"))
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]
//console.log(users[0].email)

const course = {
    courseName : "BCA",
    price : 999,
    courseInstructor : "soyalkhan"
}

console.log(course.courseInstructor); // object de-structuring
const {courseInstructor : instructor} = course
console.log(instructor)

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",   // json 
//     "price": "free"
// }

[
    {},
    {},
    {}
]
