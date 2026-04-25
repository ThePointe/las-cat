// ─── Beach Club ───────────────────────────────────────────────────────────────

export const beachClub = {
  note: "Brand new renovation & new ownership as of 2024",
  pricing: [
    { who: "Adults",      full: "$30 + 13% VAT", deal: "Only $15 if you spend $15+ on food or drinks" },
    { who: "Kids (8–12)", full: "$15 + 13% VAT", deal: "Only $5 if they spend $10+ on food or drinks" },
  ],
  amenities: [
    "25-meter lap pool with 4 swim lanes",
    "Adult lounging pool",
    "Hot spa jacuzzi & plunge pool",
    "Kids' play pool",
    "Lounge chairs with towel service",
    "Restaurant & full cocktail bar",
    "Exercise room with weights & cardio",
  ],
  tip: "The Beach Club is across the bridge at the end of Paseo El Mar.",
};

// ─── In-Town Restaurants ──────────────────────────────────────────────────────

export interface Restaurant {
  mustGo?: boolean;
  icon: string;
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
  fullDescription?: string;
  rating?: string;
}

export const inTownRestaurants: Restaurant[] = [
  {
    mustGo: true,
    icon: "utensils",
    name: "Ponciana",
    location: "Santarena Hotel",
    cuisine: "Italian Mediterranean",
    vibe: "All-Day Dining",
    description:
      "The social heart of Las Catalinas — exceptional quality breakfast, lunch & dinner. 4.7/5 ★, #1 of 7 in Las Catalinas.",
    fullDescription:
      "The social heart of Las Catalinas — exceptional quality breakfast buffet, plus lunch and dinner. Indoor & outdoor seating in a welcoming cultural space. Make reservations, especially for breakfast and dinner. Award-winning Mediterranean cuisine celebrating local ingredients.",
    hours: "7am–10:30am Breakfast, 12pm–9pm Lunch & Dinner",
    phone: "+506 2106 1500",
    email: "ponciana@santarenahotel.com",
    rating: "4.7/5 (200 reviews) • #1 of 7 in Las Catalinas",
    tags: ["★ Top Rated", "Breakfast Buffet", "Reservations Recommended"],
    images: [
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/30/01/d7/d9/outdoor-dinning-area.jpg",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/30/01/d7/d8/ponciana-bar.jpg",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/32/10/c6/e5/inside-and-menu.jpg",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/32/54/e1/b5/caption.jpg",
    ],
  },
  {
    mustGo: true,
    icon: "coffee",
    name: "Pura Vida Ride",
    location: "In Town",
    cuisine: "Coffee & Adventure Center",
    vibe: "Morning Ritual + Water Sports",
    description:
      "Organic coffee, empanadas, and adventure. Also mountain bikes, kayaks, paddleboards, e-foiling. 4.8/5 ★, Travelers' Choice 2025.",
    fullDescription:
      "Get up early and sit in the rocking chairs with fresh organic coffee, empanadas, and muffins. This is the heart of morning in Las Catalinas. In the afternoon, grab gelato or rent equipment for adventure: mountain bikes through the forest, kayaks in the bay, paddleboards, e-foiling, and more. A full-service adventure center.",
    hours: "7am–5pm Daily",
    phone: "+506 8584-6045",
    rating: "4.8/5 (441 reviews) • #1 of 5 Activities in Las Catalinas • Travelers' Choice 2025",
    tags: ["★ Top Rated", "Organic Coffee", "Equipment Rentals", "E-Foiling"],
    images: [
      "https://images.squarespace-cdn.com/content/v1/6803fa5f375c7e07e48fbc2c/1745091185730-VIIYA3JSD670YRVOZJNT/coffeeshop-costa-rica-pura-vida-ride.jpg",
      "https://images.squarespace-cdn.com/content/v1/6803fa5f375c7e07e48fbc2c/1745091185754-1C020YDN7MB7C49H03TH/coffeeshop-pure-vida-ride-costa-rica+%281%29.jpg",
      "https://images.squarespace-cdn.com/content/v1/6803fa5f375c7e07e48fbc2c/1745091185742-SFGWDQDADNVDCU8JLBRN/Ema-Mountain-Biking-Las-Catalinas.jpg",
      "https://images.squarespace-cdn.com/content/v1/6803fa5f375c7e07e48fbc2c/953bbe2a-3c6a-41dd-bdad-99856d605421/MTB+Costa+Rica.JPG",
    ],
  },
  {
    mustGo: true,
    icon: "soup",
    name: "Pots & Bowls",
    location: "In Town (Town Center)",
    cuisine: "Health Café / Smoothie Bar",
    vibe: "Local Favorite",
    description:
      "Creative bowls, ceviche, cold brew. 4.8/5 ★, Travelers' Choice 2025, #3 of 7 in Las Catalinas.",
    fullDescription:
      "A beloved Las Catalinas staple for healthy, delicious meals. Creative bowls, fresh ceviche, cold-pressed juices, smoothies, and excellent coffee. Perfect for breakfast, lunch, or a quick snack. Everything is made fresh daily with a focus on clean, nutritious ingredients.",
    hours: "7:30am–8pm Daily",
    phone: "+506 8500 5950",
    email: "info@blossomgroupcr.com",
    rating: "4.8/5 (128 reviews) • #3 of 7 in Las Catalinas • Travelers' Choice 2025",
    tags: ["★ Top Rated", "Health Conscious", "Fresh Bowls", "Smoothies"],
    images: [
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/32/10/9a/0a/cold-brew.jpg?w=1100&h=1100&s=1",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/32/10/99/f1/ceviche.jpg?w=1100&h=1100&s=1",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/30/cd/47/77/caption.jpg?w=1200&h=1200&s=1",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/30/ad/bb/83/caption.jpg?w=1100&h=1100&s=1",
    ],
  },
  {
    icon: "star",
    name: "Sentido Norte",
    location: "Casa Chameleon Hotel",
    cuisine: "Costa Rican Coastal",
    vibe: "Award-Winning Fine Dining",
    description:
      "Top 10% restaurants globally (2025). Local ingredients, coastal flair, stunning views.",
    fullDescription:
      "The jewel of Casa Chameleon Hotel — an award-winning fine dining destination in the top 10% of restaurants globally. Local ingredients reimagined with coastal flair, inventive cocktails, and unforgettable sunset views. Minimum $45 for sunset drinks. Adults and children 10+ only. Reservations required.",
    hours: "Call for seasonal hours",
    phone: "+506 2103 1200",
    rating: "Top 10% globally (2025) • 5-star fine dining",
    tags: ["★ Award-Winning", "Fine Dining", "Reservations Required", "Ocean Views"],
    images: [
      "https://www.casachameleonhotels.com/wp-content/uploads/2020/09/sentido-norte-restaurant-casa-chameleon-costa-rica.jpg",
    ],
  },
  {
    icon: "waves",
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
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/6d/3c/d9/caption.jpg",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/30/7e/46/43/fines-de-semana-frente.jpg",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/32/fb/45/9b/caption.jpg",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/32/b0/83/8f/caption.jpg",
    ],
  },
  {
    icon: "wine",
    name: "Pascual",
    location: "Plaza Mercado",
    cuisine: "Authentic Spanish",
    vibe: "Tapas Bar",
    description:
      "Classic croquetas, silky paella, and chilled gazpacho in the heart of Plaza Mercado. Evening only — a great dinner destination.",
    hours: "2pm – 10pm daily",
    phone: "+506 6440 3850",
    tags: ["Tapas", "Paella", "Evening Only"],
  },
  {
    icon: "beer",
    name: "Papagayo Taphouse",
    location: "Playa Danta — Beachfront",
    cuisine: "Craft Beer & Pub Food",
    vibe: "Lively Brewery",
    description:
      "One of Costa Rica's best craft breweries right on the sand. Cold beer, great snacks, swing seats, and big TVs for sports. Unbeatable sunset energy.",
    hours: "Midday through evening",
    tags: ["Craft Beer", "Beachfront", "Sports on TV"],
  },
  {
    icon: "sandwich",
    name: "The Deli at Copper & Stone",
    location: "In Town",
    cuisine: "Deli & Café",
    vibe: "Gourmet Deli",
    description:
      "Signature sandwiches, prepared meals, organic smoothies, fresh breads & pastries. Daily veggie & non-veggie entrée specials. Pizza every Friday. Pricey but excellent and very convenient.",
    hours: "Daily",
    tags: ["Fresh Breads", "Pizza Fridays", "Organic Smoothies"],
  },
  {
    icon: "coffee",
    name: "Cuatro Calle La Ronda",
    location: "Santarena Hotel",
    cuisine: "Café & Snacks",
    vibe: "Cozy Café",
    description:
      "Cozy café with an outdoor terrace. Coffees, smoothies, breakfast, lunch, and snacks on the go. The breakfast burrito is amazing.",
    hours: "All day",
    tags: ["Coffee", "Breakfast Burrito", "Casual"],
  },
  {
    mustGo: true,
    icon: "ice-cream",
    name: "Coquelicot",
    location: "Food Truck — In Town",
    cuisine: "Ice Cream & Belgian Waffles",
    vibe: "Kids' Favorite",
    description:
      "A must for kids — and honestly for adults too. Ice cream and Belgian waffles from a beloved food truck right in town. Don't miss it.",
    hours: "Check current hours",
    tags: ["Kids Must Go!", "Ice Cream", "Belgian Waffles"],
  },
  {
    icon: "leaf",
    name: "Nature's Table",
    location: "Center of Joy",
    cuisine: "Health Café",
    vibe: "Wellness Café",
    description:
      "Health-conscious café nestled in the heart of the Center of Joy, right in the center of town. Perfect for a light, nutritious meal.",
    hours: "Check current hours",
    tags: ["Healthy", "Light Meals", "Wellness"],
  },
];

