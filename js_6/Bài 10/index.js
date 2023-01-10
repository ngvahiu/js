let array = [];

document.getElementById("add").onclick = ()=>{
    let val = +document.getElementById("element").value;
    let arrayList = document.getElementById("arrayList");

    array.push(val);
    if(arrayList.innerHTML === ""){
        arrayList.innerHTML = val.toString();
    }else{
        arrayList.innerHTML += (',' + val.toString());
    }
}

document.getElementById("compare").onclick = ()=>{
    let result = document.getElementById("result");
    let countPositive = 0;
    let countNegative = 0;

    array.forEach((element)=>{
        if(element > 0)
            countPositive++;
        else if(element < 0)
            countNegative++;
    })    
    
    if(countPositive > countNegative)
        result.innerHTML = "Số số dương > Số số âm";
    else if(countPositive < countNegative)
        result.innerHTML = "Số số dương < Số số âm";
    else
        result.innerHTML = "Số số dương = Số số âm";
}