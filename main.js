var a =1;

function postFunction() {
var input_word = text1.value;
document.getElementById("numTyping").innerHTML = a;

if(a == 1){
    document.getElementById("topic1").innerHTML = input_word;
    a++;
    }
else if(a == 2){
    document.getElementById("comment1").innerHTML = input_word;
    a++;
    }
else if(a == 3){
    document.getElementById("comment2").innerHTML = input_word;
    }
}

function clearFunction()
{
    document.getElementById("topic1").innerHTML = "";
    document.getElementById("comment1").innerHTML = "";
    document.getElementById("comment2").innerHTML = "";
    a = 1;
    document.getElementById("numTyping").innerHTML = a;
    document.getElementById("text1").value = "";
}




