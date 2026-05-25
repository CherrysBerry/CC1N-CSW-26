//saída de dados
document.writeln("Hello World!");
window.alert("Hello from the other side");
document.getElementById("title").innerHTML = "Can you hear me?";
//entrada de dados


let name = window.prompt("Hello, how are you?")

document.getElementById("name").innerHTML = name

let resp = window.confirm("At least I can say that I've tried ")
if (resp){
    document.getElementById("resposta").innerHTML = "But it don't matter, it clearly doesn't tear you apart anymore"
}
else{
    document.getElementById("resposta").innerHTML = "To tell you I'm sorry for breaking your heart"
}

function sendName(){
    let nameAnswer = document.getElementById("inputName").value;
    const answer = document.getElementById("containerAnswer");
    answer.innerHTML = "asdasdghashd"

}