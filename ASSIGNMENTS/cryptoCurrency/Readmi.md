This is a simple HTML, CSS, and JavaScript code that allows a user to create an webpage for crypto currancy details

Hosted Link : https://salman-555.github.io/Java_Script_M6_module/ASSIGNMENTS/cryptoCurrency/CryptoCurrency.html

Step by step explanation HTM , the HTML code  creates an empty container on a  webpage along with div , h1  and P tag 
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="./cryptoCurrency.css" />
  </head>
  <body>
    <!-- header -->
    <nav>
      <div class="headerDiv">
        <img src="./logo.png" alt="" />
        <a href="./CryptoCurrency.html">
          <h1>CryptoView</h1>
        </a>
      </div>
      <a href="./search.html">
        <button>search</button>
      </a>
    </nav>
    <!-- main -->
    <section>
      <div class="mainContainer">
        <div class="textContainer">
          <h1>CryptroView</h1>
          <p>A platform to view information about all cryptocurrencies live.</p>
        </div>
        <div class="imgContainer">
          <img src="./main_image.svg" alt="" />
        </div>
      </div>
    </section>
    <!-- topCoin -->
    <div class="topCoinMainContainer">
      <h2>Top Coins</h2>
      <div class="TopCoinsDiv" id="TopCoinsDiv"></div>
    </div>

    <!-- footer -->
    <footer>
      <p>CryptoView Project</p>
      <img src="./github_logo.png" alt="" />
    </footer>
    <script src="./cryptoCurrency.js"></script>
  </body>
</html>

some simple css  to design the web page (to achive the particular height , width , margin , padding ) and the beutifullnes of page  .....

  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

*::-webkit-scrollbar{
    display: none;
}

nav {
  /* border: 2px solid red; */
  display: flex;
  justify-content: space-between;
  padding: 1rem 4rem;
  width: 100%;
  height: 10vh;
  align-items: center;
}

.headerDiv {
  display: flex;
  width: 15%;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  /* border: 2px solid green; */
}

.headerDiv a {
  /* border: 2px solid red; */
  text-decoration: none;
  width: 60%;
  color: black;
}
.headerDiv img {
  width: 50px;
  height: 50px;
}

nav a {
  width: 10%;
  height: 100%;
  display: flex;
  /* border: 2px solid red; */
  text-decoration: none;
}

nav a button {
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background-color: rgb(255, 140, 0);
  font-size: 1rem;
  border-radius: 10px;
  font-weight: 700;
  box-shadow: 2px 2px 3px grey;
  /* border: 2px solid red; */
}

.mainContainer {
  /* border: 2px solid green; */
  height: 60vh;
  display: flex;
  justify-content: space-between;
  background-color: rgb(238, 238, 238);
}

