# The HTML <head>

The `<head>` element is a container for all the head elements. The `<head>` element can include a title for the HTML document, scripts, styles, meta information, and more.

## Website information

### <meta>

This element defines metadata about an HTML document. There are many things we can specify in the meta tag, but let's stick to the basics for now.

- `charset`: This specifies the character encoding for the HTML document. It is recommended to use utf-8.
- `name`: This specifies the name of the metadata. Then we use the `content` attribute to specify the value of the metadata.

```html
<head>
  <meta charset="UTF-8">
  <meta name="description" content="Free Web tutorials">
  <meta name="keywords" content="HTML, CSS, JavaScript">
  <meta name="author" content="John Doe">
</head>
```

More advanced metadata can be specified such as the details of a link to be shown when the page is shared on Facebook for example.

```html
<head>
    <meta 
        property="og:image"
        content="http://example.com/image.jpg">
    <meta
        property="og:description"
        content="A wonderful page">
    <meta
        property="og:title"
        content="An awesome page">
</head>
```

### Icons

To further enrich your site design, you can add references to custom icons in your metadata, and these will be displayed in certain contexts such as when the page is bookmarked or added to the home screen of a mobile device.

```html
<head>
    <link rel="icon" href="favicon.ico" type="image/x-icon">
</head>
```

### Language

Defining the language of the document is important for search engines and screen readers. It can be done in the `<html>` tag, but it is also possible to specify it in the text if you change languages within the document.

```html
<html lang="en-US">
    ...
    <p>Japanese example: <span lang="ja">ご飯が熱い。</span>.</p>
    ...
</html>
```

## CSS and JavaScript

You can also include references to your CSS and JavaScript files in the head of your HTML document.

### CSS

It is a language used to describe the presentation of a document written in HTML. It describes how elements should be rendered on screen, on paper, in speech, or on other media. It is also specified with a `link` tag.

```html
<head>
    <link rel="stylesheet" type="text/css" href="mystyle.css">
</head>
```

### JavaScript

JavaScript is a programming language that enables you to create dynamically updating content, control multimedia, animate images, and much more. It is also specified with a `script` tag. Make sure to use `defer` to make sure the script is executed after the document is parsed.

```html
<head>
    <script src="myscript.js" defer></script>
</head>
```

The same tag `<script>` can also be used to include JavaScript code directly in the HTML document which is why it is not simply a void element like `<link>`.

