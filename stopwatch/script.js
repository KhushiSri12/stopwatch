let [seconds,min,hours]=[0,0,0];
let displayTime=document.getElementById("display-time");
let timer=null;

function stopwatch(){
    seconds++;
    if(seconds==60){
        min++;
        seconds=0;
        if(min==60){
            hours++;
            min=0;
        }
    }
    let h=hours<10?"0"+hours:hours;
    let m=min<10?"0"+min:min;
    let s=seconds<10?"0"+seconds:seconds;

    displayTime.innerHTML=h+":"+m+":"+s;
}

function watchStart(){
    if(timer!==null){
        clearInterval(timer);
    }
    timer=setInterval(stopwatch,1000);

}
function pause(){
    clearInterval(timer);
}
function reset(){
    clearInterval(timer);
    [seconds,min,hours]=[0,0,0];
    displayTime.innerHTML="00:00:00";
    
}
