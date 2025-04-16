
// JavaScript synchronous Callback Function Example
function print_name(name)
{
    console.log(`Your full name is : ${name}`);
}

function enter_name(callback)
{
    //console.log(typeof callback);
    let name = 'Soyal';
    callback(name);
}
/* now call the function and pass the function name as an argument */
enter_name(print_name);

// JavaScript Asynchronous Callback Function Example

setTimeout(function(){
    console.log('Run after 1 seconds');
}, 1000);
console.log('Normal Code');


