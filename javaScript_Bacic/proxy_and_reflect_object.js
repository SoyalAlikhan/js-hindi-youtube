//console.log("soyal khan")
const p1 = {
    fname: 'soyal',
    lname:'khan',
    age : 10
}
// p1.age = 12
// console.log(p1.age)
const p1Proxy = new Proxy(p1 , {
    get(target , prop){
        //if(prop in target) return target[prop];
        if(prop in target) return Reflect.get(target,prop);
        return false;
    },
    set(target, prop, value){
        if(!(prop in target)) throw new Error(`${prop} is not exists`);
        switch(prop){
            case 'fname':
            case 'lname':
                if(typeof value !== 'string')
                    throw new Error(`${prop} must be a string`)
                break;
            case 'age':
                if(typeof value !== 'number')
                    throw new Error(`${prop} must be a number`)
                if(value <= 0) throw new  Error(`${prop} value must be > 0`)

        }
        //target[prop] = value;
        Reflect.set(target,prop,value)
    },  
});

p1Proxy.age =25
p1Proxy.fname = 'Soyal'

//console.log(p1.age)

const student = {
    name : 'Anjum Fatima',
    age : 21
}

const proxyStudent = new Proxy(student,{
    get(target,prop){
        // console.log(`${prop} proxy is executed`);
        // return Reflect.get(target,prop);
        if(prop === "age"){
            return `${target[prop]} saal ka h`
        }else if(prop === "name"){
            return `${target[prop]} ye mera naam h`
        }else{
            return target[prop];
        }
    }
});

console.log(proxyStudent.age)
console.log(proxyStudent.name)
console.log(Reflect.get(student,'name')) // Property ko read karna using Reflect
Reflect.set(student,"age",22) // Property ko update karna using Reflect
console.log(student.age)