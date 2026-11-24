// ===== BRAND =====
export const brand = {
  name: 'Pizza Venue',
  tagline: 'Pleasure in every bite',
  badge: 'Live Kitchen',
  phone: '0309 031 2222',
  phoneRaw: '03090312222',
  phone2: '0332 0000 214',
  whatsapp: '923090312222',
  whatsappDisplay: '0309 031 2222',
  timing: '12 PM – 3 AM',
}

export const fmtPrice = (n) => 'Rs. ' + Number(n).toLocaleString('en-PK')

const img = (name) => 'images/food/' + name

// ===== BRANCHES (order routing) =====
// NOTE: only Park View City has published numbers; others default to the main
// WhatsApp line. Give me each branch's own number and I'll route per-branch.
export const branches = [
  {
    id: 'parkview',
    name: 'Park View City',
    address: '91-Tulip Commercial, Near 3rd Round About, Park View City, Lahore',
    phone: '0309 031 2222',
    whatsapp: '923090312222',
  },
  {
    id: 'marghazar',
    name: 'Marghazar Colony',
    address: '15-EC Marghazar Colony, Multan Road, Lahore',
    phone: '0309 031 2222',
    whatsapp: '923090312222',
  },
  {
    id: 'argarden',
    name: 'A-R Garden',
    address: 'Plaza No 84, Hassan Commercial, A-R Garden Phase-2, Lahore',
    phone: '0309 031 2222',
    whatsapp: '923090312222',
  },
  {
    id: 'nankana',
    name: 'Nankana Sahib',
    address: 'Shora Kothey, Opposite Gourmet Bakery, Nankana Sahib',
    phone: '0309 031 2222',
    whatsapp: '923090312222',
  },
  {
    id: 'pakpattan',
    name: 'Pakpattan Sharif',
    address: 'Bypass Road, Zulfiqar Chowk, Near Madina Town, Pakpattan Sharif',
    phone: '0309 031 2222',
    whatsapp: '923090312222',
  },
]

// ===== ADD-ONS =====
export const addonOptions = [
  { id: 'dip', name: 'Dip Sauce', price: 80 },
  { id: 'drink-15', name: 'Add 1.5L Cold Drink', price: 220 },
  { id: 'drink-05', name: 'Add 0.5L Cold Drink', price: 120 },
  { id: 'small-fries', name: 'Add Small Fries', price: 250 },
]

// ===== DEALS =====
const D = (no, price, image, items) => ({ id: `deal-${no}`, no, price, img: img(image), items })
export const deals = [
  D(1, 1350, 'pasta.jpg', ['1 Small Pizza (Regular Flavour)', '1 Creamy Pasta', '1.5 Ltr Drink']),
  D(2, 2750, 'stuffer.jpg', ['2 Medium Pizza (Stuffer)', '1.5 Ltr Drink']),
  D(3, 2250, 'wings.jpg', ['1 Large Pizza (Regular Flavour)', 'Wings (10 Pcs)', '1.5 Ltr Drink']),
  D(4, 3250, 'pizza.jpg', ['2 Large Pizza (Regular Flavour)', '1.5 Ltr Drink']),
  D(5, 2000, 'wings.jpg', ['1 Medium Pizza (Stuffer)', 'Wings (10 Pcs)', '1.5 Ltr Drink']),
  D(6, 2450, 'pizza.jpg', ['2 Medium Pizza (Regular Flavour)', '1.5 Ltr Drink']),
  D(7, 3000, 'stuffer.jpg', ['1 Large Pizza (Regular Flavour)', '1 Medium Pizza (Stuffer)', '1.5 Ltr Drink']),
  D(8, 3550, 'stuffer.jpg', ['1 Large Pizza (Regular Flavour)', '1 Large Pizza (Stuffer)', '1.5 Ltr Drink']),
  D(9, 3850, 'pizzatop.jpg', ['2 Large Pizzas (Stuffer)', '1.5 Ltr Drink']),
  D(10, 2650, 'pasta.jpg', ['1 Large Pizza (Stuffer)', '1 Creamy Pasta', '1.5 Ltr Drink']),
  D(11, 2900, 'wings.jpg', ['1 Large Pizza (Regular Flavour)', '10 Wings', '1 Spin Roll', '1.5 Ltr Drink']),
  D(12, 4850, 'pizzatop.jpg', ['1 Large (Regular Flavour)', '1 Large (Stuffer)', '10 Pc Wings', '1 Creamy Pasta', '1.5 Ltr Drink']),
]

// pizza size presets
const CLASSIC = [{ label: 'S', price: 600 }, { label: 'M', price: 1200 }, { label: 'L', price: 1600 }]

