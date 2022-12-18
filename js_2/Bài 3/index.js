document.getElementById("calculate").onclick = function() {
    let usd = +document.getElementById("amount").value;
    let result = usd * 23000;
    
    document.getElementById("result").innerHTML = new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'VND' }).format(result) ;
}