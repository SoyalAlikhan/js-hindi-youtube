// Immediately Invoked Function Expressions (IIFE)


(function(){
    console.log(`DB CONNECTED`)
})();

( (name)=>{
    console.log(`DB CONNETED TWO ${name}`)
})("Soyal")                                                             