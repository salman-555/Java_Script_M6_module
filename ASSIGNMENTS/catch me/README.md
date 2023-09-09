**This is a simple HTML, CSS, and JavaScript code that allows a user to create catch me kind of game whenever we are hover on it then they will
 change their positionon on a webpage.
**
Hosted Link : https://salman-555.github.io/Java_Script_M6_module/catch%20me/catch_me.html

**HTML with litle simpler css that gives the desired margin , padding , height and width along with colours to our webpage**
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Pakad k dikhao</title>
  </head>
  <body>
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      body{
        width: 1500px;
        height: 100%;
        align-items: center;
      }
      #container {
        background-color: blueviolet;
        color: aliceblue;
        width: 90px;
        position: absolute;
      }
      h1{
        align-items: center;
      }
    </style>
    <div id="container"><h1>Catch Me</h1></div>
    <script src="./catch_me.js"></script>
  </body>
</html>

**Now in js code  we used Math.random() for randome value generation that with change the position of our dive ....... and adding and mousover event on it
**
 const container = document.getElementById("container")
 container.addEventListener("mouseover" , ()=>{
    const top = Math.floor(Math.random() * 500);
    const left = Math.floor(Math.random() * 1300);

    container.style.top = top + "px";
    container.style.left = left + "px";

 })
