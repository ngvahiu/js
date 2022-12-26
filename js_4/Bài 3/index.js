function taxType(salary){
    if(salary <= 60000000) return 5 / 100;
    else if(salary > 6000000 && 
            salary <= 120000000) return 10 / 100;
    else if(salary > 120000000 && 
            salary <= 216000000) return 15 / 100;
    else if(salary > 216000000 && 
            salary <= 384000000) return 20 / 100;
    else if(salary > 384000000 && 
            salary <= 624000000) return 25 / 100;
    else if(salary > 624000000 && 
            salary <= 960000000) return 30 / 100;
    else (salary > 960000000) 
        return 35 / 100;
}

function calculateIndividualTax(){
    let salary = +document.getElementById("salary").value;
    let numOfPersons = +document.getElementById("persons").value;
    let name = document.getElementById("name").value;

    if(!salary ||  salary < 0){
        alert("Số tiền thu thập không hợp lệ! Vui lòng nhập lại");
    }

    let totalTax = salary*taxType(salary) - numOfPersons*160000;

    const formatter = new Intl.NumberFormat('de-DE', {
        style: 'currency', 
        currency: 'VND',
        maximumSignificantDigits: 6
    });

    document.getElementById("result").innerHTML = "Họ tên: " + name + "; Tiền thuế thu thập cá nhân: " + formatter.format(totalTax);
}

document.getElementById("count").onclick = calculateIndividualTax;