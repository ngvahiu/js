document.getElementById("calculate").onclick = function(){
    let salaryPerDay = document.getElementById("salary").value;
    let numsOfDays = document.getElementById("numsOfDays").value;
    let totalSalary = +salaryPerDay * +numsOfDays;

    document.getElementById("totalSalary").innerHTML = totalSalary.toString();
}