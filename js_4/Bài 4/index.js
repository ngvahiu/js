document.getElementById("type").onchange = function(){
    let connect = document.getElementById("connect");

    if(document.getElementById("type").value == '2'){
        connect.classList.remove("d-none");
    }else{
        connect.classList.add("d-none");
    }
}

function checkHousehold(channels){
    if(channels <= 10) return 100 - 7.5*(10-channels);
    else return 100 + 7.5*(channels-10);
}

function checkEnterprise(channels,connects){
    if(connects <= 10)
        return channels*50 + 75;
    else
        return channels*50 + 75 + (connects-10)*5;
}

function check(){
    let type = document.getElementById("type").value;
    let payment = 0;

    switch(type){
        case '1':{
            let channels = +document.getElementById("channels").value;
            if(!channels){
                alert("Nhập lại dữ liệu");
                return;
            }
            payment = checkHousehold(channels);
        }
            break;
        case '2':{
            let channels = +document.getElementById("channels").value;
            let connects = +document.getElementById("connect").value;
            if(!channels || !connects){
                alert("Nhập lại dữ liệu");
                return;
            }
            payment = checkEnterprise(channels,connects);
        }
            break;
        default:{
            alert("Nhập lại dữ liệu");
            return;
        }
    }

    let code = document.getElementById("code").value;
    let result = document.getElementById("result");

    const formatter = new Intl.NumberFormat('de-DE', {
        style: 'currency', 
        currency: 'USD',
        maximumSignificantDigits: 6
    });

    result.innerHTML = "Mã khách hàng: " + code + "; Tiền cáp: " + formatter.format(payment);
}

document.getElementById("count").onclick = check;