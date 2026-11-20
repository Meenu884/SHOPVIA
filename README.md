# SHOPVIA

**SHOP SMART. LIVE BETTER.**

A futuristic, multi-page, 3D animated e-commerce **frontend** built with vanilla JavaScript. It is a portfolio and demonstration project: there is no backend, and checkout, login and orders are simulated.

## Features

- **3D hero (Three.js):** floating shopping bags and boxes, torus knot, particles, mouse-controlled camera, lighter scene on mobile
- **Animations (GSAP + ScrollTrigger):** hero text reveal, scroll reveals, 3D card tilt, scroll progress bar, toasts
- **Shop:** 42 products in 7 categories with search suggestions, recent searches, category/price/rating filters, sorting and pagination
- **Product pages:** image gallery, hover zoom, quantity selector, quick view modal, related products
- **Cart and wishlist:** cart drawer, quantity controls, discount and shipping calculation (free over ₹999), move wishlist items to cart, all saved in LocalStorage with live navbar counts
- **Checkout (demo):** validated form, simulated payment options, order summary, order confirmation
- **Auth (demo):** login and signup with show/hide password, strength meter and validation (no real authentication)
- **Other:** Swiper sliders, offers countdown, newsletter and contact forms with validation, FAQ accordion, 404 page
- **Quality:** responsive (Bootstrap 5), reduced-motion support, lazy-loaded images, semantic HTML, SEO meta tags

## Tech stack

HTML5, CSS3, vanilla JS (ES6+), Bootstrap 5, Bootstrap Icons, Three.js, GSAP + ScrollTrigger, Swiper.js, LocalStorage. Libraries load from the jsDelivr CDN, so an internet connection is required.

## Run locally

```bash
cd SHOPVIA
python3 -m http.server 8000
```

Open http://localhost:8000. Any static server works (for example `npx serve`). Opening `index.html` directly also works for most pages.

## Project structure

```
SHOPVIA/
├── index.html, shop.html, product-details.html, wishlist.html, cart.html,
│   checkout.html, order-success.html, login.html, signup.html, account.html,
│   about.html, contact.html, offers.html, faq.html, privacy.html,
│   terms.html, 404.html
├── categories/        men, women, electronics, beauty, jewellery,
│                      home-living, sports (.html)
├── css/style.css      design system, components, animations, responsive rules
├── js/
│   ├── products.js    product data (generated SVG images)
│   ├── main.js        cart, wishlist, search, filters, checkout, auth, page logic
│   └── three-scene.js 3D hero scene
├── assets/            images, models, icons, fonts (empty, ready for your files)
├── template.html      shared layout (navbar, cart drawer, footer, scripts)
└── build.py           generates every HTML page from the template
```

## Editing pages

All HTML pages are generated. Edit `template.html` (shared layout) or `build.py` (page content), then run:

```bash
python3 build.py
```

## Data and storage

LocalStorage keys: `sv_cart`, `sv_wish`, `sv_user`, `sv_orders`, `sv_last`, `sv_recent`, `sv_end`. Passwords are never stored. To reset the demo, clear the site's LocalStorage.

## Demo limitations

- No real payments, authentication or order fulfilment; these are clearly labelled in the UI
- Product images are generated placeholders; replace them with files in `assets/images/products/`
- Static pages (About, FAQ, Privacy, Terms) contain placeholder text

## Design system

| Token | Value |
|---|---|
| Dark Navy | `#101326` |
| Deep Black | `#080B18` |
| Electric Purple | `#8B5CF6` |
| Neon Blue | `#38BDF8` |
| Soft White | `#F8FAFC` |
| Light Grey | `#CBD5E1` |

## Roadmap

- Split `main.js` and `style.css` into the planned modules
- Real product photography and a 3D product viewer
- Mega menu
- Backend integration (for example React/FastAPI/MongoDB) for real auth and orders
