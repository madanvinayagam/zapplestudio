# Zapple Studio — Master Project Documentation & Source Code Compilation

This document contains **everything** about the Zapple Studio project:
- **Part I**: Complete Architectural Analysis, Content Extraction, Feature Breakdown & Specifications.
- **Part II**: Unabridged Source Code for All Project Files (`package.json`, `vercel.json`, `README.md`, `blogs-data.js`, `script.js`, `index.html`, `about.html`, `services.html`, `gallery.html`, `contact.html`, `blogs.html`, `blog-detail.html`).

---

# PART I: COMPLETE PROJECT ANALYSIS & DOCUMENTATION

## 1. Executive Summary & Brand Identity

**Zapple Studio** is a premier, high-end photography studio based in **Chennai, Tamil Nadu, India**, specializing in capturing newborn babies, baby milestones, outdoor family portraits, events, birthday celebrations, and maternity photography. Operating across two flagship branches in **Arumbakkam** and **Keelkatalai**, Zapple Studio has served over 2,000+ families and maintains an exceptional **4.9★ rating based on 300+ Google Reviews**.

### Core Brand Values
- **Safety First Certified**: Trained and certified newborn safety handling experts prioritizing baby comfort, temperature regulation, and proper posing techniques.
- **Bespoke Theme Setups**: Access to hundreds of imported props, customized backdrops, flower & nest setups, and thematic designs.
- **Maternity Elegance**: Full gown wardrobe provision, solo & couple session guidance, tailored studio lighting, and golden-hour outdoor options.
- **Unmatched Customer Convenience**: Seamless booking via Web3Forms and instant WhatsApp support (`+91 99623 61204`).

### Visual Aesthetics & Design Tokens
- **Color Palette**:
  - `zapple-red` (`#D42B2B`): Signature vibrant brand accent color
  - `zapple-dark` (`#A81E1E`): Darker red for hover states and button interactions
  - `zapple-light` (`#FF4444`): Highlight red
  - `zapple-cream` (`#FFF8F4`): Warm, soft background for section highlights
  - `zapple-warm` (`#FAFAF8`): Clean main background color
  - `charcoal` (`#1A1A1A`): Deep dark background for hero sections, popups, and footers
  - `charcoal-2` (`#242424`): Card background for dark sections
  - `charcoal-3` (`#2E2E2E`): Gradient accent dark background
- **Typography**:
  - **Headings & Brand Title**: `Playfair Display` (Serif, Elegant, Luxury feeling)
  - **Body Text & Navigation**: `Inter` (Sans-serif, Clean, Modern, Highly readable)
- **Key UI/UX Features**: Modern glassmorphism backdrop blurs, 3D tilt card hover effects, continuous marquee review slider, smooth scroll navigation, floating WhatsApp widget, exit-intent lead popup modal, and lightboxes for gallery viewing.

---

## 2. Technical Stack & Architecture

- **Frontend Technology**: HTML5, Vanilla JavaScript (ES6+), Tailwind CSS (Play CDN `https://cdn.tailwindcss.com`).
- **Typography & Icons**: Google Fonts (`Playfair Display`, `Inter`), SVG Icons, Native Emojis.
- **Form Processing & Backend Services**: Integrated with **Web3Forms API** (`https://api.web3forms.com/submit`) using Access Key `905c0e06-dad8-4b5e-be7f-833c7b30ad0b` for processing both booking enquiries and exit-intent lead capture.
- **Hosting & Deployment Platform**: **Vercel** Static Site Hosting.
- **Local Development Environment**: Node.js execution via `npx -y serve` (`npm run dev`).

### Configuration & Security (`vercel.json`)
- **Clean URLs**: Configured (`cleanUrls: true`) to strip `.html` extensions from page URLs (e.g., `/about` instead of `/about.html`).
- **Static Asset Caching**: 1-year aggressive browser caching (`Cache-Control: public, max-age=31536000, immutable`) for all files under `/assets/`.
- **Security Headers**:
  - `X-Frame-Options: DENY` (Prevents clickjacking)
  - `X-Content-Type-Options: nosniff` (Prevents MIME-type sniffing)
  - `Referrer-Policy: strict-origin-when-cross-origin` (Controls referrer information leakage)
  - `Strict-Transport-Security: max-age=31536000; includeSubDomains; preload` (Enforces HTTPS)

---

## 3. Complete File Structure & Inventory

