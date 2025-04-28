// Object.preventExtensions(obj) ka kaam hota hai object me naye properties add hone se rokna.
// Lekin existing properties delete ya modify ki ja sakti hain.
const user = { name: "Sita", city:'ajmer' };

Object.preventExtensions(user);

user.age = 25; //  Not allowed (nayi property add nahi hogi)
user.name = "Gita"; // Allowed
delete user.name; //Allow
//console.log(user); // { name: "Sita" } (age add nahi hui)


// Object.isExtensible(obj) check karta hai ki object me naye properties add kar sakte hain ya nahi.
const car = { brand: "Tata" };

//console.log(Object.isExtensible(car)); // true
Object.preventExtensions(car); // ab prevent kar diya
//console.log(Object.isExtensible(car)); // false


//Object.is(value1, value2) check karta hai ki do values strictly equal hain ya nahi.
//Ye strict equality (===) se thoda better kaam karta hai — specially NaN aur -0 cases me.
// console.log(Object.is(10, 10));      // true
// console.log(Object.is('a', 'a'));    // true
// console.log(Object.is(NaN, NaN));    // true (IMPORTANT: NaN === NaN hota nahi, par Object.is me hota hai)
// console.log(Object.is(0, -0));       // false
// console.log(Object.is({}, {}));      // false (alag alag reference)
// console.log(Object.is([], []));      //false
// console.log(Object.is("", ""));      // true
// console.log(Object.is(-1, 1));       //false
// console.log(Object.is('1', 1));      //false

// console.log(NaN === NaN);            //false
// console.log(0 === -0);               //true

/*Object.seal(obj) object ko seal kar deta hai.

Existing properties modify kar sakte hain.
Naye properties add nahi kar sakte.
Existing properties delete nahi kar sakte.*/ 

const book = { title: "JS Basics" };

Object.seal(book);

book.title = "Advanced JS"; // Allowed (modify existing)
book.author = "John";       // Not allowed (add new)

delete book.title;          // Not allowed (delete nahi kar sakte)

console.log(book); // { title: "Advanced JS" }

// // Short Summary

/*
Method	                            Kya karta hai?	                                                                     Example
---------------------------------------------------------------------------------------------------------------------------------------------------------------------
Object.assign()	                Do ya zyada objects ko combine karta hai.	                                        Object.assign(target, source)
Object.create()	                Ek naya object banata hai kisi existing object ko prototype ke roop me use karke.	Object.create(proto)
Object.defineProperty()	        Kisi property ko define karta hai ya uske attributes change karta hai.	            Object.defineProperty(obj, prop, descriptor)
Object.defineProperties()	    Ek saath multiple properties define karta hai.	                                    Object.defineProperties(obj, descriptors)
Object.entries()	            Object ko key-value pairs ke array me convert karta hai.	                        Object.entries(obj)
Object.freeze()	                Object ko freeze kar deta hai (koi change nahi kar sakte).	                        Object.freeze(obj)
Object.isFrozen()	            Check karta hai ki object freeze hai ya nahi.	                                    Object.isFrozen(obj)
Object.seal()	                New properties add nahi kar sakte, existing modify kar sakte hain.	                Object.seal(obj)
Object.isSealed()	            Check karta hai ki object seal hai ya nahi.	                                        Object.isSealed(obj)
Object.keys()	                Sirf object ke keys return karta hai array ke form me.	                            Object.keys(obj)
Object.values()	                Sirf object ke values return karta hai array ke form me.	                        Object.values(obj)
Object.hasOwnProperty()     	Check karta hai ki object me koi property exist karti hai ya nahi.	                obj.hasOwnProperty('key')
Object.getOwnPropertyNames()	Saari properties (enumerable + non-enumerable) return karta hai.	                Object.getOwnPropertyNames(obj)
Object.getPrototypeOf()	        Kisi object ka prototype return karta hai.	                                        Object.getPrototypeOf(obj)
Object.setPrototypeOf()	        Kisi object ka prototype set karta hai.	                                            Object.setPrototypeOf(obj, proto)
Object.is()	                    Do values strictly equal hain ya nahi, check karta hai.	                            Object.is(val1, val2)
Object.preventExtensions()	    Object me naye properties add karne se rokta hai.	                                Object.preventExtensions(obj)
Object.isExtensible()	        Check karta hai ki object extensible hai ya nahi.	                                Object.isExtensible(obj)
*/

// Category	Examples
// Properties->  	         constructor, __proto__, prototype, length
// Object Creation-> 	     create, assign
// Property Control->	     defineProperty, freeze, seal
// Property Access->	     keys, values, entries
// Prototype Handling->	     getPrototypeOf, setPrototypeOf
// Comparisons->             is, hasOwnProperty
// Extension Control->     	 preventExtensions, isExtensible
