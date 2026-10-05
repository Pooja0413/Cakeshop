import React, { useState } from 'react';
import { GlassWater, Coffee, Sparkles, Utensils, Thermometer, Flame } from 'lucide-react';

export const FlavorPairingGuide: React.FC = () => {
  const [activeFlavor, setActiveFlavor] = useState<'valrhona' | 'pistachio' | 'earl-grey' | 'berries'>('valrhona');

  const pairingData = {
    valrhona: {
      title: '72% Single-Estate Valrhona Cacao',
      profile: 'Intense roasted nib aromatics, caramelized butter, and deep earthy undertones with low sweetness.',
      beverage: 'Vintage Tawny Port or Natural Process Ethiopian Yirgacheffe Coffee',
      whyItWorks: 'The stone fruit acidity in natural Ethiopian coffee cuts cleanly through the unctuous cocoa butter, while fortified wine echoes the raisin and dried plum notes of the Guanaja chocolate.',
      idealTemp: 'Room Temperature (68°F / 20°C) — allow 45 minutes on counter before slicing.',
      knifeTip: 'Dip blade in hot water, wipe completely dry with a clean linen cloth between every single cut.'
    },
    pistachio: {
      title: 'Pure Bronte Pistachio & Wild Alpine Berries',
      profile: 'Dense, savory-sweet nuttiness balanced by sharp pectin-rich mountain raspberry acidity.',
      beverage: 'Brut Blanc de Blancs Champagne or Ceremonial Grade Uji Matcha',
      whyItWorks: 'The chalky minerality and vibrant fine bead of 100% Chardonnay champagne cleanse the palate between rich bites of emerald pistachio cream.',
      idealTemp: 'Cool Cellar Temperature (55°F / 13°C) — serve directly from chilling 10 mins prior.',
      knifeTip: 'Use a long serrated confectioner’s knife in gentle sawing motions to preserve the airy dacquoise.'
    },
    'earl-grey': {
      title: 'Whole-Leaf Earl Grey & Organic French Lavender',
      profile: 'Floral citrus bergamot peel oil, subtle tannin backbone, and fragrant Provencal floral top-notes.',
      beverage: 'First-Flush Darjeeling Tea or Lavender Honey Oat Milk Cordial',
      whyItWorks: 'Delicate muscatel grape notes in first-flush Darjeeling harmoniously amplify the Italian bergamot without masking the whisper of floral lavender.',
      idealTemp: 'Gentle Room Ambient (65°F / 18°C) — softens the Swiss meringue buttercream to cloud texture.',
      knifeTip: 'Slice vertically without dragging sideways to maintain crisp Lambeth border ruffles.'
    },
    berries: {
      title: 'Tahitian Vanilla & Glazed Summer Berries',
      profile: 'Woody, floral vanilla bean caviar, golden butter sable crunch, and sweet-tart berry compote.',
      beverage: 'Sparkling Loire Valley Chenin Blanc or White Jasmine Silver Needle Tea',
      whyItWorks: 'High natural orchard acidity in Chenin Blanc sharpens the butterfat in the custard, providing a refreshing finish.',
      idealTemp: 'Chilled (42°F / 6°C) — keeps the vanilla bean pastry cream firm and pristine.',
      knifeTip: 'Warm thin chef’s knife pressed directly downward through the crisp fruit topping.'
    }
  };

  const current = pairingData[activeFlavor];

  return (
    <section id="flavor-pairings" className="py-16 sm:py-20 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-stone-500 font-semibold mb-3">
            <GlassWater className="w-3.5 h-3.5 text-amber-700" />
            <span>Pastry Sommelier Guide</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium text-stone-900 tracking-tight text-balance">
            Flavor Architecture & Beverage Pairings
          </h2>
          <p className="mt-3 text-stone-600 text-xs sm:text-sm leading-relaxed">
            Every creation is engineered with balancing acidity, fat, and aroma. Explore our head pastry chef’s recommended pairings and presentation ritual.
          </p>
        </div>

        {/* Flavor Selector Tabs */}
        <div className="flex justify-center mb-10 overflow-x-auto pb-2">
          <div className="inline-flex bg-stone-100 p-1.5 rounded-xl border border-stone-200 text-xs font-medium">
            <button
              onClick={() => setActiveFlavor('valrhona')}
              className={`px-4 py-2 rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeFlavor === 'valrhona'
                  ? 'bg-stone-900 text-white shadow-xs font-semibold'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Valrhona Dark Ganache
            </button>
            <button
              onClick={() => setActiveFlavor('pistachio')}
              className={`px-4 py-2 rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeFlavor === 'pistachio'
                  ? 'bg-stone-900 text-white shadow-xs font-semibold'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Bronte Pistachio & Raspberry
            </button>
            <button
              onClick={() => setActiveFlavor('earl-grey')}
              className={`px-4 py-2 rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeFlavor === 'earl-grey'
                  ? 'bg-stone-900 text-white shadow-xs font-semibold'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Bergamot & Lavender
            </button>
            <button
              onClick={() => setActiveFlavor('berries')}
              className={`px-4 py-2 rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeFlavor === 'berries'
                  ? 'bg-stone-900 text-white shadow-xs font-semibold'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Tahitian Vanilla & Berries
            </button>
          </div>
        </div>

        {/* Pairing Display Card */}
        <div className="bg-[#FAF8F5] rounded-2xl border border-stone-200/90 p-6 sm:p-10 shadow-2xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Flavor Profile */}
            <div className="lg:col-span-6 space-y-5">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-amber-800 font-semibold">
                  Palate Profile
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-medium text-stone-900 mt-1">
                  {current.title}
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed mt-2">
                  {current.profile}
                </p>
              </div>

              {/* Slicing & Storage Ritual */}
              <div className="pt-4 border-t border-stone-200/80 space-y-3 text-xs">
                <div className="flex items-start gap-3">
                  <Thermometer className="w-4 h-4 text-stone-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-stone-900">Serving Temperature: </span>
                    <span className="text-stone-600">{current.idealTemp}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Utensils className="w-4 h-4 text-stone-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-stone-900">Pastry Chef’s Slicing Technique: </span>
                    <span className="text-stone-600">{current.knifeTip}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Beverage Match */}
            <div className="lg:col-span-6 bg-white rounded-xl border border-stone-200 p-6 sm:p-7 shadow-xs space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-800">
                <Coffee className="w-4 h-4" />
                <span>Curated Beverage Partner</span>
              </div>

              <div className="font-serif text-xl sm:text-2xl font-medium text-stone-900">
                {current.beverage}
              </div>

              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                {current.whyItWorks}
              </p>

              <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                <span>Available for tasting in our salon</span>
                <span className="font-medium text-stone-800">Complimentary consultation</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
