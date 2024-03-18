# Introduction to JavaScript

## Inner HTML

A very simple and introductory way to manipulate the content of an HTML element is by using the `innerHTML` and `textContent` properties. These properties allow you to get or set the content of an element, including any HTML tags it contains.

Here's an example of how to use the `innerHTML` property to change the content of a paragraph:

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Inner HTML</title>
    </head>
    <body>
        <p id="demo">This is a paragraph.</p>
        <button onclick="changeText()">Change text</button>
        <script>
        function changeText() {
            document.getElementById("demo").innerHTML = "This is a new paragraph.";
        }
        </script>
    </body>
</html>
```

If we use the `textContent` property instead, it will treat the content as plain text, and any HTML tags will be displayed as text. In this case it will achieve the same result as using `innerHTML`:

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Inner HTML</title>
    </head>
    <body>
        <p id="demo">This is a paragraph.</p>
        <button onclick="changeText()">Change text</button>
        <script>
            function changeText() {
                document.getElementById("demo").textContent = "This is a new paragraph.";
            }
        </script>
    </body>
</html>
```