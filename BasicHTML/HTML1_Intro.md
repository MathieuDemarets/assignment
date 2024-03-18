# Introduction to basic HTML

## Elements

HTML is a markup language that uses a variety of elements to create the content of a webpage. These elements are represented by tags, which are enclosed in angle brackets and form the start and end of the content. The most basic element is the paragraph, which is represented by the `<p>` tag. Here's an example of a paragraph element:

```html
<p>This is a paragraph.</p>
```

For italic text, you can use the `<em>` tag:

```html
<em>This is italic text.</em>
```

For bold text, you can use the `<strong>` tag, it can also be `nested` inside the `<em>` tag and vice versa:

```html
<em>In our phrase, we have a <strong>bold</strong> word.</em>
```

### Void elements

Some elements don't have a closing tag, and are called void elements. Some examples are the line break `<br>` and `<img>`. Here's an example of an image element:

```html
<img src="https://raw.githubusercontent.com/mdn/beginner-html-site/gh-pages/images/firefox-icon.png" alt="The Firefox Icon">
```

## Attributes

Inside the opening tag, you can also include attributes, which are used to provide additional information about the element. This is essential for `CSS` and `JavaScript` to work with the HTML.

For example, we can specify the source `src`, width `width`, and height `height` of an image:

```html
<img src="https://raw.githubusercontent.com/mdn/beginner-html-site/gh-pages/images/firefox-icon.png" alt="The Firefox Icon" width="100" height="100">
```

Some attributes are boolean, which means they don't need a value. For example, the `disabled` attribute:

```html
<button disabled>Click me</button>
```

### Anchor elements

The anchor element `<a>` is used to create hyperlinks. It has an `href` attribute that specifies the URL of the page you want to link to:

```html
<a href="https://www.mozilla.org/en-US/" title="Home Page">Mozilla</a>
```

## Anatomy of an HTML document

An HTML document is composed of a few main sections:

- `<!DOCTYPE html>`: This is the document type declaration, which helps the browser to interpret the document as HTML5.
- `<html>`: This is the root element of the document.
- `<head>`: This section contains meta-information about the document, such as its title and links to its CSS and JavaScript files.
- `<title>`: This element sets the title of the document, which is displayed in the browser's title bar or tab.
- `<body>`: This is the main content of the document, and contains all the content that you want to display to the user.

Here's an example of a basic HTML document:

```html
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="utf-8"/>
    <title>My First HTML Document</title>
  </head>
  <body>
    <h1>Hello, world!</h1>
    <p>This is a paragraph.</p>
  </body>
</html>
```

## Special characters

Some characters have special meanings in HTML, and can't be used as is. For example, the `<` and `>` characters are used to create tags, so if you want to display them as text, you need to use the `&lt;` and `&gt;` entities:

Here is a table with some of the most common special characters:

| Character | Entity |
| --------- | ------ |
| <         | `&lt;` |
| >         | `&gt;` |
| &         | `&amp;` |
| "         | `&quot;` |
| '         | `&apos;` |

## Comments

You can add comments to your HTML code using the `<!--` and `-->` tags. Comments are not displayed in the browser, and are used to add notes to your code:

```html
<!-- This is a comment -->
```
