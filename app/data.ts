// ─── The Club ──────────────────────────────────────────────────────────────

export const theClub = {
  mustGo: false,
  icon: ["swimmer", "utensils", "waves"],
  name: "The Club at Las Catalinas",
  location: "Across the bridge at the end of Paseo El Mar",
  cuisine: "Mediterranean · Costa Rican",
  vibe: "All-Day Beachfront Dining & Recreation",
  description:
    "Recently renovated with new ownership. Stunning beach club featuring a full-service restaurant, Olympic-size pools, spa, and fitness center with exceptional ocean views.",
  fullDescription:
    "Beachfront beach club with Olympic lap pool, hot spa, fitness center, and full-service restaurant. Enjoy fresh seafood, creative cocktails, and sunset views. Day-use available with meal minimum.",
  hours: "8am–8pm Daily",
  phone: "+506 8526-1881",
  rating: "4.7/5 • Recently Renovated 2024",
  tags: ["Beachfront", "Olympic Pool", "Full Bar", "Fine Dining", "Spa & Fitness", "Day Use Welcome"],
  images: [
    "/beach-club-hero.jpg",
  ],
  pricing: [
    { who: "Adults",      full: "$30 + 13% VAT", deal: "Only $15 if you spend $15+ on food or drinks" },
    { who: "Kids (8–12)", full: "$15 + 13% VAT", deal: "Only $5 if they spend $10+ on food or drinks" },
  ],
  amenities: [
    "25-meter Olympic lap pool with 4 swim lanes",
    "Adult lounging pool",
    "Hot spa jacuzzi & plunge pool",
    "Kids' play pool",
    "Lounge chairs with towel service",
    "Full-service restaurant & cocktail bar",
    "Exercise room with weights & cardio",
    "Mediterranean menu with fresh seafood",
  ],
  menu: {
    url: "/club-menu-2026.pdf",
    en: "Mediterranean cuisine celebrating fresh Costa Rican seafood and local ingredients. Menu includes fresh fish, ceviche, salads, pasta, and creative cocktails.",
    es: "Cocina mediterránea que celebra mariscos frescos de Costa Rica e ingredientes locales. El menú incluye pescado fresco, ceviche, ensaladas, pasta y cócteles creativos.",
    highlights: {
      en: ["Fresh Breakfast", "Brick-Oven Pizza", "Kids Menu", "All-Day Dining"],
      es: ["Desayuno Fresco", "Pizza de Horno", "Menú Infantil", "Servicio Todo el Día"]
    },
  },
};

// ─── In-Town Restaurants ──────────────────────────────────────────────────────

export interface Restaurant {
  mustGo?: boolean;
  badge?: string;
  icon: string | string[];
  name: string;
  location: string;
  cuisine: string;
  vibe: string;
  description: string;
  hours: string;
  phone?: string;
  email?: string;
  tags: string[];
  images?: string[];
  imagePositions?: string[];
  fullDescription?: string;
  rating?: string;
  menu?: {
    en?: string;
    es?: string;
    url?: string;
    highlights?: {
      en?: string[];
      es?: string[];
    };
  };
}

