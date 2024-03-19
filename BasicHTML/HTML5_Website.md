# Structuring a Website in HTML

## Semantic Wrappers

A basinc document will usually be structured with the following:

- **header** `<header>`:
Usually a big strip across the top with a big heading, logo, and perhaps a tagline. This usually stays the same from one webpage to another.

- **navigation bar** `<nav>`:
Links to the site's main sections; usually represented by menu buttons, links, or tabs. Like the header, this content usually remains consistent from one webpage to another — having inconsistent navigation on your website will just lead to confused, frustrated users. Many web designers consider the navigation bar to be part of the header rather than an individual component, but that's not a requirement; in fact, some also argue that having the two separate is better for accessibility, as screen readers can read the two features better if they are separate. A useful component of the navigation bar is the search box, it can be done as a form:

    ```html
    <form>
        <input type="search" id="search" name="q" placeholder="Search...">
        <button type="submit" value="Go">Search</button>
    </form>
    ```

- **main content** `<main>`:
A big area in the center that contains most of the unique content of a given webpage, for example, the video you want to watch, or the main story you're reading, or the map you want to view, or the news headlines, etc. This is the one part of the website that definitely will vary from page to page! It will also include many sub-components:
    - **article** `<article>`
    - **section** `<section>`
    - **element** `<div>`

- **sidebar** `<aside>`:
Some peripheral info, links, quotes, ads, etc. Usually, this is contextual to what is contained in the main content (for example on a news article page, the sidebar might contain the author's bio, or links to related articles) but there are also cases where you'll find some recurring elements like a secondary navigation system.

- **footer** `<footer>`:
A strip across the bottom of the page that generally contains fine print, copyright notices, or contact info. It's a place to put common information (like the header) but usually, that information is not critical or secondary to the website itself. The footer is also sometimes used for SEO purposes, by providing links for quick access to popular content.

In the following example, we will create a simple website with the structure described above.

```html
<!DOCTYPE html>

<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Basic Website</title>
        <link rel="stylesheet" href="style.css">
        <script src="script.js" defer></script>
    </head>
    <body>
        <header>
            <h1>My Website</h1>
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#news">News</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#about">About</a></li>
                </ul>
            </nav>
        </header>
        <main>
            <section>
                <h2>Section 1</h2>
                <article>
                    <h3>Article 1</h3>
                    <p>Content of the article 1.</p>
                </article>
                <article>
                    <h3>Article 2</h3>
                    <p>Content of the article 2.</p>
                </article>
            </section>
            <aside>
                <h2>Related</h2>
                <p>Some related content.</p>
            </aside>
        </main>
        <footer>
            <p>Copyright © 2021</p>
        </footer>
    </body>
</html>
```

## Non-Semantic Wrappers

The `<div>` tag is a non-semantic wrapper that groups elements for styling purposes. The `<span>` tag is an inline element, and it is used to group elements for styling purposes.

```html
<p>
  The King walked drunkenly back to his room at 01:00, the beer doing nothing to
  aid him as he staggered through the door.
  <span class="editor-note">
    [Editor's note: At this point in the play, the lights should be down low].
  </span>
</p>
```

## Other Tags

### Breaks

The `<br>` tag is used to create a line break in a text. It is an empty tag, and it does not have a closing tag.

```html
<p>
    This is the first line.<br>
    This is the second line.
</p>
```
To create a stronger break, we can make a horizontal line with the `<hr>` tag.

```html
<p>
    This is the first paragraph.
    <hr>
    This is the second paragraph.
</p>
```