// ─── Nearby Dining ────────────────────────────────────────────────────────────

export interface NearbySpot {
  mustGo?: boolean;
  name: string;
  cuisine: string;
  description: string;
  tags: string[];
  phone?: string;
  images?: string[];
  fullDescription?: string;
  rating?: string;
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
        mustGo: true,
        name: "La Forketta",
        cuisine: "Italian",
        description:
          "Incredible hand-made pastas and brick-oven pizzas. 4.7/5 ★, Travelers' Choice 2025, #5 of 47.",
        fullDescription:
          "A cozy Italian eatery in Potrero with incredible hand-made pastas and brick-oven pizzas. Super friendly staff, mostly outdoor seating, and a warm, welcoming atmosphere. Very popular — make reservations via WhatsApp. Every pizza is made with love and fresh, quality ingredients. The pasta dishes are exceptional and authentic.",
        rating: "4.7/5 (296 reviews) • Travelers' Choice 2025 • #5 of 47 in Playa Potrero",
        tags: ["★ Top Rated", "Brick-Oven Pizza", "Hand-Made Pasta"],
        phone: "WhatsApp +506 2215 0226",
        images: [
          "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/cb/e6/9c/nuestra-pizza-burrata.jpg",
          "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/ab/20/21/les-esperamos.jpg",
          "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/ab/1d/8e/pizza-hecha-a-la-lena.jpg",
          "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/27/07/d9/la-forketta.jpg",
        ],
      },
      {
        mustGo: true,
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
        mustGo: true,
        name: "Marina Flamingo",
        cuisine: "Waterfront Complex",
        description:
          "Brand new crown jewel of Playa Flamingo — a vibrant walkable waterfront with restaurants, retail, sailboats, and incredible views. Free parking 2 hours in their new garage.",
        tags: ["New!", "Waterfront", "Free Parking 2hrs"],
        phone: "visitmarinaflamingo.com",
      },
      {
        mustGo: true,
        name: "Gracia at Mar Vista",
        cuisine: "International",
        description:
          "Hilltop restaurant with stunning infinity pool. Arrive early for sunset — bring a swimsuit!",
        fullDescription:
          "Hilltop restaurant with a stunning infinity pool overlooking the ocean. Arrive early for sunset and bring a swimsuit so you can enjoy the pool and views. Excellent food, famous key lime pie, and an unforgettable experience. Tell the gate guard \"Vamos a Gracia.\" Reservations recommended.",
        tags: ["Infinity Pool", "★ Sunset Views", "Hilltop", "Swimming"],
        phone: "WhatsApp +506 6110 1687",
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
        mustGo: true,
        name: "Origami & Kotoy Food Trucks",
        cuisine: "Japanese Fusion Sushi",
        description:
          "Two outstanding sushi food trucks at the El Cruce intersection. Exceptional quality for street-food prices. Check Instagram for daily menus.",
        tags: ["Sushi Trucks", "Street Food", "Outstanding Value"],
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
  tags: string[];
  phone?: string;
}

