if(false){
    var y = 20;
}
console.log(y); // undefined

function fun(){
    console.log(x); // accessible heare because var is function scope
    var x = 10; //  this var x not accessibale outside of this function scope
}
console.log(x); // Gives error becuse x is function scope and we try to acees x outside of the function  

function gun(){
    console.log(z); // not accessible
    let z=10;
}
/*
difference between ver and let based initialization inside function is var y will be available anywhere in the 
function even before declaring var y where as let works as like block scope only, it consider the function as a 
corresponding block and inside the block scope most important things is, the let only is available after geting
initalization means where ever you declare somthing wiht let it only accessible below it in the corresponding 
scope. */
console.log(z);
gun();







