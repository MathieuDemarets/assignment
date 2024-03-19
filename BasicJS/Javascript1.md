# JavaScript - Dynamic client-side scripting <head>
## JavaScript first steps
JavaScript is a programming language that allows you to implement complex functionalities on web pages. Anytime a webpage is not just static, JavaScript is used. 

JavaScript is included in a page by a script tag that either uses the text of the tag as code or loads it from a file referred to with an HTML attribute. The code at the top level (outside any function) is only able to manipulate the elements that are created before the code is loaded.

### What is JavaScript?

Button that asks for a new name when pressed:
```html
<button type="button">Player 1: Chris</button>
```

```JavaScript
const button = document.querySelector("button");

button.addEventListener("click", updateName);

function updateName() {
  const name = prompt("Enter a new name");
  button.textContent = `Player 1: ${name}`;
}
```

### What can I do with JavaScript?
- Store useful values inside variables. In the above example for instance, we ask for a new name to be entered then store that name in a variable called name.
- Operations on pieces of text (known as "strings" in programming). In the above example we take the string "Player 1: " and join it to the name variable to create the complete text label, e.g. "Player 1: Chris".
- Running code in response to certain events occurring on a web page. We used a click event in our example above to detect when the label is clicked and then run the code that updates the text label.
- ...

#### Application Programming Interfaces (APIs): functionallity built on top of the client-side JavaScript language.

More advanced metadata can be specified such as the details of a link to be shown when the page is shared on Facebook for example.
- Browser APIs are built into your web browser, and are able to expose data from the surrounding computer environment, or do useful complex things.
- Third party APIs are not built into the browser by default, and you generally have to grab their code and information from somewhere on the Web.

A very common use of JavaScript is to dynamically modify HTML and CSS to update a user interface, via the Document Object Model API (your code (HTML, CSS, Javascript is executed inside an execution environment (the browser tab))). Note that the code in your web documents is generally loaded and executed in the order it appears on the page. Errors may occur if JavaScript is loaded and run before the HTML and CSS that it is intended to modify.
Each browser tab has its own separate bucket for running code in (these buckets are called "execution environments" in technical terms) — this means that in most cases the code in each tab is run completely separately, and the code in one tab cannot directly affect the code in another tab — or on another website. This is a good security measure.

#### Interpreted vs compiled code:
Javascript running order: top to bottom: interpreted language.
**Just-in-time compiling** to improve performance; the JavaScript source code gets compiled into a faster, binary format while the script is being used, so that it can be run as quickly as possible. However, JavaScript is still an interpreted language.

#### Client side vs Server side:
client-side JavaScript vs JavaScript can also be used as a server-side language, for example in the popular Node.js environment

#### Dynamic vs static code:
The word dynamic is used to describe both client-side JavaScript, and server-side languages — it refers to the ability to update the display of a web page/app to show different things in different circumstances, generating new content as required.
A web page with no dynamically updating content is referred to as static — it just shows the same content all the time.

### How to add JavaScript to your page?
```html
<script>
    // JavaScript goes here
  </script>
```

Example: when you click the button, a new paragraph is generated and placed below, containing text "You clicked the button!".
```html
<script>
    document.addEventListener("DOMContentLoaded", () => {
  function createParagraph() {
    const para = document.createElement("p");
    para.textContent = "You clicked the button!";
    document.body.appendChild(para);
  }

  const buttons = document.querySelectorAll("button");

  for (const button of buttons) {
    button.addEventListener("click", createParagraph);
  }
});
</script>
```
OR put the JavaScript in a separate file and link it to the HTML file
```html
<script src="script.js" defer></script>
```
inside script.js add:

```JavaScript
function createParagraph() {
    const para = document.createElement("p");
    para.textContent = "You clicked the button!";
    document.body.appendChild(para);
  }
  
  const buttons = document.querySelectorAll("button");
  
  for (const button of buttons) {
    button.addEventListener("click", createParagraph);
  }
```
Selecting all elements of a group on a page: querySelectorAll():

```JavaScript
const buttons = document.querySelectorAll("button");

for (const button of buttons) {
  button.addEventListener("click", createParagraph);
}
```

#### Script loading strategies

In what we have seen before the JavaScript is loaded and run in the head of the document, before HTML body is parsed.

- In the internal example:
Now we add an event listener, making sure that the HTML body is completely loaded and parsed, before running the JavaScript inside this block.
```JavaScript
document.addEventListener("DOMContentLoaded", () => {
    // …
  });
```
  
- In the external example: add 'defer' attribute, which tells the browser to continue downloading the HTML content once the `script` tag element has been reached.

```html
<script src="script.js" defer></script>
```

