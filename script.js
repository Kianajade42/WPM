
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
// console.log(arr)
};


 userInput.addEventListener("input", () => {
    let quoteChars = document.querySelectorAll(".quote-chars");
    
    quoteChars = Array.from(quoteChars);
    
    let userInputChars = userInput.value.split("");

        quoteChars.forEach((char, index) => {
        if(char.innerText == userInputChars[index]){
            char.classList.add("success");
        }

      else if(userInputChars[index] == null){
           if(char.classList.contains("success")){
              char.classList.remove("success");
        }
       else{
                char.classList.remove("fail");
            }
        }
            else{
                if(!char.classList.contains("fail")){
                    mistakes += 1;
                    char.classList.add("fail");
                }
                document.getElementById("mistakes").innerText =
                mistakes;   
        }
          
    });
 })


 const startTest = () => {
    mistakes = 0;
    timer ="";
    userInput.disabled = false;
    document.getElementById("start-test").style.display =
    "none";
    document.getElementById("stop-test").style.display =
    "block"; 
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