"use client";

import { useState, useEffect } from "react";
import {
  Utensils, Coffee, Beer, Star, Waves, Mountain, Bike, Dumbbell,
  Activity, Fish, Anchor, TreePine, Leaf, Car, Plane, ShoppingCart,
  ShoppingBag, Package, Heart, Shield, Sun, Flame, Droplets, Cloud,
  Zap, Target, MapPin, ChevronRight, ChevronLeft, ChevronDown, Palette, Phone, Globe, Clock,
  Menu, X, AlertCircle, CheckCircle2, Building2, Sailboat, Sandwich,
  Wine, IceCream, Soup, MessageCircle, Stethoscope, Hospital, Music,
  Sunset, Users, Croissant, FileText,
  Bed, Bath, Wind, Wifi, Home as HomeIcon, Map as MapIcon, Navigation,
} from "lucide-react";
import {
  casaSeabranch,
  theClub, inTownRestaurants, nearbyAreas, activities,
  privateChefs, dayTrips, boating, transport,
  groceriesEnRoute, groceriesNearLC, medicalInfo,
} from "./data";

/* ─── Icon map ──────────────────────────────────────────────────────────────── */

const ICONS: Record<string, React.ElementType> = {
  utensils: Utensils, coffee: Coffee, beer: Beer, star: Star,
  waves: Waves, mountain: Mountain, bike: Bike, dumbbell: Dumbbell,
  activity: Activity, fish: Fish, anchor: Anchor, "tree-pine": TreePine,
  leaf: Leaf, car: Car, plane: Plane, "shopping-cart": ShoppingCart,
  "shopping-bag": ShoppingBag, package: Package, heart: Heart,
  shield: Shield, sun: Sun, flame: Flame, droplets: Droplets, cloud: Cloud,
  zap: Zap, target: Target, "map-pin": MapPin, "building-2": Building2,
  sailboat: Sailboat, sandwich: Sandwich, wine: Wine, "ice-cream": IceCream,
  soup: Soup, "message-circle": MessageCircle, stethoscope: Stethoscope,
  hospital: Hospital, "chef-hat": Utensils, volleyball: Target,
  music: Music, sunset: Sunset, swimmer: Users, croissant: Croissant,
  martini: Wine, "palm-tree": TreePine,
  bed: Bed, bath: Bath, wind: Wind, wifi: Wifi, home: HomeIcon,
};

function Icon({ name, className }: { name: string; className?: string }) {
  const C = ICONS[name] ?? Utensils;
  return <C className={className} />;
}

function MultiIcon({ names, className, circleClass }: {
  names: string | string[];
  className?: string;
  circleClass: string;
}) {
  const iconArray = Array.isArray(names) ? names.slice(0, 3) : [names];
  return (
    <div className="flex items-center gap-2">
      {iconArray.map((name, idx) => (
        <div key={idx} className={circleClass}>
          <Icon name={name} className={className} />
        </div>
      ))}
    </div>
  );
}

/* ─── Image Carousel ────────────────────────────────────────────────────────── */

