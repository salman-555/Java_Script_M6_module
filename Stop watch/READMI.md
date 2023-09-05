This is a simple HTML, CSS, and JavaScript code that allows a user to create stop watch on a webpage.

Hosted Link : https://salman-555.github.io/Java_Script_M6_module/Stop%20watch/timer.html

  Step by step explanation HTM , the HTML code creates the skelton of our webpage where we used siple div for assigning the timer text ..
  then afyer that we used 3 buttons ane after another for the start  , pause , and reset....also soem basic css is inbuited in same html file 
  here we used internal css.....

   <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Timer ⏲ </title>
</head>
<body>
    <style>
        *{
            margin: 0;
            padding:  0;
            box-sizing: border-box;
            background-color: yellow;
        }
       .container{
        text-align: center;
        top: auto;
        left: auto;
        font-size: 64px;
        margin-top: 200PX;
        /* display: flex; */
        /* justify-content: center; */

       } 
    </style>
    <div class="container">
        <div id="time-text">00:00:00</div>
            <div>
                <button id="start-btn" style="font-size: 30px; border-radius: 15px; background-color: rgb(11, 164, 11); color: wheat;">Start</button>
                <button id="pause-btn" style="font-size: 30px; border-radius: 15px; background-color: rgb(169, 37, 37); color: wheat;">Pause</button>
                <button id="reset-btn" style="font-size: 30px; border-radius: 15px; background-color: rgb(50, 92, 128); color: wheat;">Reset</button>
            </div> 
    </div>
    <script src="./timer.js"></script>
</body>
</html>



Now in JS part we we used 3 function for 3 different buttons and then  created an updateDome function  for second and minut calculation

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