export const inTownRestaurants: Restaurant[] = [
  {
    mustGo: false,
    badge: "Award-Winning",
    icon: ["wine", "martini", "utensils"],
    name: "Ponciana",
    location: "Santarena Hotel, Main Plaza",
    cuisine: "Mediterranean · Costa Rican Fusion",
    vibe: "All-Day Fine Dining",
    description:
      "The social heart of Las Catalinas — award-winning Mediterranean cuisine with Costa Rican ingredients. 4.7/5 ★, #1 of 7 in Las Catalinas.",
    fullDescription:
      "The social heart of Las Catalinas featuring a celebrated breakfast buffet with fresh local fruits, pastries, and eggs prepared to order. Lunch showcases Mediterranean specialties with fresh Costa Rican seafood and vegetables. Dinner is elevated, with inventive preparations of local ingredients. Both indoor and outdoor seating create an inviting, cultural atmosphere. Basque-inspired traditions meet Pacific Coast bounty. Reservations essential, especially for breakfast and dinner service.",
    hours: "7am–10:30am Breakfast, 12pm–9pm Lunch & Dinner",
    phone: "+506 2106 1500",
    email: "ponciana@santarenahotel.com",
    rating: "4.7/5 (200 reviews) • #1 of 7 in Las Catalinas",
    tags: ["★ Top Rated", "Breakfast Buffet", "Award-Winning", "Reservations Required"],
    images: [
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/30/01/d7/d9/outdoor-dinning-area.jpg",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/30/01/d7/d8/ponciana-bar.jpg",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/32/10/c6/e5/inside-and-menu.jpg",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/32/54/e1/b5/caption.jpg",
    ],
    imagePositions: ["object-center", "object-center", "object-top", "object-center"],
    menu: {
      en: "Mediterranean cuisine inspired by Basque traditions with fresh Costa Rican ingredients. Features vegetarian, vegan, and gluten-free options.",
      es: "Cocina mediterránea inspirada en tradiciones vascas con ingredientes frescos de Costa Rica. Opciones vegetarianas, veganas y sin gluten.",
      highlights: {
        en: ["Breakfast Buffet", "Costa Rican Beets Salmorejo", "Fresh Fish", "Pineapple Desserts"],
        es: ["Desayuno Buffet", "Salmorejo de Remolacha Costarricense", "Pescado Fresco", "Postres de Piña"]
      },
      url: "https://www.santarenahotel.com/dining/ponciana-bar-bocas/menu"
    },
  },
  {
    mustGo: false,
    icon: ["coffee", "bike", "waves"],
    name: "Pura Vida Ride",
    location: "In Town (Main Street)",
    cuisine: "Specialty Coffee & Adventure Outfitter",
    vibe: "Coffee Roastery & Adventure Center",
    description:
      "World-class organic coffee, empanadas, and a full adventure center. Mountain biking, kayaking, paddleboarding, e-foiling — all in one place. 4.8/5 ★, Travelers' Choice 2025.",
    fullDescription:
      "Start your day in the iconic rocking chairs with shade-grown organic espresso drinks prepared by expert baristas using the finest coffee beans. Fresh daily empanadas, bagels, muffins, and gelato round out the cafe menu. Afternoon shifts into adventure: rent world-renowned mountain bikes for forest trails, kayaks for the sheltered bay, stand-up paddleboards, or try e-foiling — the future of water sports. Featured brands include Yeti, Patagonia, Vissla, and Ripcurl. Full-service bike shop with guided tours and expert advice for all skill levels.",
    hours: "7am–5pm Daily",
    phone: "+506 8584-6045",
    rating: "4.8/5 (441 reviews) • #1 of 5 Activities in Las Catalinas • Travelers' Choice 2025",
    tags: ["★ Top Rated", "Organic Coffee", "Mountain Bike Rentals", "E-Foiling", "Water Sports"],
    images: [
      "https://images.squarespace-cdn.com/content/v1/6803fa5f375c7e07e48fbc2c/1745091185730-VIIYA3JSD670YRVOZJNT/coffeeshop-costa-rica-pura-vida-ride.jpg",
      "https://images.squarespace-cdn.com/content/v1/6803fa5f375c7e07e48fbc2c/1745091185754-1C020YDN7MB7C49H03TH/coffeeshop-pure-vida-ride-costa-rica+%281%29.jpg",
      "https://images.squarespace-cdn.com/content/v1/6803fa5f375c7e07e48fbc2c/1745091185742-SFGWDQDADNVDCU8JLBRN/Ema-Mountain-Biking-Las-Catalinas.jpg",
      "https://images.squarespace-cdn.com/content/v1/6803fa5f375c7e07e48fbc2c/953bbe2a-3c6a-41dd-bdad-99856d605421/MTB+Costa+Rica.JPG",
    ],
    imagePositions: ["object-center", "object-center", "object-[center_35%]", "object-center"],
    menu: {
      en: "Shade-grown organic espresso drinks, cold brew, freshly baked muffins, daily empanadas, and gelato. Non-dairy milk options available.",
      es: "Bebidas de espresso orgánico de sombra, cold brew, muffins recién horneados, empanadas diarias y helado. Opciones de leche sin lácteos disponibles.",
      highlights: {
        en: ["Organic Coffee", "Fresh Empanadas", "Bagels", "Gelato"],
        es: ["Café Orgánico", "Empanadas Frescas", "Bollos", "Helado"]
      },
      url: "https://www.puravidaride.com/pura-vida-grind-cafe"
    },
  },
  {
    mustGo: false,
    icon: "soup",
    name: "Pots & Bowls",
    location: "In Town (Town Center)",
    cuisine: "Health Café · Sustainable Seafood",
    vibe: "Fresh · Nutritious · Local",
    description:
      "Artisanal bowls with responsibly-sourced seafood, cold-pressed juices, and specialty coffee. 4.8/5 ★, Travelers' Choice 2025, #3 of 7 in Las Catalinas.",
    fullDescription:
      "A Las Catalinas institution for thoughtfully-prepared healthy meals. Every dish balances nutrition with flavor — no processed ingredients. Create custom protein bowls with fresh vegetables and house-made pesto and nut butters. Ceviche features certified sustainable-catch seafood from Gulf of Nicoya artisanal fishermen. Cold-pressed juices and smoothies (with plant-based milk options) pair with Café Willows arabica coffee from a five-generation family farm. Host private events. On-site shop featuring locally-made ceramics, Costa Rican apparel, plants, and gifts. All day breakfast, lunch & dinner.",
    hours: "7:30am–8pm Daily",
    phone: "+506 8500 5950",
    email: "info@blossomgroupcr.com",
    rating: "4.8/5 (128 reviews) • #3 of 7 in Las Catalinas • Travelers' Choice 2025",
    tags: ["★ Top Rated", "Sustainable Seafood", "Plant-Based Options", "Cold-Pressed Juice", "Private Events"],
    images: [
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/30/ad/bb/83/caption.jpg?w=1100&h=1100&s=1",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/32/10/99/f1/ceviche.jpg?w=1100&h=1100&s=1",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/30/ad/bb/86/caption.jpg?w=1100&h=1100&s=1",
    ],
    imagePositions: ["object-center", "object-center", "object-center"],
    menu: {
      en: "Customizable healthy bowls, fresh ceviche, cold-pressed juices, smoothies (with plant-based milk options), and excellent coffee. Seafood from certified sustainable fishing.",
      es: "Ensalazones saludables personalizables, ceviche fresco, jugos recién exprimidos, batidos (con opciones de leche vegetal) y excelente café. Mariscos de pesca sostenible certificada.",
      highlights: {
        en: ["Fresh Ceviche", "Protein Bowls", "Cold-Pressed Juices", "Plant-Based Options"],
        es: ["Ceviche Fresco", "Ensalazones de Proteína", "Jugos Recién Exprimidos", "Opciones sin Lácteos"]
      },
      url: "https://www.potsandbowlscr.com/menu/las-catalinas/"
    },
  },
  {
    icon: ["star", "sunset"],
    badge: "CNN's Most Romantic",
    name: "Sentido Norte",
    location: "Casa Chameleon Hotel, Ocean Bluff",
    cuisine: "Contemporary Costa Rican · Sea-to-Table",
    vibe: "Michelin-Level Fine Dining",
    description:
      "Top 10% restaurants globally per CNN. Recognized as one of the world's most romantic restaurants. Sea- and farm-to-table cuisine with local Guanacaste ingredients.",
    fullDescription:
      "The crown jewel of Casa Chameleon — a Michelin-caliber fine dining destination in the top 10% of restaurants globally. Every meal and cocktail features sea- and farm-to-table ingredients celebrated through contemporary Costa Rican techniques. Open-air venue with breathtaking Pacific vistas. CNN named it one of the world's most romantic restaurants. Separate breakfast, lunch, dinner, and wine menus. Day guests welcome with pool access (9am–5pm) or sunset service by reservation ($95+ per person). Dress code: casual elegant, no flip-flops. Groups 8+ require $200 deposit. 10+ years old only. Smoke-free, pet-free. Reservations essential.",
    hours: "Breakfast, Lunch & Dinner Daily (Call for hours)",
    phone: "+506 2103-1200",
    email: "reservations@casachameleonhotels.com",
    rating: "Top 10% globally (2025) • CNN's Most Romantic Restaurants",
    tags: ["★ Award-Winning", "Sea-to-Table", "One World's Most Romantic", "Fine Dining", "Reservations Required"],
    images: [
      "https://www.nrinternational.com/wp-content/uploads/2024/09/casa-chameleon-at-las-catalinas-sentido-norte.jpg",
      "https://www.casachameleonhotels.com/wp-content/uploads/2022/04/sentido-norte-costa-rica-1024x683.jpeg",
      "https://www.nrinternational.com/wp-content/uploads/2024/09/casa-chameleon-at-las-catalinas-private-dining.jpg",
      "https://www.nrinternational.com/wp-content/uploads/2024/09/casa-chameleon-at-las-catalinas-main-pool-view.jpg",
    ],
    imagePositions: ["object-center", "object-center", "object-center", "object-[center_40%]"],
    menu: {
      en: "Contemporary Costa Rican coastal cuisine celebrating local ingredients. Breakfast features smoothies, local fruits, eggs, and avocado. All-day menu showcases farm-to-table seafood and meat with creative presentations.",
      es: "Cocina costera costarricense contemporánea que celebra ingredientes locales. El desayuno presenta batidos, frutas locales, huevos y aguacate. El menú de todo el día destaca mariscos y carnes de la granja a la mesa.",
      highlights: {
        en: ["Fresh Seafood", "Local Ingredients", "Creative Cocktails", "Sunset Views"],
        es: ["Mariscos Frescos", "Ingredientes Locales", "Cócteles Creativos", "Vistas del Atardecer"]
      },
      url: "https://www.sentidonorterestaurant.com/menu/"
    },
  },
  {
    icon: ["utensils", "waves", "sunset"],
    name: "Celeste",
    location: "Playa Danta (Beachfront)",
    cuisine: "International / Latin American",
    vibe: "Beachfront Dining",
    description:
      "Beachfront dining with exceptional cocktails. 4.8/5 ★, #4 of 7 in Las Catalinas.",
    fullDescription:
      "Outdoor-indoor beachfront dining on Playa Danta with stunning ocean views. Exceptional staff, creative cocktails, and excellent international cuisine with Latin American influences. Beautiful sunset ambience makes this a special evening destination. Note: Recent reports of occasional service delays during peak times.",
    hours: "11:30am–8:30pm Daily (Tue closes 5pm)",
    phone: "+506 2654 4600",
    email: "celeste.restaurant@lascatalinascr.com",
    rating: "4.8/5 (54 reviews) • #4 of 7 in Las Catalinas",
    tags: ["★ Top Rated", "Beachfront", "Cocktails", "Sunset Views"],
    images: [
      "/celeste-1.jpg",
      "/celeste-2.jpg",
      "/celeste-3.jpg",
    ],
    menu: {
      en: "International cuisine with Latin American influences. Fresh seafood, fish ceviche, locally caught fish, Angus beef, prawns, and creative cocktails. Gluten-free and vegetarian options available.",
      es: "Cocina internacional con influencias latinoamericanas. Mariscos frescos, ceviche de pez, pez capturado localmente, carne Angus, camarones y cócteles creativos. Opciones sin gluten y vegetarianas disponibles.",
      highlights: {
        en: ["Fish Ceviche", "Fresh Catch of the Day", "Signature Cocktails", "Beachfront Views"],
        es: ["Ceviche de Pez", "Pescado Fresco del Día", "Cócteles de Firma", "Vistas Frente a la Playa"]
      },
    },
  },
  {
    icon: ["utensils", "palm-tree"],
    name: "Pascual",
    location: "Plaza Mercado, Heart of Town",
    cuisine: "Authentic Spanish · Tapas",
    vibe: "Evening Spanish Social",
    description:
      "Classic Spanish croquetas, silky paella, and chilled gazpacho in a lively Plaza Mercado setting. Evening only — perfect for sunset wine and tapas.",
    fullDescription:
      "Pascual brings authentic Spain to Las Catalinas' vibrant Plaza Mercado. Evening-only hours mean this is the place to settle in as the sun sets and the plaza comes alive. Classic Spanish croquetas with perfectly crispy exteriors and creamy centers. Silky paella made with care and seafood from local waters. Chilled gazpacho, tender boquerones (marinated anchovies), squid ink noodles (fideos con tinta de calamar), and jamón ibérico. Wine selection is impressive — Spanish and international bottles curated for the menu. Friday nights feature mixology classes where you can learn Spanish cocktail techniques. The atmosphere is relaxed and social — perfect for lingering conversations over wine.",
    hours: "2pm–10pm Daily",
    phone: "+506 6440 3850",
    tags: ["Tapas", "Spanish Wine", "Paella", "Evening Only", "Mixology Fridays", "Social Atmosphere"],
    menu: {
      en: "Authentic Spanish tapas and traditional dishes. Croquetas (crispy and creamy), paella with seafood, chilled gazpacho, boquerones, squid ink noodles, jamón ibérico, and an impressive wine selection. Mixology classes Friday nights.",
      es: "Auténticas tapas españolas y platos tradicionales. Croquetas (crujientes y cremosas), paella con mariscos, gazpacho frío, boquerones, fideos con tinta de calamar, jamón ibérico, y una impresionante selección de vinos. Clases de coctelería los viernes.",
      highlights: {
        en: ["Spanish Croquetas", "Paella", "Gazpacho", "Jamón Ibérico", "Wine Selection", "Mixology Classes"],
        es: ["Croquetas Españolas", "Paella", "Gazpacho", "Jamón Ibérico", "Selección de Vinos", "Clases de Coctelería"]
      },
    },
  },
  {
    icon: ["beer", "palm-tree"],
    name: "Papagayo Taphouse",
    location: "Playa Danta — Beachfront",
    cuisine: "Craft Brewery · Pub Food",
    vibe: "Beachside Brewery Vibes",
    description:
      "One of Costa Rica's finest craft breweries right on the sand with swing seats and incredible sunsets. Cold beer, great food, sports on big screens.",
    fullDescription:
      "Papagayo Brewing offers quality craft beer \"as refreshing as it is flavorful — made to accentuate the Guanacaste climate and culture, from brewery to beach.\" Sit in iconic swing seats directly on Playa Danta with feet in the sand, cold beers in hand, and unbeatable sunset energy. Signature brews include Beach Lager (perfect for the tropics), Tropical IPA, Offshore Ale, and Passion Fruit Ale. Top-notch cocktails crafted to complement the beers. Casual pub food pairs with your brew. Big TVs for sports. This is where Las Catalinas comes to celebrate, unwind, and catch the sunset with fellow travelers and locals.",
    hours: "Midday through Evening Daily",
    tags: ["Craft Beer", "Beachfront", "Swing Seats", "Sports on TV", "Sunset Views", "Local Favorite"],
    images: [
      "https://images.squarespace-cdn.com/content/v1/5cdec5a7d718890001214928/1631625489463-BSN207RIRSJO66QLH67M/052A2517.jpg",
    ],
    menu: {
      en: "Handcrafted Costa Rican craft beers: Beach Lager, Tropical IPA, Offshore Ale, Passion Fruit Ale. Top-notch cocktails and casual pub food perfectly paired with cold beer and tropical sunsets.",
      es: "Cervezas artesanales de Costa Rica elaboradas a mano: Beach Lager, Tropical IPA, Offshore Ale, Passion Fruit Ale. Cócteles excepcionales y comida casual de bar perfectamente combinados con cerveza fría y atardeceres tropicales.",
      highlights: {
        en: ["Beach Lager", "Tropical IPA", "Passion Fruit Ale", "Craft Cocktails", "Pub Food", "Sunset Vibes"],
        es: ["Beach Lager", "Tropical IPA", "Passion Fruit Ale", "Cócteles Artesanales", "Comida de Bar", "Vibes al Atardecer"]
      },
      url: "https://papagayo-brewing.com/"
    },
  },
  {
    icon: ["shopping-cart", "sandwich"],
    name: "The Deli at Copper & Stone",
    location: "In Town, Main Plaza",
    cuisine: "Gourmet Deli · Prepared Cuisine",
    vibe: "Grab & Go · Fine Preparation",
    description:
      "World-class prepared foods, artisan sandwiches, organic smoothies, prime meats & cheeses. Daily specials. Fresh pizza every Friday.",
    fullDescription:
      "Las Catalinas' most convenient gourmet option for prepared cuisine. World-class prepared proteins, sides, soups, and fresh salads ready for grab-and-go beach trips or to finish at your villa. Artisan sandwiches made fresh daily with premium meats and cheeses. Prime CAB beef cuts available. Fresh breads and pastries baked in-house. Organic cold-pressed juices, smoothies with non-dairy options, and excellent coffee service. Daily rotating specials feature vegetarian and non-vegetarian options. Fresh-made pizza every Friday. Juice bar. Deli staples and gourmet provisions for your stay.",
    hours: "Daily (Hours TBD - contact for details)",
    phone: "+506 2106 1551",
    email: "orders@copperandstonegourmet.com",
    tags: ["Prepared Meals", "Grab & Go", "Prime Meats & Cheeses", "Friday Pizza", "Organic Smoothies", "Convenient"],
    menu: {
      en: "World-class prepared cuisine: proteins, sides, vegetables, soups, and salads. Artisan sandwiches, deli staples, prime CAB beef cuts, fresh breads and pastries, organic smoothies and juices, coffee service. Weekly rotating vegetarian and non-vegetarian specials. Fresh pizza every Friday.",
      es: "Cocina preparada de clase mundial: proteínas, acompañamientos, vegetales, sopas y ensaladas. Sándwiches artesanales, productos de delicatessen, cortes de carne CAB prime, panes y pasteles frescos, batidos y jugos orgánicos, servicio de café. Especiales semanales vegetarianos y no vegetarianos. Pizza fresca todos los viernes.",
      highlights: {
        en: ["Prepared Meals", "Artisan Sandwiches", "Prime Beef Cuts", "Friday Pizza", "Organic Smoothies", "Fresh Breads"],
        es: ["Comidas Preparadas", "Sándwiches Artesanales", "Cortes Prime", "Pizza los Viernes", "Batidos Orgánicos", "Panes Frescos"]
      },
      url: "https://copperandstonegourmet.com/"
    },
  },
  {
    icon: ["coffee", "croissant", "sandwich"],
    name: "Cuatro Calle La Ronda",
    location: "Santarena Hotel",
    cuisine: "Café & Snacks",
    vibe: "Cozy Café",
    description:
      "Cozy café with an outdoor terrace. Coffees, smoothies, breakfast, lunch, and snacks on the go. The breakfast burrito is amazing.",
    hours: "All day",
    tags: ["Coffee", "Breakfast Burrito", "Casual"],
    menu: {
      en: "All-day bakery with sweet and savory baked goods, fresh breads, toast, fruits, yogurt, coffees, juices, and teas. Homemade jams and ferments available.",
      es: "Panadería de todo el día con repostería dulce y salada, panes frescos, tostadas, frutas, yogur, café, jugos y tés. Mermeladas caseras y fermentados disponibles.",
      highlights: {
        en: ["Breakfast Burrito", "Fresh Breads", "Coffee", "Grab-and-Go Options"],
        es: ["Burrito de Desayuno", "Panes Frescos", "Café", "Opciones para Llevar"]
      },
      url: "https://www.santarenahotel.com/dining/4-calle-la-ronda/menu"
    },
  },
  {
    mustGo: false,
    icon: "ice-cream",
    name: "Coquelicot",
    location: "Food Truck — In Town",
    cuisine: "Ice Cream & Belgian Waffles",
    vibe: "Kids' Favorite",
    description:
      "A must for kids — and honestly for adults too. Ice cream and Belgian waffles from a beloved food truck right in town. Don't miss it.",
    hours: "Check current hours",
    tags: ["Kids Must Go!", "Ice Cream", "Belgian Waffles"],
    menu: {
      en: "Artisanal ice cream with flavors like Spiced Chocolate, Orange & Cardamom, Rose & Pistachio, and Caramelized Banana. Homemade Belgian waffles with fresh local ingredients.",
      es: "Helado artesanal con sabores como Chocolate Especiado, Naranja y Cardamomo, Rosa y Pistacho, y Plátano Caramelizado. Waffles belgas caseros con ingredientes locales frescos.",
      highlights: {
        en: ["Belgian Waffles", "Unique Flavors", "Homemade Ice Cream", "Local Ingredients"],
        es: ["Waffles Belgas", "Sabores Únicos", "Helado Casero", "Ingredientes Locales"]
      },
    },
  },
  {
    icon: ["star", "fish"],
    name: "Tamaki",
    location: "In Town",
    cuisine: "Nikkei Fusion · Japanese-Peruvian",
    vibe: "Contemporary Fusion",
    description:
      "Nikkei fusion by Chef Brian Tan, blending Japanese culinary traditions with bold Peruvian flavors. Tiradito, ramen, Yakimeshi, and an excellent sake selection.",
    fullDescription:
      "Tamaki brings authentic Nikkei cuisine to Las Catalinas under the expert guidance of Chef Brian Tan, an original student of the Nikkei movement. Nikkei cuisine is a fusion that blends Japanese culinary traditions with the bold flavors of Peruvian ingredients — affectionately describing immigrants of Japanese origin in Peru and the delightful dishes they create. Expect a tantalizing array of classic Nikkei creations: tiradito (a marriage of sushi and ceviche), comforting ramen, Yakimeshi (Japanese-style fried rice), and inventive fusion plates. The restaurant features an excellent sake and cocktail selection perfectly paired with the bold, umami-rich flavors of Nikkei cuisine. Each dish celebrates the harmony between Japanese technique and Peruvian ingredients.",
    hours: "Check for current hours",
    tags: ["Nikkei Fusion", "Japanese-Peruvian", "Sake Selection", "Tiradito", "Ramen"],
    menu: {
      en: "Authentic Nikkei fusion featuring tiradito (sushi meets ceviche), comforting ramen, Yakimeshi (Japanese-style fried rice), and inventive Japanese-Peruvian creations. Excellent sake and cocktail selection.",
      es: "Fusión Nikkei auténtica con tiradito (sushi con ceviche), ramen reconfortante, Yakimeshi (arroz frito estilo japonés) y creaciones japonesas-peruanas inventivas. Excelente selección de sake y cócteles.",
      highlights: {
        en: ["Tiradito", "Ramen", "Yakimeshi", "Sake Selection", "Nikkei Fusion"],
        es: ["Tiradito", "Ramen", "Yakimeshi", "Selección de Sake", "Fusión Nikkei"]
      },
    },
  },
  {
    icon: "soup",
    name: "Nature's Table",
    location: "Center of Joy, Main Plaza",
    cuisine: "Health & Wellness Café",
    vibe: "Plant-Based · Nutritious",
    description:
      "Wellness-focused café in the heart of the Center of Joy. Fresh juices, healthy bowls, plant-based dishes, and light nutritious meals.",
    fullDescription:
      "Nature's Table brings wellness to the heart of Las Catalinas' vibrant Center of Joy. Meticulously-prepared light, nutritious meals designed for those prioritizing health without sacrificing taste. Create custom healthy bowls with fresh vegetables, proteins, and house-made dressings. Cold-pressed fresh juices packed with whole fruits and vegetables. Salads feature local produce, legumes, and creative combinations. Plant-based options throughout the menu. Smoothie bowls with granola and fresh toppings. The café atmosphere invites lingering over a healthy meal or quick refueling between activities. Perfect before or after yoga, hiking, or water sports.",
    hours: "7am–6pm Daily",
    tags: ["Plant-Based", "Fresh Juices", "Healthy Bowls", "Wellness", "Quick Service"],
    menu: {
      en: "Light, nutritious meals focused on wellness and plant-based options. Customizable healthy bowls, fresh green salads with local vegetables, cold-pressed juices, smoothie bowls, protein-rich legume dishes, and light meals for the health-conscious.",
      es: "Comidas ligeras y nutritivas enfocadas en el bienestar y opciones a base de plantas. Ensalazones saludables personalizables, ensaladas verdes frescas con vegetales locales, jugos recién exprimidos, tazones de batido, platos de legumbres ricos en proteínas, y comidas ligeras.",
      highlights: {
        en: ["Healthy Bowls", "Cold-Pressed Juices", "Plant-Based Options", "Fresh Salads", "Smoothie Bowls"],
        es: ["Ensalazones Saludables", "Jugos Recién Exprimidos", "Opciones Veganas", "Ensaladas Frescas", "Tazones de Batido"]
      },
    },
  },
];

