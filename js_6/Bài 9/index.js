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

document.getElementById("count").onclick = ()=>{
    let result = document.getElementById("result");
    let count = 0;

    array.forEach((element)=>{
        if(Number.isInteger(element))
            count++;
    })    
    
    result.innerHTML = "Số số nguyên: " + count;
}