// ===== MENU CATEGORIES =====
export const categories = [
  {
    id: 'pizzas',
    name: 'Signature Pizzas',
    emoji: '🍕',
    banner: img('pizza.jpg'),
    wide: true,
    pill: 'S · M · L',
    note: 'All signature pizzas — Small 600 · Medium 1200 · Large 1600 · Dip Sauce 80',
    items: [
      { name: 'Venue Special Pizza', desc: 'The house signature — loaded combination', variants: CLASSIC },
      { name: 'Chicken Tikka Pizza', desc: 'Tikka chicken, onion, capsicum', variants: CLASSIC },
      { name: 'Chicken Fajita Pizza', desc: 'Fajita chicken, peppers, onion', variants: CLASSIC },
      { name: 'Chicken Supreme Pizza', desc: 'Loaded supreme toppings', variants: CLASSIC },
      { name: 'Hot & Spicy Pizza', desc: 'Spicy chicken, jalapeno heat', variants: CLASSIC },
      { name: 'Bone Fire Pizza', desc: 'Smoky flame-grilled flavour', variants: CLASSIC },
      { name: 'Chicken Euro Pizza', desc: 'European-style chicken & cheese', variants: CLASSIC },
      { name: 'Cheese Lover Pizza', desc: 'For the cheese obsessed', variants: CLASSIC },
    ],
  },
  {
    id: 'stuffer',
    name: 'Stuffer Crust Pizzas',
    emoji: '🧀',
    banner: img('stuffer.jpg'),
    wide: true,
    pill: 'M · L',
    items: [
      { name: 'Kabab Stuffer Pizza', desc: 'Cheese-stuffed crust, seekh kabab', variants: [{ label: 'M', price: 1350 }, { label: 'L', price: 1900 }] },
      { name: 'Chicken Cheese Stuffer', desc: 'Cheese-stuffed crust, chicken & cheese', variants: [{ label: 'M', price: 1350 }, { label: 'L', price: 1900 }] },
      { name: 'Behari Pizza', desc: 'Behari-spiced chicken', variants: [{ label: 'M', price: 1300 }, { label: 'L', price: 1800 }] },
      { name: 'Malai Boti Pizza', desc: 'Creamy malai boti chicken', variants: [{ label: 'M', price: 1250 }, { label: 'L', price: 1700 }] },
      { name: 'Peri Peri Pizza', desc: 'Peri peri chicken, bold heat', variants: [{ label: 'M', price: 1250 }, { label: 'L', price: 1700 }] },
    ],
  },
  {
    id: 'rolls',
    name: 'Rolls & Sandwiches',
    emoji: '🌯',
    banner: img('sandwich.jpg'),
    items: [
      { name: 'Spin Roll', price: 650 },
      { name: 'Chilli Milli Roll', price: 700 },
      { name: 'Behari Roll', price: 700 },
      { name: 'Chicken Cheese Stick', price: 600 },
      { name: 'Pizza Sandwich', price: 650 },
    ],
  },
  {
    id: 'burgers',
    name: 'Burgers',
    emoji: '🍔',
    banner: img('burger.jpg'),
    items: [
      { name: 'Patty Burger', price: 420 },
      { name: 'Filet Burger', price: 480 },
      { name: 'Zinger Burger', price: 450 },
      { name: 'Chapli Burger', price: 400 },
    ],
  },
  {
    id: 'wings',
    name: 'Oven Baked Wings',
    emoji: '🍗',
    banner: img('wings.jpg'),
    items: [
      { name: 'Bar BQ Wings (10 pcs)', price: 600 },
      { name: 'Peri Peri Wings (10 pcs)', price: 600 },
      { name: 'Honey Wings (10 pcs)', price: 630 },
      { name: 'Plain Wings (10 pcs)', price: 600 },
      { name: 'Hot Wings (10 pcs)', price: 750 },
      { name: 'Nuggets (10 pcs)', price: 550 },
      { name: 'Chicken Strips (6 pcs)', price: 650 },
    ],
  },
  {
    id: 'pasta',
    name: 'Oven Baked Pasta',
    emoji: '🍝',
    banner: img('pasta.jpg'),
    items: [
      { name: 'Special Pasta', price: 700 },
      { name: 'Flaming Pasta', price: 720 },
      { name: 'Behari Pasta', price: 800 },
      { name: 'Alfredo Pasta', price: 790 },
    ],
  },
  {
    id: 'fries',
    name: 'Fries',
    emoji: '🍟',
    banner: img('fries.jpg'),
    items: [
      { name: 'Bar BQ Fries', price: 650 },
      { name: 'Cheesy Mayo Fries', price: 650 },
      { name: 'Potatoes', price: 620 },
      { name: 'Small Fries', price: 250 },
      { name: 'Large Fries', price: 400 },
    ],
  },
  {
    id: 'drinks',
    name: 'Cold Drinks',
    emoji: '🥤',
    banner: img('drinks.jpg'),
    items: [
      { name: 'Cold Drink 1.5 Litre', price: 220 },
      { name: 'Cold Drink 0.5 Litre', price: 120 },
      { name: 'Mineral Water (Large)', price: 120 },
      { name: 'Mineral Water (Small)', price: 60 },
      { name: 'Dip Sauce', price: 80 },
    ],
  },
]
