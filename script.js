
const quoteApiUrl = "https://api.quotable.io/random?minLength=80&maxLength=100";
const quoteSection = document.getElementById("quote");
const userInput = document.getElementById("quote-input");

let quote = "";
let time = 60;
let timer = "";
let mistakes = 0;

const renderNewQuote = async() => {
 const response = await fetch(quoteApiUrl);

 let data = await response.json();

 quote = data.content;

//  console.log(data.content);

let arr = quote.split("").map(value => {
    return "<span class='quote-chars'>" + value + "</span>"
});
quoteSection.innerHTML += arr.join("");
console.log(arr)
};

window.onload = () => {
    userInput.value = "";

    document.getElementById("start-test").style.display =
    "block";
    document.getElementById("stop-test").style.display =
    "none";

    userInput.disabled = true;
    renderNewQuote();



}