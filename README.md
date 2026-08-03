# Bhilai Connect — Website

A modern, responsive, SEO-friendly static website for the **Bhilai Connect** mobile app — built with plain HTML5, CSS3 and vanilla JavaScript only (no frameworks, no build step, no backend).

## 📁 Project structure

```
/
├── index.html                   # Home page
├── privacy-policy.html          # Privacy Policy (Play Store compliant)
├── terms-and-conditions.html    # Terms & Conditions
├── support.html                 # Support: contact form, FAQs, info cards
├── style.css                    # Shared stylesheet (design tokens + components)
├── script.js                    # Shared vanilla JS (nav, reveal, FAQ, form UI)
├── assets/
│   ├── images/                  # Add real screenshots / OG image here
│   ├── icons/                   # favicon.png, apple-touch-icon.png
│   └── logo-placeholder.png     # Replace with the real app logo
└── README.md
```

## 🎨 Design

- **Primary:** `#0A4DA2` &nbsp; **Secondary:** `#16A34A` &nbsp; **Accent:** `#F97316`
- **Fonts:** Sora (display), Inter (body), JetBrains Mono (data/prices) — via Google Fonts
- **Icons:** [Remix Icon](https://remixicon.com/) via CDN
- Rounded 18px cards, soft shadows, glassmorphism nav, smooth scroll & reveal animations
- Fully responsive: mobile-first, tested down to 320px width
- Respects `prefers-reduced-motion`

## 🚀 Deploy to GitHub Pages

1. Create a new GitHub repository (e.g. `bhilai-connect-website`).
2. Push all files in this folder to the repository root (or to a `docs/` folder — your choice).
3. In your repo: **Settings → Pages → Build and deployment → Source** → select `Deploy from a branch`.
4. Choose the branch (usually `main`) and the folder (`/root` or `/docs`), then **Save**.
5. Your site will be live at `https://<your-username>.github.io/<repo-name>/` within a minute or two.

## ✏️ Before you launch — things to replace

- [ ] Swap `assets/logo-placeholder.png` for the real Bhilai Connect logo.
- [ ] Add real screenshots to `assets/images/` and update the phone screens in `index.html` (`.showcase` section).
- [ ] Update every `og:url` / `canonical` tag from `https://your-domain.example/...` to your real domain.
- [ ] Add a real Open Graph image at `assets/images/og-cover.jpg` (1200×630px recommended).
- [ ] Replace `favicon.png` and `apple-touch-icon.png` in `assets/icons/`.
- [ ] Update all placeholder email addresses (`support@`, `privacy@`, `legal@bhilaiconnect.app`) to real inboxes.
- [ ] Connect the Support page form (`#supportForm` in `support.html`) to a real backend or a form service such as Formspree, Getform, or your own API — it currently only simulates a submission client-side.
- [ ] Update the "Download App" buttons once the app is live on the Play Store / App Store (currently show a "coming soon" toast).
- [ ] Review and adapt the Privacy Policy / Terms & Conditions with a legal professional before publishing.

## 🧩 Notes

- No React, Vue, Angular, Bootstrap, Tailwind or jQuery — everything is hand-written HTML/CSS/JS.
- No backend or database — the contact form is UI-only and simulates submission locally.
- Works fully offline once loaded, aside from Google Fonts and the Remix Icon CDN.

---

© 2026 Bhilai Connect. Made with ❤️ in India.
