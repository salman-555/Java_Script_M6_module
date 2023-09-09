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


