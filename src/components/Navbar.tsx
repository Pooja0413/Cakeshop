import React from 'react';
import { ShoppingBag, Search, Sparkles, Clock, MapPin, X } from 'lucide-react';
import { CartItem } from '../types/cake';

interface NavbarProps {
  cart: CartItem[];
  onOpenCart: () => void;
  onOpenCustomStudio: () => void;
  onNavigateToSection: (sectionId: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cart,
  onOpenCart,
  onOpenCustomStudio,
  onNavigateToSection,
  searchQuery,
  onSearchChange,
}) => {
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      {/* Editorial Announcement Banner (slim, <=40px) */}
      <aside aria-label="Announcement" className="bg-[#211E1D] text-[#EFEBE4] px-4 py-2 text-xs text-center flex items-center justify-center gap-3 tracking-wide">
        <span className="flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5 text-amber-300" />
          <span>Fresh morning bake completed daily at 5:00 AM</span>
        </span>
        <span className="hidden sm:inline text-stone-500">·</span>
        <span className="hidden sm:inline">Hand-delivered across the city in chilled transit</span>
        <span className="hidden md:inline text-stone-500">·</span>
        <span className="hidden md:flex items-center gap-1 text-amber-200">
          <MapPin className="w-3 h-3" />
          <span>Studio & Tasting Room: 142 Rue du Marais</span>
        </span>
      </aside>

      {/* Top Bar Contract: 3 zones */}
      <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E8E4DD] transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          
          {/* Zone 1: Single element Brand Wordmark */}
          <div className="flex items-center">
            <button
              onClick={() => onNavigateToSection('hero')}
              className="text-2xl sm:text-3xl font-serif font-semibold tracking-tight text-stone-900 hover:text-stone-700 transition-colors cursor-pointer text-left"
            >
              Crème & Crumb
            </button>
          </div>

          {/* Zone 2: 4-6 Clean Text Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-stone-700">
            <button
              onClick={() => onNavigateToSection('collection')}
              className="hover:text-stone-950 transition-colors hover:underline underline-offset-8 decoration-stone-300 cursor-pointer"
            >
              The Collection
            </button>
            <button
              onClick={() => onNavigateToSection('custom-studio')}
              className="hover:text-stone-950 transition-colors hover:underline underline-offset-8 decoration-stone-300 cursor-pointer flex items-center gap-1"
            >
              <span>Custom Studio</span>
            </button>
            <button
              onClick={() => onNavigateToSection('flavor-pairings')}
              className="hover:text-stone-950 transition-colors hover:underline underline-offset-8 decoration-stone-300 cursor-pointer"
            >
              Flavors & Pairings
            </button>
            <button
              onClick={() => onNavigateToSection('our-craft')}
              className="hover:text-stone-950 transition-colors hover:underline underline-offset-8 decoration-stone-300 cursor-pointer"
            >
              Our Kitchen & Craft
            </button>
            <button
              onClick={() => onNavigateToSection('visit-us')}
              className="hover:text-stone-950 transition-colors hover:underline underline-offset-8 decoration-stone-300 cursor-pointer"
            >
              Visit & Tasting
            </button>
          </nav>

          {/* Zone 3: 1-2 Primary Action Points */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Search Input / Toggle */}
            <div className="relative">
              {isSearchOpen ? (
                <div className="flex items-center bg-white border border-stone-300 rounded-lg px-2.5 py-1.5 shadow-sm">
                  <Search className="w-4 h-4 text-stone-400 mr-2 shrink-0" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => onSearchChange(e.target.value)}
                    placeholder="Search pistachio, chocolate..."
                    className="w-36 sm:w-48 text-xs sm:text-sm text-stone-800 focus:outline-none bg-transparent"
                    autoFocus
                  />
                  <button
                    onClick={() => {
                      setIsSearchOpen(false);
                      onSearchChange('');
                    }}
                    className="text-stone-400 hover:text-stone-600 ml-1 p-0.5"
                    aria-label="Close search"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setIsSearchOpen(true)}
                  className="p-2 text-stone-600 hover:text-stone-900 rounded-lg hover:bg-stone-100 transition-colors"
                  aria-label="Search catalog"
                  title="Search cakes and flavors"
                >
                  <Search className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Bespoke Studio CTA */}
            <button
              onClick={onOpenCustomStudio}
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-stone-800 bg-stone-100 hover:bg-stone-200 border border-stone-200/80 rounded-lg px-3.5 py-2.5 transition-colors whitespace-nowrap cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-700" />
              <span>Bespoke Studio</span>
            </button>

            {/* Shopping Bag Button */}
            <button
              onClick={onOpenCart}
              className="relative flex items-center gap-2 bg-stone-900 hover:bg-stone-800 text-white rounded-lg px-3.5 py-2.5 text-xs sm:text-sm font-medium transition-colors cursor-pointer"
              aria-label="Open cart drawer"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="hidden sm:inline">Order Bag</span>
              <span className="font-mono tabular-nums text-xs bg-amber-600/90 text-white px-1.5 py-0.5 rounded">
                {totalItems}
              </span>
            </button>
          </div>

        </div>
      </header>
    </>
  );
};