```
zapplestudio/
├── .gitattributes
├── README.md               # Documentation for local development & Vercel deployment
├── package.json            # Node project configuration (script: npm run dev -> npx -y serve)
├── vercel.json             # Vercel routing, caching, and security header rules
├── index.html              # Main landing page (Comprehensive multi-section showcase)
├── about.html              # Dedicated About Us subpage
├── services.html           # Dedicated Photography Services subpage
├── gallery.html            # Dedicated Photo Gallery portfolio subpage
├── contact.html            # Contact & booking enquiry form subpage
├── blogs.html              # Blog articles listing page (dynamically rendered)
├── blog-detail.html        # Single blog article view page (dynamically rendered via query parameter)
├── blogs-data.js           # Central database object (BLOGS_DATA array) holding all blog articles
├── script.js               # Primary client-side application logic & interactive behaviors
└── assets/                 # High-resolution optimized photographic assets
    ├── baby_shoot.png      # Baby Shoot showcase image (720 KB)
    ├── gallery1.png        # Newborn Baby in Basket (747 KB)
    ├── gallery2.png        # Baby Girl 8 Months Portrait (694 KB)
    ├── gallery3.png        # Maternity Couple Portrait (766 KB)
    ├── gallery4.png        # Toddler Birthday Celebration (835 KB)
    ├── gallery5.png        # Newborn Twins Portrait (735 KB)
    ├── gallery6.png        # Outdoor / Creative Baby Setup (844 KB)
    ├── hero_newborn.png    # Hero section cover & Newborn photoshoot banner (768 KB)
    ├── maternity_shoot.png # Maternity gown portrait showcase (692 KB)
    └── toddler_shoot.png   # Toddler cake smash & milestone banner (771 KB)
```

---

## 4. Complete Page-by-Page Content Extraction

### 4.1. Navigation Bar (Global Component across all pages)
- **Brand Logo**: `7. Zapple Studio`
- **Navigation Links**: `Home`, `About`, `Services`, `Gallery`, `Blogs`
- **Call-to-Action Button**: `Book Now` -> links to `contact.html`

### 4.2. Home Page (`index.html`)
- **Hero Section**: Eyebrow: `Chennai's Most Trusted Studio` | Headline: `Every Tiny Moment Deserves to Last Forever` | Subtitle: `Professional Newborn · Baby · Outdoor · Event · Maternity Photography — Arumbakkam & Keelkatalai, Chennai` | Stats: `2000+` Happy Families, `4.9★` Google Rating, `2` Studio Branches.
- **About Us Section**: Tagline: `About Our Studio` | Headline: `Crafting Timeless Memories for Your Most Precious Milestones` | Body: `We make photoshoot day comfortable, safe, and magical for newborns and expectant mothers. From creative baby themes to elegant maternity portraits, we turn your family’s milestones into timeless art.`
- **Shoot Packages Carousel**:
  1. *Newborn Baby Shoot* (5–25 Days): Posed & lifestyle shots, flower/nest setups, parent inclusion.
  2. *Baby Shoot* (6–12 Months): Sitter & milestone sessions, cake smash, themed setups.
  3. *Outdoor Shoot*: Sunset/golden hour lighting, park/beach/garden venues, candid family portraits.
  4. *Event Shoot*: Naming ceremonies, ear piercing, rituals, full event candid coverage, digital albums.
  5. *Birthday Photography*: Event coverage, decor & candid shots, family portraits.
  6. *Maternity Shoot*: Solo & couple sessions, gown wardrobe provided, golden hour & studio.
- **How It Works**: `01 Fill Enquiry` -> `02 Get Themes` -> `03 Book Your Slot` -> `04 Cherish Forever`.
- **Branches**:
  - *Arumbakkam*: Near Arumbakkam Metro Station, Chennai – 600106. Hours: Mon–Sat 9AM–7PM, Sun 10AM–5PM.
  - *Keelkatalai*: Near Keelkatalai Junction, Chennai – 600117. Hours: Mon–Sat 9AM–7PM, Sun 10AM–5PM.
