function Printout() {
    let side1 = document.getElementById("FirstNumber").value;
    let side2 = document.getElementById("SecondNumber").value;
    let side3 = document.getElementById("ThirdNumber").value;
    
    if(isNaN(side1) || isNaN(side2) || isNaN(side3) ){
        alert("Giá trị này không phải dạng số")
    } else{
        var perimeter = (parseInt(side1)  + parseInt(side2) + parseInt(side3))/2;
    }   
    
    var area =  Math.sqrt(perimeter*((perimeter-side1)*(perimeter-side2)*(perimeter-side3)));
    document.getElementById("Triangle").innerHTML = "Diện tích tam giác bạn cần tìm: " + area;
}
