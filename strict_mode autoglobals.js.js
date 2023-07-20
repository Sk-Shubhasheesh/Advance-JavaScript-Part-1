
"use strict";
var teacher ="S_Bhaiya";
function fun(){
    var teacher = "Pulkit";
    content = "Js"; // not denine formally to it with let var or const
    console.log(teacher);
}
function gun(){
    var student = "Sarthak";
    console.log(student);
}
fun();
gun();
console.log(teacher);
console.log(content);

// Output - ReferenceError: content is not defined