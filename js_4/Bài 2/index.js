function calculateElectricity(e){
    if (e <= 50){
        return e*500;
    }
    else if (e > 50 && e <= 100){
        return 50*500 + (e-50)*650;
    }
    else if (e > 100 && e <= 200){
        return 50*500 + 50*650 + (e-100)*850;
    }
    else if (e > 200 && e <= 350){
        return 50*500 + 50*650 + 100*850 + (e-200)*1100;
    }
    else{
        return 50*500 + 50*650 + 100*850 + 150*1100 + (e-350)*1300;
    }
}

function result(){
    let electricity = +document.getElementById("electricity").value;

    if(!electricity ||  electricity < 0){
        alert("Số kw không hợp lệ! Vui lòng nhập lại");
    }

    let name = document.getElementById("name").value;
    let result = document.getElementById("result");
    let payment = calculateElectricity(electricity);

    const formatter = new Intl.NumberFormat('en-IN', {
        maximumSignificantDigits: 3
    });

    result.innerHTML = "Họ tên: " + name + "; Tiền điện: " + formatter.format(payment);
}

document.getElementById("count").onclick = result;