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

function swap(firstPos,secondPos) {
    let temp = array[firstPos];
    array[firstPos] = array[secondPos];
    array[secondPos] = temp;
}

function arrangeIncreasing(){
    let len = array.length;

    for(let i=0; i<len-1; i++){
        for(let j=i+1; j<len; j++){
            if(array[i] > array[j]) 
                swap(i,j);
        }
    }
}
document.getElementById("arrange").onclick = ()=>{
    let result = document.getElementById("result");
    
    arrangeIncreasing();
    
    result.innerHTML = "";
    array.forEach((element) => {
        if(result.innerHTML === ""){
            result.innerHTML = "Mảng sau khi sắp xếp: " + element.toString();
        }else{
            result.innerHTML += (',' + element.toString());
        }
    })
    
}