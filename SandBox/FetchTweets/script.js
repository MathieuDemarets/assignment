let tweetList = document.querySelector("ul.tweets");

window.onload = () => {
    fetch("tweets.json")
    .then(response => response.json())
    .then(data => {
        data.forEach(tweet => {
            tweetdata = tweet["data"];
            let tweetdiv = document.createElement("div");
            tweetdiv.className = "tweet";
            let text = document.createElement("p");
            text.textContent = tweetdata["text"];
            let author = document.createElement("p");
            author.innerHTML = `<i>${tweetdata["author"]}</i>`;
            let link = document.createElement("a");
            link.href = "https://twitter.com/"+tweetdata["id"];
            link.textContent = "View tweet";
            tweetdiv.appendChild(text);
            tweetdiv.appendChild(author);
            tweetdiv.appendChild(link);
            tweetList.appendChild(tweetdiv);
        });
    });
}