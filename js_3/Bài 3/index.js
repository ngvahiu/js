document.getElementById("count").onclick = function(){
    let firstNum = document.getElementById("number_1").value;
    let secondNum = document.getElementById("number_2").value;
    let thirdNum = document.getElementById("number_3").value;

    let count = 0;
    if(firstNum % 2 == 0) count++;
    if(secondNum % 2 == 0) count++;
    if(thirdNum % 2 == 0) count++;

    document.getElementById("result").innerHTML = "Có " + count.toString() + " số chẵn, " + (3-count).toString() + " số lẻ";
}