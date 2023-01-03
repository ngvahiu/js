document.getElementById("print").onclick = ()=>{
    let x = +document.getElementById("x").value;
    let n = +document.getElementById("n").value;

    let result = document.getElementById("result");
    result.innerHTML = "Tổng: ";
    
    let sum = 0;
    for(let i=1; i<=n;i++){
        sum += x**i;
    }

    result.innerHTML += sum;
}