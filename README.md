# Micet Wallet Landing Page

A modern, clean landing page for Micet Wallet - a safe test wallet for developers.

## 📁 Project Structure

```
micet/
├── index.html      # Main HTML file
├── style.css       # All styles (responsive, animations)
├── script.js       # Navigation and interactions
├── logo.png        # Your product logo
└── README.md       # This file
```

## 🚀 Deploying to GitHub Pages

### Option 1: Deploy from main branch

1. Push all files to your GitHub repository
2. Go to **Settings** → **Pages**
3. Under "Source", select **Deploy from a branch**
4. Select **main** branch and **/ (root)** folder
5. Click **Save**
6. Your site will be live at `https://your-username.github.io/repository-name/`

### Option 2: Using GitHub Actions (recommended)

1. Push all files to your GitHub repository
2. Go to **Settings** → **Pages**
3. Under "Source", select **GitHub Actions**
4. GitHub will automatically deploy your static files

## 🎨 Customization

### Update Links

Replace placeholder links in `index.html`:

- `https://github.com/your-username/micet-wallet` → Your actual GitHub repo URL
- `#` in download buttons → Your actual download links (Chrome Web Store, etc.)

### Change Colors

Edit CSS variables in `style.css`:

```css
:root {
    --primary: #7c3aed;          /* Main purple */
    --gradient-start: #7c3aed;   /* Gradient start */
    --gradient-end: #ec4899;     /* Gradient end (pink) */
    --bg-dark: #0f0f1a;          /* Background color */
}
```

### Add Real Wallet Image

Replace the mockup in `index.html` with an actual screenshot:

```html
<div class="hero-image">
    <img src="wallet-screenshot.png" alt="Micet Wallet" class="wallet-screenshot">
</div>
```

## 📱 Features

- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Modern UI with gradient accents
- ✅ Smooth scroll navigation
- ✅ CSS-only animations
- ✅ No build tools required
- ✅ No external dependencies (except Google Fonts)
- ✅ GitHub Pages ready

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

MIT License - Feel free to use and modify for your project.