- **Reviews (Google Reviews - 4.9 Rating / 300+ Reviews)**:
  - *Priya Krishnamurthy* (Arumbakkam): "Zapple Studio made our newborn shoot an unforgettable experience! The team was so patient and gentle with our 10-day-old. The photos came out absolutely stunning!"
  - *Rajesh & Kavitha* (Keelkatalai): "Booked for our daughter's 6-month sitter session. The props, lighting, and backdrop were exceptional. Our little one was comfortable and the smiles were perfect!"
  - *Anitha Suresh* (Arumbakkam): "My maternity shoot at Zapple was a dream! They made me feel so beautiful and confident. The gowns they provided were gorgeous. So glad I chose them!"
  - *Meena Selvam* (Keelkatalai): "Our twin newborns were 15 days old and the studio team handled them so carefully. Best decision we made! Already booked for their 6-month shoot!"
  - *Deepa & Arun* (Arumbakkam): "The toddler shoot for our 18-month-old was so much fun! The team was incredibly patient and playful. The results were magical. Highly recommend Zapple!"
  - *Sowmiya Prakash* (Keelkatalai): "Professional, warm and talented team! They sent theme options beforehand and helped us choose. Edited photos delivered quickly and the quality is outstanding!"
- **Instagram**: `@zapplestudio` follow banner.
- **CTA Banner**: `Let's Create Lifelong Memories Together` | WhatsApp: `+91 99623 61204`.

### 4.3. About Us Page (`about.html`)
- **Pillars**: Safety First Certified 🛡️, Creative Custom Themes 🧸, Maternity Elegance 🤰, Complete Celebration Packages 🎁.

### 4.4. Contact Page (`contact.html`)
- **Booking Form**: Name, Phone, Email, Shoot Type dropdown, Preferred Branch dropdown, Baby's Age/Due Date, Message. Submits to Web3Forms API.

### 4.5. Blog Data (`blogs-data.js`)
- **Article 1 (`newborn-tips`)**: *5 Essential Tips for a Stress-Free Newborn Photoshoot* (Golden Window 5-25 Days, Climate Control, Feeding before shoot, Loose clothing, Safety certified photographers).
- **Article 2 (`styling-guide`)**: *What to Wear: Styling Guide for Family Outdoor Shoots* (Coordinate don't match, Location-aware colors, Avoid logos/busy patterns, Prioritize comfort).
- **Article 3 (`milestone-photography`)**: *Milestone Photography: Capturing Baby's First Year* (Sitter 6-8 months, Crawling 9-10 months, Cake smash 11-12 months).

---

## 5. JavaScript Logic Overview (`script.js`)

1. **Navbar Blur**: Listens to scroll; toggles `.scrolled` at `scrollY > 60`.
2. **Mobile Menu**: Controls `.active` hamburger state, `#mobileMenu` overlay, and scroll lock.
3. **Carousel Engine**: Dynamic card offset calculation, infinite cloning of 3 cards, wrap-around reset on `transitionend`, 4s interval autoplay with mouse hover pause/resume.
4. **Lightbox**: Image click popup modal with keyboard ESC key and overlay close logic.
5. **Form Submit Engine**: Validates `[required]` fields, triggers CSS shake animation on failure, submits via `fetch()` to Web3Forms API, toggles loading text, displays success state.
6. **Stat Counters**: Animates numbers dynamically up to target values over 1.8s.
7. **3D Branch Tilt**: Mousemove calculations producing CSS `rotateX`, `rotateY` 3D perspective transforms.
8. **Exit-Intent Lead Popup**: Triggers on top mouse exit (desktop), 15-second timer, or 50px scroll-up; suppressed via `sessionStorage.zapplePopupShown`.

---

## 6. Summary Table of Contact Info & Metrics

| Metric / Item | Value |
| :--- | :--- |
| **Studio Name** | Zapple Studio |
| **Phone / WhatsApp** | `+91 99623 61204` |
| **Email Address** | `team@zapplestudio.com` |
| **Studio Hours** | Mon–Sat: 9:00 AM – 7:00 PM \| Sun: 10:00 AM – 5:00 PM |
| **Branch 1 (Arumbakkam)** | Near Arumbakkam Metro Station, Chennai – 600106 |
| **Branch 2 (Keelkatalai)** | Near Keelkatalai Junction, Chennai – 600117 |
| **Families Photographed** | 2,000+ Families |
| **Google Reviews Rating** | 4.9 ★★★★★ (300+ Reviews) |
| **Instagram Handle** | `@zapplestudio` |
| **Form Endpoint** | `https://api.web3forms.com/submit` (Key: `905c0e06-dad8-4b5e-be7f-833c7b30ad0b`) |

---

# PART II: UNABRIDGED SOURCE CODE REPOSITORY

## File 1: `package.json`
```json
{
  "name": "zapplestudio",
  "version": "1.0.0",
  "description": "Zapple Studio - Newborn, Baby & Maternity Photography Studio in Chennai",
  "scripts": {
    "dev": "npx -y serve"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

---

## File 2: `vercel.json`
```json
{
  "cleanUrls": true,
  "headers": [
    {
      "source": "/assets/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    },
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "Referrer-Policy",
          "value": "strict-origin-when-cross-origin"
        },
        {
          "key": "Strict-Transport-Security",
          "value": "max-age=31536000; includeSubDomains; preload"
        }
      ]
    }
  ]
}
```

---

## File 3: `README.md`
```markdown
# Zapple Studio Website