- An old-fashioned solution to this problem used to be to put your script element right at the bottom of the body (e.g. just before the </body> tag), so that it would load after all the HTML has been parsed. The problem with this solution is that loading/parsing of the script is completely blocked until the HTML DOM has been loaded. On larger sites with lots of JavaScript, this can cause a major performance issue, slowing down your site.

async and defer:
Scripts loaded using the async attribute will download the script without blocking the page while the script is being fetched. However, once the download is complete, the script will execute, which blocks the page from rendering. This means that the rest of the content on the web page is prevented from being processed and displayed to the user until the script finishes executing. You get no guarantee that scripts will run in any specific order. It is best to use async when the scripts in the page run independently from each other and depend on no other script on the page.

Scripts loaded with the defer attribute will load in the order they appear on the page. They won't run until the page content has all loaded, which is useful if your scripts depend on the DOM being in place (e.g. they modify one or more elements on the page).

![Alt text](C:\Users\vrank\OneDrive - Vlerick Business School\Nova SBE\Web and Cloud Computing\Summary HTML and JavaScript\javascript.png)

Example:
- scripts with an async attribute will execute as soon as the download is complete. This blocks the page and does not guarantee any specific execution order.
```html
<script async src="js/vendor/jquery.js"></script>

<script async src="js/script2.js"></script>

<script async src="js/script3.js"></script>
```

You can't rely on the order the scripts will load in. jquery.js may load before or after script2.js and script3.js and if this is the case, any functions in those scripts depending on jquery will produce an error because jquery will not be defined at the time the script runs.
'async' should be used when you have a bunch of background scripts to load in, and you just want to get them in place as soon as possible.

- scripts with a defer attribute will load in the order they are in and will only execute once everything has finished loading.
Only use this when your scripts should be run immediately and they don't have any dependencies.
Scripts loaded using the defer attribute (see below) will run in the order they appear in the page and execute them as soon as the script and content are downloaded:
```html
<script defer src="js/vendor/jquery.js"></script>

<script defer src="js/script2.js"></script>

<script defer src="js/script3.js"></script>
```
In the second example, we can be sure that jquery.js will load before script2.js and script3.js and that script2.js will load before script3.js. They won't run until the page content has all loaded, which is useful if your scripts depend on the DOM being in place (e.g. they modify one or more elements on the page).


### A first splash into JavaScript?
#### Guess the number game
Generate a random number between 1 and 100.
Record the turn number the player is on. Start it on 1.
Provide the player with a way to guess what the number is.
Once a guess has been submitted first record it somewhere so the user can see their previous guesses.
Next, check whether it is the correct number.
If it is correct:
Display congratulations message.
Stop the player from being able to enter more guesses (this would mess the game up).
Display control allowing the player to restart the game.
If it is wrong and the player has turns left:
Tell the player they are wrong and whether their guess was too high or too low.
Allow them to enter another guess.
Increment the turn number by 1.
If it is wrong and the player has no turns left:
Tell the player it is game over.
Stop the player from being able to enter more guesses (this would mess the game up).
Display control allowing the player to restart the game.
Once the game restarts, make sure the game logic and UI are completely reset, then go back to step 1.


##### Add variables to store out data
```JavaScript
let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

let guessCount = 1;
let resetButton;
```

##### Functions
```JavaScript
function checkGuess() {
  alert("I am a placeholder");
}
```

##### Operators
Normal operators like +, -, *,/, >, <
Shortcut operators like +=

| Character   | Entity |
| ---------   | ------ |
| strict equal| `===`  |
| non-equal   | `!==`  |

