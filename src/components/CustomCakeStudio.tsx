import React, { useState } from 'react';
import { 
  CUSTOM_TIERS, 
  CUSTOM_SPONGES, 
  CUSTOM_FILLINGS, 
  CUSTOM_FINISHES,
  HERO_IMAGE
} from '../data/cakes';
import { CartItem } from '../types/cake';
import { Sparkles, Check, ArrowRight, ShieldCheck, Calendar, Info } from 'lucide-react';

interface CustomCakeStudioProps {
  onAddCustomCake: (item: CartItem) => void;
}

export const CustomCakeStudio: React.FC<CustomCakeStudioProps> = ({ onAddCustomCake }) => {
  const [selectedOccasion, setSelectedOccasion] = useState('Birthday Celebration');
  const [tierIndex, setTierIndex] = useState(1); // 8" Classic default
  const [spongeIndex, setSpongeIndex] = useState(0); // Vanilla default
  const [fillingIndex, setFillingIndex] = useState(0); // Swiss meringue default
  const [finishIndex, setFinishIndex] = useState(0); // Botanical default
  const [inscription, setInscription] = useState('Happy Celebration');
  const [specialInstructions, setSpecialInstructions] = useState('');
  const [confirmedAdded, setConfirmedAdded] = useState(false);

  const tier = CUSTOM_TIERS[tierIndex];
  const sponge = CUSTOM_SPONGES[spongeIndex];
  const filling = CUSTOM_FILLINGS[fillingIndex];
  const finish = CUSTOM_FINISHES[finishIndex];

  const calculatedTotal = tier.basePrice + sponge.price + filling.price + finish.price;

  // Dynamic color representations for the interactive cake schematic
  const spongeColor = spongeIndex === 1 ? '#4A2E2B' : spongeIndex === 2 ? '#8B9B7A' : spongeIndex === 3 ? '#C4A482' : '#F4ECD8';
  const fillingColor = fillingIndex === 1 ? '#C68B59' : fillingIndex === 2 ? '#F59E0B' : fillingIndex === 3 ? '#3E2723' : fillingIndex === 4 ? '#E11D48' : '#FFFDF5';

  const handleAddToCart = () => {
    const customItem: CartItem = {
      cartId: `custom-cake-${Date.now()}`,
      cakeId: 'bespoke-atelier-cake',
      name: `Bespoke ${tier.name.split('(')[0].trim()}`,
      image: HERO_IMAGE,
      size: tier.name.split('(')[0].trim(),
      servings: tier.serves,
      price: calculatedTotal,
      quantity: 1,
      topperText: inscription.trim() || undefined,
      isCustomCake: true,
      customDetails: {
        occasion: selectedOccasion,
        tier: tier.name,
        sponge: sponge.name,
        filling: filling.name,
        finish: finish.name,
        inscription: inscription.trim() || 'No inscription',
      }
    };

    onAddCustomCake(customItem);
    setConfirmedAdded(true);
    setTimeout(() => setConfirmedAdded(false), 2500);
  };

  const occasions = [
    'Wedding Reception',
    'Milestone Birthday',
    'Anniversary Gala',
    'Private Dinner Party',
    'Baby Shower',
    'Corporate Milestone'
  ];

  return (
    <section id="custom-studio" className="py-16 sm:py-24 bg-[#F5F2EB] border-b border-[#E5E0D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-stone-500 font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            <span>Crème & Crumb Bespoke Atelier</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-stone-900 tracking-tight text-balance">
            Interactive Custom Cake Studio
          </h2>
          <p className="mt-4 text-stone-600 text-sm sm:text-base leading-relaxed">
            Architect your centerpiece step-by-step. Select sizes, sponge textures, velvety fillings, and hand-piped finishes with live culinary cost transparency.
          </p>
        </div>

        {/* Studio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Visual Schematic & Live Summary */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-stone-200/90 p-6 sm:p-8 shadow-sm lg:sticky lg:top-28">
            <div className="flex items-center justify-between border-b border-stone-100 pb-4 mb-6">
              <div>
                <span className="text-xs uppercase tracking-wider text-stone-400 font-medium">Atelier Preview</span>
                <h3 className="font-serif text-xl font-medium text-stone-900 mt-0.5">
                  {selectedOccasion}
                </h3>
              </div>
              <div className="text-right">
                <span className="text-xs text-stone-400 block">Estimated Total</span>
                <span className="font-serif text-2xl font-semibold text-stone-900 tabular-nums">
                  ${calculatedTotal}
                </span>
              </div>
            </div>

            {/* Cake Architectural Visualizer */}
            <div className="relative h-64 bg-stone-50 rounded-xl border border-stone-200/80 p-4 flex flex-col items-center justify-center overflow-hidden">
              
              {/* Finish effect badge */}
              <div className="absolute top-3 left-3 bg-stone-900/80 text-stone-100 text-[11px] font-medium px-2 py-0.5 rounded">
                Finish: {finish.name.split('&')[0]}
              </div>

              {/* Inscription Preview */}
              {inscription && (
                <div className="absolute bottom-3 bg-amber-50 border border-amber-200/80 text-amber-900 font-serif italic text-xs px-3 py-1 rounded-md shadow-xs max-w-[85%] truncate text-center">
                  "{inscription}"
                </div>
              )}

              {/* Dynamic Tier Geometry */}
              <div className="flex flex-col items-center justify-center transition-all duration-500">
                {/* Top Tier (for 3-tier) */}
                {tierIndex === 3 && (
                  <div 
                    className="w-16 h-8 rounded-t-md border border-stone-300 shadow-xs flex items-center justify-center transition-all duration-300"
                    style={{ backgroundColor: spongeColor }}
                  >
                    <div className="w-full h-1" style={{ backgroundColor: fillingColor }} />
                  </div>
                )}

                {/* Middle Tier (for 2-tier and 3-tier) */}
                {(tierIndex === 2 || tierIndex === 3) && (
                  <div 
                    className="w-28 h-10 rounded-t-md border border-stone-300 shadow-xs flex items-center justify-center transition-all duration-300 -mt-0.5"
                    style={{ backgroundColor: spongeColor }}
                  >
                    <div className="w-full h-1.5" style={{ backgroundColor: fillingColor }} />
                  </div>
                )}

                {/* Base Tier (always visible) */}
                <div 
                  className={`rounded-t-md border border-stone-300 shadow-md flex flex-col justify-around transition-all duration-300 p-1 -mt-0.5 ${
                    tierIndex === 0 ? 'w-28 h-14' : tierIndex === 1 ? 'w-36 h-16' : 'w-44 h-16'
                  }`}
                  style={{ backgroundColor: spongeColor }}
                >
                  <div className="w-full h-1.5 rounded-full" style={{ backgroundColor: fillingColor }} />
                  <div className="w-full h-1.5 rounded-full" style={{ backgroundColor: fillingColor }} />
                </div>

                {/* Porcelain Cake Stand Base */}
                <div className="w-48 sm:w-56 h-2 bg-stone-300 rounded-full shadow-xs -mt-0.5" />
                <div className="w-16 h-3 bg-stone-300 rounded-b-md shadow-inner" />
              </div>

            </div>

            {/* Spec Breakdown */}
            <div className="mt-6 space-y-2.5 text-xs text-stone-600 border-t border-stone-100 pt-4">
              <div className="flex justify-between items-center">
                <span className="text-stone-500">Dimension & Servings</span>
                <span className="font-medium text-stone-900">{tier.name.split('(')[0]} · {tier.serves}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-stone-500">Sponge Flavor</span>
                <span className="font-medium text-stone-900">{sponge.name}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-stone-500">Crème & Filling</span>
                <span className="font-medium text-stone-900">{filling.name}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-stone-500">Artisanal Finish</span>
                <span className="font-medium text-stone-900">{finish.name}</span>
              </div>
            </div>

            {/* Order Bespoke CTA */}
            <div className="mt-6">
              <button
                type="button"
                onClick={handleAddToCart}
                disabled={confirmedAdded}
                className={`w-full py-3.5 px-4 rounded-xl font-medium text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  confirmedAdded
                    ? 'bg-emerald-700 text-white'
                    : 'bg-stone-900 hover:bg-stone-800 text-white shadow-sm'
                }`}
              >
                {confirmedAdded ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Added Bespoke Cake to Bag</span>
                  </>
                ) : (
                  <>
                    <span>Add Bespoke Cake to Order</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono tabular-nums">${calculatedTotal}</span>
                  </>
                )}
              </button>
              <p className="text-[11px] text-center text-stone-500 mt-2">
                Requires 48-hr pastry kitchen lead time · Free refrigerated local collection
              </p>
            </div>

          </div>

          {/* Right Column: Step-by-Step Customization Panel */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Step 1: Occasion */}
            <div className="bg-white rounded-2xl border border-stone-200/90 p-6 shadow-2xs">
              <div className="flex items-center gap-2 mb-4">
                <span className="font-serif text-lg font-semibold text-stone-900">01.</span>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-stone-900">
                  Select Occasion
                </h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {occasions.map((occ) => (
                  <button
                    key={occ}
                    type="button"
                    onClick={() => setSelectedOccasion(occ)}
                    className={`text-xs p-3 rounded-lg border text-left transition-colors cursor-pointer ${
                      selectedOccasion === occ
                        ? 'border-stone-900 bg-stone-900 text-white font-medium'
                        : 'border-stone-200 hover:border-stone-300 text-stone-700 bg-stone-50/50'
                    }`}
                  >
                    {occ}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Tier & Dimension */}
            <div className="bg-white rounded-2xl border border-stone-200/90 p-6 shadow-2xs">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="font-serif text-lg font-semibold text-stone-900">02.</span>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-stone-900">
                    Tier & Serving Size
                  </h3>
                </div>
                <span className="text-xs text-stone-500">Base pricing included</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {CUSTOM_TIERS.map((tierOpt, idx) => (
                  <button
                    key={tierOpt.id}
                    type="button"
                    onClick={() => setTierIndex(idx)}
                    className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                      tierIndex === idx
                        ? 'border-stone-900 bg-stone-50 ring-1 ring-stone-900 shadow-2xs'
                        : 'border-stone-200 hover:border-stone-300 bg-white'
                    }`}
                  >
                    <div className="flex justify-between items-baseline">
                      <span className="font-semibold text-stone-900 text-xs sm:text-sm">
                        {tierOpt.name.split('(')[0]}
                      </span>
                      <span className="font-serif font-semibold text-stone-900 tabular-nums text-sm">
                        ${tierOpt.basePrice}
                      </span>
                    </div>
                    <div className="text-xs text-stone-500 mt-1">
                      {tierOpt.serves}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Base Sponge Flavor */}
            <div className="bg-white rounded-2xl border border-stone-200/90 p-6 shadow-2xs">
              <div className="flex items-center gap-2 mb-4">
                <span className="font-serif text-lg font-semibold text-stone-900">03.</span>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-stone-900">
                  Base Sponge Flavor
                </h3>
              </div>
              <div className="space-y-2">
                {CUSTOM_SPONGES.map((spg, idx) => (
                  <button
                    key={spg.id}
                    type="button"
                    onClick={() => setSpongeIndex(idx)}
                    className={`w-full p-3 rounded-lg border text-left flex items-center justify-between transition-all cursor-pointer ${
                      spongeIndex === idx
                        ? 'border-stone-900 bg-stone-50 ring-1 ring-stone-900'
                        : 'border-stone-200 hover:border-stone-300 bg-white'
                    }`}
                  >
                    <div>
                      <div className="text-xs sm:text-sm font-semibold text-stone-900">
                        {spg.name}
                      </div>
                      <div className="text-xs text-stone-500 mt-0.5">
                        {spg.desc}
                      </div>
                    </div>
                    <div className="font-serif text-xs sm:text-sm font-medium text-stone-700 tabular-nums shrink-0 ml-3">
                      {spg.price === 0 ? 'Included' : `+$${spg.price}`}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Layer Filling & Buttercream */}
            <div className="bg-white rounded-2xl border border-stone-200/90 p-6 shadow-2xs">
              <div className="flex items-center gap-2 mb-4">
                <span className="font-serif text-lg font-semibold text-stone-900">04.</span>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-stone-900">
                  Layer Filling & Crème
                </h3>
              </div>
              <div className="space-y-2">
                {CUSTOM_FILLINGS.map((fill, idx) => (
                  <button
                    key={fill.id}
                    type="button"
                    onClick={() => setFillingIndex(idx)}
                    className={`w-full p-3 rounded-lg border text-left flex items-center justify-between transition-all cursor-pointer ${
                      fillingIndex === idx
                        ? 'border-stone-900 bg-stone-50 ring-1 ring-stone-900'
                        : 'border-stone-200 hover:border-stone-300 bg-white'
                    }`}
                  >
                    <div>
                      <div className="text-xs sm:text-sm font-semibold text-stone-900">
                        {fill.name}
                      </div>
                      <div className="text-xs text-stone-500 mt-0.5">
                        {fill.desc}
                      </div>
                    </div>
                    <div className="font-serif text-xs sm:text-sm font-medium text-stone-700 tabular-nums shrink-0 ml-3">
                      {fill.price === 0 ? 'Included' : `+$${fill.price}`}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 5: Exterior Finish & Decoration */}
            <div className="bg-white rounded-2xl border border-stone-200/90 p-6 shadow-2xs">
              <div className="flex items-center gap-2 mb-4">
                <span className="font-serif text-lg font-semibold text-stone-900">05.</span>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-stone-900">
                  Artisanal Exterior Decor
                </h3>
              </div>
              <div className="space-y-2">
                {CUSTOM_FINISHES.map((fin, idx) => (
                  <button
                    key={fin.id}
                    type="button"
                    onClick={() => setFinishIndex(idx)}
                    className={`w-full p-3 rounded-lg border text-left flex items-center justify-between transition-all cursor-pointer ${
                      finishIndex === idx
                        ? 'border-stone-900 bg-stone-50 ring-1 ring-stone-900'
                        : 'border-stone-200 hover:border-stone-300 bg-white'
                    }`}
                  >
                    <div>
                      <div className="text-xs sm:text-sm font-semibold text-stone-900">
                        {fin.name}
                      </div>
                      <div className="text-xs text-stone-500 mt-0.5">
                        {fin.desc}
                      </div>
                    </div>
                    <div className="font-serif text-xs sm:text-sm font-medium text-stone-700 tabular-nums shrink-0 ml-3">
                      +${fin.price}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 6: Inscription & Baker's Note */}
            <div className="bg-white rounded-2xl border border-stone-200/90 p-6 shadow-2xs space-y-4">
              <div className="flex items-center gap-2">
                <span className="font-serif text-lg font-semibold text-stone-900">06.</span>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-stone-900">
                  Custom Plaque & Dietary Notes
                </h3>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Chocolate Plaque Message (Piped in cursive gold or dark cocoa)
                </label>
                <input
                  type="text"
                  maxLength={40}
                  value={inscription}
                  onChange={(e) => setInscription(e.target.value)}
                  placeholder="e.g. Congratulations Claire & David!"
                  className="w-full text-xs sm:text-sm px-3.5 py-2.5 border border-stone-300 rounded-lg focus:outline-none focus:border-stone-900 bg-stone-50/50"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Dietary Restrictions or Special Chef Requests
                </label>
                <textarea
                  rows={2}
                  value={specialInstructions}
                  onChange={(e) => setSpecialInstructions(e.target.value)}
                  placeholder="e.g. Nut allergy for 2 guests; please package separately..."
                  className="w-full text-xs sm:text-sm px-3.5 py-2.5 border border-stone-300 rounded-lg focus:outline-none focus:border-stone-900 bg-stone-50/50 resize-none"
                />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
