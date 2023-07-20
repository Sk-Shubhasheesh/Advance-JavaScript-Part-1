function fun(x){
    let i;
    if(x%2==0){
        i = 0;
    } else{
        i = 1;
    }
}
fun();
// so usecase of var
function gun(y){
    if(y%2==0){
        var i = 0;
    } else{
        var i = 1;
    }
}
gun(18);