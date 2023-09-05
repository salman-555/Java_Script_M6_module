// import "./styles.css";

var timestamp = 0
var intervalRef = null;

document.getElementById('start-btn').addEventListener("click",startHandler)

document.getElementById('pause-btn').addEventListener("click",pauseHandler)

document.getElementById('reset-btn').addEventListener("click",resetHandler)

//on start button click
function startHandler(){
  intervalRef=setInterval(()=>{
    timestamp +=1
    updateDom()
  },10)
}

// on pause button click
function pauseHandler(){
  clearInterval(intervalRef);
}

//on reset button click
function resetHandler(){
  clearInterval(intervalRef);
  timestamp=0;
  updateDom();
}

const updateDom = ()=>{


  // calculation of seconds
  let seconds = timestamp/100;
  seconds= Math.floor(seconds)%60
  seconds = seconds<10?'0'+seconds:seconds

  // calculation of minutes
  let minutes = Math.floor(seconds / 60);
  let extraSeconds = seconds % 60;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  extraSeconds = extraSeconds < 10 ? "0" + extraSeconds : extraSeconds;

  //DOM Update - dom manipulation 
  document.getElementById("time-text").innerText = `${minutes}:${seconds}:${timestamp%100}`
}