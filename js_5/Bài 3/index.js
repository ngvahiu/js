document.getElementById("print").onclick = ()=>{
    let result = document.getElementById("result");
    result.innerHTML = "Số nguyên dương nhỏ nhất: ";
    let sum = 0;
    let i;
    for(i=1; sum < 10000; i++){
        sum += i;
    }
    result.innerHTML += (--i).toString();
}