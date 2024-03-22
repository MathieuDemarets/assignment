const img = document.querySelector('img');
const greet = document.querySelector('h1.greeting');
const clock = document.querySelector('.clock');

function switchImage() {
    let current = img.getAttribute('src');

    switch(current) {
        case 'img1.jpg':
            img.setAttribute('src', 'img2.jpg');
            break;
        default:
            img.setAttribute('src', 'img1.jpg');
    }
}

function greetUser() {
    let name = prompt('What is your name?');
    if (!name || name === "") {
        greetUser();
        return;
    }
    greet.textContent = "Hello " + name + "!";
}

function updateClock() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let time = `${hours}:${minutes}:${seconds}`;
    clock.textContent = time;
}

function startClock() {
    setInterval(updateClock, 1000);
}

document.addEventListener('DOMContentLoaded', greetUser);
window.addEventListener('DOMContentLoaded', startClock);
img.addEventListener('click', switchImage);