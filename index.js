let a = 2000 
let b = 100

function divide (a,b) {
    console.log(divide);
    return a / b;

}
// Why doesn't this work? square(x) => x**2; Isn't the point of arrow function to be anonymous? I dont
//understand anonymous functions yet either, or maybe how to identify them is the better way 
// to explain (partially?)my issue.

const square = (x) => x **2;


// Why doesn't this work? let add = (a,b) => a + b;, but the same syntax worked above?
const c = 3
const d = 4
let add = (c,d) => c + d;