You can also declare strings using backticks (`). Strings declared like this are called template literals and have some special properties. In particular, you can embed other variables or even expressions in them:
```JavaScript
function checkGuess() {
  const greeting = `Hello ${name}`;
}
```
##### Conditionals
```Javascript
function checkGuess() {
  const userGuess = Number(guessField.value);
  if (guessCount === 1) {
    guesses.textContent = "Previous guesses:";
  }
  guesses.textContent = `${guesses.textContent} ${userGuess}`;

  if (userGuess === randomNumber) {
    lastResult.textContent = "Congratulations! You got it right!";
    lastResult.style.backgroundColor = "green";
    lowOrHi.textContent = "";
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = "!!!GAME OVER!!!";
    lowOrHi.textContent = "";
    setGameOver();
  } else {
    lastResult.textContent = "Wrong!";
    lastResult.style.backgroundColor = "red";
    if (userGuess < randomNumber) {
      lowOrHi.textContent = "Last guess was too low!";
    } else if (userGuess > randomNumber) {
      lowOrHi.textContent = "Last guess was too high!";
    }
  }

  guessCount++;
  guessField.value = "";
  guessField.focus();
}
``` 
- The first line declares a variable called userGuess and sets its value to the current value entered inside the text field. We also run this value through the built-in Number() constructor, just to make sure the value is definitely a number. Since we're not changing this variable, we'll declare it using const.
- Next, we encounter our first conditional code block. A conditional code block allows you to run code selectively, depending on whether a certain condition is true or not. It looks a bit like a function, but it isn't. The simplest form of conditional block starts with the keyword if, then some parentheses, then some curly braces. Inside the parentheses, we include a test. If the test returns true, we run the code inside the curly braces. If not, we don't, and move on to the next bit of code. In this case, the test is testing whether the guessCount variable is equal to 1 (i.e. whether this is the player's first go or not):
```JavaScript 
guessCount === 1;
```
If it is, we make the guesses paragraph's text content equal to Previous guesses:. If not, we don't.
- Next, we use a template literal to append the current userGuess value onto the end of the guesses paragraph, with a blank space in between.
The next block does a few checks:
   - The first if (){ } checks whether the user's guess is equal to the randomNumber set at the top of our JavaScript. If it is, the player has guessed correctly and the game is won, so we show the player a congratulations message with a nice green color, clear the contents of the Low/High guess information box, and run a function called setGameOver(), which we'll discuss later.
  - Now we've chained another test onto the end of the last one using an else if (){ } structure. This one checks whether this turn is the user's last turn. If it is, the program does the same thing as in the previous block, except with a game over message instead of a congratulations message.
  - The final block chained onto the end of this code (the else { }) contains code that is only run if neither of the other two tests returns true (i.e. the player didn't guess right, but they have more guesses left). In this case we tell them they are wrong, then we perform another conditional test to check whether the guess was higher or lower than the answer, displaying a further message as appropriate to tell them higher or lower.
- The last three lines in the function (lines 26–28 above) get us ready for the next guess to be submitted. We add 1 to the guessCount variable so the player uses up their turn (++ is an incrementation operation — increment by 1), and empty the value out of the form text field and focus it again, ready for the next guess to be entered.


##### Events 
Events are things that happen in the browser — a button being clicked, a page loading, a video playing, etc. — in response to which we can run blocks of code. Event listeners observe specific events and call event handlers, which are blocks of code that run in response to an event firing.
``` JavaScript
guessSubmit.addEventListener("click", checkGuess);
```
Here we are adding an event listener to the guessSubmit button. This is a method that takes two input values (called arguments) — the type of event we are listening out for (in this case click) as a string, and the code we want to run when the event occurs (in this case the checkGuess() function). 

##### Finishing the game functionality
```JavaScript
function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement("button");
  resetButton.textContent = "Start new game";
  document.body.append(resetButton);
  resetButton.addEventListener("click", resetGame);
}
```
- The first two lines disable the form text input and button by setting their disabled properties to true. This is necessary, because if we didn't, the user could submit more guesses after the game is over, which would mess things up.
- The next three lines generate a new `<button>`element, set its text label to "Start new game", and add it to the bottom of our existing HTML.
- The final line sets an event listener on our new button so that when it is clicked, a function called resetGame() is run.

Reset the game:
```JavaScript
function resetGame() {
  guessCount = 1;

  const resetParas = document.querySelectorAll(".resultParas p");
  for (const resetPara of resetParas) {
    resetPara.textContent = "";
  }

  resetButton.parentNode.removeChild(resetButton);

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = "";
  guessField.focus();

  lastResult.style.backgroundColor = "white";

  randomNumber = Math.floor(Math.random() * 100) + 1;
}
```


##### Loops
To print: 'apples', 'bananas', 'cherries' out in your console.
```JavaScript
const fruits = ["apples", "bananas", "cherries"];
for (const fruit of fruits) {
  console.log(fruit);
}
```

This code creates a variable containing a list of all the paragraphs inside <div class="resultParas"> using the querySelectorAll() method, then it loops through each one, removing the text content of each.
```JavaScript
const resetParas = document.querySelectorAll(".resultParas p");
for (const resetPara of resetParas) {
  resetPara.textContent = "";
}
```

##### Objects
An object is a collection of related functionality stored in a single grouping. You can create your own objects, but that is quite advanced and we won't be covering it until much later in the course. For now, we'll just briefly discuss the built-in objects that your browser contains, which allow you to do lots of useful things.

###### .querySelector()
We created a guessField constant that stores a reference to the text input form field in our HTML:
```JavaScript
const guessField = document.querySelector(".guessField");
```

###### .focus()
Automatically put the text cursor into the `<input>` text field as soon as the page loads:
```JavaScript
guessField.focus();
```

