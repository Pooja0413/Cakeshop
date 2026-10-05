import { CakeItem } from '../types/cake';

import heroCakeImg from '../assets/images/hero_artisan_cake_1791195350567.jpg';
import chocolateCakeImg from '../assets/images/cake_valrhona_chocolate_1791195362374.jpg';
import pistachioCakeImg from '../assets/images/cake_pistachio_raspberry_1791195372957.jpg';
import earlGreyCakeImg from '../assets/images/cake_earl_grey_lavender_1791195384188.jpg';
import pastriesImg from '../assets/images/pastry_french_tarts_1791195395088.jpg';

export const HERO_IMAGE = heroCakeImg;

export const CAKE_CATALOG: CakeItem[] = [
  {
    id: 'valrhona-noir',
    name: 'Valrhona Noir & Hazelnut Praline',
    category: 'signature',
    categoryLabel: 'Signature Layer Cake',
    tagline: '72% Araguani cacao sponge, crunchy feuilletine praline, silky dark ganache drip.',
    description: 'Our house signature. Four tiers of decadent Valrhona dark chocolate sponge interspersed with crunchy Piedmont hazelnut praline feuilletine and hand-whipped dark chocolate ganache, finished with an obsidian mirror drip and 24-karat edible gold flakes.',
    price: 78,
    image: chocolateCakeImg,
    servings: '10 - 12 Servings',
    flavorNotes: ['72% Valrhona Dark Ganache', 'Piedmont Hazelnut Praline', 'Feuilletine Crunch'],
    dietaryTags: ['Vegetarian', 'Alcohol-Free'],
    leadTime: 'Available today (2-hr prep)',
    badge: 'House Favorite',
    availableSizes: [
      { size: '6" Petite', servings: '6 - 8 servings', price: 62 },
      { size: '8" Classic', servings: '10 - 14 servings', price: 78 },
      { size: '10" Grand', servings: '18 - 22 servings', price: 110 },
      { size: '2-Tier Celebration', servings: '28 - 34 servings', price: 185 },
    ],
    pairing: {
      beverage: 'Single-Origin Ethiopian Pour-Over or Vintage Tawny Port',
      notes: 'The rich cacao notes are heightened by fruity, floral coffee acidity or fortified wine.'
    },
    ingredients: ['Valrhona 72% Araguani Dark Chocolate', 'Isigny Sainte-Mère Cultured Butter', 'Piedmont Hazelnuts', 'Organic Pasture Eggs', 'Bourbon Vanilla Bean'],
    allergens: ['Dairy', 'Eggs', 'Gluten (Wheat)', 'Tree Nuts (Hazelnuts)'],
    careInstructions: 'Keep chilled. For optimal velvety texture, bring to room temperature 35 minutes prior to slicing with a warm chef’s knife.'
  },
  {
    id: 'sicilian-pistachio-raspberry',
    name: 'Sicilian Pistachio & Wild Raspberry Entremet',
    category: 'entremets',
    categoryLabel: 'French Entremet',
    tagline: 'Bronte pistachio dacquoise, tart raspberry compote, whipped mascarpone mousse.',
    description: 'Layered with pure Sicilian Bronte pistachio paste, airy almond dacquoise, hand-simmered wild mountain raspberry coulis, and encrusted with crushed emerald pistachios and fresh whole raspberries.',
    price: 84,
    image: pistachioCakeImg,
    servings: '8 - 10 Servings',
    flavorNotes: ['Bronte Pistachio Paste', 'Wild Alpine Raspberry', 'Whipped Mascarpone'],
    dietaryTags: ['Vegetarian', 'Natural Fruit Compote'],
    leadTime: 'Order 24 hrs in advance',
    badge: 'Seasonal Harvest',
    availableSizes: [
      { size: '7" Round Entremet', servings: '8 - 10 servings', price: 84 },
      { size: '9" Grand Entremet', servings: '14 - 16 servings', price: 120 },
    ],
    pairing: {
      beverage: 'Blanc de Blancs Champagne or Jasmine Pearl Green Tea',
      notes: 'Crisp effervescence cuts through the rich nut butter while elevating bright berry acidity.'
    },
    ingredients: ['Bronte Pistachio Pure Paste', 'Fresh Wild Raspberries', 'Italian Mascarpone', 'Almond Flour', 'Organic Cane Sugar'],
    allergens: ['Dairy', 'Eggs', 'Tree Nuts (Pistachio, Almond)'],
    careInstructions: 'Store refrigerated at 38°F. Serve slightly cool to preserve the delicate mousse structure.'
  },
  {
    id: 'earl-grey-lavender-vintage',
    name: 'Earl Grey Lavender Lambeth',
    category: 'signature',
    categoryLabel: 'Vintage Celebration Cake',
    tagline: 'Bergamot-infused chiffon, French lavender Swiss meringue buttercream, artisanal ruffles.',
    description: 'Delicately steeped with whole-leaf organic Earl Grey tea and infused into featherlight chiffon cake. Frosted in velvety Swiss meringue buttercream with intricate vintage Lambeth border piping, dried Provencal lavender buds, and sugar pearls.',
    price: 76,
    image: earlGreyCakeImg,
    servings: '10 - 12 Servings',
    flavorNotes: ['Bergamot Citrus', 'Organic Provencal Lavender', 'Swiss Meringue Buttercream'],
    dietaryTags: ['Vegetarian', 'Refined Sugar Minimal'],
    leadTime: 'Available today (4-hr prep)',
    badge: 'Artisan Decor',
    availableSizes: [
      { size: '6" Petite', servings: '6 - 8 servings', price: 60 },
      { size: '8" Classic', servings: '10 - 14 servings', price: 76 },
      { size: '10" Grand', servings: '18 - 22 servings', price: 108 },
    ],
    pairing: {
      beverage: 'First-Flush Darjeeling or Lavender Honey Latte',
      notes: 'Floral bergamot oils sync seamlessly with light black teas and delicate milk infusions.'
    },
    ingredients: ['Organic Earl Grey Whole Leaf', 'French Cultured Butter', 'Pasture-Raised Egg Whites', 'Organic Madagascar Vanilla', 'Edible Lavender Flowers'],
    allergens: ['Dairy', 'Eggs', 'Gluten (Wheat)'],
    careInstructions: 'Store in a cool dry space or refrigerate; serve at pleasant room temperature for the creamiest buttercream mouthfeel.'
  },
  {
    id: 'mademoiselle-botanical-tier',
    name: 'Mademoiselle Flora 2-Tier Wedding Cake',
    category: 'wedding',
    categoryLabel: 'Bespoke Wedding & Milestone',
    tagline: 'Tahitian vanilla bean sponge, lemon curd, hand-pressed edible pansies & 24k gold leaf.',
    description: 'An ethereal centerpiece for milestone weddings and intimate celebrations. Two architectural tiers finished in textured semi-naked stucco buttercream, hand-pressed organic edible pansies from our local greenhouse, fresh organic figs, and whisper-thin gold leaf detailing.',
    price: 210,
    image: heroCakeImg,
    servings: '30 - 36 Servings',
    flavorNotes: ['Tahitian Vanilla Bean', 'Meyer Lemon Curd', 'Pressed Edible Flora'],
    dietaryTags: ['Vegetarian', 'Locally Foraged Botanicals'],
    leadTime: 'Order 48 hrs in advance',
    badge: 'Masterpiece',
    availableSizes: [
      { size: '2-Tier Petite (6" + 8")', servings: '28 - 34 servings', price: 210 },
      { size: '2-Tier Grand (8" + 10")', servings: '45 - 52 servings', price: 295 },
      { size: '3-Tier Sovereign (6" + 8" + 10")', servings: '70 - 80 servings', price: 440 },
    ],
    pairing: {
      beverage: 'Vintage Rosé Champagne or Sparkling Elderflower Cordial',
      notes: 'A lively, floral accompaniment that flatters the delicate vanilla crumb and lemon acidity.'
    },
    ingredients: ['Tahitian Vanilla Pods', 'Meyer Lemon Pure Curd', 'Organic Pasture Butter', 'Organic Wheat Flour', 'Farm Edible Flowers'],
    allergens: ['Dairy', 'Eggs', 'Gluten (Wheat)'],
    careInstructions: 'Delivered in reinforced temperature-controlled bakery transport. Best presented out of direct sunlight.'
  },
  {
    id: 'patisserie-tart-collection',
    name: 'Maison Tartlet & Choux Box (Set of 6)',
    category: 'pastries',
    categoryLabel: 'Artisan Pastry Box',
    tagline: 'Madagascar vanilla custard tarts, fresh glazed berries, and crisp craquelin choux.',
    description: 'A curated daily assortment of six handmade French patisserie treasures: two Tahitian vanilla berry tartlets with butter sable crust, two Valrhona dark chocolate hazelnut tartlets, and two salted caramel craquelin choux puffs.',
    price: 38,
    image: pastriesImg,
    servings: '6 Individual Pastries',
    flavorNotes: ['Bourbon Vanilla Bean', 'Glazed Seasonal Berries', 'Salted Butter Caramel'],
    dietaryTags: ['Vegetarian', 'Fresh Daily Bake'],
    leadTime: 'Available today (Immediate)',
    badge: 'Daily Fresh Bake',
    availableSizes: [
      { size: 'Box of 6 Assorted', servings: '3 - 6 persons', price: 38 },
      { size: 'Box of 12 Assorted', servings: '6 - 12 persons', price: 72 },
    ],
    pairing: {
      beverage: 'Café au Lait or Spiced Chai',
      notes: 'The golden butter pastry pairs effortlessly with morning espresso or afternoon tea.'
    },
    ingredients: ['Normandy Unsalted Butter', 'Fresh Blackberries & Strawberries', 'Pure Cane Sugar', 'Tahitian Vanilla', 'Sea Salt Flakes'],
    allergens: ['Dairy', 'Eggs', 'Gluten (Wheat)', 'Tree Nuts (Almond)'],
    careInstructions: 'Enjoy on the day of collection for maximum pastry crispness.'
  },
  {
    id: 'flourless-valrhona-espresso',
    name: 'Flourless Dark Truffle & Sea Salt Cake',
    category: 'dietary',
    categoryLabel: 'Gluten-Free Masterpiece',
    tagline: 'Dense melt-in-mouth cocoa truffle crumb, single-origin espresso, Maldon sea salt flakes.',
    description: 'An intensely rich, naturally gluten-free gateau crafted exclusively with 70% dark Guanaja chocolate, fresh farm eggs, and browned cultured butter. Finished with whipped dark chocolate cloud ganache and Maldon sea salt.',
    price: 72,
    image: chocolateCakeImg,
    servings: '10 - 12 Servings',
    flavorNotes: ['70% Guanaja Chocolate', 'Espresso Extract', 'Maldon Flake Salt'],
    dietaryTags: ['Gluten-Free', 'Vegetarian', 'Nut-Free Recipe'],
    leadTime: 'Available today (2-hr prep)',
    badge: 'Gluten-Free',
    availableSizes: [
      { size: '8" Round', servings: '10 - 12 servings', price: 72 },
      { size: '10" Grand', servings: '16 - 20 servings', price: 98 },
    ],
    pairing: {
      beverage: 'Cold Brew Coffee or Bourbon Barrel Aged Stout',
      notes: 'Deep roasted malt and coffee aromatics harmoniously balance the intense chocolate depth.'
    },
    ingredients: ['Valrhona 70% Guanaja Chocolate', 'Pasture Eggs', 'Cultured Brown Butter', 'Organic Espresso', 'Maldon Sea Salt'],
    allergens: ['Dairy', 'Eggs', 'Soy Lecithin (Valrhona Chocolate)'],
    careInstructions: 'Refrigerate. Best enjoyed slightly chilled like a silky chocolate truffle.'
  }
];