// ─── Nearby Dining ────────────────────────────────────────────────────────────

export interface NearbySpot {
  mustGo?: boolean;
  badge?: string;
  icon?: string | string[];
  name: string;
  cuisine: string;
  description: string;
  location?: string;
  hours?: string;
  tags: string[];
  phone?: string;
  email?: string;
  images?: string[];
  imagePositions?: string[];
  fullDescription?: string;
  rating?: string;
  menu?: {
    en?: string;
    es?: string;
    url?: string;
    highlights?: {
      en?: string[];
      es?: string[];
    };
  };
}

export interface NearbyArea {
  label: string;
  distance: string;
  icon: string;
  spots: NearbySpot[];
}

export const nearbyAreas: NearbyArea[] = [
  {
    label: "Potrero",
    distance: "~10 min",
    icon: "map-pin",
    spots: [
      {
        mustGo: false,
        name: "La Forketta",
        cuisine: "Traditional Italian · Mediterranean",
        description:
          "Incredible hand-made pastas and brick-oven pizzas in a cozy Potrero setting. 4.7/5 ★, #5 of 47 in Playa Potrero.",
        fullDescription:
          "A beloved Italian gem in Potrero where healthy and delicious go hand-in-hand in Mediterranean cuisine. Every hand-made pasta celebrates traditional Italian preparations with fresh, quality ingredients. Brick-oven pizzas emerge with crispy, wood-fired perfection. Super friendly staff creates a warm, welcoming atmosphere in mostly-outdoor seating overlooking the Potrero coast. Specialties include Spaghetti alla Carbonara with eggs and bacon, Lasagne alla Bolognese with housemade pasta, and Burrata Pizza. The seafood options (fish soup, grilled octopus) showcase local Pacific catches. Very popular — make reservations in advance via WhatsApp.",
        hours: "Lunch & Dinner Daily (Call for exact hours)",
        rating: "4.7/5 (296 reviews) • Travelers' Choice 2025 • #5 of 47 in Playa Potrero",
        tags: ["★ Top Rated", "Brick-Oven Pizza", "Hand-Made Pasta", "Mediterranean", "Family-Friendly"],
        phone: "WhatsApp +506 2215 0226",
        images: [
          "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/cb/e6/9c/nuestra-pizza-burrata.jpg",
          "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/ab/20/21/les-esperamos.jpg",
          "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/ab/1d/8e/pizza-hecha-a-la-lena.jpg",
          "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/27/07/d9/la-forketta.jpg",
        ],
        menu: {
          en: "Traditional Mediterranean Italian cuisine where fresh ingredients meet housemade preparations. Hand-made pastas (Carbonara, Bolognese Lasagne, seafood varieties). Brick-oven pizzas include Burrata. Soups, salads, fish dishes, and fresh seafood from local fishermen.",
          es: "Cocina italiana mediterránea tradicional donde ingredientes frescos se encuentran con preparaciones caseras. Pastas hechas a mano (Carbonara, Lasaña Boloñesa, variedades de mariscos). Pizzas de horno de leña incluyendo Burrata. Sopas, ensaladas, pescados y mariscos frescos de pescadores locales.",
          highlights: {
            en: ["Spaghetti alla Carbonara", "Brick-Oven Pizza", "Burrata Pizza", "Fresh Seafood", "Grilled Octopus"],
            es: ["Spaghetti alla Carbonara", "Pizza de Horno de Leña", "Pizza Burrata", "Mariscos Frescos", "Pulpo a la Parrilla"]
          },
          url: "https://laforketta.restaurant/"
        },
      },
      {
        mustGo: false,
        icon: ["utensils", "sunset", "music"],
        name: "Hemingway's",
        cuisine: "Contemporary American / Bar & Grill",
        description:
          "Beachside with direct sunset views. Outstanding cocktails and pork belly tacos. 4.2/5 ★.",
        fullDescription:
          "Beachside bar and grill with direct sunset views over Playa Potrero. Signature cocktails are outstanding, the pork belly tacos are amazing, and the tuna poke is excellent. Beautiful setting with sand under your feet, a full bar, and a pool. Live music adds to the vibrant atmosphere. Great for sunset drinks and dinner. Note: Some recent reports of occasional service delays during peak times.",
        rating: "4.2/5 (158 reviews) • #15 of 47 in Playa Potrero",
        tags: ["Sunset Views", "Beachside", "Live Music", "Cocktails"],
        phone: "+506 2654 4300",
        images: [
          "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/ad/4f/01/a-little-love-and-a-good.jpg",
          "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/ad/4e/17/our-pork-belly-tacos.jpg",
          "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/ad/4e/d2/live-music-with-local.jpg",
        ],
        menu: {
          en: "Contemporary American cuisine with beachside specialties. Featured dishes include crispy pork belly tacos with palmito cheese, fresh tuna poke, margaritas, and signature cocktails.",
          es: "Cocina estadounidense contemporánea con especialidades junto al mar. Los platos destacados incluyen tacos de panza de cerdo crujiente con queso palmito, poke de atún fresco, margaritas y cócteles de firma.",
          highlights: {
            en: ["Pork Belly Tacos", "Tuna Poke", "Signature Cocktails", "Live Music"],
            es: ["Tacos de Panza de Cerdo", "Poke de Atún", "Cócteles de Firma", "Música en Vivo"]
          },
        },
      },
      {
        name: "The Beach House",
        cuisine: "Seafood & American",
        description:
          "On Playa Potrero overlooking the marina. Good seafood and American fare. Amazing Tuna Poke Bowl. They'll even cook fish you catch.",
        tags: ["Seafood", "Tuna Poke Bowl", "Will Cook Your Fish"],
      },
      {
        name: "NASU Restaurant",
        cuisine: "Seafood & International",
        description:
          "Inside Hotel Bahia del Sol — covered outdoor restaurant overlooking the ocean. Specializes in seafood and international cuisine. Sailing center next door.",
        tags: ["Ocean Views", "Seafood", "Covered Outdoor"],
      },
      {
        name: "Café del Sol Lounge & Rooftop",
        cuisine: "Multi-Concept",
        description:
          "Four dining options in one: Bakery, Restaurant, Lounge & Rooftop Bar. Great for a sunset cocktail with a view.",
        tags: ["Rooftop Bar", "Bakery", "Sunset Cocktails"],
      },
      {
        name: "Las Brisas",
        cuisine: "Bar & Casual Food",
        description:
          "Great dive bar atmosphere overlooking the bay. Cheap beer and wine. The Tuna Tower rocks. Better for drinks than a full meal, but solid bar-food menu.",
        tags: ["Dive Bar", "Bay Views", "Cheap Drinks"],
      },
      {
        name: "Aji Mahi",
        cuisine: "Peruvian",
        description: "Authentic Peruvian restaurant with fresh ceviche and traditional dishes.",
        tags: ["Peruvian", "Ceviche"],
        menu: {
          en: "Authentic Peruvian cuisine featuring fresh ceviche, curry mahi mahi, whole red snapper (pargo), and traditional dishes. Seafood and grilled specialties.",
          es: "Cocina peruana auténtica que presenta ceviche fresco, curry mahi mahi, pargo entero y platos tradicionales. Especialidades de mariscos a la parrilla.",
          highlights: {
            en: ["Fresh Ceviche", "Curry Mahi Mahi", "Whole Red Snapper", "Peruvian Traditions"],
            es: ["Ceviche Fresco", "Curry Mahi Mahi", "Pargo Entero", "Tradiciones Peruanas"]
          },
          url: "https://www.ajiperuviancuisine.com/menus"
        },
      },
      {
        name: "Potrero Brewing Co.",
        cuisine: "Brewery & Pub",
        description: "Local craft brewery with pub food. Great spot to try Costa Rican craft brews.",
        tags: ["Craft Beer", "Pub Food"],
      },
      {
        name: "La Jama",
        cuisine: "Casual All-Day",
        description:
          "Super casual outdoor spot — breakfast, lunch, or dinner. Live music and sometimes karaoke. Great local atmosphere.",
        tags: ["Live Music", "Casual", "All Day"],
      },
      {
        name: "Heladería 0039",
        cuisine: "Italian Gelato",
        description:
          "Excellent Italian ice cream and gelato shop. Very affordable — grab extra to take back.",
        tags: ["Gelato", "Affordable", "Italian Ice Cream"],
      },
    ],
  },
  {
    label: "Flamingo & Marina",
    distance: "~15 min",
    icon: "anchor",
    spots: [
      {
        mustGo: false,
        name: "Marina Flamingo",
        cuisine: "Waterfront Complex",
        description:
          "Brand new crown jewel of Playa Flamingo — a vibrant walkable waterfront with restaurants, retail, sailboats, and incredible views. Free parking 2 hours in their new garage.",
        tags: ["Waterfront", "Free Parking 2hrs"],
        phone: "visitmarinaflamingo.com",
      },
      {
        mustGo: false,
        icon: ["sunset", "utensils"],
        name: "Gracia at Mar Vista",
        cuisine: "Globally-Inspired · Farm-to-Table",
        description:
          "Iconic hilltop restaurant with infinity pool overlooking the Pacific. World-class cuisine, famous key lime pie, and breathtaking sunsets.",
        fullDescription:
          "The benchmark Gracia location in the gated Mar Vista community between Brasilito and Flamingo. Architecturally-designed indoor-outdoor space showcases globally-inspired, locally-sourced cuisine. Signature infinity pool overlooks breathtaking Pacific vistas — bring a swimsuit for sunset cocktails overlooking the ocean. Lunch menus are casual and relaxed; dinner is more elegant. On-site organic hydroponic garden (Jardin Organico) produces fresh lettuces, herbs, and vegetables steps from the kitchen. Weekend lunch features a playground for families with kids. Famous for exquisite key lime pie and inventive dishes like Mahi Wulfe with grilled artichokes and sun-dried tomatoes. Tell the gate guard 'Vamos a Gracia.' Reservations essential.",
        tags: ["Infinity Pool", "★ Sunset Views", "Farm-to-Table", "Organic Garden", "Family-Friendly Weekend Lunch"],
        phone: "WhatsApp +506 6110 1687",
        email: "reservations@graciacostarica.com",
        hours: "Mon-Sun 12pm–8:30pm (last seating 8:30pm)",
        menu: {
          en: "Simple yet exquisite dishes with depth and layers of flavor. Globally-inspired with locally-sourced ingredients from the on-site organic garden. Fresh seafood, inventive tapas, famous key lime pie, and creative cocktails.",
          es: "Platos simples pero exquisitos con profundidad y capas de sabor. Inspirado globalmente con ingredientes locales del jardín orgánico in situ. Mariscos frescos, tapas inventivas, famoso pay de lima clave y cócteles creativos.",
          highlights: {
            en: ["Creative Tapas", "Mahi Wulfe", "Key Lime Pie", "Organic Garden", "Sunset Cocktails"],
            es: ["Tapas Creativas", "Mahi Wulfe", "Pay de Lima Clave", "Jardín Orgánico", "Cócteles al Atardecer"]
          },
          url: "https://graciacostarica.com/mar-vista/"
        },
      },
      {
        name: "Surf Box",
        cuisine: "Breakfast & Lunch",
        description:
          "Great breakfast & lunch at Flamingo Marina. Delicious, healthy options. Try the Avocado Toast and Medianoche (their Cuban sandwich).",
        tags: ["Breakfast", "Healthy Options", "Marina"],
      },
      {
        name: "a'lo Nico",
        cuisine: "Local Costa Rican",
        description:
          "Want to eat like a local? This is the place. The Casado is out of this world, the lemonade is delicious, the chicken shawarma is incredibly flavorful. Don't leave without the crepes.",
        tags: ["Local Food", "Casado", "Very Affordable"],
      },
      {
        name: "Patagonia del Mar",
        cuisine: "Seafood & Sushi",
        description:
          "Excellent seafood, steaks, sushi, and great wine selection. Their tuna poke is exceptional. Happy hour and pool on site. Covered outdoor dining.",
        tags: ["Sushi", "Tuna Poke", "Happy Hour", "Pool"],
        phone: "WhatsApp +506-8800-0005",
        menu: {
          en: "Premium seafood, sushi, steaks, and pasta. Appetizers include smoked grouper carpaccio, tuna tartar, and shrimp au gratin. Fresh ceviche, empanadas, and exceptional tuna poke. Extensive wine list.",
          es: "Mariscos premium, sushi, carnes y pasta. Los aperitivos incluyen carpaccio de mero ahumado, tartar de atún y camarones au gratin. Ceviche fresco, empanadas y poke de atún excepcional. Amplia lista de vinos.",
          highlights: {
            en: ["Fresh Ceviche", "Tuna Poke", "Smoked Grouper Carpaccio", "Wine Selection"],
            es: ["Ceviche Fresco", "Poke de Atún", "Carpaccio de Mero Ahumado", "Selección de Vinos"]
          },
          url: "https://patagoniadelmar.the-menu.ca/english"
        },
      },
      {
        name: "Amigos Tacos y Beer",
        cuisine: "Tacos & Mexican",
        description: "Best tacos in Playa Flamingo. Casual, flavorful, and great value.",
        tags: ["Tacos", "Casual", "Best Value"],
      },
      {
        name: "Coco Loco",
        cuisine: "Beach Casual",
        description:
          "Casual restaurant on Flamingo beach. Fun vibe — good food, drinks, and the famous Coco Loco cocktail served in a coconut.",
        tags: ["Beach Bar", "Signature Coconut Cocktail"],
      },
    ],
  },
  {
    label: "Brasilito",
    distance: "~15 min",
    icon: "fish",
    spots: [
      {
        name: "Masala Indian Restaurant",
        cuisine: "Indian",
        description:
          "Excellent Indian restaurant. A welcome change of cuisine with authentic flavors.",
        tags: ["Indian", "Authentic"],
      },
      {
        name: "Doki Sushi",
        cuisine: "Japanese Sushi",
        description: "Excellent takeout sushi — and they deliver! Dinner only.",
        tags: ["Sushi", "Delivery Available", "Dinner Only"],
        phone: "+506 6205-3348",
      },
    ],
  },
  {
    label: "Huacas — El Cruce",
    distance: "~18 min",
    icon: "zap",
    spots: [
      {
        mustGo: false,
        name: "Origami & Kotoy Food Trucks",
        cuisine: "Japanese Fusion Sushi",
        description:
          "Two outstanding sushi food trucks at the El Cruce intersection. Exceptional quality for street-food prices. Check Instagram for daily menus.",
        tags: ["Sushi Trucks", "Street Food"],
        menu: {
          en: "Fresh sushi rolls, salmón fly (salmon fly), rock shrimp, baos, Asian fusion bowls, tempura, and Japanese-inspired street food. Daily specials available.",
          es: "Rollos de sushi fresco, salmón fly, camarones de roca, baos, tazones de fusión asiática, tempura y comida callejera inspirada en Japón. Especiales diarios disponibles.",
          highlights: {
            en: ["Fresh Sushi", "Salmón Fly", "Asian Baos", "Daily Specials"],
            es: ["Sushi Fresco", "Salmón Fly", "Baos Asiáticos", "Especiales Diarios"]
          },
          url: "https://sites.google.com/view/kotoy-origami-foodtrucks/inicio"
        },
      },
      {
        name: "Cafeseato Coffee Shop",
        cuisine: "Café",
        description: "A great little spot for a salad, panini, or good coffee.",
        tags: ["Coffee", "Salads", "Paninis"],
      },
      {
        name: "Gecko's Street Food",
        cuisine: "Street Food",
        description: "Variety of street food at the main intersection. Good, local, and affordable.",
        tags: ["Street Food", "Local", "Affordable"],
      },
    ],
  },
  {
    label: "Near Liberia Airport",
    distance: "~1 hr",
    icon: "plane",
    spots: [
      {
        name: "El Callejero",
        cuisine: "International",
        description:
          "Right near the airport — many options from healthy bowls to BBQ ribs. Relaxing and welcoming vibe. Great stop on the way in or out.",
        tags: ["Near Airport", "Healthy Options", "BBQ Ribs"],
      },
    ],
  },
];

