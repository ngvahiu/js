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

document.getElementById("calculate").onclick = ()=>{
    let result = document.getElementById("result");
    let len = array.length;
    if(len === 0){
        result.innerHTML = "Tổng: 0";
    }else{
        let sum = 0;
        for(let i=0; i<len; i++){
            sum += array[i];
        }
        result.innerHTML = ("Tổng: " + sum.toString());
    }
}