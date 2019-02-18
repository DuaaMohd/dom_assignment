/*
    Utilize the date class and also the css property rotate, float or flex
    
*/

function CLOCK(){
    var date = new Date();
    var h = date.getHours(); 
    var m = date.getMinutes(); 
    var s = date.getSeconds(); 
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClock").innerText = time;
    document.getElementById("MyClock").textContent = time;
    
    setTimeout(CLOCK, 1000);
    
}

CLOCK();



const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

function run_clock(){

    var date = new Date();
    var h = date.getHours(); 
    var m = date.getMinutes(); 
    var s = date.getSeconds(); 
    console.log("Hour: "+h + " Minute: "+ m + " Second: "+ s);

let hPosition = h*360/12 + ((m * 360/60)/12) ;
let mPosition = (m * 360/60) + (s* 360/60)/60;
let sPosition = s * 360/60;


HOURHAND.style.transform = "rotate(" + hPosition + "deg)";
MINUTEHAND.style.transform = "rotate(" + mPosition + "deg)";
SECONDHAND.style.transform = "rotate(" + sPosition + "deg)";

}
var interval = setInterval(run_clock, 1000);


