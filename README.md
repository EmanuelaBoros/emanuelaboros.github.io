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
