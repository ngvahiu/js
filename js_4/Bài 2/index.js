function calculateElectricity(e){
    if (e <= 50){
        return e*1484;
    }
    else if (e > 50 && e <= 100){
        return 50*1484 + (e-50)*1533;
    }
    else if (e > 101 && e <= 200){
        return 50*1484 + 50*1533 + (e-100)*1786;
    }
    else if (e > 200 && e <= 350){
        return 50*1484 + 50*1533 + 100*1786 + (e-200)*2242;
    }
    else{
        return 50*1484 + 50*1533 + 100*1786 + 150*2242 + (e-350)*2503;
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