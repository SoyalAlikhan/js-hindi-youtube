const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for(const key in myObject){
    //console.log(myObject[key])
}

const programming = ["js", "rb", "py", "java", "cpp"]
for (const key in programming) {
    //console.log(programming[key])
}


programming.forEach((item) => {
    //console.log(item)
});

// const map =new Map()
// map.set('IN','india')
// map.set('USA','united state of America')
// map.set('Fr','France')

// for (const key in map) {
//     console.log(key)
// }