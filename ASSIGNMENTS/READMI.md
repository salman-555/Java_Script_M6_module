This is a simple HTML, CSS, and JavaScript code that allows a user to create an infinite scroll(using scroll event) on a webpage.

Hosted Link : https://salman-555.github.io/Java_Script_M6_module/Emoji%20keyboard/emoji.html

Step by step explanation HTM , the HTML code  creates an empty container on a  webpage along with some simple css  to design the web page (to achive the particular height , width , margin , padding ) and the beutifullnes of page  .....

 <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        #container{
            display: flex;
            flex-direction: column;
            align-items: center;
            background-color: black;
        }

        img{
            height: 300px;
            width: 200px;
            margin: 2rem;
        }
    </style>
</head>
<body>

    <div id="container"></div>
    
    <script src="./infiniteScroll.js"></script>

</body>
</html>



JS code use here to  for dynamicallky adding and html tages while scroll is done ( since we have added an scroll effect as an event on a container ) ....
const container = document.getElementById("container");

const url =
  "https://api.unsplash.com/photos/random/?client_id=_DDIVJSgdK-GI1wA3aHOtxC9YTt8tCY6-4jMk7guznY&count=20";

const fetchImage = () => {
  const image = fetch(url);
  image
    .then((data) => {
      console.log(data);
      return data.json();
    })
    .then((data) => {
      console.log(data);
      data.map((ele) => {
        console.log(ele.urls.small);
        const img = document.createElement("img");
        img.src = ele.urls.small;
        container.appendChild(img);
      });
    });
  console.log(image);
};

window.addEventListener("scroll", () => {
  console.log(window.innerHeight);
  if (
    window.scrollY + window.innerHeight >=
    document.documentElement.scrollHeight
  ) {
    fetchImage();
  }
});

fetchImage();
