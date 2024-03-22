const quote = document.querySelector("#text");
const generate = document.querySelector("#new-quote");

const url = `https://api.whatdoestrumpthink.com/api/v1/quotes/random`;

function getQuote() {
    fetch(url)
    .then(response => response.json())
    .then(data => {
        quote.textContent = data.message;
    })
    .catch(error => console.log(error));
}

generate.addEventListener("click", getQuote);
