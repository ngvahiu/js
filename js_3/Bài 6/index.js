function leapYear(year) {
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        return true;
    }
    return false;
}

function daysPerMonth(month, year) {
    let nNumOfDays;

    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            nNumOfDays = 31;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            nNumOfDays = 30;
            break;
        case 2:
            if (leapYear(year)) {
                nNumOfDays = 29;
            }
            else {
                nNumOfDays = 28;
            }
            break;
    }

    return nNumOfDays;
}

function validDate(month, year) {
    let bResult = true;

    if (!(year > 0 && month)) {
        bResult = false;
    }

    if (!(month >= 1 && month <= 12)) {
        bResult = false;
    }

    return bResult;
}

document.getElementById("count").onclick = function () {
    document.getElementById("result").innerHTML = " ";

    let month = +document.getElementById("month").value;
    let year = +document.getElementById("year").value;

    if (!validDate(month, year)) {
        alert("Dữ liệu không hợp lệ");
        return;
    } else {
        day = daysPerMonth(month, year);
    }
    document.getElementById("result").innerHTML = "Tháng " + month.toString() + " năm " + year.toString() + " có " + day.toString() + " ngày";
}