export const activities: Activity[] = [
  {
    icon: "mountain",
    title: "Hiking Trails",
    description:
      "Six trails for all levels through tropical dry forest. Download the AllTrails app — it works great in LC. Bring LOTS of water (especially in dry season) and spray insect repellent on your legs. Get a trail map from the concierge.",
    tags: ["All Levels", "6 Trails", "42km Network", "AllTrails App"],
  },
  {
    icon: "bike",
    title: "Mountain Biking",
    description:
      "42km of world-class single track through tropical dry forest. Spot howler monkeys and iguanas, catch Pacific panoramas. Rentals and guided tours available.",
    tags: ["All Skill Levels", "Rentals Available", "Guided Tours"],
  },
  {
    icon: "activity",
    title: "Yoga at Casa Chameleon",
    description:
      "Monday–Thursday at 9am, $14 per class with arguably the best view anywhere in Las Catalinas. Call to confirm current times before going.",
    tags: ["Mon–Thu @ 9am", "$14/class", "Best Views in LC"],
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
      "Sail the Pacific at golden hour with snorkeling, kayaking, and paddleboarding included. Walk over to the concierge to arrange a shared sail with other LC guests — or book a private charter.",
    tags: ["Snorkeling Included", "Sunset Views", "Concierge Can Arrange"],
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
      "Best prices and fabulous food for private events. They can prepare anything from a simple BBQ to an extravagant multi-course meal. Contact the event manager.",
    phone: "+506 8334 8766",
    tags: ["Best Prices", "BBQ & Events", "Catering"],
  },
  {
    icon: "fish",
    name: "In-Home Sushi Experience",
    description:
      "A talented local sushi chef comes to your home and prepares everything — dishes, setup, cleanup — the full experience. About $50 per person. He also runs two popular food trucks in Huacas (Origami & Kotoy).",
    phone: "+506 8942-1717",
    tags: ["~$50/pp", "Chef Brings Everything", "Setup & Cleanup Included"],
  },
  {
    icon: "utensils",
    name: "RLT Cuisine — Classes & Private Dinners",
    description:
      "Award-winning culinary master offering hands-on cooking classes and private dinners in Potrero (~10 min away). Food Lab: 4-seat intimate restaurant experience. All skill levels welcome.",
    phone: "+506 8735-1877 (WhatsApp) · rltcuisine.com",
    tags: ["Award-Winning", "Cooking Classes", "Private Dinners", "Food Lab"],
  },
];

