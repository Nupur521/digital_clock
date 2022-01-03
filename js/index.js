//To get the day of the week

let date = new Date();
let options_day = {
    weekday: 'long'
};

let day = date.toLocaleDateString('en-US', options_day);
document.getElementById('day_of_week').innerText = day;

//To get today's date
let options_date = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
}
let present_date = date.toLocaleDateString('en-GB', options_date);
document.getElementById('date').innerText = present_date;

//To get the current time
let getHours = date.getHours();
document.getElementById("hours").innerText = getHours;

let getMinutes = date.getMinutes();
document.getElementById("minutes").innerText = getMinutes;

let getSeconds = date.getSeconds();
document.getElementById("seconds").innerText = getSeconds;

function getTheSeconds() {
    if (getSeconds === 60) {
            getMinutes = getMinutes + 1;
             if (getMinutes === 60) 
            {
            getHours = getHours + 1;
            if(getHours===24)
            {
                getHours=00;
                document.getElementById("hours").innerText=getHours;
            }
            document.getElementById("hours").innerText = getHours;
            getMinutes = 00;
            }
            document.getElementById("minutes").innerText = getMinutes;
            getSeconds = 00;
        
    } 
    else {
        getSeconds = getSeconds + 1;
        document.getElementById("seconds").innerText = getSeconds;
    }
}

document.getElementById("start_button").addEventListener("click", () => {
    interval=setInterval(getTheSeconds, 1000);
})

document.getElementById("stop_button").addEventListener("click",()=>{
    clearInterval(interval);
})