"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Utensils, Coffee, Beer, Star, Waves, Mountain, Bike, Dumbbell,
  Activity, Fish, Anchor, TreePine, Leaf, Car, Plane, ShoppingCart,
  ShoppingBag, Package, Heart, Shield, Sun, Flame, Droplets, Cloud,
  Zap, Target, MapPin, ChevronRight, ChevronDown, Palette, Phone,
  Globe, Clock, Menu, X, AlertCircle, CheckCircle2, Building2,
  Sailboat, Sandwich, Wine, IceCream, Soup, MessageCircle,
  Stethoscope, Hospital,
} from "lucide-react";
import {
  beachClub, inTownRestaurants, nearbyAreas, activities,
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
};

function Icon({ name, className }: { name: string; className?: string }) {
  const C = ICONS[name] ?? Utensils;
  return <C className={className} />;
}

/* ─── Themes ────────────────────────────────────────────────────────────────── */

type ThemeKey = "ocean" | "tropical" | "jungle" | "luxury";

interface Theme {
  id: ThemeKey; name: string; tagline: string;
  heroBg: string; pageBg: string; cardBg: string; altBg: string;
  navScrollBg: string; navText: string; navLogo: string;
  btnPrimary: string; btnGhost: string;
  accent: string; accentBg: string; accentLight: string;
  headingColor: string; mutedColor: string; bodyColor: string;
  badge: string; pill: string; stripBg: string; stripText: string;
  quickCard: string; quickAccent: string;
  sectionIcon: string; divider: string;
  footerBg: string; footerMuted: string;
  tabActive: string; tabInactive: string;
  swatches: string[];
}

