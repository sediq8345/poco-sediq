const h1Element = document.getElementById("h1");
const h1Text = h1Element.textContent;

const pElement = document.getElementById("p");
const pText = pElement.textContent;

const aElement = document.getElementById("a");
const aText = aElement.textContent;

for (let i = 0; i <= 1; i++){
    h1Element.textContent = h1Element.textContent + " " + h1Text;
}

for (let j = 0; j <= 3; j++){
    pElement.textContent = pElement.textContent + " " + pText;
}

for (let k = 0; k <= 6; k++){
    aElement.textContent = aElement.textContent + " " + aText;
}