This is a simple HTML, CSS, and JavaScript code that allows a user to create a live time Leaderboard on a webpage.

Hosted Link : https://salman-555.github.io/Java_Script_M6_module/Leader%20Board/leaderBoard.html

Step by step explanation HTM , the HTML code creates the Heading of webpage and then the input bar and Button.....

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="./leaderBoard.css" />
  </head>
  <body>
    <div class="mainContainer">
      <h1>LeaderBoard</h1>
      <div class="form">
        <input type="text" id="fName" placeholder="Enter fName" />
        <input type="text" id="lName" placeholder="Enter lName" />
        <input type="text" id="country" placeholder="Enter country" />
        <input type="number" id="score" placeholder="Enter score" />
        <button id="AddDetailsButton">Add Details</button>
      </div>
      <div id="scoreMainContainer"></div>
    </div>
    <script src="./leaderBoard.js"></script>
  </body>
</html>

Now the simple css is used to design the web page (to achive the particular height , width , margin , padding ) and the beutifullnes of page

body {
    background: whitesmoke;
    color: black;
  }
  
  .mainContainer {
    /* border: 2px solid green; */
    /* width: 60%; */
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  
  #scoreMainContainer {
    width: 100%;
  }
  
  .scoreBoard {
    /* border: 2px solid red; */
    background-color: rgb(90, 163, 44);
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 1.5rem 0;
    /* border-radius: 10px; */
    box-shadow: 3px 3px 7px rgb(184, 32, 32);
  }
  
  .scoreBoard p {
    /* border: 2px solid green; */
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    font-weight: 600;
  }
  
  input {
    padding: 0.5rem 0.8rem;
    border: none;
  
    /* outline: none; */
    box-shadow: inset 3px 3px 7px rgb(78, 149, 48), inset 4px 4px 10px rgb(152, 174, 54);
    background-color: transparent;
    color: black;
  }
  
  button{
      padding: .3rem .5rem;
      border: none;
      background-color: rgb(90, 163, 44);
      color: white;
      font-size: 1rem;
      font-weight: 900;
  }


  **JS code use here to for dynamicallky adding and html tages while clicking on add Detail button  ....**

  const scoreMainContainer = document.getElementById("scoreMainContainer");
const AddDetailsButton = document.getElementById("AddDetailsButton");
console.log(AddDetailsButton);
AddDetailsButton.addEventListener("click", () => {
  const fName = document.getElementById("fName");
  const lName = document.getElementById("lName");
  const country = document.getElementById("country");
  const score = document.getElementById("score");

  const scoreBoard = document.createElement("div");
  scoreBoard.classList.add("scoreBoard");

  scoreBoard.innerHTML = `
    <p class="playerName">${fName.value} ${lName.value}</p>
    <p class="country">${country.value}</p>
    <p class="score">${score.value}</p>
    <p class="deleteIcon">&#x1f5d1;</p>`;

  scoreMainContainer.appendChild(scoreBoard);
  fName.value = "";
  lName.value = "";
  country.value = "";
  score.value = "";
  sortBoard();
  deleteElemnt();
});

function sortBoard() {
  const ScoreBoard = document.querySelectorAll(".scoreBoard");
  const arr = [];
  ScoreBoard.forEach((ele) => arr.push(ele));
  const sortedArray = arr
    .map((ele) => {
      return ele;
    })
    .sort((a, b) => {
      let runOfManOne = parseInt(a.children[2].textContent);
      let runOfManTwo = parseInt(b.children[2].textContent);
      // B = CURRENT
      // A = PREV
      // MAN 1 = PREV
      // MAN 2 = CURRENT

      // PREV IS COMMING UPAR
      // PREV > CURRENT
      if (runOfManOne > runOfManTwo) {
        return -1;
      }
      // PREV < CURRENT
      if (runOfManOne < runOfManTwo) {
        return 1;
      }
    });

  sortedArray.forEach((ele) => {
    scoreMainContainer.append(ele);
  });
}

function deleteElemnt() {
  const deleteIcon = document.querySelectorAll(".deleteIcon");
  deleteIcon.forEach((ele)=>{
    ele.addEventListener("click", (e)=>{
        return e.target.parentElement.remove()
    })
  })
}

