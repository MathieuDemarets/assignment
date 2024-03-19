# Hyperlinks in HTML

## Anchor tags

The anchor tag is used to create a hyperlink to another webpage or to a specific location within the same webpage. The `href` attribute is used to specify the URL of the page to link to, and the text between the opening and closing tags is the visible part of the link.

### External links

```html
<a href="https://www.example.com">Visit our website</a>
```

We can also turn blocks into links by wrapping them in an anchor tag. Besides, it is useful to add a title attribute to the anchor tag to provide additional information about the link.

```html
<a href="https://www.example.com" title="Learn more about our products">
    <div>
        <h1>Visit our website</h1>
        <p>Click here to learn more about our products</p>
    </div>
</a>
```

### Internal links

Besides external websites, the anchors can also refer to other documents in the same website. The `href` attribute can be a relative path to the document.

```html
<!-- Same directory -->
<a href="about.html">About us</a>

<!-- Subdirectory -->
<a href="products/index.html">Our products</a>

<!-- Parent directory -->
<a href="../index.html">Home</a>
```

### Document fragment

We can also link to a specific section of the same document. The `href` attribute is followed by a hash symbol and the `id` attribute of the target element.

```html
<!-- in index.html -->
<h2 id="nikes">Nikes</h2>

<a href="products/index.html#nikes">Nikes</a>
```

Watch out for **relative paths**. They are relative to the location of the current document, not the location of the linked document. Sometimes, it might be more robust to use **absolute paths**.

```html
<a href="products/index.html">Home</a>

<a href="https://www.example.com/products/index.html">Home</a>
```

## Special links

### Download

The `download` attribute can be added to the anchor tag to specify that the target will be downloaded when the link is clicked. The value of the attribute is the name of the file to be downloaded.

```html
<a href="files/whitepaper.pdf" download="whitepaper.pdf">Download whitepaper</a>
```

### Mailto

The `mailto` attribute can be used to create a link that opens the default email client and starts a new email to the specified address.

```html
<a href="mailto:nowhere@mozilla.org">Send email to nowhere</a>
```

We can enrich the link with query parameters, such as the subject and the body of the email.

```html
<a
  href="mailto:nowhere@mozilla.org?cc=name2@rapidtables.com&bcc=name3@rapidtables.com&subject=The%20subject%20of%20the%20email&body=The%20body%20of%20the%20email">
  Send mail with cc, bcc, subject and body
</a>
```

