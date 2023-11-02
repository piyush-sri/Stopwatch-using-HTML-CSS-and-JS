const minutesLabel=document.getElementById("minutes");
const secondsLabel=document.getElementById("seconds");
const millisecondsLabel=document.getElementById("milliseconds");

const startButton = document.getElementById("startBtn");
const stopButton = document.getElementById("stopBtn");
const pauseButton = document.getElementById("pauseBtn");
const resetButton = document.getElementById("resetBtn");

const lapList=document.getElementById("laplist");

//stopwatch variables
let minutes =0;
let seconds=0;
let milliseconds=0;
let intervals;

startButton.addEventListener("click",startTimer);
stopButton.addEventListener("click",stopTimer);
pauseButton.addEventListener("click",pauseTimer);
resetButton.addEventListener("click",resetTimer);

function startTimer(){
 intervals = setInterval(updateTimer,10);
 startButton.disabled = true;
 stopButton.disabled = false;
}

function stopTimer(){ 
    clearInterval(intervals);
    addtoLapList();
    resetTimerdata();
    startButton.disabled = false;
    stopButton.disabled = true;
 }

function pauseTimer(){ 
    clearInterval(intervals);
    startButton.disabled = false;
 }
function resetTimer(){
    clearInterval(intervals);
    resetTimerdata();
    startButton.disabled = false;

 }

function updateTimer(){
    milliseconds++;
    if(milliseconds === 1000){
        milliseconds=0;
        seconds++;
        if(seconds === 60){
            minutes++;
        }
        }
        displayTimer();
}

function displayTimer(){
    millisecondsLabel.textContent = padTime(milliseconds);
    secondsLabel.textContent = padTime(seconds);
    minutesLabel.textContent = padTime(minutes);
}

function padTime(time){
return time.toString().padStart(2,"0");
}

function resetTimerdata(){
    minutes=0;
    seconds=0;
    milliseconds=0;
    displayTimer();
}

function addtoLapList(){
    const lapTime = `${padTime(minutes)}:${padTime(seconds)}:${padTime(milliseconds)}`;

    const listItem = document.createElement('li');
    listItem.innerHTML = `<span>Lap ${lapList.childElementCount + 1}: </span>${lapTime}`;
    lapList.appendChild(listItem);
}