export const CUSTOM_SPONGES = [
  { id: 'vanilla-bourbon', name: 'Madagascar Bourbon Vanilla Chiffon', desc: 'Light, tender crumb infused with whole vanilla pod seeds', price: 0 },
  { id: 'valrhona-dark', name: 'Valrhona 72% Dark Chocolate Fudge', desc: 'Deep, rich, and moist cacao crumb with subtle coffee undertones', price: 5 },
  { id: 'pistachio-rose', name: 'Sicilian Pistachio & Cardamom Sponge', desc: 'Nutty, aromatic crumb made with finely stone-milled Bronte pistachios', price: 10 },
  { id: 'earl-grey', name: 'Steeped Earl Grey Bergamot Sponge', desc: 'Infused with fragrant bergamot and whole-leaf black tea', price: 5 },
  { id: 'lemon-almond', name: 'Meyer Lemon & Toasted Almond Crumb', desc: 'Zesty citrus sponge with fragrant ground almond meal', price: 8 },
];

export const CUSTOM_FILLINGS = [
  { id: 'swiss-meringue', name: 'Classic Tahitian Vanilla Swiss Meringue', desc: 'Silky, airy, and not overly sweet', price: 0 },
  { id: 'salted-caramel', name: 'Salted French Butter Caramel & Feuilletine Crunch', desc: 'Slow-cooked golden caramel with crispy biscuit crunch', price: 6 },
  { id: 'passionfruit-curd', name: 'Tropical Passionfruit & Mango Curd', desc: 'Bright, vibrant, and refreshingly tangy', price: 8 },
  { id: 'dark-ganache', name: 'Whipped Valrhona Dark Truffle Ganache', desc: 'Velvety, whipped chocolate cloud', price: 8 },
  { id: 'raspberry-mascarpone', name: 'Wild Raspberry & Whipped Italian Mascarpone', desc: 'Light mascarpone cream folded with summer berry coulis', price: 10 },
];

