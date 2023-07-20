const f = function fun(){
    console.log("How much fun ???")
}

f()
fun(); //  GIVES ERROR 
/*
In line no. 6 things became intresting if  we call fun() like this,  its give error that fun() is no defined so
what happend with function expression is that function expression gets the scope of there corresponding
variable in which they assigned.So this function only accessiably why f() it is not accessiable outside of f
so it if going to bound to the scope of f only.In this time function treated as value.


*/
