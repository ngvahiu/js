document.getElementById("guess").onclick = function(){
    document.getElementById("result").innerHTML = "";

    let a = +document.getElementById("edge_1").value;
    let b = +document.getElementById("edge_2").value;
    let c = +document.getElementById("edge_3").value;

    let result;
    if(a > b + c || b > a + c || c > a + b){
        alert("Dữ liệu không hợp lệ !");
        return;
    }else{
        if( a == b && b == c){
            result = "đều";
        }
        else if(a*a == b*b + c*c || 
                b*b == a*a + c*c ||
                c*c == a*a + b*b){
            result = "vuông";
        }
        else if(a == b || a == c || b == c){
            result = "cân";
        }
    }
    if(!result) {
        document.getElementById("result").innerHTML = "Một loại tam giác khác";
    }else{
        document.getElementById("result").innerHTML = "Hình tam giác " + result;
    }
}