function ImageCarousel({ images, alt, className, objectPositions }: {
  images: string[];
  alt: string;
  className?: string;
  objectPositions?: string[];
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) return null;
  if (images.length === 1) {
    const position = objectPositions?.[0] || 'object-center';
    return <img src={images[0]} alt={alt} className={`${className} ${position}`} />;
  }

  const next = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToSlide = (index: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex(index);
  };

  const currentPosition = objectPositions?.[currentIndex] || 'object-center';

  return (
    <div className="relative w-full h-full group">
      <img src={images[currentIndex]} alt={alt} className={`${className} ${currentPosition}`} />

      {/* Next button */}
      {images.length > 1 && (
        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg hover:bg-white z-10"
          aria-label="Next image"
        >
          <ChevronRight className="w-5 h-5 text-gray-800" />
        </button>
      )}

      {/* Dot indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={(e) => goToSlide(idx, e)}
              className={`w-1.5 h-1.5 rounded-full transition-all ${
                idx === currentIndex ? 'bg-white w-2' : 'bg-white/60'
              }`}
              aria-label={`Go to image ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

/* ─── Themes ────────────────────────────────────────────────────────────────── */

type ThemeKey = "coastal" | "midnight" | "warm" | "forest";

interface Theme {
  id: ThemeKey;
  name: string;
  tagline: string;
  /* page structure */
  pageBg: string;
  altBg: string;
  cardBg: string;
  cardOnAlt: string;
  /* nav */
  navScrollBg: string;
  navText: string;
  navLogo: string;
  /* hero */
  heroOverlay: string;
  btnPrimary: string;
  btnGhost: string;
  /* text */
  heading: string;
  body: string;
  muted: string;
  /* accent */
  accent: string;
  accentBg: string;
  accentMid: string;
  accentLight: string;
  /* misc */
  border: string;
  pill: string;
  mustGoBadge: string;
  tabActive: string;
  tabInactive: string;
  checkIcon: string;
  stripBg: string;
  stripText: string;
  footerBg: string;
  footerText: string;
  swatches: string[];
}

const themes: Record<ThemeKey, Theme> = {
  coastal: {
    id: "coastal", name: "Coastal Light", tagline: "Clean · Airy · Modern",
    pageBg: "bg-[#f5f5f7]", altBg: "bg-white", cardBg: "bg-white", cardOnAlt: "bg-[#f5f5f7]",
    navScrollBg: "bg-white/85 backdrop-blur-2xl border-b border-[#d2d2d7]/40 shadow-[0_1px_0_rgba(0,0,0,0.06)]",
    navText: "text-[#1d1d1f]", navLogo: "text-[#1d1d1f]",
    heroOverlay: "bg-gradient-to-b from-black/65 via-black/40 to-black/25",
    btnPrimary: "bg-teal-500 hover:bg-teal-600 text-white",
    btnGhost: "border border-white/50 text-white hover:bg-white/15 backdrop-blur-sm",
    heading: "text-[#1d1d1f]", body: "text-[#6e6e73]", muted: "text-[#525258]",
    accent: "text-teal-600", accentBg: "bg-teal-500", accentMid: "bg-teal-100", accentLight: "bg-teal-50",
    border: "border-[#d2d2d7]", pill: "bg-[#f5f5f7] text-[#6e6e73]",
    mustGoBadge: "bg-amber-50 text-amber-700",
    tabActive: "bg-[#1d1d1f] text-white", tabInactive: "text-[#6e6e73] hover:bg-[#f5f5f7]",
    checkIcon: "text-teal-500", stripBg: "bg-[#1d1d1f]", stripText: "text-white/80",
    footerBg: "bg-[#1d1d1f]", footerText: "text-[#86868b]",
    swatches: ["#14b8a6","#1d1d1f","#f5f5f7","#d2d2d7"],
  },
  midnight: {
    id: "midnight", name: "Midnight", tagline: "Dark · Sleek · Bold",
    pageBg: "bg-[#000]", altBg: "bg-[#0a0a0a]", cardBg: "bg-[#1c1c1e]", cardOnAlt: "bg-[#1c1c1e]",
    navScrollBg: "bg-black/85 backdrop-blur-2xl border-b border-white/10",
    navText: "text-white", navLogo: "text-white",
    heroOverlay: "bg-gradient-to-b from-black/70 via-black/50 to-black/40",
    btnPrimary: "bg-sky-500 hover:bg-sky-400 text-white",
    btnGhost: "border border-white/30 text-white hover:bg-white/10",
    heading: "text-white", body: "text-[#ebebf5]/70", muted: "text-[#ebebf5]/65",
    accent: "text-sky-400", accentBg: "bg-sky-500", accentMid: "bg-sky-500/20", accentLight: "bg-sky-500/10",
    border: "border-white/10", pill: "bg-white/10 text-[#ebebf5]/70",
    mustGoBadge: "bg-amber-400/10 text-amber-400",
    tabActive: "bg-white text-black", tabInactive: "text-[#ebebf5]/50 hover:bg-white/10",
    checkIcon: "text-sky-400", stripBg: "bg-[#0a0a0a]", stripText: "text-white/50",
    footerBg: "bg-[#000]", footerText: "text-white/30",
    swatches: ["#000","#1c1c1e","#38bdf8","#ffffff"],
  },
  warm: {
    id: "warm", name: "Warm Sand", tagline: "Warm · Inviting · Rich",
    pageBg: "bg-[#faf8f5]", altBg: "bg-white", cardBg: "bg-white", cardOnAlt: "bg-[#faf8f5]",
    navScrollBg: "bg-white/85 backdrop-blur-2xl border-b border-[#e8e0d5]/60",
    navText: "text-[#1a1612]", navLogo: "text-[#1a1612]",
    heroOverlay: "bg-gradient-to-b from-black/65 via-black/40 to-black/20",
    btnPrimary: "bg-amber-600 hover:bg-amber-700 text-white",
    btnGhost: "border border-white/50 text-white hover:bg-white/15 backdrop-blur-sm",
    heading: "text-[#1a1612]", body: "text-[#6b6460]", muted: "text-[#5f5853]",
    accent: "text-amber-700", accentBg: "bg-amber-600", accentMid: "bg-amber-100", accentLight: "bg-amber-50",
    border: "border-[#e8e0d5]", pill: "bg-[#faf8f5] text-[#6b6460]",
    mustGoBadge: "bg-rose-50 text-rose-700",
    tabActive: "bg-[#1a1612] text-white", tabInactive: "text-[#6b6460] hover:bg-[#faf8f5]",
    checkIcon: "text-amber-600", stripBg: "bg-[#1a1612]", stripText: "text-white/75",
    footerBg: "bg-[#1a1612]", footerText: "text-[#9c9490]",
    swatches: ["#d97706","#1a1612","#faf8f5","#e8e0d5"],
  },
  forest: {
    id: "forest", name: "Island Green", tagline: "Natural · Verdant · Alive",
    pageBg: "bg-[#f2f7f4]", altBg: "bg-white", cardBg: "bg-white", cardOnAlt: "bg-[#f2f7f4]",
    navScrollBg: "bg-white/85 backdrop-blur-2xl border-b border-[#c8ddd0]/50",
    navText: "text-[#132b1f]", navLogo: "text-[#132b1f]",
    heroOverlay: "bg-gradient-to-b from-black/65 via-black/40 to-black/20",
    btnPrimary: "bg-emerald-700 hover:bg-emerald-800 text-white",
    btnGhost: "border border-white/50 text-white hover:bg-white/15 backdrop-blur-sm",
    heading: "text-[#132b1f]", body: "text-[#4a6357]", muted: "text-[#4a6357]",
    accent: "text-emerald-700", accentBg: "bg-emerald-700", accentMid: "bg-emerald-100", accentLight: "bg-emerald-50",
    border: "border-[#c8ddd0]", pill: "bg-[#f2f7f4] text-[#4a6357]",
    mustGoBadge: "bg-amber-50 text-amber-700",
    tabActive: "bg-[#132b1f] text-white", tabInactive: "text-[#4a6357] hover:bg-[#f2f7f4]",
    checkIcon: "text-emerald-600", stripBg: "bg-[#132b1f]", stripText: "text-white/70",
    footerBg: "bg-[#132b1f]", footerText: "text-[#7a9989]",
    swatches: ["#059669","#132b1f","#f2f7f4","#c8ddd0"],
  },
};

/* ─── Nav links ─────────────────────────────────────────────────────────────── */

const NAV_LINKS = [
  { href: "#dining",    label: "Dining" },
  { href: "#nearby",   label: "Nearby" },
  { href: "#explore",  label: "Activities" },
  { href: "#daytrips", label: "Day Trips" },
  { href: "#boating",  label: "Boating" },
  { href: "#practical",label: "Practical" },
];

const HIGHLIGHTS = [
  "100% Car-Free Town",
  "2 Pristine Pacific Beaches",
  "42km of Trails",
  "Wildlife Daily",
  "11 Restaurants In Town",
  "World-Class Mountain Biking",
  "Dry Season: Nov – Apr",
  "1 Hour from Liberia Airport",
];

/* ─── Section heading ───────────────────────────────────────────────────────── */

function SectionHead({ eyebrow, title, sub, t, center = true }: {
  eyebrow: string; title: string; sub?: string; t: Theme; center?: boolean;
}) {
  return (
    <div className={`mb-12 sm:mb-16 ${center ? "text-center" : ""}`}>
      <p className={`text-[12px] font-semibold tracking-[0.12em] uppercase ${t.muted} mb-3`}>{eyebrow}</p>
      <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold ${t.heading} leading-tight mb-4`}>{title}</h2>
      {sub && <p className={`text-base sm:text-lg ${t.body} max-w-2xl ${center ? "mx-auto" : ""}`}>{sub}</p>}
    </div>
  );
}

/* ─── Page ──────────────────────────────────────────────────────────────────── */

export default function Home() {
  const [themeKey, setThemeKey] = useState<ThemeKey>("coastal");
  const [pickerOpen, setPickerOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeArea, setActiveArea] = useState(0);
  const [seabranchOpen, setSeabranchOpen] = useState(false);
  const t = themes[themeKey];

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 72);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Prevent scroll restoration - always start at top
  useEffect(() => {
    if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-500 ${t.pageBg} overflow-x-hidden`}>

      {/* ── Navbar ─────────────────────────────────────────────────────── */}
      <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-400 ${scrolled ? t.navScrollBg : "bg-transparent"}`}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between h-[60px]">
          <a href="#" className={`text-[15px] font-semibold tracking-tight transition-colors duration-300 ${scrolled ? t.navLogo : "text-white"}`}>
            Las Catalinas
          </a>
          <nav className={`hidden lg:flex items-center gap-7 text-[13px] font-medium transition-colors duration-300 ${scrolled ? t.navText : "text-white/85"}`}>
            {NAV_LINKS.map(l => (
              <a key={l.href} href={l.href} className="hover:opacity-50 transition-opacity">{l.label}</a>
            ))}
          </nav>
          <button onClick={() => setMobileOpen(true)} className={`lg:hidden p-2 -mr-2 transition-colors ${scrolled ? t.navText : "text-white"}`} aria-label="Menu">
            <Menu className="w-[22px] h-[22px]" />
          </button>
        </div>
      </header>

      {/* ── Mobile drawer ───────────────────────────────────────────────── */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[70] flex" onClick={() => setMobileOpen(false)}>
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
          <div className={`relative ml-auto w-[280px] h-full ${t.cardBg} flex flex-col shadow-2xl`} onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between px-6 h-[60px] border-b border-[#d2d2d7]/30">
              <span className={`text-[15px] font-semibold ${t.heading}`}>Menu</span>
              <button onClick={() => setMobileOpen(false)} className={t.muted}><X className="w-5 h-5" /></button>
            </div>
            <nav className="flex flex-col px-3 py-4 gap-1">
              {NAV_LINKS.map(l => (
                <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)}
                  className={`px-4 py-3 rounded-xl text-[15px] font-medium ${t.heading} hover:${t.accentLight} transition-colors`}>
                  {l.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* ── Hero ───────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=85"
          alt="Las Catalinas coastline"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className={`absolute inset-0 ${t.heroOverlay}`} />

        <div className="relative z-10 w-full max-w-5xl mx-auto px-5 sm:px-8 pt-24 pb-20 text-white">
          <p className="animate-fade-up text-[13px] font-medium tracking-[0.1em] uppercase text-white/60 mb-5 flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5" />
            Guanacaste, Costa Rica
          </p>
          <h1 className="animate-fade-up-d1 text-5xl sm:text-6xl lg:text-[80px] xl:text-[96px] font-bold leading-[1.02] tracking-[-0.02em] mb-6">
            Welcome to<br />
            <span className="font-light italic">Seabranch at Las Catalinas</span>
          </h1>
          <p className="animate-fade-up-d2 text-lg sm:text-xl text-white/70 max-w-lg mb-3 leading-relaxed">
            Car-free. Walkable. Absolutely magical.
          </p>
          <p className="animate-fade-up-d2 text-[15px] text-white/50 max-w-md mb-10 leading-relaxed">
            Your complete guide to dining, adventures, and everything in between in Costa Rica's most unique beach town.
          </p>
          <div className="animate-fade-up-d3 flex flex-col sm:flex-row gap-3">
            <a href="#dining" className={`inline-flex items-center justify-center px-7 py-3.5 rounded-full text-[15px] font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] ${t.btnPrimary}`}>
              Explore Dining
            </a>
            <a href="#explore" className={`inline-flex items-center justify-center px-7 py-3.5 rounded-full text-[15px] font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] ${t.btnGhost}`}>
              Things To Do
            </a>
          </div>
        </div>
      </section>

      {/* ── Casa Seabranch — Property Feature Card ─────────────────────── */}
      <section className={`${t.pageBg} py-24 sm:py-32 px-5 sm:px-8`}>
        <div className="max-w-7xl mx-auto">
          <div className={`${t.cardBg} rounded-[28px] sm:rounded-[32px] overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.18)]`}>
            {/* Top: 60/40 image + content split — gives the sketch real width to live in */}
            <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr]">
              {/* Left: sketch + CTA — visual/action side. Sketch on #fafafa matte, primary CTA centered beneath it. */}
              <div className="bg-[#fafafa] flex flex-col items-center justify-center aspect-square lg:aspect-auto py-6 sm:py-8 lg:py-10">
                <img
                  src={casaSeabranch.sketch.src}
                  alt={casaSeabranch.sketch.alt}
                  className="w-[95%] max-w-none h-auto max-h-[70%] object-contain object-center"
                />

                {/* CTA — drawer toggle, lives directly under the sketch */}
                <button
                  type="button"
                  onClick={() => setSeabranchOpen(o => !o)}
                  aria-expanded={seabranchOpen}
                  aria-controls="casa-seabranch-details"
                  className={`group mt-6 sm:mt-8 lg:mt-10 inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-[16px] font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] ${t.btnPrimary}`}
                >
                  <span>{seabranchOpen ? "Close" : "Step Inside Casa Seabranch"}</span>
                  <ChevronDown
                    className={`w-[18px] h-[18px] transition-transform duration-300 ${seabranchOpen ? "rotate-180" : "group-hover:translate-y-0.5"}`}
                  />
                </button>
              </div>

              {/* Right: title + tagline + description + highlights + CTA — tighter rhythm */}
              <div className="p-7 sm:p-9 lg:p-10 xl:p-12 flex flex-col justify-center">
                <h2 className={`text-[clamp(2.25rem,3.5vw,3.125rem)] font-bold ${t.heading} leading-[1.05] tracking-[-0.02em] mb-3`}>
                  {casaSeabranch.name}
                </h2>
                <p className={`text-xl sm:text-2xl lg:text-2xl font-light italic ${t.body} mb-4 leading-snug max-w-xl whitespace-pre-line`}>
                  {casaSeabranch.tagline}
                </p>
                <span className={`self-start inline-flex items-center gap-2 text-[13px] font-medium px-4 py-2 rounded-full ${t.accentLight} ${t.accent} mb-4`}>
                  <MapPin className="w-3.5 h-3.5" />
                  {casaSeabranch.locationChip}
                </span>
                <p className={`text-[15px] sm:text-[16px] ${t.body} leading-[1.6] mb-6 max-w-xl`}>
                  {casaSeabranch.shortDescription}
                </p>

                {/* Highlights chip grid — tighter row gap, 2-up at lg keeps labels readable. CTA now lives in the left panel. */}
                <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                  {casaSeabranch.highlights.map(h => (
                    <div key={h.label} className="flex items-center gap-2.5">
                      <div className={`w-10 h-10 rounded-xl ${t.accentLight} flex items-center justify-center flex-shrink-0`}>
                        <Icon name={h.icon} className={`w-[18px] h-[18px] ${t.accent}`} />
                      </div>
                      <span className={`text-[14px] font-medium ${t.heading} leading-tight`}>{h.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Drawer — animates height via grid-rows trick */}
            <div
              id="casa-seabranch-details"
              className={`grid transition-[grid-template-rows] duration-500 ease-out ${seabranchOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
              aria-hidden={!seabranchOpen}
            >
              <div className="overflow-hidden">
                <div className={`border-t ${t.border} p-6 sm:p-10 lg:p-12 flex flex-col gap-12`}>

                  {/* About */}
                  <div>
                    <p className={`text-[12px] font-semibold tracking-[0.12em] uppercase ${t.muted} mb-4`}>
                      Welcome
                    </p>
                    <h3 className={`text-2xl sm:text-3xl font-bold ${t.heading} mb-5 leading-tight`}>
                      Step inside Casa Seabranch
                    </h3>
                    <div className={`text-[15px] ${t.body} leading-relaxed space-y-4 max-w-3xl`}>
                      {casaSeabranch.about.map((p, i) => <p key={i}>{p}</p>)}
                    </div>
                  </div>

                  {/* Arrival & Wayfinding — video + building photo side-by-side, buttons below */}
                  <div>
                    <p className={`text-[12px] font-semibold tracking-[0.12em] uppercase ${t.muted} mb-4`}>
                      Arrival & Wayfinding
                    </p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-start mb-6">
                      {/* LEFT: arrival video — compact phone-video preview, height-capped */}
                      <div className="rounded-2xl overflow-hidden bg-black w-fit max-w-full shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
                        <video
                          controls
                          preload="metadata"
                          playsInline
                          className="block w-auto h-auto max-w-full max-h-[60vh] sm:max-h-[55vh] lg:max-h-[480px] xl:max-h-[520px] object-contain"
                          aria-label="Casa Seabranch arrival video — drive-up directions to 14 BTN Flats"
                        >
                          <source src={casaSeabranch.actions.arrivalVideo} type="video/mp4" />
                          Your browser does not support inline video.{" "}
                          <a href={casaSeabranch.actions.arrivalVideo} className="underline">
                            Download the arrival video
                          </a>
                          .
                        </video>
                      </div>

                      {/* RIGHT: building photo, then heading + caption directly under it */}
                      <div>
                        <a href={casaSeabranch.arrivalImage.src} target="_blank" rel="noopener noreferrer"
                          className="group block rounded-2xl overflow-hidden mb-4 max-w-[560px]"
                          aria-label="Open larger view of the 14 BTN FLATS building">
                          <img
                            src={casaSeabranch.arrivalImage.src}
                            alt={casaSeabranch.arrivalImage.alt}
                            className="w-full h-auto group-hover:scale-[1.02] transition-transform duration-500"
                          />
                        </a>
                        <h3 className={`text-xl sm:text-2xl font-bold ${t.heading} mb-3 leading-tight`}>
                          14 BTN Flats — the blue one
                        </h3>
                        <p className={`text-[14px] ${t.body} leading-relaxed max-w-[560px]`}>
                          {casaSeabranch.arrivalImage.caption}
                        </p>
                      </div>
                    </div>

                    {/* Action buttons + coordinates note — full-width below the media grid */}
                    <div className="flex flex-wrap gap-3 mb-3">
                      <a href={casaSeabranch.actions.customMap} target="_blank" rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl ${t.accentBg} text-white text-[14px] font-medium hover:opacity-90 transition-opacity`}>
                        <MapIcon className="w-4 h-4" />
                        Open Custom Map
                      </a>
                      <a href={casaSeabranch.actions.floorPlan} target="_blank" rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl border ${t.border} ${t.heading} text-[14px] font-medium hover:opacity-90 transition-opacity`}>
                        <FileText className="w-4 h-4" />
                        View Floor Plan
                      </a>
                      <a href={casaSeabranch.actions.googleMaps} target="_blank" rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl border ${t.border} ${t.heading} text-[14px] font-medium hover:opacity-90 transition-opacity`}>
                        <Navigation className="w-4 h-4" />
                        Open in Google Maps
                      </a>
                    </div>
                    <p className={`text-[13px] ${t.muted} leading-relaxed`}>
                      Coordinates: {casaSeabranch.actions.coordinates} · Google Maps can be imprecise inside Las Catalinas — use the custom map once you arrive.
                    </p>
                  </div>

                  {/* What You'll Love */}
                  <div>
                    <p className={`text-[12px] font-semibold tracking-[0.12em] uppercase ${t.muted} mb-6`}>
                      What You'll Love
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {casaSeabranch.whatYoullLove.map(item => (
                        <div key={item.title} className={`${t.accentLight} rounded-2xl p-5 sm:p-6`}>
                          <div className={`w-11 h-11 rounded-2xl ${t.accentMid} flex items-center justify-center mb-4`}>
                            <Icon name={item.icon} className={`w-5 h-5 ${t.accent}`} />
                          </div>
                          <p className={`text-[16px] font-semibold ${t.heading} mb-2`}>{item.title}</p>
                          <p className={`text-[14px] ${t.body} leading-relaxed`}>{item.body}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Property Snapshot */}
                  <div>
                    <p className={`text-[12px] font-semibold tracking-[0.12em] uppercase ${t.muted} mb-6`}>
                      Property Snapshot
                    </p>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
                      <div>
                        <p className={`text-[14px] font-semibold ${t.heading} mb-4 flex items-center gap-2`}>
                          <HomeIcon className={`w-4 h-4 ${t.accent}`} />
                          Inside the Home
                        </p>
                        <ul className="flex flex-col gap-2.5">
                          {casaSeabranch.propertySnapshot.inside.map(item => (
                            <li key={item} className="flex items-start gap-2">
                              <CheckCircle2 className={`w-4 h-4 flex-shrink-0 mt-0.5 ${t.checkIcon}`} />
                              <span className={`text-[13px] ${t.body} leading-relaxed`}>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className={`text-[14px] font-semibold ${t.heading} mb-4 flex items-center gap-2`}>
                          <Sun className={`w-4 h-4 ${t.accent}`} />
                          Outdoor Living
                        </p>
                        <ul className="flex flex-col gap-2.5">
                          {casaSeabranch.propertySnapshot.outside.map(item => (
                            <li key={item} className="flex items-start gap-2">
                              <CheckCircle2 className={`w-4 h-4 flex-shrink-0 mt-0.5 ${t.checkIcon}`} />
                              <span className={`text-[13px] ${t.body} leading-relaxed`}>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className={`text-[14px] font-semibold ${t.heading} mb-4 flex items-center gap-2`}>
                          <MapPin className={`w-4 h-4 ${t.accent}`} />
                          Just Steps Away
                        </p>
                        <ul className="flex flex-col gap-2.5">
                          {casaSeabranch.propertySnapshot.nearby.map(item => (
                            <li key={item} className="flex items-start gap-2">
                              <CheckCircle2 className={`w-4 h-4 flex-shrink-0 mt-0.5 ${t.checkIcon}`} />
                              <span className={`text-[13px] ${t.body} leading-relaxed`}>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Sleeping Layout */}
                  <div>
                    <p className={`text-[12px] font-semibold tracking-[0.12em] uppercase ${t.muted} mb-4`}>
                      Sleeping Layout
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {casaSeabranch.sleepingLayout.map(s => (
                        <div key={s.suite} className={`rounded-2xl p-5 border ${t.border}`}>
                          <div className={`w-10 h-10 rounded-xl ${t.accentLight} flex items-center justify-center mb-3`}>
                            <Bed className={`w-5 h-5 ${t.accent}`} />
                          </div>
                          <p className={`text-[14px] font-semibold ${t.heading} mb-1`}>{s.suite}</p>
                          <p className={`text-[13px] ${t.body} leading-relaxed`}>{s.config}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Good to Know */}
                  <div className={`${t.accentLight} rounded-2xl p-5 sm:p-6`}>
                    <p className={`text-[12px] font-semibold tracking-[0.12em] uppercase ${t.muted} mb-4 flex items-center gap-2`}>
                      <AlertCircle className={`w-3.5 h-3.5 ${t.accent}`} />
                      Good to Know
                    </p>
                    <ul className="flex flex-col gap-2.5">
                      {casaSeabranch.goodToKnow.map(item => (
                        <li key={item} className="flex items-start gap-2.5">
                          <span className={`w-1.5 h-1.5 rounded-full ${t.accentBg} mt-2 flex-shrink-0`} />
                          <span className={`text-[13px] ${t.body} leading-relaxed`}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Strip ──────────────────────────────────────────────────────── */}
      <div className={`${t.stripBg} py-3.5 overflow-hidden`}>
        <div className={`flex animate-marquee whitespace-nowrap ${t.stripText}`}>
          {[...HIGHLIGHTS, ...HIGHLIGHTS].map((item, i) => (
            <span key={i} className="flex-shrink-0 text-[13px] font-medium px-8">
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ── Quick links ─────────────────────────────────────────────────── */}
      <section className={`${t.altBg} py-16 sm:py-20 px-5 sm:px-8`}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {[
            { Icon: Utensils, title: "Dining Guide",        desc: "11 restaurants in town — from casual beachside to fine dining", href: "#dining" },
            { Icon: Mountain, title: "Activities",          desc: "Hiking, biking, yoga, water sports, and more",                   href: "#explore" },
            { Icon: Waves,    title: "The Beaches",         desc: "Playa Danta & Playa Dantita — your Pacific playground",          href: "#beaches" },
            { Icon: MapPin,   title: "Nearby Restaurants",  desc: "Potrero, Flamingo, Brasilito, Huacas — all within 20 min",      href: "#nearby" },
            { Icon: Anchor,   title: "Boating & Fishing",   desc: "Catamarans, private yachts, sport fishing charters",             href: "#boating" },
            { Icon: Car,      title: "Practical Info",      desc: "Transport, groceries, medical — everything you need",           href: "#practical" },
          ].map(card => (
            <a key={card.title} href={card.href}
              className={`group flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] ${t.cardOnAlt} ${themeKey === "midnight" ? "hover:bg-white/5" : "hover:shadow-[0_4px_20px_rgba(0,0,0,0.07)]"}`}>
              <div className={`w-11 h-11 rounded-2xl ${t.accentLight} flex items-center justify-center flex-shrink-0`}>
                <card.Icon className={`w-5 h-5 ${t.accent}`} />
              </div>
              <div className="flex-1 min-w-0">
                <p className={`text-[15px] font-semibold ${t.heading}`}>{card.title}</p>
                <p className={`text-[13px] ${t.body} mt-0.5 leading-snug`}>{card.desc}</p>
              </div>
              <ChevronRight className={`w-4 h-4 ${t.muted} group-hover:translate-x-0.5 transition-transform flex-shrink-0`} />
            </a>
          ))}
        </div>
      </section>

      {/* ── The Club ──────────────────────────────────────────────────── */}
      <section className={`${t.pageBg} py-20 sm:py-28 px-5 sm:px-8`}>
        <div className="max-w-7xl mx-auto">
          <SectionHead eyebrow="On-Site Beach Club" title={theClub.name} t={t} />
          <div className={`${t.cardBg} rounded-3xl overflow-hidden flex flex-col`}>
            {/* Image */}
            {theClub.images && theClub.images.length > 0 && (
              <div className="relative h-56 sm:h-72 overflow-hidden">
                <img src={theClub.images[0]} alt={theClub.name} className="w-full h-full object-cover object-center" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              </div>
            )}
            <div className="p-6 sm:p-10">
              {/* Header with icon and badge */}
              <div className="flex items-start justify-between mb-5">
                {Array.isArray(theClub.icon)
                  ? <MultiIcon names={theClub.icon} className={`w-5 h-5 ${t.accent}`} circleClass={`w-11 h-11 rounded-2xl ${t.accentMid} flex items-center justify-center flex-shrink-0`} />
                  : <div className={`w-11 h-11 rounded-2xl ${t.accentMid} flex items-center justify-center flex-shrink-0`}>
                      <Icon name={theClub.icon} className={`w-5 h-5 ${t.accent}`} />
                    </div>
                }
              </div>

              <p className={`text-[20px] font-semibold ${t.heading} mb-2`}>{theClub.name}</p>
              <p className={`text-[14px] font-medium ${t.accent} mb-2`}>{theClub.cuisine}</p>
              <p className={`text-[13px] ${t.muted} mb-4`}>{theClub.location}</p>

              {/* Description */}
              <p className={`text-[14px] ${t.body} leading-relaxed mb-6`}>{theClub.fullDescription}</p>

              {/* Contact info */}
              <div className="flex flex-col gap-2 mb-8">
                <div className={`text-[13px] ${t.muted} flex items-center gap-2`}>
                  <Clock className="w-3.5 h-3.5 flex-shrink-0" />{theClub.hours}
                </div>
                <div className={`text-[13px] ${t.muted} flex items-center gap-2`}>
                  <Phone className="w-3.5 h-3.5 flex-shrink-0" />{theClub.phone}
                </div>
              </div>

              {/* Menu PDF */}
              {theClub.menu?.url && (
                <a href={theClub.menu.url} target="_blank" rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl ${t.accentBg} text-white text-[14px] font-medium hover:opacity-90 transition-opacity mb-8`}>
                  <FileText className="w-4 h-4" />
                  View Full Menu (PDF)
                </a>
              )}

              {/* Pricing */}
              <p className={`text-[13px] font-semibold ${t.heading} mb-3 uppercase tracking-wide`}>Day Use Pricing</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {theClub.pricing.map(p => (
                  <div key={p.who} className={`${t.accentLight} rounded-2xl p-4`}>
                    <p className={`text-[13px] font-semibold ${t.muted} mb-1`}>{p.who}</p>
                    <p className={`text-[13px] line-through ${t.muted}`}>{p.full}</p>
                    <p className={`text-[16px] font-semibold ${t.accent} mt-1`}>{p.deal}</p>
                  </div>
                ))}
              </div>

              {/* Amenities */}
              <p className={`text-[13px] font-semibold ${t.heading} mb-3 uppercase tracking-wide`}>Facilities & Amenities</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {theClub.amenities.map(a => (
                  <div key={a} className="flex items-start gap-2">
                    <CheckCircle2 className={`w-4 h-4 flex-shrink-0 mt-0.5 ${t.checkIcon}`} />
                    <span className={`text-[13px] ${t.body}`}>{a}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── In-Town Dining ──────────────────────────────────────────────── */}
      <section id="dining" className={`${t.altBg} py-20 sm:py-28 px-5 sm:px-8`}>
        <div className="max-w-7xl mx-auto">
          <SectionHead
            eyebrow="Where to Eat"
            title="On-Site Dining in Las Catalinas"
            sub="Zero chain restaurants. Eleven chef-driven kitchens
celebrating Costa Rica's extraordinary ingredients."
            t={t}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {inTownRestaurants.map(r => (
              <a key={r.name} href={`/restaurant/${encodeURIComponent(r.name)}`} className={`${t.cardOnAlt} rounded-2xl overflow-hidden flex flex-col transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] cursor-pointer group`}>
                {/* Image */}
                {r.images && r.images.length > 0 && (
                  <div className="relative h-40 overflow-hidden bg-gray-200">
                    <ImageCarousel images={r.images} alt={r.name} className="w-full h-full object-cover" objectPositions={r.imagePositions} />
                  </div>
                )}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-5">
                    {Array.isArray(r.icon)
                      ? <MultiIcon names={r.icon} className={`w-5 h-5 ${t.accent}`} circleClass={`w-10 h-10 rounded-2xl ${t.accentMid} flex items-center justify-center flex-shrink-0`} />
                      : <div className={`w-10 h-10 rounded-2xl ${t.accentMid} flex items-center justify-center flex-shrink-0`}>
                          <Icon name={r.icon} className={`w-5 h-5 ${t.accent}`} />
                        </div>
                    }
                    <div className="flex gap-2 flex-wrap justify-end">
                      {r.badge && <span className={`text-[12px] font-semibold px-2.5 py-1 rounded-full ${t.mustGoBadge}`}>★ {r.badge}</span>}
                    </div>
                  </div>
                  <p className={`text-[17px] font-semibold ${t.heading} mb-0.5`}>{r.name}</p>
                  <p className={`text-[13px] font-medium ${t.accent} mb-1`}>{r.cuisine}</p>
                  <p className={`text-[13px] ${t.muted} mb-3`}>{r.location}</p>
                  <p className={`text-[14px] ${t.body} leading-relaxed mb-5 flex-1`}>{r.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {r.tags.map(tag => <span key={tag} className={`text-[13px] px-2.5 py-1 rounded-full ${t.pill}`}>{tag}</span>)}
                  </div>
                  <div className={`text-[13px] ${t.muted} flex items-center gap-1.5`}>
                    <Clock className="w-3.5 h-3.5 flex-shrink-0" />{r.hours}
                  </div>
                  {r.phone && <div className={`text-[13px] ${t.muted} flex items-center gap-1.5 mt-1`}><Phone className="w-3.5 h-3.5 flex-shrink-0" />{r.phone}</div>}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Nearby Dining ───────────────────────────────────────────────── */}
      <section id="nearby" className={`${t.pageBg} py-20 sm:py-28 px-5 sm:px-8`}>
        <div className="max-w-7xl mx-auto">
          <SectionHead eyebrow="Beyond the Gates" title="Nearby Restaurants" sub="Potrero, Flamingo, Brasilito, and Huacas — all within 20 minutes." t={t} />

          {/* Area tab strip */}
          <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1 mb-8">
            {nearbyAreas.map((area, i) => (
              <button key={area.label} onClick={() => setActiveArea(i)}
                className={`flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-full text-[13px] font-medium transition-all duration-200 ${activeArea === i ? t.tabActive : t.tabInactive}`}>
                <span>{area.label}</span>
                <span className={`text-[12px] ${activeArea === i ? "opacity-60" : t.muted}`}>{area.distance}</span>
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {nearbyAreas[activeArea]?.spots.map(spot => (
              <a key={spot.name} href={`/restaurant/${encodeURIComponent(spot.name)}`} className={`${t.cardBg} rounded-2xl overflow-hidden flex flex-col transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] cursor-pointer group`}>
                {/* Image */}
                {spot.images && spot.images.length > 0 && (
                  <div className="relative h-40 overflow-hidden bg-gray-200">
                    <ImageCarousel images={spot.images} alt={spot.name} className="w-full h-full object-cover" objectPositions={spot.imagePositions} />
                  </div>
                )}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-3 gap-3">
                    <div className="flex-1">
                      <p className={`text-[17px] font-semibold ${t.heading}`}>{spot.name}</p>
                    </div>
                    {spot.badge && <span className={`text-[12px] font-semibold px-2.5 py-1 rounded-full flex-shrink-0 ${t.mustGoBadge}`}>★ {spot.badge}</span>}
                  </div>
                  {spot.icon && (
                    Array.isArray(spot.icon)
                      ? <div className="mb-3">
                          <MultiIcon names={spot.icon} className={`w-4 h-4 ${t.accent}`} circleClass={`w-8 h-8 rounded-lg ${t.accentLight} flex items-center justify-center flex-shrink-0`} />
                        </div>
                      : <div className={`w-8 h-8 rounded-lg ${t.accentLight} flex items-center justify-center mb-3`}>
                          <Icon name={spot.icon} className={`w-4 h-4 ${t.accent}`} />
                        </div>
                  )}
                  <p className={`text-[13px] font-medium ${t.accent} mb-3`}>{spot.cuisine}</p>
                  <p className={`text-[14px] ${t.body} leading-relaxed mb-4 flex-1`}>{spot.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {spot.tags.map(tag => <span key={tag} className={`text-[13px] px-2.5 py-1 rounded-full ${t.pill}`}>{tag}</span>)}
                  </div>
                  {spot.phone && <div className={`text-[13px] ${t.muted} flex items-center gap-1.5`}><Phone className="w-3 h-3 flex-shrink-0" />{spot.phone}</div>}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Private Chefs ───────────────────────────────────────────────── */}
      <section className={`${t.altBg} py-20 sm:py-28 px-5 sm:px-8`}>
        <div className="max-w-5xl mx-auto">
          <SectionHead eyebrow="In-Home Dining" title="Private Chefs & Catering" sub="Bring the restaurant to your villa." t={t} />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {privateChefs.map(c => (
              <a key={c.name} href={`/details/chef/${encodeURIComponent(c.name)}`} className={`${t.cardOnAlt} rounded-2xl p-6 flex flex-col transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] cursor-pointer group`}>
                <div className={`w-10 h-10 rounded-2xl ${t.accentMid} flex items-center justify-center mb-5`}>
                  <Icon name={c.icon} className={`w-5 h-5 ${t.accent}`} />
                </div>
                <p className={`text-[17px] font-semibold ${t.heading} mb-2`}>{c.name}</p>
                <p className={`text-[14px] ${t.body} leading-relaxed mb-4 flex-1`}>{c.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {c.tags.map(tag => <span key={tag} className={`text-[13px] px-2.5 py-1 rounded-full ${t.pill}`}>{tag}</span>)}
                </div>
                {c.phone && <div className={`text-[13px] ${t.muted} flex items-center gap-1.5`}><Phone className="w-3 h-3 flex-shrink-0" />{c.phone}</div>}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Activities ──────────────────────────────────────────────────── */}
      <section id="explore" className={`${t.pageBg} py-20 sm:py-28 px-5 sm:px-8`}>
        <div className="max-w-7xl mx-auto">
          <SectionHead eyebrow="Adventure Awaits" title="Activities & Wellness" sub="From sunrise yoga to sunset catamarans — on your terms." t={t} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {activities.map(a => (
              <a key={a.title} href={`/details/activity/${encodeURIComponent(a.title)}`} className={`${t.cardBg} rounded-2xl p-5 flex flex-col transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] cursor-pointer group`}>
                <div className={`w-10 h-10 rounded-2xl ${t.accentMid} flex items-center justify-center mb-4`}>
                  <Icon name={a.icon} className={`w-5 h-5 ${t.accent}`} />
                </div>
                <p className={`text-[15px] font-semibold ${t.heading} mb-2`}>{a.title}</p>
                <p className={`text-[13px] ${t.body} leading-relaxed mb-4 flex-1`}>{a.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {a.tags.map(tag => <span key={tag} className={`text-[12px] px-2 py-0.5 rounded-full ${t.pill}`}>{tag}</span>)}
                </div>
                {a.phone && <div className={`text-[13px] ${t.muted} flex items-center gap-1.5 mt-1`}><Phone className="w-3 h-3 flex-shrink-0" />{a.phone}</div>}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Beaches ─────────────────────────────────────────────────────── */}
      <section id="beaches" className={`${t.altBg} py-20 sm:py-28 px-5 sm:px-8`}>
        <div className="max-w-5xl mx-auto">
          <SectionHead eyebrow="Sun & Sand" title="The Beaches" sub="Two pristine Pacific beaches sheltered by the Pitahayas Islands." t={t} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                src: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=900&q=85",
                name: "Playa Danta",
                sub: "Main Beach · Sheltered Bay",
                desc: "The heart of Las Catalinas — great for swimming, snorkeling, surfing, and paddleboarding. Papagayo Taphouse sits right on the sand.",
                tags: ["Swimming","Snorkeling","Surfing","Paddleboarding"],
              },
              {
                src: "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?w=900&q=85",
                name: "Playa Dantita",
                sub: "Hidden Cove · More Secluded",
                desc: "The quieter sister beach — a short walk from town. Crystal-clear water, pelicans diving, almost no crowds. Equally breathtaking.",
                tags: ["Snorkeling","Peaceful","Sunsets","Tide Pools"],
              },
            ].map(beach => (
              <div key={beach.name} className={`${t.cardOnAlt} rounded-3xl overflow-hidden transition-all duration-200 hover:shadow-[0_8px_30px_rgba(0,0,0,0.10)]`}>
                <div className="relative h-52 sm:h-60 overflow-hidden">
                  <img src={beach.src} alt={beach.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6 sm:p-8">
                  <p className={`text-[20px] font-semibold ${t.heading} mb-1`}>{beach.name}</p>
                  <p className={`text-[13px] font-medium ${t.accent} mb-3`}>{beach.sub}</p>
                  <p className={`text-[14px] ${t.body} leading-relaxed mb-4`}>{beach.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {beach.tags.map(tag => <span key={tag} className={`text-[13px] px-3 py-1 rounded-full ${t.pill}`}>{tag}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Day Trips ───────────────────────────────────────────────────── */}
      <section id="daytrips" className={`${t.pageBg} py-20 sm:py-28 px-5 sm:px-8`}>
        <div className="max-w-7xl mx-auto">
          <SectionHead eyebrow="Explore Beyond" title="Day Trips & Excursions" sub="Costa Rica's greatest adventures are all within reach." t={t} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {dayTrips.map(trip => (
              <a key={trip.name} href={`/details/daytrip/${encodeURIComponent(trip.name)}`} className={`${t.cardBg} rounded-2xl p-5 flex flex-col transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] cursor-pointer group`}>
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-10 h-10 rounded-2xl ${t.accentMid} flex items-center justify-center`}>
                    <Icon name={trip.icon} className={`w-5 h-5 ${t.accent}`} />
                  </div>
                  <span className={`text-[12px] font-semibold px-2.5 py-1 rounded-full ${t.pill}`}>{trip.distance}</span>
                </div>
                <p className={`text-[15px] font-semibold ${t.heading} mb-2`}>{trip.name}</p>
                <p className={`text-[13px] ${t.body} leading-relaxed mb-4 flex-1`}>{trip.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {trip.tags.map(tag => <span key={tag} className={`text-[12px] px-2 py-0.5 rounded-full ${t.pill}`}>{tag}</span>)}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Boating ─────────────────────────────────────────────────────── */}
      <section id="boating" className={`${t.altBg} py-20 sm:py-28 px-5 sm:px-8`}>
        <div className="max-w-7xl mx-auto">
          <SectionHead eyebrow="On the Water" title="Boating & Fishing" sub="No fishing license needed. Sunset cruises, private yachts, and kayak fishing." t={t} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {boating.map(b => (
              <a key={b.name} href={`/details/boating/${encodeURIComponent(b.name)}`} className={`${t.cardOnAlt} rounded-2xl p-6 flex flex-col transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] cursor-pointer group`}>
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-10 h-10 rounded-2xl ${t.accentMid} flex items-center justify-center`}>
                    <Icon name={b.icon} className={`w-5 h-5 ${t.accent}`} />
                  </div>
                  <span className={`text-[12px] font-semibold px-2.5 py-1 rounded-full ${t.pill}`}>{b.type}</span>
                </div>
                <p className={`text-[17px] font-semibold ${t.heading} mb-2`}>{b.name}</p>
                <p className={`text-[14px] ${t.body} leading-relaxed mb-4 flex-1`}>{b.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {b.tags.map(tag => <span key={tag} className={`text-[13px] px-2.5 py-1 rounded-full ${t.pill}`}>{tag}</span>)}
                </div>
                {b.contact && <div className={`text-[13px] ${t.muted} flex items-center gap-1.5`}><Phone className="w-3 h-3 flex-shrink-0" />{b.contact}</div>}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Practical ───────────────────────────────────────────────────── */}
      <section id="practical" className={`${t.pageBg} py-20 sm:py-28 px-5 sm:px-8`}>
        <div className="max-w-7xl mx-auto">
          <SectionHead eyebrow="Good to Know" title="Practical Guide" t={t} />

          {/* Transport */}
          <p className={`text-[12px] font-semibold tracking-[0.12em] uppercase ${t.muted} mb-5`}>Getting Here & Around</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
            {transport.map(tr => (
              <div key={tr.title} className={`${t.cardBg} rounded-2xl p-6`}>
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-9 h-9 rounded-xl ${t.accentMid} flex items-center justify-center flex-shrink-0`}>
                    <Icon name={tr.icon} className={`w-4 h-4 ${t.accent}`} />
                  </div>
                  <p className={`text-[15px] font-semibold ${t.heading}`}>{tr.title}</p>
                </div>
                <p className={`text-[14px] ${t.body} leading-relaxed mb-3`}>{tr.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {tr.tags.map(tag => <span key={tag} className={`text-[13px] px-2.5 py-1 rounded-full ${t.pill}`}>{tag}</span>)}
                </div>
                {tr.contact && <div className={`text-[13px] ${t.muted} flex items-center gap-1.5`}><Globe className="w-3 h-3 flex-shrink-0" />{tr.contact}</div>}
              </div>
            ))}
          </div>

          {/* Groceries */}
          <p className={`text-[12px] font-semibold tracking-[0.12em] uppercase ${t.muted} mb-5`}>Stock Up En Route from Airport</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {groceriesEnRoute.map(g => (
              <div key={g.name} className={`${t.cardBg} rounded-2xl p-6`}>
                <div className="flex items-center justify-between mb-3">
                  <p className={`text-[17px] font-semibold ${t.heading}`}>{g.name}</p>
                  <span className={`text-[12px] font-semibold px-2.5 py-1 rounded-full ${t.mustGoBadge}`}>{g.highlight}</span>
                </div>
                <p className={`text-[13px] ${t.muted} mb-2 flex items-center gap-1`}><MapPin className="w-3 h-3 flex-shrink-0" />{g.distance}</p>
                <p className={`text-[14px] ${t.body} leading-relaxed mb-3`}>{g.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {g.tags.map(tag => <span key={tag} className={`text-[12px] px-2 py-0.5 rounded-full ${t.pill}`}>{tag}</span>)}
                </div>
              </div>
            ))}
          </div>

          <p className={`text-[12px] font-semibold tracking-[0.12em] uppercase ${t.muted} mb-5`}>Near Las Catalinas</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-16">
            {groceriesNearLC.map(g => (
              <div key={g.name} className={`${t.cardBg} rounded-xl px-5 py-4`}>
                <div className="flex items-start justify-between gap-2 mb-1">
                  <p className={`text-[14px] font-semibold ${t.heading}`}>{g.name}</p>
                  <p className={`text-[13px] ${t.muted} flex-shrink-0`}>{g.distance}</p>
                </div>
                <p className={`text-[13px] ${t.body}`}>{g.description}</p>
                {g.hours && <p className={`text-[13px] font-medium ${t.accent} mt-1`}>{g.hours}</p>}
              </div>
            ))}
          </div>

          {/* Medical */}
          <p className={`text-[12px] font-semibold tracking-[0.12em] uppercase ${t.muted} mb-5`}>Medical & Emergency</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {medicalInfo.map(m => (
              <div key={m.title} className={`${t.cardBg} rounded-2xl p-6 ${m.urgent ? "border-l-[3px] border-rose-500" : ""}`}>
                <div className="flex items-center gap-2 mb-3">
                  {m.urgent
                    ? <AlertCircle className="w-5 h-5 text-rose-500 flex-shrink-0" />
                    : <Icon name={m.icon} className={`w-5 h-5 ${t.accent} flex-shrink-0`} />
                  }
                  <p className={`text-[15px] font-semibold ${t.heading}`}>{m.title}</p>
                </div>
                <p className={`text-[14px] ${t.body} leading-relaxed mb-3`}>{m.description}</p>
                {m.contact && (
                  <a href={`tel:${m.contact.replace(/[^+\d]/g, "")}`}
                    className={`inline-flex items-center gap-1.5 text-[14px] font-semibold ${m.urgent ? "text-rose-600" : t.accent}`}>
                    <Phone className="w-3.5 h-3.5" />{m.contact}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────────────────── */}
      <footer className={`${t.footerBg} py-14 px-5`}>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[22px] font-semibold text-white mb-2">Las Catalinas</p>
          <p className={`text-[14px] ${t.footerText} mb-1`}>Guanacaste, Costa Rica · Car-Free Beach Town</p>
          <p className={`text-[13px] ${t.footerText}`}>A guest guide made with care · Pura Vida</p>
        </div>
      </footer>

      {/* ── Theme picker ─────────────────────────────────────────────────── */}
      <div className="fixed bottom-5 right-4 z-50 flex flex-col items-end">
        {pickerOpen && (
          <div className="mb-3 bg-white rounded-2xl shadow-2xl p-4 w-56 border border-[#d2d2d7]/40 animate-fade-up">
            <p className="text-[12px] font-semibold text-[#86868b] uppercase tracking-widest mb-3">Style</p>
            <div className="space-y-1">
              {(Object.keys(themes) as ThemeKey[]).map(key => (
                <button key={key} onClick={() => { setThemeKey(key); setPickerOpen(false); }}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-colors ${themeKey === key ? "bg-[#f5f5f7]" : "hover:bg-[#f5f5f7]"}`}>
                  <div className="flex gap-1">
                    {themes[key].swatches.map(s => (
                      <div key={s} className="w-4 h-4 rounded-full ring-1 ring-black/10" style={{ backgroundColor: s }} />
                    ))}
                  </div>
                  <div className="flex-1">
                    <p className="text-[13px] font-semibold text-[#1d1d1f]">{themes[key].name}</p>
                    <p className="text-[12px] text-[#86868b]">{themes[key].tagline}</p>
                  </div>
                  {themeKey === key && <span className="text-[12px] font-bold text-emerald-500">✓</span>}
                </button>
              ))}
            </div>
          </div>
        )}
        <button onClick={() => setPickerOpen(!pickerOpen)}
          className={`w-11 h-11 rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 ${t.accentBg}`}
          aria-label="Change theme">
          <Palette className="w-5 h-5 text-white" />
        </button>
      </div>
    </div>
  );
}
