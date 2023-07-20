var teacher = "San"; // global scope
function fun(){ // global 
    console.log(teacher); // no gives error beacuse var is a function scope so we access it before decleartion
    // console.log(content); // it gives error beacuse content is block scope & so content variable access only post decleartion 
    // var teacher = "Pulkit";
    let content = "Js";   // let is block scope so the content variable access only post decleartion  
    if(content == "Js"){
        let hours = "120+";
        console.log(hours);
    }
    console.log(teacher, content); // no gives error
    // console.log(hours); // it gives error beacuse hourse variable is block scope nd we try to access it outside
}
fun();
console.log(teacher);
// console.log(content);

