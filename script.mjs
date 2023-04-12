import { quotes } from "./quotes.mjs";



const quoteElement = document.getElementById('quote');
const generateButton = document.getElementById("generate");

generateButton.addEventListener("click", () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteElement.textContent = randomQuote;
});