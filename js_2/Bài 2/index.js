document.getElementById("calculate").onclick=function(){
    let firstNum = +document.getElementById("number-1").value;
    let secondNum = +document.getElementById("number-2").value;
    let thirdNum = +document.getElementById("number-3").value;
    let fourthNum = +document.getElementById("number-4").value;
    let fifthNum = +document.getElementById("number-5").value;

    let result = (firstNum + secondNum + thirdNum + fourthNum + fifthNum) / 5;

    document.getElementById("result").innerHTML = result.toString();
}