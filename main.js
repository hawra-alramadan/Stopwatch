var isRunning = false, 
startTime,
currentTime,
elapsedTime = 0,
clockInterval,
hours,
minutes,
seconds,
remainder,
formattedTime;

function add_leading_zero(number){
    if(number < 10) {
        return "0" + number.toString();
    } else {
        return number.toString();
    }
}

document.getElementById("Start").onclick = function() {


        // start the clock
        isRunning = true;

        if (elapsedTime == 0) {
            startTime = new Date().getTime();
        } else {
            startTime = new Date().getTime() - elapsedTime;
        }

        clockInterval = window.setInterval(function(){

            document.getElementById("stopwatch").innerHTML = formattedTime;

        },10);

    

}



    document.getElementById("Stop").onclick = function(){

            // stop the clock
        window.clearInterval(clockInterval);
        isRunning = false;


    }
document.getElementById("Reset").onclick = function() {

    startTime = new Date().getTime();
    if (!isRunning) {
        elapsedTime = 0;
        document.getElementById("stopwatch").innerHTML = "00:00:00 000";
    }
}
        
    

    
