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