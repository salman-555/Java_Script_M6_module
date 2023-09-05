This is a simple HTML, CSS, and JavaScript code that allows a user to create Emoji keyboard on a webpage.

Hosted Link : https://salman-555.github.io/Java_Script_M6_module/Emoji%20keyboard/emoji.html

Step by step explanation HTM , the HTML code  creates the Heading of webpage and then the input bar and Button.....

   <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="./emoji.css" />
  </head>
  <body>
    <div class="main">
      <h1>Emoji Searching App</h1>
      <br />
      <br />
      <div>
        <input value="" type="search" name="" id="searchBar" />

        <button id="submitButton">Search</button>
      </div>
      <div id="searchResultContainer"></div>
    </div>
    <script src="./emoji.js"></script>
    <script src="./emojiList.js"></script>
  </body>
</html>

Now the simple css is used to design the web page (to achive the particular height , width , margin , padding ) and the beutifullnes of page 

  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

h1 {
  border-bottom: 2px solid black;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 1rem;
}

JS code use here to  for dynamicallky adding and html tages while search button clicked ....

const searchField = document.getElementById("searchBar");
const submitButton = document.getElementById("submitButton");
// console.log(searchField, submitButton);

const searchEmoji = () => {

if(searchField.value !== ""){
submitButton.style.display = "flex"
}else{
submitButton.style.display = "none"

}
console.log(submitButton)


  console.log("function called");
  const searchFieldValue = searchField.value;

  console.log(emojiList);
  const filteredList = emojiList.filter((e) => {
    if (e.aliases.some((ele) => ele.startsWith(searchFieldValue))) {
      return true;
    }
    if (e.tags.some((ele) => ele.startsWith(searchFieldValue))) {
      return true;
    }
  });
  const searchResultContainer = document.getElementById(
    "searchResultContainer"
  );
  searchResultContainer.innerText = "";
  filteredList.map((ele) => {
    console.log(ele);

    const emoji = document.createElement("h1");
    const description = document.createElement("p");
    const category = document.createElement("h3");

    emoji.innerText = ele.emoji;
    description.innerText = ele.description;
    category.innerText = ele.category;

    searchResultContainer.appendChild(emoji);
    searchResultContainer.appendChild(category);
    searchResultContainer.appendChild(description);
  });
};


if(searchField.value == ""){

	submitButton.style.display = "none"
}

submitButton.addEventListener("click", searchEmoji);
searchField.addEventListener("keyup", searchEmoji);

window.onload = () => searchEmoji()
