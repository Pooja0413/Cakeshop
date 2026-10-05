export type CakeCategory = 'all' | 'signature' | 'wedding' | 'entremets' | 'pastries' | 'dietary';

export interface CakeSizeOption {
  size: string;
  servings: string;
  price: number;
}

export interface CakeItem {
  id: string;
  name: string;
  category: 'signature' | 'wedding' | 'entremets' | 'pastries' | 'dietary';
  categoryLabel: string;
  tagline: string;
  description: string;
  price: number;
  image: string;
  servings: string;
  flavorNotes: string[];
  dietaryTags: string[];
  leadTime: string;
  availableSizes: CakeSizeOption[];
  badge?: string;
  pairing?: {
    beverage: string;
    notes: string;
  };
  ingredients: string[];
  allergens: string[];
  careInstructions: string;
}

export interface CartItem {
  cartId: string;
  cakeId: string;
  name: string;
  image: string;
  size: string;
  servings: string;
  price: number;
  quantity: number;
  topperText?: string;
  candlesCount?: number;
  customGiftNote?: string;
  isCustomCake?: boolean;
  customDetails?: {
    occasion: string;
    tier: string;
    sponge: string;
    filling: string;
    finish: string;
    inscription: string;
  };
}

export interface OrderDetails {
  orderNumber: string;
  fulfillmentType: 'pickup' | 'delivery';
  deliveryDate: string;
  deliveryTimeSlot: string;
  customerName: string;
  email: string;
  phone: string;
  deliveryAddress?: string;
  deliveryCity?: string;
  deliveryZip?: string;
  specialInstructions?: string;
  items: CartItem[];
  subtotal: number;
  deliveryFee: number;
  tax: number;
  total: number;
  createdAt: string;
}

export interface CustomCakeOption {
  id: string;
  name: string;
  description: string;
  priceAddon: number;
  colorTone?: string;
}
