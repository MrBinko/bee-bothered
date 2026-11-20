# Can't Bee Bothered

**Live Site:** [https://mrbinko.github.io/bee-bothered/](https://mrbinko.github.io/bee-bothered/)

---

## Table of Contents
- [Website’s Purpose](#websites-purpose)
- [Features & User Benefits](#features--user-benefits)
- [Deployment Procedure](#deployment-procedure)
- [Screenshots](#screenshots)
  - [Desktop Views](#desktop-views)
  - [Mobile Views](#mobile-views)
- [Testing](#testing)
- [Bugs / Errors](#bugs--errors)
- [Attribution](#attribution)
- [Declaration of AI Use](#declaration-of-ai-use)
- [Colour Palette](#colour-palette-optional)
- [Wireframes](#wireframes-optional)
- [Future Updates](#planned-future-updates-optional)

---

## Website’s Purpose

**Can't Bee Bothered** is a fictional local task marketplace that helps busy people reclaim their time.  

Users (called “Hivers”) post small everyday jobs — parcel collection, dog walking, queueing, waiting for deliveries, companionship, home repairs, etc. Verified local helpers (called “Busy Bees”) accept the tasks, complete them, and get paid once the user confirms the work is done.

The site is a multi-page marketing / landing experience that explains the concept, shows how the service works, and provides a contact form so people can join the hive as either a user or a helper.

---

## Features & User Benefits

| Feature | Description | User Benefit |
|---------|-------------|--------------|
| **Hero Task Example** | Interactive-looking card that shows a real task being posted with time, budget and a verified helper | Instantly communicates the value proposition |
| **4-Step Flow** | Clear visual explanation of Post → Accept → Complete → Pay & Review | Builds trust and reduces friction |
| **How The Hive Works** | Detailed 6-stage timeline showing the roles of User, Helper and the BEE app | Educates both sides of the marketplace |
| **Popular Tasks Grid** | Visual cards for the most common jobs (parcel collection, dog walking, queueing, etc.) | Helps users quickly identify if the service is relevant to them |
| **Helper Profiles & Ratings** | Mentions of verified Busy Bees with star ratings and “nearby” status | Increases confidence in safety and quality |
| **Secure Payment Messaging** | Payment is held until the task is confirmed complete | Protects both parties |
| **Bee Happy Promise** | Guarantee that the platform will help if a task is not done correctly | Reduces risk for the user |
| **Contact Form + FAQs** | Form to join as user/helper + expandable answers about safety, payment and becoming a helper | Converts visitors into members |
| **Responsive Design** | Fully responsive across desktop, tablet and mobile | Works well on any device |
| **Trust & Safety Section** | Verified profiles, ratings, community guidelines, DBS checks for under-18 tasks | Addresses the biggest barrier to using a local task service |

---

## Deployment Procedure

The site is deployed using **GitHub Pages**.

1. Push the repository to GitHub (`mrbinko/bee-bothered`).
2. Go to **Settings → Pages**.
3. Under “Source”, select the `main` branch and `/ (root)`.
4. Click **Save**.
5. After a few minutes the site is live at:  
   `https://mrbinko.github.io/bee-bothered/`

No build step is required — the site is pure HTML, CSS and Bootstrap.

---

## Screenshots

> **Instructions for you:**  
> Create a folder called `screenshots` in the root of the repo and add the images listed below. Then the README will display them correctly.

### Desktop Views

| Page | Screenshot |
|------|------------|
| **Home** | ![Home Desktop] https://fireship.dev/amiresponsive?url=https://mrbinko.github.io/bee-bothered/index.html |
| **How It Works** | ![How It Works Desktop] https://fireship.dev/amiresponsive?url=https://mrbinko.github.io/bee-bothered/how-it-works.html |
| **Contact Us** | ![Contact Desktop] https://fireship.dev/amiresponsive?url=https://mrbinko.github.io/bee-bothered/contact-us.html |

### Mobile Views

| Page | Screenshot |
|------|------------|
| **Home** | ![Home Mobile] https://fireship.dev/amiresponsive?url=https://mrbinko.github.io/bee-bothered/index.html |
| **How It Works** | ![How It Works Mobile] https://fireship.dev/amiresponsive?url=https://mrbinko.github.io/bee-bothered/how-it-works.html |
| **Contact Us** | ![Contact Mobile] https://fireship.dev/amiresponsive?url=https://mrbinko.github.io/bee-bothered/contact-us.html |

---

## Testing

### HTML Validation
- [ ] Screenshot of W3C HTML Validator (all pages)  
  *Placeholder: `screenshots/html-validation.png`*

### CSS Validation
- [ ] Screenshot of W3C CSS Validator  
  *Placeholder: `screenshots/css-validation.png`*

### Lighthouse Performance
- [ ] Desktop Lighthouse report (Performance, Accessibility, Best Practices, SEO)  
  *Placeholder: `screenshots/lighthouse-desktop.png`*
- [ ] Mobile Lighthouse report  
  *Placeholder: `screenshots/lighthouse-mobile.png`*

> **Tip:** Run Lighthouse in Chrome DevTools (Incognito) and take screenshots of the results for both desktop and mobile emulation.

---

## Bugs / Errors

Known issues at the time of writing:

- Some image `alt` attributes still contain placeholder text (e.g. logo alt text says “Free Spirit logo”).
- The “Join The Hive” buttons open a Bootstrap modal, but the modal content / form submission is not fully functional (expected for a static marketing site).
- A few decorative bee images have empty or generic alt text.
- On very small screens the horizontal timeline on the How It Works page can feel cramped (the stacked mobile version is better).
- Contact form currently has no backend — submissions do nothing (by design for this static version).

These will be addressed in future updates.

---

## Attribution

- **Framework:** [Bootstrap 5.3](https://getbootstrap.com/)
- **Fonts:** [Google Fonts](https://fonts.google.com/) — Lato & Roboto Slab
- **Icons / Illustrations:** Custom bee illustrations and helper photos created for this project
- **Deployment:** GitHub Pages

All other code and assets were written / created specifically for this project.

---

## Declaration of AI Use

Artificial Intelligence tools (including Grok by xAI) were used during the development and documentation of this project for:

- Generating and refining bee-themed imagery and helper portraits
- Assisting with README structure and wording
- Exploring layout ideas and responsive patterns

All final code, design decisions and content were reviewed, edited and owned by the project author.

---

## Colour Palette (Optional)

Primary colours used across the site:

| Colour | Hex | Usage |
|--------|-----|--------|
| Hive Yellow | `#FFD100` / `#F5C400` | Buttons, accents, highlights |
| Dark Background | `#1A1A1A` / `#121212` | Main sections |
| Light Section | `#ECEFF3` | Alternating content sections |
| Text (light) | `#FFFFFF` / `#E0E0E0` | Body text on dark |
| Text (dark) | `#212529` | Body text on light |

*(You can replace this table with an actual colour palette image if you prefer)*

---

## Wireframes (Optional)

*Add your wireframe images here if you have them:*

- `screenshots/wireframe-home.png`
- `screenshots/wireframe-how-it-works.png`
- `screenshots/wireframe-contact.png`

---

## Planned Future Updates (Optional)

- Fully working “Join the Hive” modal with form validation
- Real contact form backend (Formspree / Netlify Forms / etc.)
- Improved accessibility (better alt texts, focus states, ARIA)
- Dark/light mode toggle
- Actual task posting flow (even if simulated)
- Animation / micro-interactions on the task cards
- Blog or “Hive Stories” section with real user testimonials

---

**Author:** MrBinko  
**Repository:** [https://github.com/mrbinko/bee-bothered](https://github.com/mrbinko/bee-bothered)  
**Live Site:** [https://mrbinko.github.io/bee-bothered/](https://mrbinko.github.io/bee-bothered/)