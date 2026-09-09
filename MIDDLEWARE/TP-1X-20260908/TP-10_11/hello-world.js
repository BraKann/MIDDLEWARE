/////////////////////////////////////
// This is a simple code to explain same of some basic concepts in JavaScript

// print a simple message on screen
console.log("Hello from the class => 'Middleware 2024'")

//print a compiled message on screen
var courseName = 'Middleware 2024'
console.log(`Hello again from the class => ${courseName}`)

//understand variable types: const vs let vs var
//'const' can be declared and assigned only once
//'let' can be declared only once but updated several times
//'var' can be defined and updated several times, each time on its own scope


//Correct usage
const constItem = 10
console.log(`constItem => ${constItem}`)

//Incorrect usage => this will produce an error
/*
const constItem2
constItem2=20
*/


//Correct usage
let letItem1 = 'I love coffee'
let letItem2
let x1

console.log()
for (x1 = 2; x1 < 5; x1++) {
    letItem2 = 'slices of blueberry cake'
    console.log(`letItem => ${letItem1} with ${x1.toString()} ${letItem2} !`)
}

//Incorrect usage => this will produce an error
/*
let letItem3
for (x1 = 2; x1 < 5; x1++) {
    // This is the source of the error
    var letItem3 = 'blueberry cakes'
    console.log(`letItem => ${letItem1} with ${x1.toString()} ${letItem3} !`)
}
*/

//Correct usage
function funcMyFunction(hrs) {
    var varItem2 = hrs.toString() + " hours"
    var varItem3 = "1 second"
    return (varItem2 + " and " + varItem3)
}

var varItem1 = 'I love to drive'

console.log()
console.log(`varItem => ${varItem1} but only up to ${funcMyFunction(1.5)} !`)
for (x1 = 2; x1 < 5; x1++) {
    var varItem2 = 'minutes'
    console.log(`varItem => ${varItem1} but only up to ${x1.toString()} ${varItem2} !`)
}
console.log(`varItem => ${varItem1} but only up to ${funcMyFunction(5.5)} !`)

/*
//Incorrect usage (semantic) => the value of varItem2 can be accessed outside its defined scope
console.log(`varItem => ${varItem1} but only up to ${x1.toString()} ${varItem2} !`)

//Incorrect usage (syntax) => the value of varItem3 is not defined
console.log(`varItem => ${varItem1} but only up to ${x1.toString()} ${varItem3} !`)
*/

