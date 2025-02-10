let button = document.getElementById("button");
let background = document.getElementById("background");

function getRandomColor(){
    let letters="0123456789ABCDEF";
    let color="#";
    for(let i = 0; i<6; i++)
        color+=letters[Math.floor(Math.random()*16)];

    return color;
}

button.addEventListener("click", function(){
    background.style.backgroundColor = getRandomColor();
})