// ─── Activities ───────────────────────────────────────────────────────────────

export interface Activity {
  icon: string;
  title: string;
  description: string;
  fullDescription?: string;
  tags: string[];
  phone?: string;
  email?: string;
  pricing?: string;
  difficulty?: string;
  duration?: string;
  images?: string[];
}

export const activities: Activity[] = [
  {
    icon: "mountain",
    title: "Hiking Trails",
    description:
      "Six trails for all levels through tropical dry forest with stunning Pacific vistas. Download the AllTrails app — it works great here.",
    fullDescription:
      "Explore 42km of pristine trails through tropical dry forest ecosystems teeming with wildlife. Six distinct trails range from easy strolls through town trails to challenging ridge hikes with panoramic Pacific vistas. Spot howler monkeys, iguanas, coatis, and tropical birds throughout the network. Trails weave past hidden coves and natural springs. The AllTrails app works great in Las Catalinas for navigation. Essential gear: bring LOTS of water (at least 2 liters, especially in dry season Nov-Apr when it's hot). Spray insect repellent on legs to avoid mosquitoes. Wear sturdy hiking boots for rocky terrain. Get detailed trail maps from the concierge before heading out. Best hiking times are early morning (cooler) or late afternoon. The dry season (Nov-Apr) offers the best visibility and hardest terrain. Rainy season trails can be slippery.",
    difficulty: "All Levels (Easy to Challenging)",
    duration: "1-4 hours depending on trail",
    tags: ["All Levels", "6 Trails", "42km Network", "AllTrails App", "Wildlife Spotting", "Free"],
  },
  {
    icon: "bike",
    title: "Mountain Biking",
    description:
      "42km of world-class single track through tropical dry forest. Expert-curated trails with Pacific vistas. Rentals, guided tours, and all skill levels.",
    fullDescription:
      "Las Catalinas sits atop a 42km network of world-renowned mountain biking single track — some of the best technical riding in Central America. Trails traverse tropical dry forest with constant surprises: howler monkeys crashing through branches, white-faced iguanas sunbathing on rocks, coatis foraging below, and sudden vistas of the Pacific stretching to the horizon. The network accommodates all skills from gentle forest rolls suitable for kids to challenging technical descents for experts. Pura Vida Ride (in town) rents premium bikes (Yeti, Patagonia-brand partners) and offers professional guided tours with expert knowledge of local trails, flora, and fauna. Dry season (Nov-Apr) offers the hardest terrain and best visibility. Rainy season (May-Oct) brings lush scenery but slippery conditions. Wear helmet, protective gear, and bring plenty of water.",
    difficulty: "All Skill Levels (Beginner to Expert)",
    duration: "1-4 hours depending on trail",
    tags: ["World-Class Trails", "All Skill Levels", "Rentals Available", "Guided Tours", "Technical Riding", "Scenic Views"],
  },
  {
    icon: "activity",
    title: "Yoga at Casa Chameleon",
    description:
      "Monday–Thursday at 9am overlooking the Pacific. Arguably the best view during yoga anywhere in Las Catalinas. $14 per class.",
    fullDescription:
      "Start your morning with sunrise yoga on the cliffs of Casa Chameleon Hotel. Classes focus on gentle to moderate practice suitable for all levels. The Pacific Ocean stretches endlessly before you, creating a meditative atmosphere enhanced by the sound of waves and tropical birds. Each class is approximately 60 minutes. The studio is open-air with overhead fans and natural light. Bring your own mat (though some are available). Classes typically include breathing exercises (pranayama), asana practice, and savasana (final relaxation). The early 9am time means you'll likely catch golden morning light and have the rest of the day for adventures. Perfect for recovering from activities or simply finding stillness. Call Casa Chameleon ahead to confirm current class times and any holiday schedule changes.",
    duration: "60 minutes",
    pricing: "$14 per class",
    difficulty: "All Levels",
    tags: ["Sunrise Views", "All Levels", "Open-Air Studio", "Ocean Views", "Mon-Thu Mornings"],
    phone: "+506 2103 1200",
  },
  {
    icon: "target",
    title: "Tennis & Pickleball",
    description:
      "Brand new Tennis and Pickleball courts in Las Catalinas as of 2024! Also available nearby at Flamingo (Margaritaville) and Hacienda Pinilla (Pickleball Clinic, Saturdays 8–10am, $10).",
    tags: ["New Courts 2024", "Pickleball", "Tennis"],
  },
  {
    icon: "anchor",
    title: "Sunset Catamaran",
    description:
      "Sail the Pacific at golden hour with snorkeling, kayaking, and paddleboarding included. Shared sails or private charters available.",
    fullDescription:
      "Experience the Pacific at its most magical — golden light, warm breeze, and the promise of adventure. Professional catamaran sails depart as sunset approaches, featuring snorkeling in crystal-clear waters to spot tropical fish and sea life, kayaking in sheltered coves, and paddleboarding across glassy-calm waters. Tours typically last 3-4 hours. Snacks and beverages included. Shared sails with other Las Catalinas guests provide a social atmosphere and represent excellent value. Private charters available for groups seeking exclusivity. The concierge can arrange everything and recommend trusted operators. Best conditions in dry season (Nov-Apr) when waters are calmer and visibility is better. Rainy season can bring choppier conditions but fewer crowds.",
    duration: "3-4 hours",
    pricing: "Shared sails $75-100pp, Private charters available",
    tags: ["Snorkeling Included", "Sunset Views", "All Skill Levels", "Drinks Included", "Concierge Arranges"],
  },
  {
    icon: "sun",
    title: "Horseback Riding",
    description:
      "Pacific Horses offers private beach rides in Brasilito. Wear long pants and bug spray — you will get dirty! About $50/hr per person.",
    tags: ["$50/hr per person", "Beach Ride", "Guided"],
    phone: "pacifichorses.as.me",
  },
  {
    icon: "waves",
    title: "Surfing Lessons",
    description:
      "Most surfers head to Playa Grande, about 30 minutes away. Lessons available from a highly recommended local instructor — they pick up at Las Catalinas.",
    tags: ["Playa Grande", "30 min away", "Pickup Available"],
    phone: "+506 8354-2044",
  },
  {
    icon: "sailboat",
    title: "Kayaking & Paddleboarding",
    description:
      "Explore the sheltered bay at your own pace. Rentals available on Playa Danta — calm waters perfect for all experience levels.",
    tags: ["Self-Guided", "Rentals on Beach", "Calm Bay"],
  },
  {
    icon: "zap",
    title: "E-Foiling & Jet Boarding",
    description:
      "The future of water sports, available right in Las Catalinas through Pura Vida Ride. An absolute must for thrill-seekers.",
    tags: ["Pura Vida Ride", "Thrill Sport", "In Town"],
  },
  {
    icon: "heart",
    title: "Massage — Two Options",
    description:
      "Wake Day Spa is in-town (expensive but excellent and convenient). Or book a beachside massage in Potrero — $50/hr, $100/90min, the therapist can also come to Las Catalinas.",
    tags: ["In-Town Spa", "Beach Massage in Potrero", "$50/hr"],
    phone: "Wake Spa: +506-4020-1080 · Beach Massage: +506 6108-3491",
  },
  {
    icon: "volleyball",
    title: "Basketball & Beach Activities",
    description:
      "Courts available in Las Catalinas. Pickleball, e-foiling, snorkeling, and more. Check with the concierge for equipment and schedules.",
    tags: ["In Town", "Ask Concierge", "Multiple Sports"],
  },
];

