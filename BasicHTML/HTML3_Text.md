# Handling Text in HTML

## Structure

### Headings

Besides the simple paragraph tag `<p>`, there are the heading tags `<h1>` to `<h6>`. The `<h1>` tag is the most important, and the `<h6>` tag is the least important. The importance of the heading tags is not only for the visual appearance of the text, but also for the search engines and screen readers. The headings give a semantic role to the text, and they are used to structure the content of the page.

```html
<h1>Main Title</h1>
    <h2>Section Title</h2>
        <h3>Subtitle</h3>
            <p> ... </p>
    <h2>Section 2 Title</h2>
        <h3>Subtitle</h3>
            <p> ... </p>
```

If we just want the aesthetics without the semantic, we can use the `<span>` tag. It is an inline element, and it is used to group elements for styling purposes.

```html
<span style="font-size: 32px; margin: 21px 0; display: block;">Is this a top level heading?</span>
```

### Lists

There are two types of lists: ordered and unordered. The ordered list is created with the `<ol>` tag, and the unordered list is created with the `<ul>` tag. The list items are created with the `<li>` tag.

```html
<ol>
    <li>First item</li>
    <li>Second item</li>
    <li>Third item</li>
</ol>
<ul>
    <li>Item</li>
    <li>Item</li>
    <li>Item</li>
</ul>
```

Lists can be nested as well.

```html
<ol>
    <li>First item</li>
    <li>Second item
        <ol>
            <li>Subitem</li>
            <li>Subitem</li>
        </ol>
    </li>
    <li>Third item</li>
</ol>
```

## Formatting

### Emphasis

The `<em>` tag is used to emphasize text. The `<strong>` tag is used to highlight text. The `<mark>` tag is used to highlight parts of the text.

```html
<p>This is <em>emphasized</em> text.</p>
<p>This is <strong>strong</strong> text.</p>
<p>This is <mark>highlighted</mark> text.</p>
```

If you just want the looks but not the semantics, you can use the `<span>` tag or the equivalent `<i>`, `<b>`, and `<u>` tags.

```html
<p>This is <span style="font-style: italic;">emphasized</span> text.</p>
<p>This is <span style="font-weight: bold;">strong</span> text.</p>
<p>This is <span style="text-decoration: underline;">highlighted</span> text.</p>
<!-- Or with simpler tags -->
<p>This is <i>emphasized</i> text.</p>
<p>This is <b>strong</b> text.</p>
<p>This is <u>highlighted</u> text.</p>
```

## Advanced Formatting

### Description Lists

The description list is created with the `<dl>` tag. The term is created with the `<dt>` tag, and the description is created with the `<dd>` tag. The description list is useful for glossaries, dictionaries, and metadata.

```html
<dl>
    <dt>Term 1</dt>
    <dd>Description 1</dd>
    <dt>Term 2</dt>
    <dd>Description 2</dd>
</dl>
```

### Blockquotes

The blockquote tag is used to indicate that the enclosed text is a long quotation. The `cite` attribute is used to provide the source of the quotation. It will just be indented by default, but it can be styled with CSS.

```html
<blockquote cite="https://www.example.com">
    <p>Long quotation</p>
</blockquote>
```

Short quotations can be enclosed with the `<q>` tag.

```html
<p>According to <q cite="https://www.example.com">source</q>, this is a short quotation.</p>
```

Instead of being an invisible tag, the `<cite>` tag can be used in an anchor tag to indicate the title of a creative work, such as a book, a movie, or a song.

```html
<a href="https://www.example.com"><cite>Source</cite></a>
```

### Abbreviations

The `<abbr>` tag is used to indicate an abbreviation. The `title` attribute is used to provide the full meaning of the abbreviation. The `title` attribute is also used to provide a tooltip.

```html
<p>The <abbr title="World Health Organization">WHO</abbr> is a specialized agency of the United Nations.</p>
```

### Addresses

The `<address>` tag is used to indicate the contact information of the author of the document. It is usually italicized by default.

```html
<address>
    <p>Written by John Doe.</p>
    <p>Visit us at: 123 Example Street.</p>
    <p>Contact us at: </p>
    <ul>
        <li>Tel: 01234 567 890</li>
        <li>Email: me@grim-north.co.uk</li>
    </ul>
</address>
```

### Superscript and Subscript

The `<sup>` tag is used to indicate superscript text, and the `<sub>` tag is used to indicate subscript text.

```html
<p>2<sup>10</sup> is 1024.</p>
<p>H<sub>2</sub>O is water.</p>
```

### Code formatting

Whitespace is preserved in the `<pre>` tag, and the text is displayed in a fixed-width font. The `<code>` tag is used to indicate a short piece of code. We can also use the `<kbd>` tag to indicate keyboard input and the `<samp>` tag to indicate sample output.

```html
<pre>
    <code>
        <kbd>Ctrl</kbd> + <kbd>C</kbd>
    </code>
</pre>
<p>The output is <samp>Hello, World!</samp></p>
```

### Time and Date

The `<time>` tag is used to indicate a date or a time. The `datetime` attribute is used to provide the machine-readable date and time.

```html
<p>The meeting is at <time datetime="2020-01-01T12:00">12:00</time>.</p>
```
