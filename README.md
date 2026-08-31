# 💕 One Month of Us - Anniversary Website

A beautiful, interactive anniversary website celebrating **Saksham ❤️ Yashica** and their first month together.

**Live Website:** [View Here](https://yashilovesme.github.io/anniversary-website)

---

## 🎨 Features

### Core Experience
- **Hero Section** with animated particles and blooming hydrangea flowers
- **Countdown Timer** tracking to the anniversary moment (September 1, 2026 at 12:20 AM)
- **Anniversary Message** with line-by-line reveal animation
- **Interactive Timeline** documenting the first month together
- **Digital Scrapbook** with rotating photo stickers

### Interactive Games
1. **Catch the Hearts** - Collect 10 hearts before time runs out
2. **Perfect Match** - Memory matching game with 8 pairs
3. **Find the Hidden Heart** - Click to reveal a hidden message in a garden scene

### Hidden Elements
- **Secret Flower** - Click the hydrangea flower multiple times to unlock a secret message
- **Easter Egg** - Click the heart in the top-right corner 5 times for a celebration
- **Elegant Letter** - Click the envelope to open a heartfelt letter

### Technical Excellence
- ✨ Smooth animations and transitions
- 📱 Fully responsive design (mobile, tablet, desktop)
- ♿ Accessibility features (reduced motion support, keyboard navigation)
- 🎵 Optional background music control
- 🚀 No external dependencies - pure HTML, CSS, JavaScript

---

## 📁 Project Structure

```
anniversary-website/
│
├── index.html                 # Main HTML file
├── css/
│   └── style.css             # All styles and animations
├── js/
│   ├── main.js               # Core functionality
│   ├── games.js              # Interactive games
│   └── animations.js         # Advanced animations
├── assets/
│   ├── photos/               # Photo stickers (add your photos here)
│   │   ├── photo1.png
│   │   ├── photo2.png
│   │   ├── photo3.png
│   │   └── photo4.png
│   └── music/
│       └── anniversary.mp3   # Background music (optional)
└── README.md                 # This file
```

---

## 🚀 Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/yashilovesme/anniversary-website.git
cd anniversary-website
```

### 2. Add Your Photos
Place your photos in the `assets/photos/` directory:
- `photo1.png`
- `photo2.png`
- `photo3.png`
- `photo4.png`

The website will automatically load them as beautiful stickers.

### 3. Add Background Music (Optional)
Place an MP3 file at `assets/music/anniversary.mp3`

### 4. Open in Browser
Simply open `index.html` in your web browser, or use a local server:

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (with http-server)
npx http-server
```

Then navigate to `http://localhost:8000`

---

## ⚙️ Easy Customization

### Change Names, Dates, and Messages

Open `js/main.js` and find the `anniversaryConfig` object at the top:

```javascript
const anniversaryConfig = {
    person1: "Saksham",
    person2: "Yashica",
    anniversaryDate: "2026-09-01T00:20:00",
    
    photos: [
        {
            src: "assets/photos/photo1.png",
            caption: "That moment ♡"
        },
        // Add more photos here
    ],

    timelineItems: [
        {
            title: "The Beginning",
            description: "Where everything started.",
            details: "Edit this text to customize the timeline..."
        },
        // Add more timeline items here
    ]
};
```

### Change Colors

Edit the CSS variables in `css/style.css`:

```css
:root {
    --primary-pink: #FFB6D9;
    --rose-pink: #FF69B4;
    --dusty-pink: #FFB6C1;
    --baby-pink: #FFE4F5;
    --soft-lavender: #E6D5E6;
    --deep-rose: #C41E3A;
    --white: #FFFFFF;
    --cream: #FFF9F7;
}
```

### Customize Messages

Edit messages in:
- `index.html` - HTML text and structure
- `js/main.js` - JavaScript messages and configurations

---

## 🎮 Game Instructions

### Catch the Hearts
- Click "Start Game" to begin
- Catch 10 hearts before time runs out (30 seconds)
- Click each heart as it appears
- Win message: "You caught them all! 💗"

### Perfect Match
- Click "Start Game" to begin
- Click cards to reveal symbols
- Match all 8 pairs
- Track your moves and pairs found
- Win message: "Perfect match! ♡"

### Find the Hidden Heart
- Scroll to the garden scene
- Look for the hidden heart in the image
- Click to reveal it progressively
- After 3 clicks, unlock the secret message

---

## 🔐 Secret Features

### Secret Message
1. Scroll to the "Secret Section" (or navigate via the "Secret" menu item)
2. Find the hydrangea flower
3. Click it 3 times
4. A secret modal will appear with a personal message

### Easter Egg
1. Click the tiny heart in the top-right corner of the page
2. Click it 5 times
3. A special celebration animation appears
4. Message: "Happy 1 Month, Yashica ♡"

### Hidden Letter
1. Scroll to "One Last Thing" section
2. Click the pink envelope
3. It opens to reveal a heartfelt letter
4. Full letter appears with smooth animation

---

## 🎵 Background Music

To add background music:

1. Prepare an MP3 file (60-120 seconds recommended)
2. Save it to `assets/music/anniversary.mp3`
3. A music button (♫) will appear in the top-right corner
4. Click to play/pause

**Note:** Some browsers block autoplay audio. Users must click the button to start music.

---

## 📱 Responsive Design

The website is optimized for all screen sizes:

| Device | Breakpoint | Optimized |
|--------|-----------|-----------|
| Phone | 480px | ✅ Yes |
| Tablet | 768px | ✅ Yes |
| Laptop | 1024px | ✅ Yes |
| Desktop | 1440px+ | ✅ Yes |

All games, animations, and interactions work perfectly on touch devices.

---

## ♿ Accessibility

- **Reduced Motion Support** - Respects `prefers-reduced-motion` settings
- **Keyboard Navigation** - All interactive elements are keyboard accessible
- **Alt Text** - Images have descriptive alt attributes
- **ARIA Labels** - Buttons have proper ARIA labels
- **Color Contrast** - Text meets WCAG AA standards

---

## 🎨 Design Elements

### Hydrangea Flowers
Beautiful blooming hydrangeas appear throughout the website:
- Animated bloom effect
- Pink and lavender tones
- Gentle floating motion
- Placed strategically for visual balance

### Photo Stickers
Photos display as scattered stickers:
- Rounded borders with pink outline
- Slight rotation (each unique)
- Hover to scale and glow
- Decorative elements (hearts, stars, petals)

### Particles & Petals
Subtle floating animations:
- Pink particles in the background
- Falling petals when interacting
- Confetti on celebrations
- All optimized for performance

### Cards & Modals
Clean, elegant card designs:
- Glassmorphism effect
- Soft shadows
- Smooth transitions
- Beautiful borders

---

## 🐛 Troubleshooting

### Photos not showing?
- Ensure image files are in `assets/photos/` folder
- Check file names match the config
- Verify image format (PNG, JPG, WEBP supported)
- Check browser console for errors

### Music not playing?
- Place MP3 file at `assets/music/anniversary.mp3`
- Try a different browser (some have strict autoplay policies)
- Check browser volume and mute status
- If missing, the button will auto-hide

### Animations not smooth?
- Check browser compatibility (modern browsers recommended)
- On older devices, reduce animation intensity
- Check if "Reduce motion" accessibility setting is enabled
- Try disabling browser extensions

### Games not working?
- Ensure JavaScript is enabled
- Clear browser cache
- Try in incognito/private mode
- Check browser console for errors

---

## 🌐 Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Android)
- ⚠️ IE 11 not supported (older syntax)

---

## 📝 Customization Tips

### Add More Photos
Edit `anniversaryConfig.photos` array:
```javascript
photos: [
    { src: "assets/photos/photo1.png", caption: "First moment" },
    { src: "assets/photos/photo2.png", caption: "Together" },
    { src: "assets/photos/photo3.png", caption: "Happy times" },
    { src: "assets/photos/photo4.png", caption: "Forever" },
    { src: "assets/photos/photo5.png", caption: "New caption" } // Add more!
]
```

### Edit Timeline Events
Modify `anniversaryConfig.timelineItems`:
```javascript
timelineItems: [
    {
        title: "Custom Title",
        description: "Short description",
        details: "Detailed story about this moment..."
    },
    // Add or modify as needed
]
```

### Change Game Messages
Edit in `js/games.js`:
- Search for `messageDisplay.textContent`
- Update the text to your preferences
- Keep the emoji and format for consistency

---

## 📄 License

This project is a personal gift and is provided as-is. Feel free to customize and use for your own purposes.

---

## 💝 Made With Love

This website was created as a special anniversary gift celebrating the first month together. Every detail, animation, and interaction was designed to tell your unique story.

**Happy 1 Month, Yashica! ♡**

---

## 📞 Support & Feedback

If you encounter any issues or have questions:

1. Check the **Troubleshooting** section above
2. Review the **Customization Tips**
3. Check browser console for error messages
4. Ensure all files are in the correct directories

---

## ✨ Features Roadmap

Potential future enhancements:
- [ ] Photo upload interface
- [ ] Custom message editor
- [ ] Theme switcher
- [ ] More game options
- [ ] Guest book/comment section
- [ ] Share website functionality
- [ ] Print-friendly layout

---

**Built with ❤️ for Yashica**

**Version 1.0** | Last Updated: August 31, 2026
