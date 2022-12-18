document.getElementById("calculate").onclick = function(){
    let number = document.getElementById("number").value;

    let ten = Math.floor(number / 10);
    let unit = number % 10;

    let sum = ten + unit;

    document.getElementById("result").innerHTML = sum.toString();
}