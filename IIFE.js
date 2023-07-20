
(function x(y) {
    console.log("Hi", y);
})
// calling it
("Shubhasheesh");



function x(){
    console.log("Hallo ji")
}


// we create anither function with same name x using iife its does not through any error so it is usecse of IIFE
(function x(y){
    console.log("Namste", y);
})
// calling it
("JavaScript");


// another usecase
function f(){
    return 1;
}
function g(){
    return 2;
}

// var i = 10;
// if(i%2==0){
//     var res  = f();
// } else{
//     var res = g();
// }
// console.log(res)

// we can do same thing using IIFE
var i = 10
var res = (function x(i){
    if (i%2==0) return f();
    else return g();
})
(i)
console.log(res)