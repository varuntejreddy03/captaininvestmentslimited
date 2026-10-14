# Captain Investments Limited — Premium 3D Marketing Website

Award-level, production-ready, frontend-only 3D multi-page marketing website built for **Captain Investments Limited**, Lusaka's premier borehole drilling and heavy earth-moving equipment hire contractor in Zambia.

---

## 🏗️ Brand & Identity

- **Colors**:
  - Primary Navy: `#0A1F6B`
  - Ocean Blue: `#0A5BB5`
  - Sky Blue: `#3B8FE0`
  - Safety Orange (CTAs & Accents): `#F59E0B`
  - Industrial Black: `#0B0B0B`
  - Off-White: `#F5F7FA`
- **Motif**: The brand emblem combines an ocean blue wave curling into a "C", a golden-orange drill auger inside it, and a rugged crawler excavator track underneath. This motif is woven into UI borders, 3D scenes, preloader animations, and card rims.
- **Typography**: Headings in *Space Grotesk*, body text in *Inter*.

---

## 🌟 Signature 3D & Interactive Experiences

1. **Full-Screen 3D Hero Canvas (`/components/three/Hero3D.tsx`)**:
   - Procedural low-poly golden drill auger with helical flutes and carbide teeth rotating in the center.
   - Dynamic water wave ring shader (`WaveShader.ts`) curling around the auger.
   - Ambient water & dust micro-particles responding to mouse parallax.
   - Instant CSS/image fallback for low-end devices, reduced motion, or `Save-Data` modes.
2. **Scroll-Driven Drill Descent (`/components/three/DrillScene.tsx`)**:
   - 3D stratigraphic soil column visualizing Topsoil (0–15m), Weathered Rock & Clay (15–60m), Hard Dolomite Rock (60–90m), and Pristine Underground Aquifer (90–120m+).
   - Camera and drill bit track scroll progress; water table pulses and rises at aquifer strike.
3. **Interactive Fleet Showcase (`/components/ui/FleetShowcase.tsx` & `/components/three/FleetTiltCard.tsx`)**:
   - Horizontal snap-scroll carousel featuring all 8 verified client machines.
   - Interactive 3D mouse tilt with depth transformation and animated track/sprocket accents.
   - Direct "Request this machine" buttons that open prefilled WhatsApp messages naming the machine.
4. **Lusaka Live Business Hours Badge (`/components/ui/LiveHoursBadge.tsx` & `/lib/hours.ts`)**:
   - Real-time evaluation against `Africa/Lusaka` (CAT, UTC+2) time.
   - Reflects operating hours: **Monday to Saturday, 08:00 to 17:00** (Sunday closed).
   - Dynamic states: "Open Now", "Open Now • Closes in X mins", "Closed Today (Sunday)", or "Closed for the evening".
5. **Instant WhatsApp Quote Generator (`/components/ui/QuoteForm.tsx`)**:
   - Frontend-only conversion engine validated with **Zod**.
   - Immediate prefilled WhatsApp chat launch with confetti animation.
6. **Smooth Motion Pipeline**:
   - **Lenis** smooth scroll synchronized with **GSAP ScrollTrigger**.
   - Custom desktop cursor with responsive hover expansion (`CustomCursor.tsx`).
   - SVG wave brand preloader under 1.1s with reduced-motion bypass (`Preloader.tsx`).
   - Sticky mobile action bar with direct Call, WhatsApp, and Quote triggers (`MobileStickyBar.tsx`).

---

## 📂 Multi-Page Architecture

```text
/app
├── layout.tsx                     # Space Grotesk + Inter fonts, JSON-LD LocalBusiness schema
├── globals.css                    # Tailwind CSS v4 design tokens, glassmorphism, track textures
├── page.tsx                       # Home page (Hero3D, Stats, Services, DrillScene, Fleet, WhyUs, Contact)
├── not-found.tsx                  # Branded 404 handler
├── sitemap.ts                     # Dynamic Next.js sitemap
├── robots.ts                      # SEO crawler robots directives
├── services/
│   ├── page.tsx                   # Services hub (Boreholes & Earth Movers comparison)
│   ├── borehole-drilling/
│   │   └── page.tsx               # Deep dive: Hydrogeological survey, DTH rotary rock drilling, uPVC casing, solar pumps
│   └── equipment-hire/
│       └── page.tsx               # Deep dive: Wet vs. Dry hire terms, lowbed haulage, machine specs
├── fleet/
│   └── page.tsx                   # Full 8-machine gallery with specs, photos, and direct WhatsApp links
├── about/
│   └── page.tsx                   # Company story, brand motif meaning, operator standards, Lusaka HQ
└── contact/
    └── page.tsx                   # Contact desk, live hours badge, embedded Lusaka map, FAQ, quote form
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js `v18.18+` or `v20+` (tested on Node v24)
- npm `v9+` or `v11+`

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
```bash
npm run build
```
Creates an optimized static output ready for Vercel or any static host.

### Code Quality & Linting
```bash
npm run lint
```

---

## ⚙️ How to Update Business Data & Content

All business constants, phone numbers, hours, and fleet items are isolated in a single file:
👉 **[`lib/constants.ts`](file:///c:/Users/varun/Downloads/captaininvestmentslimited/lib/constants.ts)**

- **Update Phone & WhatsApp**: Change `BUSINESS_INFO.phone` and `BUSINESS_INFO.phoneRaw`.
- **Update Operating Hours**: Change `BUSINESS_INFO.hours`.
- **Toggle Stats Counters**: Set `FEATURE_FLAGS.SHOW_STATS_COUNTERS = true` once the client verifies metrics.
- **Add or Edit Fleet Machines**: Update entries in `FLEET_MACHINES`.

---

## 🖼️ How to Swap Machinery Images

All client images are stored in `/public/images/`:
- `logo.png` / `logo.jpeg`: Company brand emblem
- `wheel-loader.jpg`: SDLG Wheel loader
- `excavator-rocks.jpg`: SANY Heavy Excavator on rock terrain
- `two-backhoes.jpg`: Dual BULL Backhoe Loaders
- `soil-compactor.jpg`: Volvo Soil Compactor Roller
- `backhoe-sunset.jpg`: BULL HD 100 Backhoe at sunset
- `excavator-lowbed.jpg`: SANY Excavator on heavy Scania lowbed truck
- `bulldozer.jpg`: CAT D7 Crawler Bulldozer
- `motor-grader.jpg`: CAT Motor Grader

To update any image, replace the file in `/public/images/` with the same name, or update the `image` path in `lib/constants.ts`.

---

## ⚡ 3G/4G Zambian Network Optimization

- **Low Bundle Weight**: First load JS shared across pages is only **~103 KB**.
- **Adaptive 3D**: `Hero3D` checks WebGL availability, `prefers-reduced-motion`, and `navigator.connection.saveData`. Low-end devices receive an ultra-lightweight CSS/SVG animated fallback.
- **Device Pixel Ratio (DPR)**: Capped at `1.5` in Three.js Canvas to conserve GPU and battery life on mobile devices.
- **Next.js Image Optimization**: WebP and AVIF formats with responsive srcset dimensions.

---

## 🌐 Deploy to Vercel

1. Push this repository to GitHub / GitLab / Bitbucket.
2. Import the repository into [Vercel](https://vercel.com).
3. Framework Preset: **Next.js** (auto-detected).
4. Click **Deploy**.