// ─── Private Chefs ────────────────────────────────────────────────────────────

export const privateChefs = [
  {
    icon: "chef-hat",
    name: "Copper & Stone Catering",
    description:
      "Best-value catering for private events. Everything from casual BBQ to elegant multi-course dinners. Full setup and cleanup included.",
    fullDescription:
      "Copper & Stone Catering offers the best prices in the region for private events and in-home dining experiences. Whether you're planning a casual beach BBQ for 10 or an elegant five-course dinner for 50, they can execute flawlessly. The culinary team works with you to design menus reflecting your preferences and budget. They handle shopping, prep, cooking, setup, table service, and cleanup — everything needed for a memorable meal. Many guests opt for family-style service where dishes are shared. Wine pairings available. They specialize in fresh local seafood, prime meats, and creative vegetarian options. Professional staff ensures everything runs smoothly. Multi-day event catering also available. Contact the event manager to discuss your vision and timeline.",
    phone: "+506 8334 8766",
    tags: ["Best Prices", "BBQ & Events", "Full-Service Catering", "Wine Pairings", "Custom Menus"],
  },
  {
    icon: "fish",
    name: "In-Home Sushi Experience",
    description:
      "A talented local sushi chef prepares authentic sushi at your villa. Everything included — ingredients, preparation, setup, cleanup.",
    fullDescription:
      "An exceptional local sushi chef brings an immersive sushi experience directly to your Las Catalinas home. You host, he handles everything else. The chef arrives with premium ingredients, equipment, and expertise. He prepares fresh rolls, nigiri, and specialty sushi pieces right in your kitchen while guests watch and learn. All dishes, utensils, setup, and cleanup included — you simply enjoy. Roughly $50 per person depending on menu selections. This same talented chef operates the popular Origami and Kotoy food trucks in Huacas for daytime snacking. Private experience perfect for intimate dinners, small celebrations, or simply a unique culinary moment in your villa.",
    phone: "+506 8942-1717",
    tags: ["All-Inclusive", "At Your Villa", "Premium Ingredients", "$50/pp", "Interactive Experience"],
  },
  {
    icon: "utensils",
    name: "RLT Cuisine — Classes & Private Dinners",
    description:
      "Award-winning culinary master offering hands-on cooking classes and private dinners. Food Lab: intimate 4-seat restaurant in Potrero.",
    fullDescription:
      "RLT Cuisine represents the highest level of culinary artistry in the Guanacaste region. The award-winning chef brings international training and local passion to every experience. Options include: (1) Private dinners in your villa or his kitchen with fully customized menus, (2) Hands-on cooking classes teaching techniques and recipes you'll use for years, (3) Food Lab — an exclusive 4-seat intimate restaurant experience in Potrero featuring prix-fixe menus showcasing his creativity. All skill levels welcome for classes. The chef sources the finest local ingredients and international imports. Wine pairings curated to complement each dish. Flexible scheduling accommodates your preferences. This is destination dining at its finest — a unique food experience paired with genuine hospitality.",
    phone: "+506 8735-1877 (WhatsApp)",
    email: "info@rltcuisine.com",
    tags: ["Award-Winning", "Cooking Classes", "Private Dinners", "Food Lab", "Customizable", "Premium Experience"],
  },
];

