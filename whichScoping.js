
var teacher = "Sanket"; // teacher -> global -> sanket
function ask(question){ // ask -> gloal, question->ask
    console.log(teacher, question);
}
function fun(){  // fun -> global
    var teacher = "Pulkit";  //teacher -> fun  -> Pulkit
    ask("why?");
}
fun(); // output -> Sanket why ?