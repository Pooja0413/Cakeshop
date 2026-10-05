/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { CAKE_CATALOG } from './data/cakes';
import { CakeItem, CartItem, OrderDetails, CakeCategory } from './types/cake';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductCard } from './components/ProductCard';
import { ProductModal } from './components/ProductModal';
import { CustomCakeStudio } from './components/CustomCakeStudio';
import { FlavorPairingGuide } from './components/FlavorPairingGuide';
import { StoryAndStudio } from './components/StoryAndStudio';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { Footer } from './components/Footer';
import { Filter, Sparkles, Check, Search, Calendar, ChevronRight } from 'lucide-react';

export default function App() {
  // Navigation & Modal states
  const [selectedCake, setSelectedCake] = useState<CakeItem | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  // Cart state
  const [cart, setCart] = useState<CartItem[]>([]);
  
  // Checkout flow parameters
  const [checkoutParams, setCheckoutParams] = useState<{
    fulfillmentType: 'pickup' | 'delivery';
    date: string;
    timeSlot: string;
    giftNote: string;
  }>({
    fulfillmentType: 'pickup',
    date: 'Tomorrow',
    timeSlot: 'Afternoon (1:00 PM - 4:00 PM)',
    giftNote: '',
  });

  // Filter & Search states
  const [selectedCategory, setSelectedCategory] = useState<CakeCategory>('all');
  const [dietaryFilter, setDietaryFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Cart management handlers
  const handleAddToCart = (item: CartItem) => {
    setCart((prev) => {
      // Check if identical item (same cakeId, size, and topper) already exists
      const existingIdx = prev.findIndex(
        (x) => x.cakeId === item.cakeId && x.size === item.size && x.topperText === item.topperText
      );
      if (existingIdx >= 0) {
        const next = [...prev];
        next[existingIdx].quantity += item.quantity;
        return next;
      }
      return [...prev, item];
    });

    showToast(`Added ${item.name} to order bag`);
  };

  const handleQuickAdd = (cake: CakeItem) => {
    const defaultSize = cake.availableSizes[0];
    const item: CartItem = {
      cartId: `${cake.id}-${defaultSize.size}-${Date.now()}`,
      cakeId: cake.id,
      name: cake.name,
      image: cake.image,
      size: defaultSize.size,
      servings: defaultSize.servings,
      price: defaultSize.price,
      quantity: 1,
    };
    handleAddToCart(item);
  };

  const handleUpdateQuantity = (cartId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.cartId === cartId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (cartId: string) => {
    setCart((prev) => prev.filter((i) => i.cartId !== cartId));
    showToast('Item removed from order');
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  const handleProceedToCheckout = (options: {
    fulfillmentType: 'pickup' | 'delivery';
    date: string;
    timeSlot: string;
    giftNote: string;
  }) => {
    setCheckoutParams(options);
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handleOrderSuccess = (order: OrderDetails) => {
    // Clear cart on successful submission
    setCart([]);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Filtered Cakes
  const filteredCakes = useMemo(() => {
    return CAKE_CATALOG.filter((cake) => {
      // Category match
      if (selectedCategory !== 'all' && cake.category !== selectedCategory) {
        return false;
      }
      // Dietary filter match
      if (dietaryFilter === 'gluten-free' && !cake.dietaryTags.includes('Gluten-Free')) {
        return false;
      }
      if (dietaryFilter === 'vegetarian' && !cake.dietaryTags.includes('Vegetarian')) {
        return false;
      }
      // Search Query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = cake.name.toLowerCase().includes(q);
        const matchesDesc = cake.description.toLowerCase().includes(q);
        const matchesFlavor = cake.flavorNotes.some((n) => n.toLowerCase().includes(q));
        const matchesIngredient = cake.ingredients.some((i) => i.toLowerCase().includes(q));
        if (!matchesName && !matchesDesc && !matchesFlavor && !matchesIngredient) {
          return false;
        }
      }
      return true;
    });
  }, [selectedCategory, dietaryFilter, searchQuery]);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-stone-900 selection:bg-amber-100 selection:text-amber-950 font-body">
      
      {/* Toast feedback */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-stone-900 text-white text-xs font-medium px-4 py-2.5 rounded-xl shadow-lg border border-stone-800 flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <Check className="w-3.5 h-3.5 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Navigation Bar */}
      <Navbar
        cart={cart}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenCustomStudio={() => scrollToSection('custom-studio')}
        onNavigateToSection={scrollToSection}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      <main className="flex-1">
        {/* Hero Showcase Section */}
        <Hero
          onExploreClick={() => scrollToSection('collection')}
          onCustomStudioClick={() => scrollToSection('custom-studio')}
        />

        {/* Cake Menu / Collection Section */}
        <section id="collection" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-stone-200 gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-stone-500 font-semibold mb-2">
                <span>Daily Pâtisserie Selection</span>
                <span aria-hidden="true">·</span>
                <span>Fresh from Oven</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-stone-900 tracking-tight">
                The Cake Collection
              </h2>
            </div>
            <p className="text-stone-600 text-xs sm:text-sm max-w-md">
              Hand-assembled with 100% natural fruit compotes, French cultured butter, and pure bean vanillas. Each cake is boxed in refrigerated artisan packaging.
            </p>
          </div>

          {/* Interactive Filter Controls */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8">
            
            {/* Category Filter Tabs */}
            <div className="flex items-center gap-1 p-1 bg-stone-200/60 rounded-xl overflow-x-auto text-xs font-medium">
              {[
                { id: 'all', label: 'All Creations' },
                { id: 'signature', label: 'Signature Layer' },
                { id: 'wedding', label: 'Wedding & Tiers' },
                { id: 'entremets', label: 'Entremets' },
                { id: 'pastries', label: 'French Pastry' },
                { id: 'dietary', label: 'Gluten-Free' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedCategory(tab.id as CakeCategory)}
                  className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                    selectedCategory === tab.id
                      ? 'bg-white text-stone-900 shadow-2xs font-semibold'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Dietary Sub-filters */}
            <div className="flex items-center gap-2 text-xs">
              <span className="text-stone-500 hidden sm:inline">Dietary:</span>
              <button
                onClick={() => setDietaryFilter(dietaryFilter === 'all' ? 'gluten-free' : 'all')}
                className={`px-2.5 py-1 rounded-md border transition-colors cursor-pointer ${
                  dietaryFilter === 'gluten-free'
                    ? 'bg-stone-900 text-white border-stone-900 font-medium'
                    : 'bg-white text-stone-700 border-stone-200 hover:border-stone-300'
                }`}
              >
                Gluten-Free Only
              </button>
              <button
                onClick={() => setDietaryFilter(dietaryFilter === 'vegetarian' ? 'all' : 'vegetarian')}
                className={`px-2.5 py-1 rounded-md border transition-colors cursor-pointer ${
                  dietaryFilter === 'vegetarian'
                    ? 'bg-stone-900 text-white border-stone-900 font-medium'
                    : 'bg-white text-stone-700 border-stone-200 hover:border-stone-300'
                }`}
              >
                Vegetarian
              </button>
            </div>

          </div>

          {/* Active Search Filter Banner */}
          {searchQuery && (
            <div className="mb-6 flex items-center justify-between bg-amber-50/80 border border-amber-200/80 rounded-lg px-4 py-2 text-xs text-amber-900">
              <div className="flex items-center gap-2">
                <Search className="w-3.5 h-3.5" />
                <span>Showing search results matching "{searchQuery}"</span>
              </div>
              <button
                onClick={() => setSearchQuery('')}
                className="font-semibold underline hover:text-amber-950 cursor-pointer"
              >
                Clear Search
              </button>
            </div>
          )}

          {/* Product Grid */}
          {filteredCakes.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredCakes.map((cake) => (
                <ProductCard
                  key={cake.id}
                  cake={cake}
                  onSelect={(c) => setSelectedCake(c)}
                  onQuickAdd={(c) => handleQuickAdd(c)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-2xl border border-stone-200 p-8 space-y-4">
              <p className="font-serif text-xl text-stone-800">No cakes found matching your criteria</p>
              <p className="text-xs text-stone-500 max-w-sm mx-auto">
                Try resetting your dietary filters or search term, or design a completely bespoke flavor in our Custom Studio.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setDietaryFilter('all');
                  setSearchQuery('');
                }}
                className="bg-stone-900 hover:bg-stone-800 text-white text-xs font-medium px-4 py-2 rounded-lg transition-colors cursor-pointer"
              >
                Reset All Filters
              </button>
            </div>
          )}

          {/* Custom Cake Atelier Banner callout */}
          <div className="mt-16 bg-[#211E1D] text-white rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 border border-stone-800 shadow-lg">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold flex items-center justify-center md:justify-start gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Need a bespoke creation?</span>
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-medium">
                Architect your own milestone cake from scratch.
              </h3>
              <p className="text-xs sm:text-sm text-stone-400 max-w-lg leading-relaxed">
                Choose custom tiers, rare single-origin ganaches, edible pansies, and handwritten calligraphy plaques with instant price calculation.
              </p>
            </div>
            <button
              onClick={() => scrollToSection('custom-studio')}
              className="bg-amber-100 hover:bg-white text-stone-950 font-medium text-xs sm:text-sm px-6 py-3.5 rounded-xl transition-all shadow-sm shrink-0 flex items-center gap-2 cursor-pointer"
            >
              <span>Open Custom Studio</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </section>

        {/* Bespoke Interactive Custom Cake Studio */}
        <CustomCakeStudio
          onAddCustomCake={(item) => handleAddToCart(item)}
        />

        {/* Sommelier Flavor Pairing Guide */}
        <FlavorPairingGuide />

        {/* Kitchen Ingredients Sourcing & Marais Studio Visit */}
        <StoryAndStudio />
      </main>

      {/* Footer */}
      <Footer onNavigate={scrollToSection} />

      {/* Modals & Slide-over Drawers */}
      <ProductModal
        cake={selectedCake}
        onClose={() => setSelectedCake(null)}
        onAddToCart={handleAddToCart}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onProceedToCheckout={handleProceedToCheckout}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cart={cart}
        fulfillmentType={checkoutParams.fulfillmentType}
        scheduledDate={checkoutParams.date}
        timeSlot={checkoutParams.timeSlot}
        giftNote={checkoutParams.giftNote}
        onOrderSuccess={handleOrderSuccess}
      />

    </div>
  );
}
