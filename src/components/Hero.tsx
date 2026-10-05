import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, HeartHandshake, Truck } from 'lucide-react';
import { HERO_IMAGE } from '../data/cakes';

interface HeroProps {
  onExploreClick: () => void;
  onCustomStudioClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onCustomStudioClick }) => {
  return (
    <section id="hero" className="relative overflow-hidden pt-6 pb-16 sm:py-16 lg:py-20 border-b border-[#EAE6DF] bg-gradient-to-b from-[#FAF8F5] via-[#F8F5EF] to-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Copy */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            
            {/* Clean unboxed metadata kicker */}
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-stone-500 mb-4 font-medium">
              <span>Artisan Pâtisserie</span>
              <span aria-hidden="true">·</span>
              <span>Bespoke Cake Atelier</span>
              <span aria-hidden="true">·</span>
              <span>Est. 2018</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium text-stone-900 leading-[1.12] tracking-tight mb-6 text-balance">
              Artisanal cakes crafted for life’s rare celebrations.
            </h1>

            <p className="text-stone-600 text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
              From two-tiered botanical wedding tiers to velvety 72% Valrhona dark chocolate entremets. Handcrafted before dawn using French cultured butter, single-estate cocoa, and organic local blooms.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10">
              <button
                onClick={onExploreClick}
                className="inline-flex items-center justify-center gap-2 bg-stone-900 hover:bg-stone-800 text-white font-medium text-sm px-6 py-3.5 rounded-lg transition-all shadow-sm hover:shadow group cursor-pointer"
              >
                <span>Explore Today's Menu</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={onCustomStudioClick}
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-stone-50 text-stone-800 border border-stone-300 font-medium text-sm px-6 py-3.5 rounded-lg transition-all shadow-2xs hover:border-stone-400 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span>Bespoke Cake Studio</span>
              </button>
            </div>

            {/* Adjacent Trust Proofs */}
            <div className="pt-6 border-t border-stone-200/80 grid grid-cols-3 gap-4 text-left">
              <div>
                <p className="font-serif text-2xl font-semibold text-stone-900 tabular-nums">100%</p>
                <p className="text-xs text-stone-500 mt-0.5 leading-snug">Isigny Sainte-Mère Cultured Butter</p>
              </div>
              <div>
                <p className="font-serif text-2xl font-semibold text-stone-900 tabular-nums">48-Hr</p>
                <p className="text-xs text-stone-500 mt-0.5 leading-snug">Slow fermentation sourdough & chiffon</p>
              </div>
              <div>
                <p className="font-serif text-2xl font-semibold text-stone-900 tabular-nums">5,200+</p>
                <p className="text-xs text-stone-500 mt-0.5 leading-snug">Celebrations & weddings catered</p>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Campaign Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Decorative Frame */}
              <div className="relative overflow-hidden rounded-2xl shadow-xl border border-stone-200/90 bg-stone-100 aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] group">
                <img
                  src={HERO_IMAGE}
                  alt="Mademoiselle Flora artisanal multi-tiered celebration cake with edible pansies and gold leaf"
                  className="w-full h-full object-cover object-center transform transition duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />

                {/* Subtle soft gradient overlay at bottom for legible badge */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-stone-950/20 to-transparent pointer-events-none" />

                {/* Editorial Caption in photo bottom */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex items-end justify-between text-white">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-amber-200 font-medium">Spotlight Piece</span>
                    <h3 className="font-serif text-lg sm:text-xl font-medium mt-0.5">Mademoiselle Flora Tiered Cake</h3>
                    <p className="text-xs text-stone-300 mt-0.5">Tahitian Vanilla · Meyer Lemon Curd · Pressed Edible Violas</p>
                  </div>
                  <div className="text-right shrink-0 pl-3">
                    <span className="text-xs text-stone-300 block">From</span>
                    <span className="font-serif text-xl sm:text-2xl font-medium tabular-nums text-white">$210</span>
                  </div>
                </div>

              </div>

              {/* Floating Quality Assurance Card */}
              <div className="hidden sm:flex absolute -bottom-5 -left-5 bg-white/95 backdrop-blur-md border border-stone-200/90 rounded-xl p-3.5 shadow-lg items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-stone-900">White-Glove Cold Delivery</div>
                  <div className="text-[11px] text-stone-500">Chilled transport across the metropolitan area</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
