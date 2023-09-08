
This is a simple HTML, CSS, and JavaScript code that allows a user to create a wall note (for adding noted along with colours dynamically) on a webpage.

Hosted Link :https://salman-555.github.io/Java_Script_M6_module/Wall%20Notes/wall_notes.html

<!DOCTYPE html>
<html lang="en">z
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./wall_notes.css">
</head>
<body>
    <div>
        <div>
            <!-- this is for input -->
            <textarea placeholder="//Write text Here"  id="text_input"></textarea>
            
            <div>
                <input type="color" id="color_input">
                <button id="save_button">Save notes</button>
            </div>
        </div>
        <div id="output_container">
            <!-- this is for output -->
        </div>
    </div>

    <!-- <div class="notes_card">
      <p>Homework</p>
      <button>Delete</button>

    </div> -->
    <script src="./wall_notes.js"></script>
</body>
</html>

simple css is used for givinf the margin, padding , desired height , width , colour for the page beutifullnes
.notes_card{
    background-color: gray;
    padding: 10px;
    height: 200px;
    color: white;
}
#output_container{
    height: 300px;
    width: 300px;
}

now the Java Script code for making the web page dynamic in nature is as follow 

const notes =[]

  function updateDOM(data){
      const output_container = document.getElementById("output_container"
      )
      output_container.innerHTML = ' '
      data.forEach(element =>{

        const card = document.createElement('div')
        card.style.backgroundColor = element.colourHex
        card.classList.add("notes_card")
        card.classList.add("notes")
         card.innerHTML = `<p>${element.content}</p>
         <button>Delete</button>`

        output_container.appendChild(card)
    })
  }
function saveHandler(){
    //lets get the value of 
    const textBox =document.getElementById("text_input")
    const notesValue = textBox.value;
    console.log(notesValue);
    
    //lets get colour
    const colourInput =document.getElementById("color_input")
    const colourCode = colourInput.value;

    const obj = {
        content : notesValue,
        colourHex :colourCode
    }
    notes.push(obj)
    // console.log(notes);
    updateDOM(notes);
}

// adding the eventListner and Handler to save button
const saveButton = document.getElementById("save_button");
saveButton.addEventListener("click" , saveHandler)




