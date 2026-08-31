# Photo Stickers Directory

Place your anniversary photos here with the following names:

- `photo1.png` - First photo
- `photo2.png` - Second photo
- `photo3.png` - Third photo
- `photo4.png` - Fourth photo

## Supported Formats
- PNG
- JPG/JPEG
- WEBP
- GIF

## Recommended Size
- Minimum: 300x300px
- Ideal: 400x400px - 600x600px
- Maximum: 2000x2000px (for performance)

## How to Add Photos

1. Save your photos to this directory
2. Use the exact filenames: `photo1.png`, `photo2.png`, etc.
3. The website will automatically load them as beautiful stickers
4. Edit captions in `js/main.js` in the `anniversaryConfig.photos` array

## Example Configuration

```javascript
photos: [
    {
        src: "assets/photos/photo1.png",
        caption: "That moment ♡"
    },
    {
        src: "assets/photos/photo2.png",
        caption: "One of my favorites"
    },
    {
        src: "assets/photos/photo3.png",
        caption: "Still makes me smile"
    },
    {
        src: "assets/photos/photo4.png",
        caption: "Forever in my heart"
    }
]
```

If a photo is missing, the website will display a placeholder (📷) instead.
