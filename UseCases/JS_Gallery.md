# Basic Scripts

## Image changer

This snippet enables you to replace an image with another one when the user clicks on it and switches back to the original image when the user clicks on it again.

```javascript
cont img = document.querySelector('img');

img.onclick = function() {
  const src = img.getAttribute('src');
  if (src === 'image1.jpg') {
    img.setAttribute('src', 'image2.jpg');
  } else {
    img.src = 'image1.jpg';
  }
};
```

## Prompt and store user input

This snippet prompts the user to enter their name and stores it in a variable. We also add an initialization code underneath the function definition to display the user's name in the `h1` element.

```javascript
function setName() {
    const name = prompt('Please enter your name');
    localStorage.setItem('name', name);
    document.querySelector('h1').textContent = `Hello ${name}`;
}
if(!localStorage.getItem('name')) {
    setName();
} else {
    const storedName = localStorage.getItem('name');
    document.querySelector('h1').textContent = `Hello ${storedName}`;
}
```

## Recursive prompt to avoid null input

This snippet prompts the user to enter their name and stores it in a variable. If the user enters a null value, the prompt will appear again.

```javascript
function setName() {
    const name = prompt('Please enter your name');
    if (!name) {
        setName();
    } else {
        localStorage.setItem('name', name);
        document.querySelector('h1').textContent = `Hello ${name}`;
    }
}
```