// ─── Day Trips ────────────────────────────────────────────────────────────────

export const dayTrips = [
  {
    icon: "tree-pine",
    name: "Diamante Eco Adventure Park",
    distance: "30 min",
    description:
      "Zipline over forest canopy, visit a butterfly house, and see jaguars in a wildlife center. Perfect half-day adventure.",
    fullDescription:
      "Experience Costa Rica's wildlife and rainforest from above. The eco-adventure park features a canopy zipline course offering thrilling views of the jungle landscape. Navigate hanging bridges, spot wildlife from vantage points, and experience the rainforest ecosystem up close. The butterfly house showcases dozens of colorful species in a net-enclosed garden. The wildlife center features rescued jaguars, sloths, and other tropical animals in naturalistic habitats with educational information about conservation. A café and gift shop on-site. Professional guides ensure safety. Perfect for families and those seeking a concentrated dose of Costa Rican nature without extensive hiking.",
    tags: ["Zipline", "Jaguars", "Butterfly House", "Canopy Tour", "Half-Day", "Family-Friendly"],
  },
  {
    icon: "waves",
    name: "Tamarindo",
    distance: "45 min",
    description:
      "Costa Rica's prime beach town with world-class surfing, shopping, galleries, and diverse dining. Try Witches Rock for Big Ass Nachos.",
    fullDescription:
      "Tamarindo is the Guanacaste region's most developed beach town, offering everything from rustic beach vibes to upscale resorts. The long, sandy Playa Tamarindo is famous for consistent waves perfect for surfers of all levels — rental shops and lessons available everywhere. The town sprawls along the beach and up into the hills, featuring numerous restaurants from casual beach shacks to upscale venues (don't miss Witches Rock's legendary Big Ass Nachos and Green Papaya salad). Art galleries showcase local and international artists. Shopping ranges from souvenir shops to boutiques. Nightlife is vibrant with beach bars, clubs, and live music venues. It's touristy compared to Las Catalinas' quiet charm, but offers excellent infrastructure, more dining variety, and ocean recreation. The beach has patrolled swimming areas and lifeguards.",
    tags: ["Surfing", "Shopping", "Restaurants", "Nightlife", "Full-Day Activity", "Beach Town"],
  },
  {
    icon: "droplets",
    name: "La Leona Waterfall",
    distance: "1.5 hr NE",
    description:
      "An awesome 2.5-hour guided tour just north of Liberia. Private entrance, guide, bottled water, safety equipment, and lunch included. About $25/person. \"My new favorite. As always, a full day trip.\"",
    tags: ["Guided Tour", "~$25/pp", "Lunch Included"],
  },
  {
    icon: "flame",
    name: "Hacienda Guachipelin",
    distance: "1.5 hr",
    description:
      "Epic day trip near Rincón de la Vieja. Zipline, river tubing, hiking, horseback riding, waterfalls, mud baths, and natural hot springs. Ask to include the oropéndula — the hanging bridge to the waterfall.",
    tags: ["Zipline", "Hot Springs", "Mud Baths", "Waterfall"],
  },
  {
    icon: "droplets",
    name: "Tenorio Volcano / Río Celeste",
    distance: "2.5 hrs",
    description:
      "The stunningly beautiful sky-blue river inside Tenorio Volcano National Park. Can be 20°F cooler than LC. Easy drive or book a tour. Consider overnight at the Río Celeste Hideaway Hotel.",
    tags: ["Blue River", "National Park", "Cooler Climate", "5-Star Hotel Nearby"],
  },
  {
    icon: "shield",
    name: "Ostional Turtle Refuge",
    distance: "2 hrs south",
    description:
      "Hundreds of thousands of Olive Ridley sea turtles come ashore to lay eggs — peaks in rainy season (Aug–Dec). Night tours available. A truly once-in-a-lifetime experience.",
    tags: ["Rainy Season Best", "Night Tours", "Once-in-a-Lifetime"],
  },
  {
    icon: "cloud",
    name: "Monteverde Cloud Forest",
    distance: "3 hrs SE",
    description:
      "10,500 hectares of cloud forest — National Geographic called it \"the jewel in the crown of cloud forests.\" Hiking, bird watching, hanging bridges, and night ecosystem tours. Pack rain gear and warmer clothes.",
    tags: ["Cloud Forest", "Hanging Bridges", "Wildlife", "Overnight Recommended"],
  },
  {
    icon: "flame",
    name: "Arenal Volcano Area",
    distance: "3+ hrs east",
    description:
      "Costa Rica's adventure capital. Arenal Volcano National Park, zip lines, natural hot springs, Lake Arenal, La Fortuna Waterfall, and white-water rafting. Best as an overnight trip.",
    tags: ["Hot Springs", "Volcano Views", "Adventure Capital", "Overnight Recommended"],
  },
];

