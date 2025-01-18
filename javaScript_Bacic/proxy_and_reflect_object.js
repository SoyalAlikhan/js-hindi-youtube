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
        if(prop in target) return target[prop];
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
        target[prop] = value;
    },  
});

p1Proxy.age =25
p1Proxy.fname = 'Soyal'

console.log(p1Proxy)