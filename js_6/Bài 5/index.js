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

document.getElementById("find").onclick = ()=>{
    let result = document.getElementById("result");
    let lastEven;

    array.forEach(function(element){
        if(element % 2 === 0) 
            lastEven = element;
    });

    if(lastEven == undefined && lastEven == null){
        result.innerHTML =  "Không có số chẵn trong mảng";
    }else{
        result.innerHTML = "Số chẵn cuối cùng: " + lastEven;
    }
}