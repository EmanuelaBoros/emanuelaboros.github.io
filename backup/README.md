# Emanuela Boros website starter

This version uses photo projects instead of individual homepage photographs.

## Structure

- `index.html` — homepage
- `style.css` — visual style
- `script.js` — project cover carousel controls
- `projects/` — one HTML page per photo project
- `images/projects/` — cover and gallery images for each project

## Edit photo projects

On the homepage, edit the project cards in `index.html` inside:

```html
<section id="photo-projects">
```

Each card links to one page in the `projects/` folder.

## Replace images

Replace files in `images/projects/` with your real images. Keep the same filenames at first, for example:

```text
personal-space-1.jpg
personal-space-2.jpg
still-rooms-1.jpg
```

The `-1.jpg` image is used as the cover on the homepage.

## Add a new project

1. Copy one file from `projects/`, for example `personal-space.html`.
2. Rename it, for example `new-project.html`.
3. Add a new card in the homepage `project-strip`.
4. Add images in `images/projects/`.


## Etsy shop

The homepage includes a `Quiet Soup Club` shop section linking to `https://www.etsy.com/shop/QuietSoupClub`. If your Etsy shop slug is different, update the link in `index.html`.


## Quiet Soup Club logo

The Etsy section now uses a clean CSS/HTML soup-bowl logo with real selectable text, so the name is not cropped or misspelled inside an image.


Updated: Quiet Soup Club is now a small corner badge instead of a full-width website column.

## Quiet Soup Club badge
The Etsy shop is linked from a small half-patched corner sticker on the homepage. The image is `images/quiet-soup-club-corner-patch.png`; replace it if you want another logo version.


## Extracted art portfolio projects

The `projects/` folder now includes pages extracted from `ArtPortfolio_February_2011.pdf`:

- Space in Time
- 2007 Journal
- Christmas '10
- Tableau Vivant
- Tătărași
- A reface
- The same
- Înainte de a adormi

Rendered portfolio plates are stored in `images/portfolio/`.


## Update: publication additions

The Things page now includes additional publications from the uploaded application PDF, grouped by research theme, with placeholder pages under `papers/` for later notes/results.


Update: `things.html` now uses a curated high-impact publication shortlist rather than a complete bibliography.
