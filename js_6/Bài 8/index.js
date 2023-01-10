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

function isPrime(val){
    if(val < 2) return false;
    let count = 0;
    for(let i = 1; i <= Math.sqrt(val); i++){
        if(val % i === 0) count++;
    }
    if(count === 1) return true;
    return false;
}

document.getElementById("find").onclick = ()=>{
    let result = document.getElementById("result");
    let len = array.length;
    let firstPrimeNumber;

    for(let i = 0; i < len; i++){
        if(isPrime(array[i])) {
            firstPrimeNumber = array[i];
            break;
        }
    }
    
    if(firstPrimeNumber === undefined)
        result.innerHTML = "Mảng không có số nguyên tố nào";
    else   
        result.innerHTML = "Số nguyên tố đầu tiên: " + firstPrimeNumber;
}