
const container = document.querySelector(".container");


function setPixels(numPixels = 16){

    /* make sure container is empty before setting up a new board */
    container.innerHTML = "";
    for(let row = 0; row < numPixels; row++){
        for(let line = 0; line < numPixels; line++){
            const div = document.createElement("div");
            div.style.flex = `1 1 calc(100% / ${numPixels})`;
            div.addEventListener("mouseover", (e) => changeColor(e));
            container.appendChild(div);
        }
    }
}

function changeColor(e){
    console.log("fired");
    e.target.style.backgroundColor = "red";
}

function handleSubmit(){
    const numPixels = pixelField.value;
    if(numPixels > 100 || numPixels<5){
        alert("Please enter a number between 5 and 100");
        return;
    }
    setPixels(numPixels);
}


btn = document.querySelector("button");
pixelField = document.querySelector("#customPixels");
btn.addEventListener("click", handleSubmit);

setPixels();