

function displayTime(){

    let curr_date=new Date();

    let hours=curr_date.getHours();
    
    let minutes=curr_date.getMinutes();
    
    let seconds=curr_date.getSeconds();
    
    
    document.getElementById("hour").innerText=hours;
    
    
    document.getElementById("minute").innerText=minutes;
    
    document.getElementById("second").innerHTML=seconds;

}

const time_interval=setInterval(displayTime, 1000);
