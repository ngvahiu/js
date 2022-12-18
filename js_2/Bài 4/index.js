document.getElementById("calculate").onclick = function(){
    let length = +document.getElementById("length").value;
    let width = +document.getElementById("width").value;

    let parameter = (length + width) * 2;
    let area = length * width;

    document.getElementById("parameter").innerHTML = parameter.toString();
    document.getElementById("area").innerHTML = area.toString();
}