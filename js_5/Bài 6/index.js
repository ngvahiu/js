document.getElementById("print").onclick = ()=>{
    let content = document.getElementById("result");
    content.innerHTML = "";

    for(let i=1; i<=10;i++){
        if(i % 2 == 1){
            let newDiv = document.createElement('div');
            newDiv.style.background = 'blue';
            newDiv.style.height = '10%';
            newDiv.style.color = 'white';
            newDiv.innerHTML = 'Div lẻ';
            content.appendChild(newDiv);
        }else{
            let newDiv = document.createElement('div');
            newDiv.style.background = 'red';
            newDiv.style.height = '10%';
            newDiv.style.color = 'white';
            newDiv.innerHTML = 'Div chẵn';
            content.appendChild(newDiv);
        }
    }
}