// ─── Day Trips ────────────────────────────────────────────────────────────────

export const dayTrips = [
  {
    icon: "tree-pine",
    name: "Diamante Eco Adventure Park",
    distance: "30 min",
    description:
      "Zipline over the forest canopy, butterfly house, and wildlife center with jaguars. Great half-day adventure.",
    tags: ["Zipline", "Jaguars", "Butterfly House"],
  },
  {
    icon: "waves",
    name: "Tamarindo",
    distance: "45 min",
    description:
      "The region's largest beach town. Known for surfing — rent a board or take a lesson. Grab lunch at Witches Rock restaurant (try the Big Ass Nachos or Green Papaya). Shops, art galleries, restaurants throughout.",
    tags: ["Surfing", "Shopping", "Witches Rock"],
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
      "Range of boats from $75/person to $300/hour. Connects you with local providers. Cash payment required — they'll meet you at the beach.",
    contact: "+506-8597-8323",
    tags: ["Range of Options", "Local Providers", "Cash Only"],
  },
  {
    icon: "anchor",
    name: "Mantaray Sailing",
    type: "Full-Day Catamaran",
    description:
      "Endless drinks, delicious lunch (fish & veggie wraps, fresh fruit platter). For 8 people roughly $150pp. Shuttle from LC available ($10/person). Morning $1,500 · Sunset $1,900 · Full Day $3,000.",
    contact: "+506 8525-0942",
    tags: ["Drinks & Lunch Included", "Shuttle from LC", "Professional Crew"],
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
