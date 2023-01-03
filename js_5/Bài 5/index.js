document.getElementById("print").onclick = ()=>{
    let n = +document.getElementById("n").value;
    let result = document.getElementById("result");
    result.innerHTML = "Giai thừa: ";

    let factorial = 1;
    for(let i = 1; i <= n; i++){
        factorial*=i;
    }

    result.innerHTML+= factorial;
}