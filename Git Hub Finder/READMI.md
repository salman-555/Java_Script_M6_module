****This is a simple HTML, CSS, and JavaScript code that allows a user to find the git hub profile while searching on a webpage.**
**
Hosted Link : https://salman-555.github.io/Java_Script_M6_module/Git%20Hub%20Finder/githubFinder.html


**in HTML  code we have used the h2 tag for heading and form tag for making the buttons also has been given the proper class and id's for css implementation**
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./githubFinder.css" />
    <title>Document</title>
  </head>
  <body>
    <header>
      <h2>Github Finder</h2>
    </header>
    <form>
      <input type="search" name="Search bar" id="searchbar" />
      <div>
        <button id="SearchButton">Search</button>
        <button id="getAllUsers">Get all Users</button>
      </div>
    </form>

    <div id="cardContainer"></div>

    <script src="./githubFinder.js"></script>
  </body>
</html>

**simple css is used for the purpose of proper marging , padding , height , width , color and much more styles for the page beutifullnes ...are as follows below**

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  form {
    /* border: 2px solid red; */
    box-shadow: 2px 3px 10px red;
    outline: none;
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  input {
    margin: 1rem;
    height: 50%;
    width: 80ch;
    border: none;
    border-bottom: 2px solid red;
    outline: none;
    padding: 0 1rem;
    color: red;
    font-size: 0.9rem;
    font-weight: 600;
  }
  
  button {
    margin: 1rem;
    padding: 0.5rem 1rem;
    background-color: red;
    color: white;
    font-size: 1rem;
    border: none;
    outline: none;
  }
  
  .cardsContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
  
  .cardDiv {
    margin: 1rem;
    /* border: 2px solid red; */
    width: 20%;
    height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding: 2rem;
    box-shadow: inset 2px 2px 10px red, inset 1px 1px 5px red;
    border-radius: 10px;
  }
  
  .cardDiv span {
    position: absolute;
    top: 20px;
    right: 20px;
  }
  
  span {
    border: 2px solid red;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: red;
    color: white;
    font-size: 1rem;
    font-weight: 600;
  }
  
  .abilitiesDiv {
    /* border: 2px solid red; */
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
  
  .abilitiesDiv p {
    padding: 0.5rem 1rem;
    border: 2px solid red;
    box-shadow: inset 2px 2px 10px red, inset 1px 1px 5px red;
  }
  
  h2{
    color: rgb(0, 0, 0);
    text-transform: uppercase;
    text-shadow: 1px 1px 5px red;
  }
  
  img{
    filter: drop-shadow(3px 3px 10px red);
  }

**  now in JS part firstly we have get the all elemnts from getElementById  and fetch the url and getting the promisses which is resolved from .then and some html tags are created which is cae in to picture while calling to make the website dynamic in nature.........The JS part is as follows below**

  const searchBar = document.getElementById("searchbar");
const searchButton = document.getElementById("SearchButton");
const getAllUsers = document.getElementById("getAllUsers");
const cardContainer = document.getElementById("cardContainer");

function getUser(searchValue) {
  let apiUrl;
  if (searchValue === undefined) {
    apiUrl = `https://api.github.com/users`;
  } else {
    apiUrl = `https://api.github.com/users/${searchValue}`;
  }
  const users = fetch(apiUrl);
  users
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let result = data;
      if (searchValue === undefined) {
        result.map((ele) => {
          const card = document.createElement("div");
          const heading = document.createElement("h2");
          const img = document.createElement("img");
          const link = document.createElement("a");
          link.innerHTML = "Github Link";
          heading.innerText = ele.login;
          img.src = ele.avatar_url;
          link.href = ele.html_url;
          card.appendChild(img);
          card.appendChild(heading);
          card.appendChild(link);
          cardContainer.appendChild(card);
        });
      } else {
        cardContainer.innerHTML = "";
        console.log(result);
        if (result.message === "Not Found") {
          const heading = document.createElement("h1");
          heading.innerText = "Dhang ka search kr le naa !!!!";
          cardContainer.appendChild(heading);
        } else {
          const card = document.createElement("div");
          const heading = document.createElement("h2");
          const img = document.createElement("img");
          const link = document.createElement("a");
          link.innerHTML = "Github Link";
          heading.innerText = result.login;
          img.src = result.avatar_url;
          link.href = result.html_url;
          card.appendChild(img);
          card.appendChild(heading);
          card.appendChild(link);
          cardContainer.appendChild(card);
        }
      }
    });
}

searchButton.addEventListener("click", (e) => {
  e.preventDefault();
  const searchValue = searchBar.value;
  getUser(searchValue);
});

getAllUsers.addEventListener("click", (e) => {
  e.preventDefault();
  cardContainer.innerHTML = "";
  getUser();
});

getUser();




