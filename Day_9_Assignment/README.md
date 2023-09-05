This is a simple HTML and JavaScript code that allows you to change the properties of a div element.

Hosted Link : https://salman-555.github.io/Java_Script_M6_module/Day_9_Assignment/index.html

Step 1: HTML
The HTML code creates a container div and a target div.

<div class="container">
  <label for="color">Color:</label>
  <select id="color">
    <option value="black">Black</option>
    <option value="red">Red</option>
    <option value="blue">Blue</option>
    <!-- Add more color options as needed -->
  </select>
  
  <label for="backgroundcolor">Background Color:</label>
  <select id="backgroundcolor">
    <option value="white">White</option>
    <option value="lightgray">Light Gray</option>
    <option value="lightblue">Light Blue</option>
    <!-- Add more background color options as needed -->
  </select>

  <label for="padding ">Padding:</label>
  <select id="padding ">
    <option value="0">0</option>
    <option value="10px">10px</option>
    <option value="20px">20px</option>
    <!-- Add more padding options as needed -->
  </select>

  <label for="fontSize ">Font Size:</label>
  <select id="fontSize ">
    <option value="12px">12px</option>
    <option value="16px">16px</option>
    <option value="20px">20px</option>
    <!-- Add more font size options as needed -->
  </select>

  <label for="fontWeight ">Font Weight:</label>
  <select id="fontWeight ">
    <option value="normal">Normal</option>
    <option value="bold">Bold</option>
    <!-- Add more font weight options as needed -->
  </select>
</div>

<div id="targetDiv">Its my pleasure to show the creativity</div>
2. JavaScript
Create a JavaScript file and add the following code:

const color = document.getElementById('color');
const backgroundcolor = document.getElementById('backgroundcolor');
const padding  = document.getElementById('padding ');
const fontSize  = document.getElementById('fontSize ');
const fontWeight  = document.getElementById('fontWeight ');
const targetDiv = document.getElementById('targetDiv');

color.addEventListener('change', () => {
  targetDiv.style.color = color.value;
});

backgroundcolor.addEventListener('change', () => {
  targetDiv.style.backgroundColor = backgroundcolor.value;
});

padding .addEventListener('change', () => {
  targetDiv.style.padding = padding .value;
});

fontSize .addEventListener('change', () => {
  targetDiv.style.fontSize = fontSize .value;
});

fontWeight .addEventListener('change', () => {
  targetDiv.style.fontWeight = fontWeight .value;
});