.mainContainer .textContainer {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.textContainer h1 {
  font-size: 4rem;
}

.textContainer p {
  font-size: 1.5rem;
}

.imgContainer {
  width: 50%;
  /* border: 2px solid red; */
  display: flex;
  justify-content: center;
  align-items: center;
}

.imgContainer img {
  width: 50%;
  height: 100%;
}

.topCoinMainContainer {
  /* border: 2px solid red; */
  height: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(238, 238, 238);
}

footer {
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 4rem;
}

footer img {
  width: 50px;
  height: 50px;
}

.searchSectionMainContainer {
  height: 80vh;
  background-color: rgb(238, 238, 238);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.searchContaner {
  /* border: 2px solid red; */
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 20%;
}

.searchContaner form input {
  padding: 0.5rem 1rem;
}

.searchContaner input[type="text"] {
  width: 80ch;
}

.searchResultContainer {
  height: 80%;
}

#TopCoinsDiv {
  display: flex;
  height: 90%;
  /* border: 2px solid red; */
  width: 100%;
  overflow-x: scroll;
  align-items: center;
}

.topcoinsCardContainer {
  /* border: 2px solid red; */
  display: flex;
  padding: 1rem;
  min-width: 350px;
  height: 80px;
  margin: 0 2rem;
  background-color: white;
  box-shadow: 2px 2px 3px grey;
  justify-content: space-around;
  align-items: center;
}

.topcoinsCardContainer img{
    width: 40px;
    height: 40px;
}




JS code use here to  for dynamicallky adding and html tages with click type of event Listener is done ( since we have added an scroll click as an event on a container ) ....
const container = document.getElementById("container");
const getCurrentConversionRate = async () => {
  const data = await fetch(
    "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr"
  );
  const res = await data.json();
  loadTopCoins(res);
};

const loadTopCoins = async (data) => {
  const conversionRate = data.bitcoin.inr;
  const trendingCoins = await fetch(
    "https://api.coingecko.com/api/v3/search/trending"
  );
  const res = await trendingCoins.json();
  renderTopCoinsOnScreen(conversionRate, res);
};

const renderTopCoinsOnScreen = (conversionRate, topCoins) => {
  console.log(conversionRate, topCoins);
  for (let i = 0; i < topCoins.coins.length; i++) {
    const coinData = topCoins.coins[i].item;
    const logo = coinData.thumb;
    const name = `${coinData.name} (${coinData.symbol})`;
    const price =
      Math.round(coinData.price_btc * conversionRate * 10000) / 10000;
    createCard(logo, name, price);
  }
};

const createCard = (logo, name, price) => {
  console.log(logo, name, price);
  const cardContainer = document.createElement("div");
  cardContainer.classList.add("topcoinsCardContainer");

  const img = document.createElement("img");
  img.src = logo;
  img.classList.add("topCoinsLogoImg");

  const div = document.createElement("div");
  div.classList.add("nameAndPriceContainerTopCoins");

  const name2 = document.createElement("h2");
  name2.innerText = name;

  const price2 = document.createElement("p");
  price2.innerText = price;

  div.appendChild(name2);
  div.appendChild(price2);

  cardContainer.appendChild(img)
  cardContainer.appendChild(div)
  document.getElementById("TopCoinsDiv").appendChild(cardContainer)
};

window.onload = function () {
  getCurrentConversionRate();
};


After serch we have UI which is based on search.html.. and his style and js as search.css and search.js  are as follow

  <!-- //seach.html -->

 <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="./cryptoCurrency.css" />
    <link rel="stylesheet" href="./search.css">
  </head>
  <body>
    <!-- header -->
    <nav>
      <div class="headerDiv">
        <img src="./logo.png" alt="" />
        <a href="./CryptoCurrency.html">
          <h1>CryptoView</h1>
        </a>
      </div>
      <a href="./search.html">
        <button>search</button>
      </a>
    </nav>
    <div class="searchSectionMainContainer">
      <div class="searchContaner" >
        <h1>Search...</h1>
        <form method="GET">
          <input type="text" name="q" />
          <input type="submit" value="Search" />
        </form>
      </div>
      <hr />
      <div class="searchResultContainer" id="searchResultContainer"></div>
    </div>
    <footer>
      <p>CryptoView Project</p>
      <img src="./github_logo.png" alt="" />
    </footer>
    <script src="./search.js"></script>
  </body>
</html>


    <!-- //search.css  -->

 .searchResultContainer{
    /* border:2px solid red; */
    overflow-y: scroll;
}

.searchContainer22{
    margin-bottom: 1rem;
    border:2px solid rgb(28, 6, 6);

}

.searchContainer22 h3{
    width: 5%;
    /* border: 1px solid red; */
}


.searchContainer22 div{
    width: 60%;
    /* border: 2px solid green; */
}
.button{
    border: 3px dashed rgb(41, 11, 11);
    background-color: rgb(43, 158, 43);
}

    <!-- //search.js -->

 const searchData = async () => {
  const currentPath = window.location.href;
  const urlObj = new URL(currentPath);
  const params = new URLSearchParams(urlObj.search);
  if (!params.has("q")) {
    return;
  }

  document.getElementsByName("q")[0].value = params.get("q");
  const res = await fetch(
    `https://api.coingecko.com/api/v3/search?query=${params.get("q")}`
  );
  const data = await res.json();
  renderCoinsOnScreen(data);
};

const renderCoinsOnScreen = (data) => {
  console.log(data.coins);
  for (let i = 0; i < data.coins.length; i++) {
    const coinData = data.coins[i];
    const index = i + 1;
    const logo = coinData.thumb;
    const name = `${coinData.name} (${coinData.symbol})`;
    const coinId = coinData.id;
    createCard(index, logo, name, coinId);
  }
};

const createCard = (index, logo, name, coinId) => {
  console.log(logo, name, coinId);
  const cardContainer = document.createElement("div");
  cardContainer.classList.add("topcoinsCardContainer");
  cardContainer.classList.add("searchContainer22");

  const Index = document.createElement("h3");
  Index.innerText = index;

  const img = document.createElement("img");
  img.src = logo;
  img.classList.add("topCoinsLogoImg");

  const div = document.createElement("div");
  div.classList.add("nameAndPriceContainerTopCoins");

  const name2 = document.createElement("h2");
  name2.innerText = name;

  const price2 = document.createElement("p");
  price2.innerText = coinId;

  div.appendChild(name2);
  div.appendChild(price2);

  const moreDetails = document.createElement("a");
  a.classList.add("button");
  moreDetails.innerText = "More Details";
  moreDetails.href = "./detail.html?id=" + coinId;

  cardContainer.appendChild(Index);
  cardContainer.appendChild(img);
  cardContainer.appendChild(div);
  cardContainer.appendChild(moreDetails);
  document.getElementById("searchResultContainer").appendChild(cardContainer);
};

window.onload = function () {
  searchData();
};
   
