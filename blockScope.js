
if(true){
    var x = 20;
}
console.log(x); // 20 
/*
Here the block is no meaning to x beacuse technically the variable x global scoped here beacuse it is not 
enclosed in a function var only supports function scope and global scope. */

if(false){
    var x1 = 20;
}
console.log(x1); // this x1 is visible here so the ouptut is  Undefined
/*
In this sitution it  will not throw an error it just gives you undefined */ 

{
    let y = 10;
}
console.log(y); // error
/*
In this sitution it gives error beacuse let is support block scope so outside of the block it will not be 
visible so when we try to print y outside of the block it will throw an error. */




