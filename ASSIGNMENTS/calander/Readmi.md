This is a simple HTML, CSS, and JavaScript code that allows a user to create a livew time calander  on a webpage.

Hosted Link : 

Step by step explanation HTM , the HTML code  creates the Heading of webpage and then the input bar and Button.....

  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Calender</title>
    <script defer src="./calander.js"></script>
    <link rel="stylesheet" href="./calander.css" />
  </head>
  <body>
    <div class="main">
      <div class="container">
        <section class="month-year">
          <select class="select-month">
            <option disabled selected>Select Month</option>
            <option value="0">January</option>
            <option value="1">February</option>
            <option value="2">March</option>
            <option value="3">April</option>
            <option value="4">May</option>
            <option value="5">June</option>
            <option value="6">July</option>
            <option value="7">August</option>
            <option value="8">September</option>
            <option value="9">October</option>
            <option value="10">November</option>
            <option value="11">December</option>
          </select>
          <select class="select-year">
            <option disabled selected>Select Year</option>
          </select>
        </section>
        <section class="calender">
          <ul class="week">
            <li>sun</li>
            <li>mon</li>
            <li>tue</li>
            <li>wed</li>
            <li>thu</li>
            <li>fri</li>
            <li>sat</li>
          </ul>
          <ul class="day">
            <li class="days"></li>
            <li class="days"></li>
            <li class="days"></li>
            <li class="days"></li>
            <li class="days"></li>
            <li class="days"></li>
            <li class="days"></li>
            <li class="days"></li>
            <li class="days"></li>
            <li class="days"></li>
            <li class="days"></li>
            <li class="days"></li>
            <li class="days"></li>
            <li class="days"></li>
            <li class="days"></li>
            <li class="days"></li>
            <li class="days"></li>
            <li class="days"></li>
            <li class="days"></li>
            <li class="days"></li>
            <li class="days"></li>
            <li class="days"></li>
            <li class="days"></li>
            <li class="days"></li>
            <li class="days"></li>
            <li class="days"></li>
            <li class="days"></li>
            <li class="days"></li>
            <li class="days"></li>
            <li class="days"></li>
            <li class="days"></li>
            <li class="days"></li>
            <li class="days"></li>
            <li class="days"></li>
            <li class="days"></li>
            <li class="days"></li>
            <li class="days"></li>
          </ul>
        </section>
        <form class="date" onsubmit="ValidateDate(event)">
          <input
            type="number"
            placeholder="Enter Date"
            min="1"
            max="31"
            required
            class="EnterDate"
          />
          <input type="submit" class="submit" value="Enter" />
        </form>
      </div>
    </div>
  </body>
</html>


Now the simple css is used to design the web page (to achive the particular height , width , margin , padding ) and the beutifullnes of page 

  *{
    margin: 0;
    padding: 0;
}
.main{
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background:url("https://farm6.staticflickr.com/5763/21737775276_a1ea6c1559_o.jpg");
    background-size: cover;
}
.container{
    width: 70%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    box-shadow: 0px 0px 8px white;
    border-radius: 10px;
    background-color: rgba(0,0,0,0.7);
}
.month-year{
    width: 96%;
    height: 15%;
    display: flex;
    align-items: center;
   
}
.selected-month-year{
    color: white;
}
.calender{
    width: 96%;
    height: 60%;
}
.calender ul{
    display: flex;
    list-style: none;
    flex-wrap: wrap;

}
.calender ul li {
    width: calc(100%/7);
    text-align: center;
   padding-top: 1.5%;
   color: white;
}
.week{
    height: 15%;
    font-size: larger;
}
.week>li{
    background-color: rgba(255, 69, 0,0.5);
}
.week>li:hover{
    background-color: royalblue;
    color: white;
}
.day{
    height: 85%;
}
.day>li:hover{
    background-color: white;
    color: black;
}
.active{
    background-color: green ;
    border-radius: 5px;
}
.date{
    /* border: 1px solid yellow; */
    width: 96%;
    height: 15%;
}
select{
    font-size: larger;
    padding: 1%;
    margin-right: 2%;
}
form{
    display: flex;
    align-items: center;
}
.EnterDate{
    font-size: larger;
    padding: 1%;
    margin-right: 2%;
    width: 20%;
}
.submit{
    font-size: larger;
    padding: 1%;
    background-color: royalblue;
    color: white;
    border: none;
}
@media screen and (max-width:768px) {
    .container{
        width: 95%;
    }
}


JS code use here to  for dynamicallky adding and html tages while search button clicked ....
const current = new Date();
// lets get the complete current date
const date = current.getDate();
const month = current.getMonth();
const year = current.getFullYear();

const daysList = document.querySelectorAll(".days");

// ...................................................................................................
function agfdsgjsadfgsaj(month, year) {

  daysList.forEach((ele) => {
    ele.innerHTML = "";
  });
  console.log(month, year);
  
  const total = new Date(`${month + 1} 1, ${year} 23:15:30`);
  console.log(total);
  const day = total.getDay();
  console.log(day);
  fillDates(day, month, year); 
}
//......................................
function fillDates(day, month, year) {
   
  if (month === 0 ||month == 2 ||month == 4 ||month == 6 ||month == 7 ||month == 9 ||month == 11
  ) {
    let count = 1;
    for (var i = day; i < 31 + day; i++) {
      if (i >= day) {
        daysList[i].innerText = count;
        count++;
      }
    }
  } else if (month == 1) {
    let count = 1;
    if (year % 4 === 0) {
      for (var i = day; i < 29 + day; i++) {
        if (i >= day) {
          daysList[i].innerText = count;
          count++;
        }
      }
    } else {
      for (var i = day; i < 28 + day; i++) {
        if (i >= day) {
          daysList[i].innerText = count;
          count++;
        }
      }
    }
  } else {
    let count = 1;
    for (var i = day; i < 30 + day; i++) {
      if (i >= day) {
        daysList[i].innerText = count;
        count++;
      }
    }
  }
  highlightColor(date);
}
agfdsgjsadfgsaj(month, year);
// ..........................................................................................................
function highlightColor(date) {
    daysList.forEach(ele=>ele.classList.remove("active"))
  daysList.forEach((ele) => {
    if (ele.innerHTML == date) {
      ele.classList.add("active");
    }
  });
}

// ..........................................................................................................
function fillingYears() {
  const yearList = document.querySelector(".select-year");
  for (let i = 1900; i < 2100; i++) {
    const option=document.createElement("option")
    option.innerText=i;
    yearList.appendChild(option)
  }
}
fillingYears();
// ..........................................................................................
function takeinputs(){
    const month=document.querySelector(".select-month").value;
    const year=document.querySelector(".select-year").value;
    if(month==="Select Month"){
        const newmonth=new Date().getMonth();
        agfdsgjsadfgsaj(+newmonth,+year) // this + over here is used to convert string number into number
    }
    else if(year==="Select Year"){
      const newyear=new Date().getFullYear();
      agfdsgjsadfgsaj(+month,+newyear);
    }
    else{
        agfdsgjsadfgsaj(+month,+year)
    }
}
document.querySelector(".select-month").addEventListener("change",takeinputs)
document.querySelector(".select-year").addEventListener("change",takeinputs)
// ...............................................................................................
function ValidateDate(e) {
    e.preventDefault();
    const date=document.querySelector(".EnterDate")
    highlightColor(date.value)
    date.value=""
}