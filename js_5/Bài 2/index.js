document.getElementById("print").onclick = ()=>{
    let result = document.getElementById("result");

    result.innerHTML = "Số số chia hết cho 3 nhỏ hơn 1000: ";

    let  count = 0;

    for(let i = 0; i < 1000; i++){
        if(i % 3 == 0){
            count++;
        }
    }

    result.innerHTML += (count + " số");
}