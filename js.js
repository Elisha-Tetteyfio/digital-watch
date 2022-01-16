var hour, minute, seconds;
const time = new Date();
var Interval;
var gmt=true, wat=false, eat=false, cet=false;

document.getElementById("gmt").onclick = function(){
    gmt=true, wat=false, eat=false, cet=false;

    document.getElementById("gmt").style.color="rgb(10,40,80)";
    document.getElementById("wat").style.color="rgb(208, 255, 208)";
    document.getElementById("eat").style.color="rgb(208, 255, 208)";
    document.getElementById("cet").style.color="rgb(208, 255, 208)";
}
document.getElementById("wat").onclick = function(){
    gmt=false, wat=true, eat=false, cet=false;

    document.getElementById("wat").style.color="rgb(10,40,80)";
    document.getElementById("gmt").style.color="rgb(208, 255, 208)";
    document.getElementById("eat").style.color="rgb(208, 255, 208)";
    document.getElementById("cet").style.color="rgb(208, 255, 208)";
}
document.getElementById("eat").onclick = function(){
    wat=false, eat=true, gmt=false, cet=false;

    document.getElementById("eat").style.color="rgb(10,40,80)";
    document.getElementById("gmt").style.color="rgb(208, 255, 208)";
    document.getElementById("wat").style.color="rgb(208, 255, 208)";
    document.getElementById("cet").style.color="rgb(208, 255, 208)";
}
document.getElementById("cet").onclick = function(){
    gmt=false, cet=true, eat=false, wat=false;

    document.getElementById("cet").style.color="rgb(10,40,80)";
    document.getElementById("gmt").style.color="rgb(208, 255, 208)";
    document.getElementById("eat").style.color="rgb(208, 255, 208)";
    document.getElementById("wat").style.color="rgb(208, 255, 208)";
}

setInterval(gmtFn, 100);

function gmtFn(){
    
    const time = new Date();

    hour = time.getHours();

    if(wat==true){
        hour = (hour+23)%24;
        if(hour<10){hour="0"+hour}
        document.getElementById("hour").innerHTML=hour;
    }
    else if(eat==true){
        hour = (hour+3)%24;
        if(hour<10){hour="0"+hour}
        document.getElementById("hour").innerHTML=hour;
    }
    else if(cet==true){
        hour = (hour+1)%24;
        if(hour<10){hour="0"+hour}
        document.getElementById("hour").innerHTML=hour;
    }
    else {
        if(hour<10){hour="0"+hour}
        document.getElementById("hour").innerHTML=hour;
    }

    minute = time.getMinutes();
    if(minute<10){minute="0"+minute}
    document.getElementById("minute").innerHTML=minute;

    seconds = time.getSeconds();
    if(seconds<10){seconds="0"+seconds}
    document.getElementById("seconds").innerHTML=seconds;

}