const themes: Record<ThemeKey, Theme> = {
  ocean: {
    id: "ocean", name: "Ocean Breeze", tagline: "Cool · Refreshing · Serene",
    heroBg: "from-cyan-950 via-teal-900 to-sky-700",
    pageBg: "bg-slate-50", cardBg: "bg-white", altBg: "bg-teal-50/60",
    navScrollBg: "bg-white/95 backdrop-blur-md shadow-sm border-b border-teal-100",
    navText: "text-slate-700", navLogo: "text-teal-600",
    btnPrimary: "bg-teal-500 hover:bg-teal-600 text-white shadow-lg shadow-teal-500/25",
    btnGhost: "border-2 border-white/70 text-white hover:bg-white/15",
    accent: "text-teal-500", accentBg: "bg-teal-500", accentLight: "bg-teal-50",
    headingColor: "text-slate-900", mutedColor: "text-slate-500", bodyColor: "text-slate-600",
    badge: "bg-teal-100 text-teal-700", pill: "bg-teal-50 text-teal-600 border border-teal-100",
    stripBg: "bg-teal-600", stripText: "text-white",
    quickCard: "bg-white hover:bg-teal-50 border border-teal-100 shadow-sm hover:shadow-md",
    quickAccent: "text-teal-500", sectionIcon: "text-teal-400", divider: "border-teal-100",
    footerBg: "bg-slate-900", footerMuted: "text-slate-400",
    tabActive: "bg-teal-500 text-white", tabInactive: "text-slate-600 hover:bg-teal-50",
    swatches: ["#0d9488","#0891b2","#0ea5e9","#0f172a"],
  },
  tropical: {
    id: "tropical", name: "Tropical Sunset", tagline: "Warm · Vibrant · Inviting",
    heroBg: "from-orange-950 via-rose-900 to-amber-700",
    pageBg: "bg-stone-50", cardBg: "bg-white", altBg: "bg-amber-50/60",
    navScrollBg: "bg-white/95 backdrop-blur-md shadow-sm border-b border-orange-100",
    navText: "text-stone-700", navLogo: "text-orange-600",
    btnPrimary: "bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-500/25",
    btnGhost: "border-2 border-white/70 text-white hover:bg-white/15",
    accent: "text-orange-500", accentBg: "bg-orange-500", accentLight: "bg-orange-50",
    headingColor: "text-stone-900", mutedColor: "text-stone-500", bodyColor: "text-stone-600",
    badge: "bg-orange-100 text-orange-700", pill: "bg-orange-50 text-orange-600 border border-orange-100",
    stripBg: "bg-orange-500", stripText: "text-white",
    quickCard: "bg-white hover:bg-orange-50 border border-orange-100 shadow-sm hover:shadow-md",
    quickAccent: "text-orange-500", sectionIcon: "text-orange-400", divider: "border-orange-100",
    footerBg: "bg-stone-900", footerMuted: "text-stone-400",
    tabActive: "bg-orange-500 text-white", tabInactive: "text-stone-600 hover:bg-orange-50",
    swatches: ["#f97316","#e11d48","#d97706","#292524"],
  },
  jungle: {
    id: "jungle", name: "Lush Jungle", tagline: "Natural · Earthy · Wild",
    heroBg: "from-green-950 via-emerald-900 to-lime-800",
    pageBg: "bg-stone-50", cardBg: "bg-white", altBg: "bg-emerald-50/60",
    navScrollBg: "bg-white/95 backdrop-blur-md shadow-sm border-b border-emerald-100",
    navText: "text-stone-700", navLogo: "text-emerald-700",
    btnPrimary: "bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-600/25",
    btnGhost: "border-2 border-white/70 text-white hover:bg-white/15",
    accent: "text-emerald-600", accentBg: "bg-emerald-600", accentLight: "bg-emerald-50",
    headingColor: "text-stone-900", mutedColor: "text-stone-500", bodyColor: "text-stone-600",
    badge: "bg-emerald-100 text-emerald-700", pill: "bg-emerald-50 text-emerald-600 border border-emerald-100",
    stripBg: "bg-emerald-700", stripText: "text-white",
    quickCard: "bg-white hover:bg-emerald-50 border border-emerald-100 shadow-sm hover:shadow-md",
    quickAccent: "text-emerald-600", sectionIcon: "text-emerald-500", divider: "border-emerald-100",
    footerBg: "bg-stone-950", footerMuted: "text-stone-400",
    tabActive: "bg-emerald-600 text-white", tabInactive: "text-stone-600 hover:bg-emerald-50",
    swatches: ["#059669","#16a34a","#84cc16","#1c1917"],
  },
  luxury: {
    id: "luxury", name: "Modern Luxury", tagline: "Sophisticated · Bold · Refined",
    heroBg: "from-slate-950 via-indigo-950 to-blue-950",
    pageBg: "bg-slate-950", cardBg: "bg-slate-900", altBg: "bg-slate-800/60",
    navScrollBg: "bg-slate-950/95 backdrop-blur-md border-b border-slate-800",
    navText: "text-slate-200", navLogo: "text-amber-400",
    btnPrimary: "bg-amber-400 hover:bg-amber-300 text-slate-950 font-semibold shadow-lg shadow-amber-400/20",
    btnGhost: "border-2 border-amber-400/60 text-amber-400 hover:bg-amber-400/10",
    accent: "text-amber-400", accentBg: "bg-amber-400", accentLight: "bg-amber-400/10",
    headingColor: "text-white", mutedColor: "text-slate-400", bodyColor: "text-slate-400",
    badge: "bg-amber-400/10 text-amber-400", pill: "bg-amber-400/10 text-amber-300 border border-amber-400/20",
    stripBg: "bg-amber-400", stripText: "text-slate-950 font-semibold",
    quickCard: "bg-slate-800 hover:bg-slate-700 border border-slate-700 shadow-sm hover:shadow-lg",
    quickAccent: "text-amber-400", sectionIcon: "text-amber-500", divider: "border-slate-700",
    footerBg: "bg-black", footerMuted: "text-slate-500",
    tabActive: "bg-amber-400 text-slate-950", tabInactive: "text-slate-400 hover:bg-slate-800",
    swatches: ["#fbbf24","#6366f1","#1e1b4b","#e2e8f0"],
  },
};

/* ─── Section heading component ─────────────────────────────────────────────── */

