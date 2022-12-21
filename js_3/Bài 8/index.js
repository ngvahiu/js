document.getElementById("find").onclick = function(){
    let firstName = document.getElementById("firstName").value;
    let secondName = document.getElementById("secondName").value;
    let thirdName = document.getElementById("thirdName").value;

    let firstX = +document.getElementById("firstX").value;
    let firstY = +document.getElementById("firstY").value;
    let secondX = +document.getElementById("secondX").value;
    let secondY = +document.getElementById("secondY").value;
    let thirdX = +document.getElementById("thirdX").value;
    let thirdY = +document.getElementById("thirdX").value;
    let schoolX = +document.getElementById("schoolX").value;
    let schoolY = +document.getElementById("schoolY").value;

    if(!firstName || !secondName || !thirdName || firstX < 0 || firstY < 0 || secondX < 0 || secondY < 0 || thirdX < 0 || thirdY < 0 || schoolX < 0 || schoolY < 0){
        alert("Dữ liệu không hợp lệ !");
        return;
    }

    let firstDistance = Math.sqrt((schoolX - firstX)*(schoolX - firstX) + (schoolY - firstY)*(schoolY - firstY));
    let secondDistance = Math.sqrt((schoolX - secondX)*(schoolX - secondX) + (schoolY - secondY)*(schoolY - secondY));
    let thirdDistance = Math.sqrt((schoolX - thirdX)*(schoolX - thirdX) + (schoolY - thirdY)*(schoolY - thirdY));

    let farthest;
    if(firstDistance >= secondDistance &&           firstDistance >= thirdDistance){
        farthest = firstName;
    }else if(secondDistance >= firstDistance && secondDistance >= thirdDistance){
        farthest = secondName;
    }else{
        farthest = thirdName;
    }

    document.getElementById("result").innerHTML = "Sinh viên xa trường nhất: " + farthest;
}