export const CUSTOM_TIERS = [
  { id: 'tier-6', name: '6" Petite Round (8 - 10 Servings)', basePrice: 65, serves: '8 - 10 guests' },
  { id: 'tier-8', name: '8" Classic Celebration (16 - 20 Servings)', basePrice: 85, serves: '16 - 20 guests' },
  { id: 'tier-2tier', name: '2-Tier Grand Milestone (35 - 40 Servings)', basePrice: 195, serves: '35 - 40 guests' },
  { id: 'tier-3tier', name: '3-Tier Sovereign Wedding (75 - 85 Servings)', basePrice: 380, serves: '75 - 85 guests' },
];

export const CUSTOM_FINISHES = [
  { id: 'semi-naked-floral', name: 'Pressed Edible Botanicals & Gold Leaf', desc: 'Rustic semi-naked texture adorned with real edible violas & 24k gold leaf', price: 15 },
  { id: 'lambeth-vintage', name: 'Vintage Lambeth Piped Ruffles & Pearls', desc: 'Dramatic layered Victorian piping, drop lines, and sugar pearls', price: 20 },
  { id: 'chocolate-cascade', name: 'Obsidian Ganache Drip & Fresh Fig Shards', desc: 'Artisanal dark chocolate drip with sliced fresh figs, blackberries, and chocolate shards', price: 18 },
  { id: 'minimal-stucco', name: 'Modern Sculptural Stucco Palette Knife', desc: 'Contemporary textured plaster effect with subtle organic edges', price: 10 },
];

export const REVIEWS = [
  {
    id: 'rev-1',
    author: 'Camille Laurent',
    role: 'Bride · Wedding at Stone Pine Estate',
    comment: 'The Mademoiselle Flora cake exceeded every dream. Not only was it the most photographed piece of our reception, but guests actually asked for seconds. The lemon curd and vanilla bean crumb was celestial.',
    rating: 5,
    date: 'September 2026'
  },
  {
    id: 'rev-2',
    author: 'Marcus Vance',
    role: 'Creative Director · 40th Birthday Celebration',
    comment: 'The Valrhona Noir & Hazelnut Praline has genuinely set a new standard for chocolate cakes in the city. The crunchy feuilletine layer against the dark ganache is sublime balance without sugar overload.',
    rating: 5,
    date: 'August 2026'
  },
  {
    id: 'rev-3',
    author: 'Elena Rostova',
    role: 'Private Dinner Host',
    comment: 'Ordering online was effortless. The custom studio estimator allowed me to choose the exact flavor profile, and delivery arrived precisely on the chosen hour in pristine bakery refrigeration.',
    rating: 5,
    date: 'October 2026'
  }
];
