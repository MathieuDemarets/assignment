# The HTML <head>

The `<head>` element is a container for all the head elements. The `<head>` element can include a title for the HTML document, scripts, styles, meta information, and more.

## <meta>

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