// ─── Boating & Fishing ────────────────────────────────────────────────────────

export const boating = [
  {
    icon: "anchor",
    name: "Get My Boat",
    type: "Boat Rental Broker",
    description:
      "Wide range of boat rentals from budget to premium. Connects you with trusted local providers. Flexible pricing and delivery to beach.",
    fullDescription:
      "Get My Boat serves as a broker connecting visitors with local boat rental operators. Options range from budget fishing boats ($75/person) to premium private yachts ($300/hour). Browse the network of providers, choose your vessel, and they'll coordinate everything including beach delivery. Great for fishing trips, sunset cruises, snorkeling expeditions, or exploring nearby islands. Cash payment required — operators meet you directly at the beach in Las Catalinas. Pricing typically includes fuel and basic safety equipment. Insurance and skipper services available. The broker model means you're dealing directly with local operators who know the waters intimately.",
    tags: ["Budget to Premium", "Local Providers", "Beach Delivery", "Flexible Options"],
    contact: "+506-8597-8323",
  },
  {
    icon: "anchor",
    name: "Mantaray Sailing",
    type: "Full-Day Catamaran",
    description:
      "All-inclusive catamaran with endless drinks, gourmet lunch, and professional crew. Shuttle from Las Catalinas available.",
    fullDescription:
      "Mantaray Sailing operates a well-maintained catamaran perfect for full-day adventures. The experience includes endless drinks (beer, wine, sodas), a delicious multi-course lunch featuring fresh fish wraps, veggie wraps, and fresh fruit platters. Professional, attentive crew handles sailing and watersports. For groups of 8, cost averages roughly $150 per person. Round-trip shuttle from Las Catalinas available for $10/person. Multiple departure times: Morning sails depart early and return by early afternoon. Sunset sails depart late afternoon and return after dusk. Full-day options combine both experiences. On-board snorkeling, swimming, and relaxation are included. The catamaran features shaded areas, a full bar, and comfortable seating. Pricing: Morning $1,500 · Sunset $1,900 · Full Day $3,000.",
    tags: ["All-Inclusive", "Drinks & Lunch", "Snorkeling", "Professional Crew", "Shuttle Available", "Group-Friendly"],
    contact: "+506 8525-0942",
  },
  {
    icon: "sailboat",
    name: "Costa Rica Sailing Center",
    type: "Sailing & Rentals",
    description:
      "Only 15 minutes away in Potrero. Sailing trips for small groups, boat rentals, boogie boards, paddleboards, snorkel gear, and kayaks. Hemingway's Restaurant is right next door.",
    contact: "+506 8473 7761",
    tags: ["15 min Away", "Equipment Rentals", "Small Groups Welcome"],
  },
  {
    icon: "anchor",
    name: "Panache Sailing",
    type: "Catamaran Charters",
    description:
      "Professional catamaran tours and private charters since 2014. Shared morning/afternoon sails, full-day tours with snorkeling, beverages, and food included. Award-winning with excellent reviews.",
    contact: "+506 8495-0039 (CR) · +1-888-987-4361 (US)",
    tags: ["Award-Winning", "Snorkeling Included", "Beverages Included"],
  },
  {
    icon: "sailboat",
    name: "Serendipity Charters",
    type: "Private Yacht (50ft)",
    description:
      "The most refined option — a 50-foot private yacht, perfect for 6 people. $990 for a half-day sunset cruise. Pickup from Flamingo Marina.",
    contact: "Serendipitycharters@gmail.com",
    tags: ["50ft Yacht", "$990 Half-Day", "Up to 6 People", "Flamingo Pickup"],
  },
  {
    icon: "fish",
    name: "WetAss Fishing",
    type: "Sport Fishing Charter",
    description:
      "Professional and super knowledgeable fishing charters now at the new Flamingo Marina. No fishing license required in Costa Rica.",
    contact: "Flamingo Marina",
    tags: ["No License Needed", "Flamingo Marina", "Professional"],
  },
  {
    icon: "fish",
    name: "Kayak Fishing — Potrero",
    type: "Kayak Fishing",
    description:
      "Kayak fishing with a local guide, departing from Las Brisas in Potrero — just 5 minutes from Las Catalinas.",
    contact: "+506-6253-9846",
    tags: ["Kayak Fishing", "5 min from LC", "Local Guide"],
  },
];

