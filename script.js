let seconds = 0;
let minutes = 0;
let hours = 0;
let mili = 0;

let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;
let displayMili = 0;

let interval = 0;

let statusOfStopwatch = false;

function stopwatch(){
    mili++;

    if(mili/100 === 1){
        mili = 0;
        seconds++;

        if (seconds/60 === 1){
            seconds = 0;
            minutes++;
    
            if (minutes/60 === 1){
                minutes = 0;
                hours++;
            }
        }
    }

    if (mili < 10){
        displayMili = "0" + mili.toString();
    } else{
        displayMili = mili;
    }

    if (seconds < 10){
        displaySeconds = "0" + seconds.toString();
    } else{
        displaySeconds = seconds;
    }
    
    if (minutes < 10){
        displayMinutes = "0" + minutes.toString();
    } else{
        displayMinutes = minutes;
    }

    if (hours < 10){
            displayHours = "0" + hours.toString();
    } else{
            displayHours = hours;
    }
    
    document.getElementById("display").innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds + ":" + displayMili;
}

function startStop(){
    if (statusOfStopwatch === false){
        interval = window.setInterval(stopwatch, 10);
        document.getElementById("startStop").innerHTML = "Stop";
        statusOfStopwatch = true;
    } else {
        window.clearInterval(interval);
        document.getElementById("startStop").innerHTML = "Start";
        statusOfStopwatch = false;
    }
}

function reset(){
    window.clearInterval(interval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    mili = 0;
    document.getElementById("display").innerHTML = "00:00:00:00";
    document.getElementById("startStop").innerHTML = "Start";
}