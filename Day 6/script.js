//Select Elements

let paragraph = document.getElementById("text");
let button = document.getElementById("colorButton");
let addText = document.getElementById("addTextButton");
let removeText = document.getElementById("removeTextButton");
let extraTextContainer = document.getElementById("extra-texts");

//Function to generate a random color
function getRandomColor(){
    let letters="0123456789ABCDEF";
    let color="#";
    for(let i = 0; i<6; i++)
        color+=letters[Math.floor(Math.random()*16)];

    return color;
}

//Change text color on button click
button.addEventListener("click", function(){
    paragraph.style.color = getRandomColor();
})

//Mouse over event
button.addEventListener("mouseover", function(){
    paragraph.style.backgroundColor = "lightgray";
})

//Double-click event
button.addEventListener("dblclick", function(){
    paragraph.style.backgroundColor = "transparent";
})

//Add a new paragraph
addText.addEventListener("click", function(){
    let newParagraph = document.createElement("p");
    newParagraph.textContent = "This is a dynamically added paragraph";
    newParagraph.style.color = getRandomColor();
    extraTextContainer.appendChild(newParagraph);
})

//Remove last paragraph
removeText.addEventListener("click", function(){
    let lastParagraph = extraTextContainer.lastElementChild;
    extraTextContainer.removeChild(lastParagraph);
})