function SectionHead({ label, title, sub, t }: {
  label: string; title: string; sub?: string; t: Theme;
}) {
  return (
    <div className="text-center mb-10 sm:mb-14">
      <span className={`text-xs font-bold tracking-widest uppercase ${t.accent} mb-3 block`}>
        {label}
      </span>
      <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold ${t.headingColor} mb-3`}>
        {title}
      </h2>
      {sub && (
        <p className={`text-base sm:text-lg ${t.bodyColor} max-w-xl mx-auto px-4`}>{sub}</p>
      )}
    </div>
  );
}

/* ─── Highlights strip data ─────────────────────────────────────────────────── */

const HIGHLIGHTS = [
  "100% Car-Free Town",
  "2 Pristine Pacific Beaches",
  "42km of Trail Network",
  "Wildlife Spotting Daily",
  "11 Restaurants In Town",
  "World-Class Mountain Biking",
  "Dry Season: Nov – Apr",
  "1 Hour from Liberia Airport",
];

const NAV_LINKS = [
  { href: "#dining",    label: "Dining" },
  { href: "#nearby",   label: "Nearby" },
  { href: "#explore",  label: "Activities" },
  { href: "#daytrips", label: "Day Trips" },
  { href: "#boating",  label: "Boating" },
  { href: "#practical",label: "Practical" },
];

/* ─── Page ──────────────────────────────────────────────────────────────────── */

export default function Home() {
  const [themeKey, setThemeKey] = useState<ThemeKey>("ocean");
  const [pickerOpen, setPickerOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeArea, setActiveArea] = useState(0);
  const t = themes[themeKey];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 64);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-500 ${t.pageBg} overflow-x-hidden`}>

      {/* ── Navbar ─────────────────────────────────────────────────────── */}
      <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? t.navScrollBg : "bg-transparent"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          <span className={`text-base font-bold tracking-tight transition-colors duration-300 ${scrolled ? t.navLogo : "text-white"}`}>
            Las Catalinas
          </span>

          {/* Desktop links */}
          <div className={`hidden lg:flex items-center gap-6 text-sm font-medium transition-colors duration-300 ${scrolled ? t.navText : "text-white/85"}`}>
            {NAV_LINKS.map(l => (
              <a key={l.href} href={l.href} className="hover:opacity-60 transition-opacity">{l.label}</a>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileNavOpen(true)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${scrolled ? t.navText : "text-white"}`}
            aria-label="Open navigation"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* ── Mobile nav drawer ──────────────────────────────────────────── */}
      {mobileNavOpen && (
        <div className="fixed inset-0 z-[60] flex">
          <div className="absolute inset-0 bg-black/50" onClick={() => setMobileNavOpen(false)} />
          <div className={`relative ml-auto w-72 h-full ${t.cardBg} shadow-2xl flex flex-col p-6`}>
            <button onClick={() => setMobileNavOpen(false)} className={`self-end p-2 ${t.mutedColor}`} aria-label="Close navigation">
              <X className="w-5 h-5" />
            </button>
            <nav className="flex flex-col gap-1 mt-4">
              {NAV_LINKS.map(l => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileNavOpen(false)}
                  className={`px-4 py-3 rounded-xl text-base font-medium ${t.headingColor} hover:${t.accentLight} transition-colors`}
                >
                  {l.label}
                </a>
              ))}
            </nav>
            <div className="mt-auto pt-6 border-t border-slate-100">
              <p className={`text-xs ${t.mutedColor}`}>Guanacaste, Costa Rica</p>
            </div>
          </div>
        </div>
      )}

      {/* ── Hero ───────────────────────────────────────────────────────── */}
      <section
        className={`relative min-h-screen flex items-center justify-center bg-gradient-to-br overflow-hidden ${t.heroBg}`}
        style={{
          backgroundImage: "url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark gradient overlay for legibility */}
        <div className={`absolute inset-0 bg-gradient-to-br ${t.heroBg} opacity-80`} />

        <div className="relative z-10 text-center text-white px-4 sm:px-6 max-w-4xl mx-auto pt-20 pb-16">
          <div className="animate-fade-up inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-8 border border-white/20">
            <MapPin className="w-4 h-4 flex-shrink-0" />
            Guanacaste, Costa Rica
          </div>

          <h1 className="animate-fade-up-d1 text-4xl sm:text-6xl lg:text-8xl font-bold leading-[1.05] tracking-tight mb-6">
            Welcome to{" "}
            <em className="font-light not-italic block">Las Catalinas</em>
          </h1>

          <p className="animate-fade-up-d2 text-lg sm:text-xl lg:text-2xl text-white/75 font-light mb-3">
            Car-free. Walkable. Absolutely magical.
          </p>
          <p className="animate-fade-up-d2 text-sm sm:text-base text-white/55 mb-10 max-w-xl mx-auto">
            Your complete guide to dining, adventures, beaches, and everything
            in between in Costa Rica&apos;s most unique beach town.
          </p>

          <div className="animate-fade-up-d3 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="#dining" className={`w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-semibold transition-all duration-200 active:scale-95 hover:scale-[1.03] ${t.btnPrimary}`}>
              Explore Dining
            </a>
            <a href="#explore" className={`w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-semibold transition-all duration-200 active:scale-95 hover:scale-[1.03] ${t.btnGhost}`}>
              Things To Do
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 text-xs animate-bounce select-none">
          <span>Scroll to explore</span>
          <div className="w-px h-6 bg-white/30 rounded-full" />
        </div>
      </section>

      {/* ── Highlights Strip ────────────────────────────────────────────── */}
      <div className={`${t.stripBg} py-3 overflow-hidden`}>
        <div className={`flex animate-marquee ${t.stripText} whitespace-nowrap`}>
          {[...HIGHLIGHTS, ...HIGHLIGHTS].map((item, i) => (
            <span key={i} className="flex-shrink-0 text-xs sm:text-sm font-medium px-6 sm:px-8 opacity-90">
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ── Quick Nav ───────────────────────────────────────────────────── */}
      <section className="py-10 sm:py-14 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { icon: Utensils, title: "Dining Guide",         desc: "11+ restaurants from casual beachside to award-winning fine dining",      href: "#dining" },
            { icon: Mountain, title: "Explore & Adventure",  desc: "Hiking, biking, water sports, horseback riding, and catamaran sunsets",    href: "#explore" },
            { icon: Waves,    title: "Beaches",              desc: "Playa Danta & Playa Dantita — your sheltered Pacific playground",          href: "#beaches" },
            { icon: MapPin,   title: "Nearby Restaurants",   desc: "Best spots in Potrero, Flamingo, Brasilito, and Huacas",                  href: "#nearby" },
            { icon: Anchor,   title: "Boating & Fishing",    desc: "Catamarans, private yachts, kayak fishing, and sport charters",           href: "#boating" },
            { icon: Car,      title: "Practical Info",       desc: "Transport, groceries, medical, and everything you need to know",          href: "#practical" },
          ].map((card) => (
            <a
              key={card.title}
              href={card.href}
              className={`group flex items-center gap-4 p-5 rounded-2xl transition-all duration-200 active:scale-98 ${t.quickCard}`}
            >
              <div className={`w-12 h-12 rounded-xl ${t.accentLight} flex items-center justify-center flex-shrink-0`}>
                <card.icon className={`w-6 h-6 ${t.quickAccent}`} />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className={`font-semibold text-sm sm:text-base ${t.headingColor}`}>{card.title}</h3>
                <p className={`text-xs sm:text-sm mt-0.5 ${t.bodyColor} line-clamp-2`}>{card.desc}</p>
              </div>
              <ChevronRight className={`w-5 h-5 flex-shrink-0 ${t.quickAccent} group-hover:translate-x-1 transition-transform`} />
            </a>
          ))}
        </div>
      </section>

      {/* ── Beach Club Spotlight ─────────────────────────────────────────── */}
      <section className={`py-12 sm:py-16 px-4 sm:px-6 ${t.altBg}`}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <span className={`text-xs font-bold tracking-widest uppercase ${t.accent} mb-3 block`}>In Town</span>
            <h2 className={`text-3xl sm:text-4xl font-bold ${t.headingColor} mb-2`}>The Beach Club</h2>
            <p className={`${t.bodyColor} text-sm`}>{beachClub.note}</p>
          </div>

          <div className={`${t.cardBg} rounded-3xl overflow-hidden shadow-sm`}>
            <div className="relative h-52 sm:h-64 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=1200&q=80"
                alt="Las Catalinas Beach Club"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-5 right-5">
                <p className={`text-white/80 text-xs sm:text-sm`}>{beachClub.tip}</p>
              </div>
            </div>
            <div className="p-5 sm:p-8">
              {/* Pricing */}
              <h3 className={`text-lg font-bold ${t.headingColor} mb-4`}>Daily Pass Pricing</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {beachClub.pricing.map(p => (
                  <div key={p.who} className={`${t.accentLight} rounded-2xl p-4`}>
                    <p className={`font-bold text-sm ${t.headingColor}`}>{p.who}</p>
                    <p className={`text-xs ${t.mutedColor} line-through mb-1`}>{p.full}</p>
                    <p className={`text-sm font-semibold ${t.accent}`}>{p.deal}</p>
                  </div>
                ))}
              </div>
              {/* Amenities */}
              <h3 className={`text-base font-bold ${t.headingColor} mb-3`}>What's Included</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {beachClub.amenities.map(a => (
                  <div key={a} className="flex items-center gap-2">
                    <CheckCircle2 className={`w-4 h-4 flex-shrink-0 ${t.accent}`} />
                    <span className={`text-sm ${t.bodyColor}`}>{a}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── In-Town Restaurants ─────────────────────────────────────────── */}
      <section id="dining" className="py-14 sm:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHead
            label="Where to Eat"
            title="Dining in Las Catalinas"
            sub="Zero chain restaurants. Only chef-driven kitchens celebrating Costa Rica's extraordinary ingredients."
            t={t}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {inTownRestaurants.map(r => (
              <div
                key={r.name}
                className={`${t.cardBg} rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 flex flex-col`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-11 h-11 rounded-xl ${t.accentLight} flex items-center justify-center flex-shrink-0`}>
                    <Icon name={r.icon} className={`w-5 h-5 ${t.accent}`} />
                  </div>
                  <div className="flex gap-2 flex-wrap justify-end">
                    {r.mustGo && (
                      <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-rose-100 text-rose-700">
                        Must Go
                      </span>
                    )}
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${t.badge}`}>{r.vibe}</span>
                  </div>
                </div>
                <h3 className={`text-lg font-bold ${t.headingColor}`}>{r.name}</h3>
                <p className={`text-xs font-semibold ${t.accent} mb-1`}>{r.cuisine}</p>
                <p className={`text-xs ${t.mutedColor} mb-3`}>{r.location}</p>
                <p className={`text-sm ${t.bodyColor} leading-relaxed mb-4 flex-1`}>{r.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {r.tags.map(tag => (
                    <span key={tag} className={`text-xs px-2 py-0.5 rounded-md ${t.pill}`}>{tag}</span>
                  ))}
                </div>
                <div className={`flex items-center gap-1.5 text-xs ${t.mutedColor}`}>
                  <Clock className="w-3.5 h-3.5 flex-shrink-0" />
                  {r.hours}
                </div>
                {r.phone && (
                  <div className={`flex items-center gap-1.5 text-xs ${t.mutedColor} mt-1`}>
                    <Phone className="w-3.5 h-3.5 flex-shrink-0" />
                    {r.phone}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Nearby Dining ───────────────────────────────────────────────── */}
      <section id="nearby" className={`py-14 sm:py-20 px-4 sm:px-6 ${t.altBg}`}>
        <div className="max-w-7xl mx-auto">
          <SectionHead
            label="Beyond the Gates"
            title="Nearby Restaurants"
            sub="Potrero, Flamingo, Brasilito, and Huacas are all within 20 minutes."
            t={t}
          />

          {/* Area tabs — horizontally scrollable on mobile */}
          <div className="flex gap-2 mb-8 overflow-x-auto pb-2 -mx-1 px-1 scrollbar-hide">
            {nearbyAreas.map((area, i) => (
              <button
                key={area.label}
                onClick={() => setActiveArea(i)}
                className={`flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${activeArea === i ? t.tabActive : t.tabInactive}`}
              >
                <Icon name={area.icon} className="w-4 h-4" />
                <span>{area.label}</span>
                <span className={`text-xs ${activeArea === i ? "text-white/70" : t.mutedColor}`}>{area.distance}</span>
              </button>
            ))}
          </div>

          {/* Active area spots */}
          {nearbyAreas[activeArea] && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {nearbyAreas[activeArea].spots.map(spot => (
                <div key={spot.name} className={`${t.cardBg} rounded-2xl p-5 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 flex flex-col`}>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className={`font-bold text-base ${t.headingColor}`}>{spot.name}</h3>
                    {spot.mustGo && (
                      <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-rose-100 text-rose-700 flex-shrink-0 ml-2">
                        Must Go
                      </span>
                    )}
                  </div>
                  <p className={`text-xs font-semibold ${t.accent} mb-2`}>{spot.cuisine}</p>
                  <p className={`text-sm ${t.bodyColor} leading-relaxed mb-4 flex-1`}>{spot.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {spot.tags.map(tag => (
                      <span key={tag} className={`text-xs px-2 py-0.5 rounded-md ${t.pill}`}>{tag}</span>
                    ))}
                  </div>
                  {spot.phone && (
                    <div className={`flex items-center gap-1.5 text-xs ${t.mutedColor} mt-1`}>
                      <Phone className="w-3 h-3 flex-shrink-0" />
                      {spot.phone}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Private Chefs ───────────────────────────────────────────────── */}
      <section className="py-14 sm:py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <SectionHead
            label="In-Home Dining"
            title="Private Chefs & Catering"
            sub="Bring the restaurant experience directly to your villa."
            t={t}
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {privateChefs.map(c => (
              <div key={c.name} className={`${t.cardBg} rounded-2xl p-6 shadow-sm flex flex-col`}>
                <div className={`w-12 h-12 rounded-xl ${t.accentLight} flex items-center justify-center mb-4`}>
                  <Icon name={c.icon} className={`w-6 h-6 ${t.accent}`} />
                </div>
                <h3 className={`font-bold text-base ${t.headingColor} mb-2`}>{c.name}</h3>
                <p className={`text-sm ${t.bodyColor} leading-relaxed mb-4 flex-1`}>{c.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {c.tags.map(tag => (
                    <span key={tag} className={`text-xs px-2 py-0.5 rounded-md ${t.pill}`}>{tag}</span>
                  ))}
                </div>
                {c.phone && (
                  <div className={`flex items-center gap-1.5 text-xs ${t.mutedColor}`}>
                    <Phone className="w-3 h-3 flex-shrink-0" />{c.phone}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Activities ──────────────────────────────────────────────────── */}
      <section id="explore" className={`py-14 sm:py-20 px-4 sm:px-6 ${t.altBg}`}>
        <div className="max-w-7xl mx-auto">
          <SectionHead
            label="Adventure Awaits"
            title="Activities & Wellness"
            sub="From sunrise yoga to sunset catamarans — as busy or as relaxed as you want."
            t={t}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {activities.map(a => (
              <div key={a.title} className={`${t.cardBg} rounded-2xl p-5 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 flex flex-col`}>
                <div className={`w-11 h-11 rounded-xl ${t.accentLight} flex items-center justify-center mb-3`}>
                  <Icon name={a.icon} className={`w-5 h-5 ${t.accent}`} />
                </div>
                <h3 className={`font-bold text-sm sm:text-base ${t.headingColor} mb-2`}>{a.title}</h3>
                <p className={`text-sm ${t.bodyColor} leading-relaxed mb-3 flex-1`}>{a.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {a.tags.map(tag => (
                    <span key={tag} className={`text-xs px-2 py-0.5 rounded-md ${t.pill}`}>{tag}</span>
                  ))}
                </div>
                {a.phone && (
                  <div className={`flex items-center gap-1.5 text-xs ${t.mutedColor} mt-1`}>
                    <Phone className="w-3 h-3 flex-shrink-0" />{a.phone}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Beaches ─────────────────────────────────────────────────────── */}
      <section id="beaches" className="py-14 sm:py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <SectionHead label="Sun & Sand" title="The Beaches" t={t} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {[
              {
                src: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&q=80",
                name: "Playa Danta",
                subtitle: "Main Beach · Sheltered Bay",
                desc: "The heart of Las Catalinas. A beautiful Pacific beach sheltered by the Pitahayas Islands — perfect for swimming, snorkeling, surfing, and paddleboarding. Papagayo Taphouse sits right on the sand.",
                tags: ["Swimming", "Snorkeling", "Surfing", "Paddleboarding"],
              },
              {
                src: "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?w=800&q=80",
                name: "Playa Dantita",
                subtitle: "Hidden Cove · More Secluded",
                desc: "Las Catalinas' quieter sister beach — a short walk from town. Ideal for peaceful mornings, crystal-clear snorkeling, and watching pelicans dive. Fewer crowds, equally breathtaking.",
                tags: ["Snorkeling", "Peaceful", "Sunsets", "Tide Pools"],
              },
            ].map(beach => (
              <div key={beach.name} className={`${t.cardBg} rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300`}>
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <img src={beach.src} alt={beach.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
                <div className="p-5 sm:p-7">
                  <h3 className={`text-xl sm:text-2xl font-bold ${t.headingColor} mb-1`}>{beach.name}</h3>
                  <p className={`text-sm font-semibold ${t.accent} mb-3`}>{beach.subtitle}</p>
                  <p className={`${t.bodyColor} text-sm leading-relaxed mb-4`}>{beach.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {beach.tags.map(tag => (
                      <span key={tag} className={`text-xs px-3 py-1 rounded-full ${t.badge}`}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Day Trips ───────────────────────────────────────────────────── */}
      <section id="daytrips" className={`py-14 sm:py-20 px-4 sm:px-6 ${t.altBg}`}>
        <div className="max-w-7xl mx-auto">
          <SectionHead
            label="Explore Beyond"
            title="Day Trips & Excursions"
            sub="Costa Rica's greatest adventures are all within striking distance."
            t={t}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {dayTrips.map(trip => (
              <div key={trip.name} className={`${t.cardBg} rounded-2xl p-5 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 flex flex-col`}>
                <div className={`w-11 h-11 rounded-xl ${t.accentLight} flex items-center justify-center mb-3`}>
                  <Icon name={trip.icon} className={`w-5 h-5 ${t.accent}`} />
                </div>
                <div className="flex items-start justify-between mb-2">
                  <h3 className={`font-bold text-sm ${t.headingColor} flex-1 pr-2`}>{trip.name}</h3>
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-lg ${t.badge} flex-shrink-0`}>{trip.distance}</span>
                </div>
                <p className={`text-sm ${t.bodyColor} leading-relaxed mb-3 flex-1`}>{trip.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {trip.tags.map(tag => (
                    <span key={tag} className={`text-xs px-2 py-0.5 rounded-md ${t.pill}`}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Boating & Fishing ───────────────────────────────────────────── */}
      <section id="boating" className="py-14 sm:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHead
            label="On the Water"
            title="Boating & Fishing"
            sub="No fishing license required in Costa Rica. Sunset cruises, private yachts, and kayak fishing all within reach."
            t={t}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {boating.map(b => (
              <div key={b.name} className={`${t.cardBg} rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col`}>
                <div className="flex items-start justify-between mb-3">
                  <div className={`w-11 h-11 rounded-xl ${t.accentLight} flex items-center justify-center flex-shrink-0`}>
                    <Icon name={b.icon} className={`w-5 h-5 ${t.accent}`} />
                  </div>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${t.badge} ml-2`}>{b.type}</span>
                </div>
                <h3 className={`font-bold text-base ${t.headingColor} mb-2`}>{b.name}</h3>
                <p className={`text-sm ${t.bodyColor} leading-relaxed mb-4 flex-1`}>{b.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {b.tags.map(tag => (
                    <span key={tag} className={`text-xs px-2 py-0.5 rounded-md ${t.pill}`}>{tag}</span>
                  ))}
                </div>
                {b.contact && (
                  <div className={`flex items-center gap-1.5 text-xs ${t.mutedColor}`}>
                    <Phone className="w-3 h-3 flex-shrink-0" />{b.contact}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Practical Info ──────────────────────────────────────────────── */}
      <section id="practical" className={`py-14 sm:py-20 px-4 sm:px-6 ${t.altBg}`}>
        <div className="max-w-7xl mx-auto">
          <SectionHead label="Good to Know" title="Practical Guide" t={t} />

          {/* Transport */}
          <h3 className={`text-lg sm:text-xl font-bold ${t.headingColor} mb-5 flex items-center gap-2`}>
            <Car className={`w-5 h-5 ${t.sectionIcon}`} /> Getting Here & Around
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            {transport.map(tr => (
              <div key={tr.title} className={`${t.cardBg} rounded-2xl p-5 shadow-sm flex flex-col gap-2`}>
                <div className="flex items-center gap-3 mb-1">
                  <div className={`w-10 h-10 rounded-xl ${t.accentLight} flex items-center justify-center flex-shrink-0`}>
                    <Icon name={tr.icon} className={`w-5 h-5 ${t.accent}`} />
                  </div>
                  <h4 className={`font-bold text-sm ${t.headingColor}`}>{tr.title}</h4>
                </div>
                <p className={`text-sm ${t.bodyColor} leading-relaxed`}>{tr.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {tr.tags.map(tag => (
                    <span key={tag} className={`text-xs px-2 py-0.5 rounded-md ${t.pill}`}>{tag}</span>
                  ))}
                </div>
                {tr.contact && (
                  <div className={`flex items-center gap-1.5 text-xs ${t.mutedColor}`}>
                    <Globe className="w-3 h-3 flex-shrink-0" />{tr.contact}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Groceries */}
          <h3 className={`text-lg sm:text-xl font-bold ${t.headingColor} mb-5 flex items-center gap-2`}>
            <ShoppingCart className={`w-5 h-5 ${t.sectionIcon}`} /> Grocery Guide
          </h3>

          <div className="mb-6">
            <p className={`text-sm font-semibold ${t.accent} uppercase tracking-wider mb-3`}>Stock Up En Route from Airport</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {groceriesEnRoute.map(g => (
                <div key={g.name} className={`${t.cardBg} rounded-2xl p-5 shadow-sm`}>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className={`font-bold text-sm ${t.headingColor}`}>{g.name}</h4>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${t.badge}`}>{g.highlight}</span>
                  </div>
                  <p className={`text-xs ${t.mutedColor} mb-2 flex items-center gap-1`}>
                    <MapPin className="w-3 h-3 flex-shrink-0" />{g.distance}
                  </p>
                  <p className={`text-sm ${t.bodyColor} leading-relaxed mb-3`}>{g.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {g.tags.map(tag => (
                      <span key={tag} className={`text-xs px-2 py-0.5 rounded-md ${t.pill}`}>{tag}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className={`text-sm font-semibold ${t.accent} uppercase tracking-wider mb-3`}>Near Las Catalinas</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {groceriesNearLC.map(g => (
                <div key={g.name} className={`${t.cardBg} rounded-xl p-4 shadow-sm`}>
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h4 className={`font-semibold text-sm ${t.headingColor}`}>{g.name}</h4>
                    <span className={`text-xs ${t.mutedColor} flex-shrink-0`}>{g.distance}</span>
                  </div>
                  <p className={`text-sm ${t.bodyColor}`}>{g.description}</p>
                  {g.hours && <p className={`text-xs ${t.accent} mt-1 font-medium`}>{g.hours}</p>}
                </div>
              ))}
            </div>
          </div>

          {/* Medical */}
          <div className={`mt-12 border-t ${t.divider} pt-10`}>
            <h3 className={`text-lg sm:text-xl font-bold ${t.headingColor} mb-5 flex items-center gap-2`}>
              <Shield className={`w-5 h-5 ${t.sectionIcon}`} /> Medical & Emergency
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {medicalInfo.map(m => (
                <div
                  key={m.title}
                  className={`${t.cardBg} rounded-2xl p-5 shadow-sm border-l-4 ${m.urgent ? "border-rose-500" : `border-${t.accentBg.replace("bg-","")}`}`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    {m.urgent
                      ? <AlertCircle className="w-5 h-5 text-rose-500 flex-shrink-0" />
                      : <Icon name={m.icon} className={`w-5 h-5 ${t.accent} flex-shrink-0`} />
                    }
                    <h4 className={`font-bold text-sm ${t.headingColor}`}>{m.title}</h4>
                  </div>
                  <p className={`text-sm ${t.bodyColor} leading-relaxed mb-2`}>{m.description}</p>
                  {m.contact && (
                    <a href={`tel:${m.contact.replace(/[^+\d]/g,"")}`} className={`inline-flex items-center gap-1.5 text-sm font-semibold ${m.urgent ? "text-rose-600" : t.accent}`}>
                      <Phone className="w-3.5 h-3.5" />{m.contact}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────────────────── */}
      <footer className={`${t.footerBg} py-12 px-4`}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-2xl font-bold text-white mb-2">Las Catalinas</p>
          <p className={`${t.footerMuted} text-sm mb-2`}>
            Guanacaste, Costa Rica · Car-Free Beach Town on the Pacific
          </p>
          <p className={`${t.footerMuted} text-xs`}>
            A guest guide made with care for our Airbnb visitors · Pura Vida
          </p>
        </div>
      </footer>

      {/* ── Floating Theme Switcher ──────────────────────────────────────── */}
      <div className="fixed bottom-5 right-4 z-50 flex flex-col items-end">
        {pickerOpen && (
          <div className="mb-3 bg-white rounded-2xl shadow-2xl p-4 w-60 sm:w-64 border border-gray-100 animate-fade-up">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 px-1">Choose a Style</p>
            <div className="space-y-1.5">
              {(Object.keys(themes) as ThemeKey[]).map(key => (
                <button
                  key={key}
                  onClick={() => { setThemeKey(key); setPickerOpen(false); }}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-colors ${themeKey === key ? "bg-gray-100" : "hover:bg-gray-50"}`}
                >
                  <div className="flex gap-1 flex-shrink-0">
                    {themes[key].swatches.map(s => (
                      <div key={s} className="w-4 h-4 rounded-full ring-1 ring-black/10" style={{ backgroundColor: s }} />
                    ))}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-bold text-gray-800">{themes[key].name}</div>
                    <div className="text-xs text-gray-400">{themes[key].tagline}</div>
                  </div>
                  {themeKey === key && <span className="text-xs font-bold text-green-500">✓</span>}
                </button>
              ))}
            </div>
          </div>
        )}
        <button
          onClick={() => setPickerOpen(!pickerOpen)}
          className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full shadow-xl flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 ${t.accentBg} ${pickerOpen ? "rotate-180" : ""}`}
          aria-label="Switch color theme"
        >
          <Palette className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        </button>
      </div>
    </div>
  );
}
