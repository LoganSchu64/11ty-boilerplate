# 11ty Boilerplate

Super basic [11ty](https://www.11ty.dev) starter to get you moving in the right direction and gently introduce some core features like **Passthrough File Copy** for handling images and stylesheets, **layouts**, and templating with [Liquid](https://shopify.github.io/liquid/) and [Markdown](https://www.markdownguide.org).

## Quickstart

1. Create a new repository in your own account from this template.
2. Open the new repository in Codespaces or your own development environment.
3. Make sure you have Node.js installed (this will be automatic if using Codespaces).
4. In your terminal type `npx @11ty/eleventy --serve` to build and view the template.

Node & Photos
---------------

This site skeleton expects you to add your own photos for the three items in `/images/`.
Files added here are placeholders (SVGs) so the layout will render immediately. To satisfy the "original photo" requirement, replace each of these with a photo you take with your camera or phone and keep the same filename:

- `/images/phone.svg` → replace with `/images/phone.jpg` or `/images/phone.png` (your photo)
- `/images/wallet.svg` → replace with `/images/wallet.jpg` or `/images/wallet.png`
- `/images/keys.svg` → replace with `/images/keys.jpg` or `/images/keys.png`

How to build locally
--------------------

1. Install dependencies (if you don't have them):

```bash
npx @11ty/eleventy --version
```

2. Build and serve:

```bash
npx @11ty/eleventy --serve
```

Notes
-----
 - This template adds a simple Liquid shortcode `featureCard` in `.eleventy.js` used on the homepage to render each item card.
 - Replace the placeholder SVGs with your original photos to meet the "taken with your camera/phone" requirement.
 - The site uses `_includes/layout.liquid` for shared header/footer and `styles/screen.css` contains the new theme styles.
 - This template adds a simple Liquid shortcode `featureCard` in `.eleventy.js` used on the homepage to render each item card.
 - Replace the placeholder SVGs in `/images/` with photos you take with your camera or phone (keep the same filenames or update the pages).
 - The site uses `_includes/layout.liquid` for a minimal shared header/footer and `styles/screen.css` contains a minimal theme.