// ─── Transport ────────────────────────────────────────────────────────────────

export const transport = [
  {
    icon: "plane",
    title: "Fly into Liberia (LIR) — Not San José",
    description:
      "Liberia Airport is 1 hour from Las Catalinas (about 45 min if the monkey trail is open and dry). San José airport is a 4-hour drive — avoid if possible. Many direct US flights into Liberia.",
    contact: null,
    tags: ["LIR Airport", "1 hr Drive", "Monkey Trail Shortcut"],
  },
  {
    icon: "star",
    title: "Top-Rated Tour Guide & Driver",
    description:
      "Five-star rated on TripAdvisor — fabulous excursions and reliable airport transfers. Airport transport $100. Luxury vehicle for up to 4 people. Very highly recommended.",
    contact: "+506-8837-1531 · LovingCostaRica.com",
    tags: ["5-Star TripAdvisor", "Airport $100", "Tours Available"],
  },
  {
    icon: "car",
    title: "Uber",
    description:
      "Uber has recently launched in Costa Rica. Las Catalinas to Potrero or Flamingo is approximately $30–40.",
    contact: null,
    tags: ["App-Based", "Potrero/Flamingo ~$30–40"],
  },
  {
    icon: "building-2",
    title: "Las Catalinas Concierge",
    description:
      "The concierge can arrange a luxury vehicle for airport pickup — approximately $160 one way for up to 4 people. They can also help with boats, excursions, and more.",
    contact: "concierge@lascatalinascr.com",
    tags: ["Luxury Vehicle", "~$160 one way", "Airport Pickup"],
  },
];

// ─── Groceries ────────────────────────────────────────────────────────────────

export const groceriesEnRoute = [
  {
    icon: "shopping-cart",
    name: "Walmart",
    distance: "10 min from LIR airport",
    highlight: "Best Overall Value",
    description:
      "Large, clean, well-stocked — food, ice, beach chairs, electronics, household items. Usually 10–15% cheaper than regular grocery stores.",
    tags: ["10 min from Airport", "Great Selection", "Cheapest Prices"],
  },
  {
    icon: "shopping-bag",
    name: "PriceSmart",
    distance: "3 min from LIR airport",
    highlight: "Like Costco",
    description:
      "Costa Rica's Costco equivalent ($35 annual membership). Worth it for longer stays. Left out of the airport, toward Liberia.",
    tags: ["3 min from Airport", "$35 Annual Fee", "Bulk Buying"],
  },
  {
    icon: "package",
    name: "Discount Italian Store",
    distance: "On Hwy 21 (in the Do It Center plaza, right side)",
    highlight: "Wine & Charcuterie",
    description:
      "Amazing charcuterie, Italian meats & cheeses, pastas, frozen entrees, and an impressive wine selection at very affordable prices. Great wine from ~$7/bottle.",
    tags: ["CLOSED Mondays", "Hours: 8am–6pm", "Wine ~$7/bottle", "Italian Meats"],
  },
];

export const groceriesNearLC = [
  {
    name: "Copper & Stone",
    distance: "In Town",
    description: "Amazing fresh groceries right in Las Catalinas. The most convenient option by far.",
    hours: null,
  },
  {
    name: "La Muralla",
    distance: "~5 min (en route to Potrero)",
    description: "Good local grocery option on the way to Potrero.",
    hours: "Open 2pm–10pm",
  },
  {
    name: "MerKdo",
    distance: "~10–12 min (Potrero)",
    description: "Small with basic items. Quick and convenient for everyday needs.",
    hours: null,
  },
  {
    name: "Super Massai",
    distance: "~15–18 min (Route 180)",
    description: "Wide selection, fresh fruit & veggies, and American products. A solid mid-distance option.",
    hours: null,
  },
  {
    name: "Marcosta Seafood Market",
    distance: "~10 min (Potrero — Italian Village)",
    description: "Fresh fish caught daily. Outstanding quality seafood market.",
    hours: null,
  },
  {
    name: "La Carnicería Gourmet",
    distance: "~18 min (Huacas, Plaza Paseo del Mar)",
    description: "Imported USDA Prime meats and fine wines. For when you want to splurge.",
    hours: null,
  },
  {
    name: "Auto Mercado",
    distance: "Coco Beach 45 min · Tamarindo 55 min",
    description:
      "The most \"American\" grocery store in the region. Two locations. Best when you need something specific from home.",
    hours: null,
  },
];

// ─── Medical ──────────────────────────────────────────────────────────────────

export const medicalInfo = [
  {
    icon: "message-circle",
    title: "First: Contact the Concierge",
    description:
      "The Las Catalinas concierge is your first call for any medical situation. They know the local system and can help coordinate care quickly.",
    contact: "concierge@lascatalinascr.com",
    urgent: false,
  },
  {
    icon: "stethoscope",
    title: "Beachside Clinic — Huacas",
    description:
      "Closest clinic to Las Catalinas, located in Huacas. Dr. Oscar Salas. Primary contact for most medical issues.",
    contact: "+506 2653-9911",
    urgent: true,
  },
  {
    icon: "hospital",
    title: "Hospital — Flamingo",
    description:
      "Full hospital in Flamingo for more serious or emergency situations. Dr. Enrique Baltodano Briceño.",
    contact: "+506-2690-2300",
    urgent: true,
  },
];
