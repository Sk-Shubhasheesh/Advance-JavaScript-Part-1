function fun(fn){
    console.log("Wlcome to fun");
    fun();
}
fun(function askingAboutFun(){
    console.log("Wow so much fun");
})