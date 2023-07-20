
console.log(name); //  in case of let  it gives error while name is a global so we can 
// accessed it everywhere so why it throw error but in case of var it doesnot give error
// global variable
    //let name = "Sk";
var name = "Sk";
function fun(){
    console.log(name);
} 
fun();
console.log(name);