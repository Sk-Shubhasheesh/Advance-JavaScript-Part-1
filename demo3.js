console.log(1..toString()); // Output 1

console.log(1...toString());  // Ouptut - SyntaxError: Unexpected token
/**
 In line no 1 this .. synatx is not going to be wrong in the parsing phase because if you have a primitive 
 and you trying to .. property acess it acutally does it this is a part of boxing concept.  
but in case of ... it throwing error in parse phase nothing is executed because you dont have like ... and 
10 is primitve and console is non primitve and for non-primitive not define any property like ....

 */