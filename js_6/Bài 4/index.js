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
    let min = Number.MAX_SAFE_INTEGER;

    if(array.length === 0){
        result.innerHTML = "Không có số dương trong mảng";
    }
    else{
        array.forEach(function(element){
            if(element > 0 && element < min) 
                min = element;
        });

        if(min === Number.MAX_SAFE_INTEGER)
            result.innerHTML = "Không có số dương trong mảng";
        else
            result.innerHTML = "Số dương nhỏ nhất: " + min;
    }
}