A clean, responsive, and modern photography studio landing page built with HTML, Tailwind CSS (via CDN), and Vanilla JavaScript.

## 🚀 How to Run Locally

You can run a local development server to test the site exactly as it would behave in a production environment:

1. Make sure you have [Node.js](https://nodejs.org/) installed.
2. Run the development server command:
   ```bash
   npm run dev
   ```
3. Open your browser and navigate to the address shown (usually `http://localhost:3000` or `http://localhost:5000`).

---

## ☁️ How to Deploy to Vercel

There are two main methods to deploy this website to Vercel:

### Method 1: Deploy with GitHub Integration (Recommended)
This is the easiest method and enables automatic deployments whenever you push changes to Git.

1. Push this project to a GitHub, GitLab, or Bitbucket repository.
2. Go to [Vercel](https://vercel.com/) and sign in.
3. Click **Add New** > **Project**.
4. Import your repository.
5. Vercel will automatically detect that this is a static project. You do not need to configure any Build/Output settings.
6. Click **Deploy**.

### Method 2: Deploy via Vercel CLI
If you want to deploy directly from your local terminal:

1. Install the Vercel CLI globally:
   ```bash
   npm install -g vercel
   ```
2. Log in to your Vercel account:
   ```bash
   vercel login
   ```
3. Run the deployment command from the project root:
   ```bash
   vercel
   ```
4. Follow the command prompts to set up and deploy the project.
5. To deploy to production, run:
   ```bash
   vercel --prod
   ```

---

## 🛠️ Project Configuration (`vercel.json`)

The project contains a [vercel.json](vercel.json) file that configures:
- **Clean URLs**: Access HTML pages without their `.html` extensions (e.g. `/about` instead of `/about.html`).
- **Aggressive Caching**: Static photography assets under the `/assets/` directory are cached for 1 year in the browser for optimal page load speed.
- **Security Headers**: Includes standard headers like `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, and `Strict-Transport-Security` to keep the site secure.
```

---

## File 4: `blogs-data.js`
```javascript
const BLOGS_DATA = [
  {
    id: "newborn-tips",
    title: "5 Essential Tips for a Stress-Free Newborn Photoshoot",
    category: "Newborn Tips",
    date: "Aug 4, 2026",
    readTime: "5 min read",
    image: "assets/hero_newborn.png",
    excerpt: "Learn how to prepare your baby, what props to expect, and how to create a calm, soothing environment for the perfect first photos.",
    content: `
      <p class="mb-4 text-gray-600 text-base leading-[1.8]">A newborn photoshoot is a beautiful way to capture the early days of your baby's life. However, it can also feel overwhelming for new parents. Here are five essential tips to ensure a stress-free and magical experience for both you and your little one.</p>
      
      <h3 class="text-xl font-bold text-charcoal mt-6 mb-3 font-playfair">1. The Golden Window: 5 to 25 Days</h3>
      <p class="mb-4 text-gray-600 text-base leading-[1.8]">Newborns are sleepiest and most flexible during the first two to three weeks of life. Booking your shoot within this window makes it much easier to guide them into those cute curled poses and keep them sound asleep throughout the session.</p>

      <h3 class="text-xl font-bold text-charcoal mt-6 mb-3 font-playfair">2. Keep a Warm, Quiet Environment</h3>
      <p class="mb-4 text-gray-600 text-base leading-[1.8]">Babies cannot regulate their body temperature well. Our studio is custom climate-controlled to stay warm and cozy, ensuring your baby is comfortable even when dressed in wraps or simple props. A quiet atmosphere keeps them sleeping deeply.</p>

      <h3 class="text-xl font-bold text-charcoal mt-6 mb-3 font-playfair">3. Feed Right Before the Session</h3>
      <p class="mb-4 text-gray-600 text-base leading-[1.8]">A well-fed baby is a happy, sleepy baby. We recommend feeding your newborn right before starting or as soon as you arrive at the studio. Don't worry about breaks; we allocate plenty of time for feeding, burping, and soothing during the session.</p>

      <h3 class="text-xl font-bold text-charcoal mt-6 mb-3 font-playfair">4. Dress Them in Easy-to-Remove Clothes</h3>
      <p class="mb-4 text-gray-600 text-base leading-[1.8]">To avoid waking the baby when changing them into custom studio props and wraps, dress them in loose, simple clothes that can be easily unbuttoned or zipped off without pulling anything over their head.</p>

      <h3 class="text-xl font-bold text-charcoal mt-6 mb-3 font-playfair">5. Relax and Trust the Experts</h3>
      <p class="mb-4 text-gray-600 text-base leading-[1.8]">Babies pick up on parent stress. Our certified newborn safety photographers have years of experience handling infants. Sit back, relax, enjoy the cozy lounge, and watch the magic happen!</p>
    `
  },
  {
    id: "styling-guide",
    title: "What to Wear: Styling Guide for Family Outdoor Shoots",
    category: "Styling Guide",
    date: "Jul 28, 2026",
    readTime: "4 min read",
    image: "assets/maternity_shoot.png",
    excerpt: "Discover the best color palettes, patterns, and styling secrets to ensure your family portraits look harmonious and stand out beautifully.",
    content: `
      <p class="mb-4 text-gray-600 text-base leading-[1.8]">Preparing outfits for a family photoshoot doesn't have to be stressful. By following a few simple styling secrets, you can coordinate your family's wardrobe to look cohesive, elegant, and timeless.</p>
      
      <h3 class="text-xl font-bold text-charcoal mt-6 mb-3 font-playfair">1. Coordinate, Don't Match</h3>
      <p class="mb-4 text-gray-600 text-base leading-[1.8]">Gone are the days of everyone wearing identical white shirts and blue jeans. Instead, choose a cohesive color palette of 3-4 complementary colors (such as earth tones, soft pastels, or warm neutrals) and distribute them throughout everyone's outfits.</p>

      <h3 class="text-xl font-bold text-charcoal mt-6 mb-3 font-playfair">2. Think About the Location</h3>
      <p class="mb-4 text-gray-600 text-base leading-[1.8]">Choose colors that stand out against your backdrop. If we are shooting in a lush green park, avoid dressing entirely in green. Instead, choose warm tones like mustard, cream, or rust. For beach sunset shoots, soft blues, whites, and corals look magical.</p>

      <h3 class="text-xl font-bold text-charcoal mt-6 mb-3 font-playfair">3. Say No to Large Logos & Busy Patterns</h3>
      <p class="mb-4 text-gray-600 text-base leading-[1.8]">Clothing with large text, graphics, or busy patterns can distract from the main subject: your family's expressions. Stick to solid colors, subtle textures (like linen, knitwear, or lace), and simple patterns (like stripes or florals) on only one or two family members.</p>

      <h3 class="text-xl font-bold text-charcoal mt-6 mb-3 font-playfair">4. Choose Comfort</h3>
      <p class="mb-4 text-gray-600 text-base leading-[1.8]">If children are uncomfortable in their clothes, it will show in their expressions. Ensure everyone's clothes fit well and feel comfortable for walking, sitting, and playing. Wear comfortable shoes suitable for walking in grass or sand.</p>
    `
  },
  {
    id: "milestone-photography",
    title: "Milestone Photography: Capturing Baby's First Year",
    category: "Milestones",
    date: "Jul 15, 2026",
    readTime: "6 min read",
    image: "assets/toddler_shoot.png",
    excerpt: "From their first smiles to cake smashes, read about which milestones are the most rewarding to capture in our studio.",
    content: `
      <p class="mb-4 text-gray-600 text-base leading-[1.8]">Your baby changes more in their first year than at any other time in their life. Capturing these milestones ensures you will never forget the tiny details of their rapid growth.</p>
      
      <h3 class="text-xl font-bold text-charcoal mt-6 mb-3 font-playfair">1. The Sitter Session (6 to 8 Months)</h3>
      <p class="mb-4 text-gray-600 text-base leading-[1.8]">This is often a photographer's favorite age! Babies at this stage can sit up independently but aren't yet crawling away. They are full of smiles, react to silly sounds, and show their emerging personalities with chubby cheeks and big giggles.</p>

      <h3 class="text-xl font-bold text-charcoal mt-6 mb-3 font-playfair">2. The Crawling Milestone (9 to 10 Months)</h3>
      <p class="mb-4 text-gray-600 text-base leading-[1.8]">Capturing your baby pulling themselves up, crawling, or taking their very first tentative steps creates dynamic, candid photos that represent their growing independence and curiosity.</p>

      <h3 class="text-xl font-bold text-charcoal mt-6 mb-3 font-playfair">3. The First Birthday & Cake Smash (11 to 12 Months)</h3>
      <p class="mb-4 text-gray-600 text-base leading-[1.8]">Celebrate one full year of joy with a themed first birthday portrait and a fun cake smash session! Watch your little one explore texture and taste as they smash, play, and eat their birthday cake in a custom-designed studio theme.</p>
    `
  }
];
```

---

## File 5: `script.js`
```javascript
/* ============================
   script.js – Zapple Studio (Tailwind edition)
   ============================ */

document.addEventListener('DOMContentLoaded', () => {
  let hasEngaged = false;

  /* ---- NAVBAR SCROLL ---- */
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });

  /* ---- HAMBURGER / MOBILE MENU ---- */
  const hamburger   = document.getElementById('hamburger');
  const mobileMenu  = document.getElementById('mobileMenu');

  hamburger.addEventListener('click', () => {
    const isOpen = hamburger.classList.toggle('active');
    
    if (isOpen) {
      mobileMenu.classList.remove('opacity-0', 'invisible', 'pointer-events-none');
      document.body.style.overflow = 'hidden';
    } else {
      closeMenu();
    }
  });

  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  function closeMenu() {
    hamburger.classList.remove('active');
    mobileMenu.classList.add('opacity-0', 'invisible', 'pointer-events-none');
    document.body.style.overflow = '';
  }

  /* ---- SMOOTH SCROLL ---- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const top = target.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  /* ---- SCROLL ANIMATIONS (AOS-like) ---- */
  const animatedEls = document.querySelectorAll('[data-aos]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('aos-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  animatedEls.forEach(el => observer.observe(el));

  /* ---- SERVICES CAROUSEL ---- */
  const track = document.getElementById('services-track');
  const prevBtn = document.getElementById('services-prev');
  const nextBtn = document.getElementById('services-next');
  const viewport = document.getElementById('services-viewport');

  if (track && prevBtn && nextBtn && viewport) {
    const originalCards = Array.from(track.children);
    const originalCount = originalCards.length;
    const cloneCount = 3;

    for (let i = 0; i < cloneCount; i++) {
      const clone = originalCards[i].cloneNode(true);
      clone.removeAttribute('id');
      track.appendChild(clone);
    }

    for (let i = originalCount - 1; i >= originalCount - cloneCount; i--) {
      const clone = originalCards[i].cloneNode(true);
      clone.removeAttribute('id');
      track.insertBefore(clone, track.firstChild);
    }

    const allCards = Array.from(track.children);
    let currentIndex = cloneCount;
    let isTransitioning = false;
    let autoplayInterval = null;

    function updateCarousel(instant = false) {
      if (instant) {
        track.style.transition = 'none';
      } else {
        track.style.transition = 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)';
      }
      
      const targetCard = allCards[currentIndex];
      const offset = targetCard.offsetLeft;
      
      track.style.transform = `translateX(-${offset}px)`;
    }

    function slideTo(index) {
      if (isTransitioning) return;
      isTransitioning = true;
      currentIndex = index;
      updateCarousel();
    }

    function slideNext() {
      slideTo(currentIndex + 1);
    }

    function slidePrev() {
      slideTo(currentIndex - 1);
    }

    nextBtn.addEventListener('click', () => {
      slideNext();
      resetAutoplay();
    });

    prevBtn.addEventListener('click', () => {
      slidePrev();
      resetAutoplay();
    });

    track.addEventListener('transitionend', () => {
      isTransitioning = false;

      if (currentIndex >= originalCount + cloneCount) {
        currentIndex = cloneCount;
        updateCarousel(true);
      }
      else if (currentIndex < cloneCount) {
        currentIndex = originalCount + currentIndex;
        updateCarousel(true);
      }
    });

    function startAutoplay() {
      autoplayInterval = setInterval(slideNext, 4000);
    }

    function stopAutoplay() {
      if (autoplayInterval) {
        clearInterval(autoplayInterval);
        autoplayInterval = null;
      }
    }

    function resetAutoplay() {
      stopAutoplay();
      startAutoplay();
    }

    const carouselContainer = track.closest('.group\\/carousel') || track.parentElement;
    carouselContainer.addEventListener('mouseenter', stopAutoplay);
    carouselContainer.addEventListener('mouseleave', startAutoplay);

    requestAnimationFrame(() => {
      setTimeout(() => {
        updateCarousel(true);
      }, 50);
    });

    window.addEventListener('resize', () => {
      updateCarousel(true);
    }, { passive: true });

    startAutoplay();
  }

  /* ---- GALLERY LIGHTBOX ---- */
  const galleryItems   = document.querySelectorAll('.gallery-grid .gallery-item');
  const lightbox       = document.getElementById('lightbox');
  const lightboxImg    = document.getElementById('lightboxImg');
  const lightboxClose  = document.getElementById('lightboxClose');

  if (lightbox && lightboxClose && lightboxImg) {
    galleryItems.forEach(item => {
      item.addEventListener('click', () => {
        const img = item.querySelector('img');
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightbox.classList.remove('hidden');
        lightbox.classList.add('flex');
        document.body.style.overflow = 'hidden';
      });
    });

    const closeLightbox = () => {
      lightbox.classList.add('hidden');
      lightbox.classList.remove('flex');
      document.body.style.overflow = '';
    };

    lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeLightbox(); });
  }

  /* ---- ENQUIRY FORM ---- */
  const form        = document.getElementById('enquiryForm');
  const formSuccess = document.getElementById('formSuccess');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      let valid = true;
      const required = form.querySelectorAll('[required]');

      required.forEach(field => {
        field.classList.remove('border-red-500');
        if (!field.value.trim()) {
          field.classList.add('border-red-500');
          valid = false;
          field.classList.add('shake');
          setTimeout(() => field.classList.remove('shake'), 400);
        }
      });

      if (!valid) return;

      const btn     = document.getElementById('submit-enquiry-btn');
      const btnText = btn.querySelector('.btn-text');
      const btnLoad = btn.querySelector('.btn-loading');

      btnText.classList.add('hidden');
      btnLoad.classList.remove('hidden');
      btn.disabled = true;

      const formData = new FormData(form);
      
      fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })
      .then(response => {
        form.style.display = 'none';
        formSuccess.classList.remove('hidden');
        formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
        if (typeof hasEngaged !== 'undefined') hasEngaged = true;
      })
      .catch(error => {
        console.error('Form submission error:', error);
        btnText.classList.remove('hidden');
        btnLoad.classList.add('hidden');
        btn.disabled = false;
        alert("There was an error submitting your enquiry. Please try again or contact us on WhatsApp.");
      });
    });

    form.querySelectorAll('input, select, textarea').forEach(field => {
      field.addEventListener('input', () => field.classList.remove('border-red-500'));
    });
  }

  /* ---- COUNTER ANIMATION ---- */
  const counters = document.querySelectorAll('.stat-num');
  const counterObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el   = entry.target;
      const text = el.textContent;
      const match = text.match(/^(\d+)/);
      if (match) {
        const target   = parseInt(match[1]);
        const suffix   = text.replace(match[1], '');
        let current    = 0;
        const step     = target / (1800 / 16);
        const timer    = setInterval(() => {
          current += step;
          if (current >= target) { current = target; clearInterval(timer); }
          el.textContent = Math.floor(current) + suffix;
        }, 16);
      }
      counterObs.unobserve(el);
    });
  }, { threshold: 0.8 });
  counters.forEach(c => counterObs.observe(c));

  /* ---- BRANCH CARD 3D HOVER ---- */
  const branchCards = document.querySelectorAll('#branch-arumbakkam, #branch-keelkatalai');
  branchCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 8;
      const y = ((e.clientY - rect.top)  / rect.height - 0.5) * 8;
      card.style.transform = `translateY(-6px) perspective(800px) rotateX(${-y}deg) rotateY(${x}deg)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });

  /* ---- ACTIVE NAV LINK ON SCROLL ---- */
  const sections    = document.querySelectorAll('section[id]');
  
  if (document.getElementById('home')) {
    window.addEventListener('scroll', () => {
      let current = '';
      sections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 120) current = section.id;
      });
      document.querySelectorAll('#navbar ul a:not(#nav-book-btn)').forEach(link => {
        link.classList.toggle('nav-link-active', link.getAttribute('href') === `#${current}`);
      });
    }, { passive: true });
  }

  /* ---- WHATSAPP WIDGET ---- */
  const whatsappToggle = document.getElementById('whatsapp-toggle');
  const whatsappPopup = document.getElementById('whatsapp-popup');
  const chatCloseBtn = document.getElementById('chat-close-btn');

  if (whatsappToggle && whatsappPopup && chatCloseBtn) {
    whatsappToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      whatsappPopup.classList.toggle('active');
      whatsappPopup.classList.toggle('opacity-0');
      whatsappPopup.classList.toggle('invisible');
      whatsappPopup.classList.toggle('translate-y-4');
    });

    chatCloseBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      whatsappPopup.classList.remove('active');
      whatsappPopup.classList.add('opacity-0', 'invisible', 'translate-y-4');
    });

    document.addEventListener('click', (e) => {
      const widget = document.getElementById('whatsapp-widget');
      if (widget && !widget.contains(e.target)) {
        whatsappPopup.classList.remove('active');
        whatsappPopup.classList.add('opacity-0', 'invisible', 'translate-y-4');
      }
    });
  }

  /* ---- SMART LEAD POPUP ---- */
  const leadPopup = document.getElementById('lead-popup');
  const leadPopupContent = document.getElementById('lead-popup-content');
  const leadPopupBg = document.getElementById('lead-popup-bg');
  const leadPopupClose = document.getElementById('lead-popup-close');
  const leadForm = document.getElementById('lead-form');
  const leadFormContainer = document.getElementById('lead-form-container');
  const leadSuccess = document.getElementById('lead-success');

  function showLeadPopup() {
    if (hasEngaged || sessionStorage.getItem('zapplePopupShown')) return;
    
    leadPopup.classList.remove('opacity-0', 'invisible', 'pointer-events-none');
    setTimeout(() => {
      leadPopupContent.classList.remove('scale-95');
      leadPopupContent.classList.add('scale-100');
    }, 10);
    
    sessionStorage.setItem('zapplePopupShown', 'true');
  }

  function closeLeadPopup() {
    leadPopupContent.classList.remove('scale-100');
    leadPopupContent.classList.add('scale-95');
    leadPopup.classList.add('opacity-0', 'invisible', 'pointer-events-none');
  }

  if (leadPopup) {
    leadPopupClose.addEventListener('click', closeLeadPopup);
    leadPopupBg.addEventListener('click', closeLeadPopup);
    
    document.addEventListener('mouseleave', (e) => {
      if (e.clientY < 0) showLeadPopup();
    });

    setTimeout(() => {
      showLeadPopup();
    }, 15000);

    let lastScroll = window.scrollY;
    window.addEventListener('scroll', () => {
      const currentScroll = window.scrollY;
      if (currentScroll < lastScroll - 50 && currentScroll > 500) {
        showLeadPopup();
      }
      lastScroll = currentScroll;
    }, { passive: true });
    
    leadForm.addEventListener('submit', (e) => {
      e.preventDefault();

      let valid = true;
      const required = leadForm.querySelectorAll('[required]');

      required.forEach(field => {
        field.classList.remove('border-red-500');
        if (!field.value.trim()) {
          field.classList.add('border-red-500');
          valid = false;
        }
      });

      if (!valid) return;

      const btn = document.getElementById('lead-submit-btn');
      const btnText = btn.querySelector('.btn-text');
      const btnLoad = btn.querySelector('.btn-loading');
      
      btnText.classList.add('hidden');
      btnLoad.classList.remove('hidden');
      btn.disabled = true;

      const formData = new FormData(leadForm);

      fetch(leadForm.action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      })
      .then(response => {
        leadFormContainer.classList.add('hidden');
        leadSuccess.classList.remove('hidden');
        hasEngaged = true;
        setTimeout(closeLeadPopup, 4000);
      })
      .catch(error => {
        console.error('Popup submit error:', error);
        btnText.classList.remove('hidden');
        btnLoad.classList.add('hidden');
        btn.disabled = false;
        alert("There was an error. Please contact us on WhatsApp.");
      });
    });

    leadForm.querySelectorAll('input, select').forEach(field => {
      field.addEventListener('input', () => field.classList.remove('border-red-500'));
    });
  }

  /* ---- TRACK ENGAGEMENT ---- */
  document.querySelectorAll('#whatsapp-toggle, #whatsapp-btn, #nav-book-btn, #hero-book-btn').forEach(btn => {
    btn.addEventListener('click', () => { hasEngaged = true; });
  });

});
```

---

## Notes on HTML Pages Contained in Project Repository
The remaining key HTML source files (`index.html`, `about.html`, `services.html`, `gallery.html`, `contact.html`, `blogs.html`, `blog-detail.html`) represent the structured frontend layouts for Zapple Studio, consuming Tailwind CDN, Playfair Display fonts, Web3Forms integration, and `script.js` interactive event listeners.

---
