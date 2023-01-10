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

document.getElementById("exchange").onclick = ()=>{
    let result = document.getElementById("result");
    let firstPos = +document.getElementById("firstPos").value;
    let secondPos = +document.getElementById("secondPos").value;
    let len = array.length;
    
    if(firstPos < 0 || firstPos >= len){
        alert("Nhập lại vị trí thứ nhất");
        return;
    }
    if(secondPos < 0 || secondPos >= len){
        alert("Nhập lại vị trí thứ hai");
        return;
    }

    let temp = array[firstPos];
    array[firstPos] = array[secondPos];
    array[secondPos] = temp;

    result.innerHTML = "";
    array.forEach((element) => {
        if(result.innerHTML === ""){
            result.innerHTML = "Mảng sau khi đổi chỗ: " + element.toString();
        }else{
            result.innerHTML += (',' + element.toString());
        }
    })    
}