document.getElementById("arrange").onclick = function(){
    let firstNum = +document.getElementById("number_1").value;
    let secondNum = +document.getElementById("number_2").value;
    let thirdNum = +document.getElementById("number_3").value;

    let result_1;
    let result_2;
    let result_3;

    if(firstNum <= secondNum && firstNum <= thirdNum){
        result_1 = firstNum;
        if(secondNum <= thirdNum){
            result_2 = secondNum;
            result_3 = thirdNum;
        }else{
            result_2 = thirdNum;
            result_3 = secondNum;
        }
    }
    else if(secondNum <= firstNum && secondNum <= thirdNum){
        result_1 = secondNum;
        if(firstNum <= thirdNum){
            result_2 = firstNum;
            result_3 = thirdNum;
        }else{
            result_2 = thirdNum;
            result_3 = firstNum;
        }
    }
    else{
        result_1 = thirdNum;
        if(firstNum <= secondNum){
            result_2 = firstNum;
            result_3 = secondNum;
        }else{
            result_2 = secondNum;
            result_3 = firstNum;
        }
    }

    let arrangeResult = document.getElementById("result");
    arrangeResult.innerHTML = result_1.toString() + "->" + result_2.toString() + "->" + result_3.toString();
}