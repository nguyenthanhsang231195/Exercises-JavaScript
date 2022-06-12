let today = new Date();
var day = today.getDay();
var daylist = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
console.log("Today is : " + daylist[day] + ".");

var daynow = today.getDate();
var monthnow = today.getMonth();
var yearnow = today.getFullYear();

if (daynow < 10){
    daynow = `0${daynow}`;
}

if (monthnow < 10){
    monthnow = `0${monthnow}`;
}

today = `${daynow}/${monthnow}/${yearnow}`; 
console.log(today);