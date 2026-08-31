# 🚀 How to Run the Website Now

## Option 1: Run Locally (Easiest for Testing)

### On Windows:
1. Download the repository as ZIP
2. Extract the folder
3. Open Command Prompt in that folder
4. Paste one of these commands:

**Python 3 (Recommended):**
```bash
python -m http.server 8000
```

**Python 2:**
```bash
python -m SimpleHTTPServer 8000
```

**No Python? Install it:**
- Go to python.org and download Python
- During installation, check "Add Python to PATH"
- Then use the commands above

5. Open browser and go to: `http://localhost:8000`
6. You should see the website! 🎉

---

### On Mac:
1. Download the repository as ZIP
2. Extract the folder
3. Open Terminal
4. Drag the extracted folder into Terminal
5. Press Enter
6. Type:

```bash
python3 -m http.server 8000
```

7. Open browser: `http://localhost:8000`
8. Website is live! ✨

---

### On Linux:
```bash
cd /path/to/anniversary-website
python3 -m http.server 8000
```

Then open: `http://localhost:8000`

---

## Option 2: Live Deploy (Share with Yashica Now!)

### Deploy to GitHub Pages (5 minutes):

**Step 1:** Make sure all files are pushed to GitHub
```bash
git add .
git commit -m "Anniversary website complete"
git push origin main
```

**Step 2:** Enable GitHub Pages
1. Go to: `https://github.com/yashilovesme/anniversary-website/settings`
2. Scroll down to "Pages" section
3. Under "Source", select "main" branch
4. Click "Save"
5. Wait 2-3 minutes for deployment

**Step 3:** Access your live website
- Your URL: `https://yashilovesme.github.io/anniversary-website`
- Works on phone AND laptop
- Share this link with Yashica! 💕

---

## Option 3: Use Node.js (If Installed)

```bash
cd anniversary-website
npx http-server
```

Then open the URL shown (usually `http://localhost:8080`)

---

## ✅ Quick Check - Before Running

Make sure you have:
- ✅ All files in the correct structure
- ✅ `index.html` in root folder
- ✅ `css/` folder with `style.css`
- ✅ `js/` folder with `main.js`, `games.js`, `animations.js`

**Note:** Photos are optional for testing. If missing, you'll see 📷 placeholder.

---

## 📱 Test on Phone

### After running locally:
1. Get your computer's IP address
   - Windows: Open Command Prompt → type `ipconfig` → find "IPv4 Address" (e.g., 192.168.1.100)
   - Mac/Linux: Open Terminal → type `ifconfig` → find inet address

2. On your phone, open browser and type:
   - `http://192.168.1.100:8000` (replace with your IP)
   - You'll see the website on your phone! 📱

---

## 🌐 Share Live Link

After deploying to GitHub Pages:
- Share: `https://yashilovesme.github.io/anniversary-website`
- Works on any device
- No installation needed
- Just click the link!

---

## 🎮 Test the Features

Once running, test:
- ✅ Scroll through sections
- ✅ Click "Enter" button
- ✅ Play the 3 games
- ✅ Click secret flower 3 times
- ✅ Click envelope
- ✅ Look at timeline
- ✅ Check photos/scrapbook
- ✅ Test on phone (landscape & portrait)
- ✅ Test on laptop

---

## ⚠️ Troubleshooting

### "Port 8000 already in use?"
Use a different port:
```bash
python -m http.server 9000
```
Then open: `http://localhost:9000`

### "Command not found: python"
- Install Python from python.org
- Or try: `python3 -m http.server 8000`

### "Website looks broken"
- Refresh page (Ctrl+R or Cmd+R)
- Clear cache (Ctrl+Shift+Del or Cmd+Shift+Del)
- Try different browser
- Check browser console (F12 → Console)

### "Photos not showing"
- Add photos to `assets/photos/` folder
- Name them exactly: `photo1.png`, `photo2.png`, etc.
- Refresh page

### "Games don't work"
- Ensure JavaScript is enabled
- Refresh page
- Clear cache
- Try different browser

---

## 🎯 Fastest Way to Share

**Don't want to run locally? Skip straight to live deployment:**

1. Push changes to GitHub (if any)
2. Enable GitHub Pages (Settings → Pages)
3. Share the live link with Yashica!

**That's it! 🎉**

---

## 📊 Comparison

| Method | Setup Time | Works Offline | Share Link | Best For |
|--------|-----------|---------------|-----------|----------|
| Local (Python) | 1 min | ✅ Yes | ❌ No | Testing |
| GitHub Pages | 5 min | ❌ No | ✅ Yes | Sharing |
| Netlify | 5 min | ❌ No | ✅ Yes | Fast & Easy |
| Vercel | 5 min | ❌ No | ✅ Yes | Blazing Fast |

---

## 💡 My Recommendation

1. **First time?** → Run locally with Python (Option 1)
2. **Adding photos/music?** → Run locally to test
3. **Ready to share?** → Deploy to GitHub Pages (Option 2)
4. **Want it super fast?** → Use Netlify or Vercel

---

## 🎁 That's It!

You now know how to:
- ✅ Run locally for testing
- ✅ Deploy live for sharing
- ✅ Test on phone & desktop
- ✅ Share with Yashica

**Happy Anniversary! ♡**

---

**Quick Command Cheat Sheet:**

```bash
# Local testing (Python 3)
python -m http.server 8000

# Local testing (Python 2)
python -m SimpleHTTPServer 8000

# Local testing (Node.js)
npx http-server

# Push to GitHub
git add .
git commit -m "message"
git push origin main
```

Then open browser to see your website! 🚀
