function read(num){
    let result;
    switch(num){
        case 0:{
            result = "";
        }
            break;
        case 1:{
            result = "một";
        }
            break;
        case 2:{
            result = "hai";
        }
            break;
        case 3:{
            result = "ba";
        }
            break;
        case 4:{
            result = "bốn";
        }
            break;
        case 5:{
            result = "năm";
        }
            break;
        case 6:{
            result = "sáu";
        }
            break;
        case 7:{
            result = "bảy";
        }
            break;
        case 8:{
            result = "tám";
        }
            break;
        case 9:{
            result = "chín";
        }
            break;    
    }
    return result;
}

document.getElementById("read").onclick = function(){
    let num = +document.getElementById("number").value;

    if(!num || num <= 99 || num > 999){
        alert("Dữ liệu không hợp lệ !");
        return;
    }

    let hundred = Math.floor(num / 100);
    let ten = Math.floor((num - hundred * 100)/10);
    let unit = num % 10;

    let readHundred = read(hundred);
    let readTen = read(ten);
    let readUnit = read(unit);

    if(ten == 0){
        document.getElementById("result").innerHTML = readHundred + " trăm lẻ " + readUnit;
    }else if(ten == 1){
        document.getElementById("result").innerHTML = readHundred + " trăm " + "mười " + readUnit;
    }else{
        document.getElementById("result").innerHTML = readHundred + " trăm " + readTen + " mươi " + readUnit;
    }
}