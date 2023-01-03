document.getElementById("print").onclick = ()=>{
    let n = +document.getElementById("n").value;
    if(n <= 1) return;
    let result = document.getElementById("result");

    let count = 0;
    for(let i = 1; i <= Math.sqrt(n);i++){
        if(n % i == 0) count++;
    }
    if(count == 1){
        result.innerHTML += (" " + n.toString());
    }
}