function regionPoint(){
    let val = document.getElementById("region").value;

    switch(val){
        case 'A':{
            return 1.5;
        }
            break;
        case 'B':{
            return 1;
        }
            break;
        case 'C':{
            return 0.5;
        }
            break;
        default: {
            return 0;
        }
    }
}

function objectPoint(){
    let val = document.getElementById("object").value;

    switch(val){
        case '1':{
            return 1.5;
        }
            break;
        case '2':{
            return 1;
        }
            break;
        case '3':{
            return 0.5;
        }
            break;
        default: {
            return 0;
        }
    }
}

function check(){
    let firstPoint = 
        +document.getElementById("firstPoint").value;
    let secondPoint = 
        +document.getElementById("secondPoint").value;
    let thirdPoint = 
        +document.getElementById("thirdPoint").value;

    if(!firstPoint || !secondPoint || !thirdPoint) 
        return false;
    
    
    let landmark = document.getElementById("landmark").value;

    if(firstPoint + secondPoint + thirdPoint + regionPoint() + objectPoint() >= landmark) 
        return true;

    return false;
}

function result(){
    document.getElementById('result').innerHTML = '';
    if(check()){
        document.getElementById('result').innerHTML = 'Đậu';
    }else{
        document.getElementById('result').innerHTML = 'Rớt';
    }
}

document.getElementById('check').onclick = result;