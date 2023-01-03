document.getElementById("print").onclick = () =>{
    let result = document.getElementById("result");

    result.innerHTML = "Số chẵn: ";
    for(let i = 0; i < 100; i+=2){
        result.innerHTML += (i + " ");
    }
    result.innerHTML += "\n";
    result.innerHTML += "Số lẻ: ";
    for(let i = 1; i < 100; i+=2){
        result.innerHTML += (i + " ");
    }
}