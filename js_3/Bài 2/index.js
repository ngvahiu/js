document.getElementById("sayHello").onclick = function(){
    let currentVal = +document.getElementById("list").value;

    let result;
    switch (currentVal) {
        case 1:{
            result = "Nguời lạ ơi!";
        }
            break;
        case 2:{
            result = "Bố!";
        }
            break;
        case 3:{
            result = "Mẹ!";
        }
            break;
        case 4:{
            result = "Anh trai!";
        }
            break;
        case 5:{
            result= "Em gái!";
        }
            break;
    }
    document.getElementById("result").innerHTML = 
    "Xin chào " + result;
}