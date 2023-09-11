**This is a simple HTML, CSS, and JavaScript code that allows a user to create a pokemon finder interface  on a webpage.
**
Hosted Link : https://salman-555.github.io/Java_Script_M6_module/pokemon/pokemon.html


in HTML  code we have used the h2 tag for heading and form tag for making the buttons also has been given the proper class and id's for css implementation

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./pokemon.css">
</head>
<body>
    <div class="mainContainer">
        <form>
            <input type="text" id="searchBar">
            <button id="search">Search</button>
            <button id="resetButton">Reset</button>
        </form>
        <div class="cardsContainer" id="cardsContainer">
           
        </div>
    </div>
    <script src="./pokemon.js"></script>
</body>
</html>

simple css is used for the purpose of proper marging , padding , height , width , color and much more styles for the page beutifullnes ...are as follows below

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

  now in JS part firstly we have get the all elemnts from getElementById  and fetch the url and getting the promisses which is resolved from .then and some html tags are created which is cae in to picture while calling to make the website dynamic in nature.........The JS part is as follows below

  const searchBar = document.getElementById("searchbar");
const searchButton = document.getElementById("SearchButton");
const getAllUsers = document.getElementById("getAllUsers");
const cardContainer = document.getElementById("cardContainer");


const SearchBar = document.getElementById("searchBar");
const cardsContainer = document.getElementById("cardsContainer");
const searchButton = document.getElementById("search");
const resetButon = document.getElementById("resetButton");

const pokemonDetails = [];
const fetchPokemonDetails = () => {
  const promises = [];
  for (let i = 1; i <= 150; i++) {
    const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${i}`;
    const promise = fetch(pokemonUrl).then((response) => {
      return response.json();
    });
    promises.push(promise);
    // promises.push(fetch(pokemonUrl).then((response) => response.json()));
  }
  Promise.all(promises).then((data) => {
    data.map((ele) => {
      console.log();
      const pokemonObj = {
        frontShinyImg: ele.sprites["front_shiny"],
        id: ele.id,
        name: ele.name,
        abilities: ele.abilities.map((item) => {
          return item.ability.name;
        }),
        // abilities: ele.abilities.map(ele => ele.ability.name),
        types: ele.types[0].type.name,
      };
      pokemonDetails.push(pokemonObj);
    });
    pokemonDetails.map((pokemon) => {
      createPokemonCard(pokemon);
    });
  });
};

const createPokemonCard = (pokemon) => {
  const cardDiv = document.createElement("div");
  const span = document.createElement("span");
  const img = document.createElement("img");
  const heading = document.createElement("h2");
  const abilitiesDiv = document.createElement("div");
  const abilitesparas = pokemon.abilities.map((ele, idx) => {
    const abilityPara = document.createElement("p");
    abilityPara.innerText = ele;
    return abilityPara;
  });
  const typePara = document.createElement("p");

  span.innerText = pokemon.id;
  img.src = pokemon.frontShinyImg;
  heading.innerText = pokemon.name;
  typePara.innerText = pokemon.types;
  cardDiv.classList.add("cardDiv");
  cardDiv.appendChild(span);
  cardDiv.appendChild(img);
  cardDiv.appendChild(heading);
  abilitesparas.map((ele) => {
    // console.log(ele);
    abilitiesDiv.appendChild(ele);
  });
  cardDiv.appendChild(abilitiesDiv);
  abilitiesDiv.classList.add("abilitiesDiv");
  cardDiv.appendChild(typePara);
  cardsContainer.appendChild(cardDiv);
};

searchButton.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(SearchBar.value);
  const filteredValues = pokemonDetails.filter((ele) =>
    ele.name.includes(SearchBar.value.toLowerCase())
  );
  console.log(filteredValues);
  cardsContainer.innerHTML = "";
  filteredValues.map((pokemon) => {
    createPokemonCard(pokemon);
  });
  SearchBar.value = "";
});

resetButon.addEventListener("click", (e) => {
  e.preventDefault();
  cardsContainer.innerHTML = "";

  fetchPokemonDetails();
});

fetchPokemonDetails();
