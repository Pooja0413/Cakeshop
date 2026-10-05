import React, { useState } from 'react';
import { CakeItem, CartItem } from '../types/cake';
import { X, Check, Sparkles, Coffee, AlertCircle, Calendar, Plus, Minus } from 'lucide-react';

interface ProductModalProps {
  cake: CakeItem | null;
  onClose: () => void;
  onAddToCart: (item: CartItem) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ cake, onClose, onAddToCart }) => {
  if (!cake) return null;

  const [selectedSizeIndex, setSelectedSizeIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [topperText, setTopperText] = useState('');
  const [candlesCount, setCandlesCount] = useState<number>(0);
  const [customGiftNote, setCustomGiftNote] = useState('');
  const [activeTab, setActiveTab] = useState<'details' | 'ingredients' | 'pairing'>('details');
  const [addedNotice, setAddedNotice] = useState(false);

  const currentSize = cake.availableSizes[selectedSizeIndex] || cake.availableSizes[0];
  const unitPrice = currentSize.price;
  const totalPrice = unitPrice * quantity;

  const handleAdd = () => {
    const newItem: CartItem = {
      cartId: `${cake.id}-${currentSize.size}-${Date.now()}`,
      cakeId: cake.id,
      name: cake.name,
      image: cake.image,
      size: currentSize.size,
      servings: currentSize.servings,
      price: unitPrice,
      quantity,
      topperText: topperText.trim() || undefined,
      candlesCount: candlesCount > 0 ? candlesCount : undefined,
      customGiftNote: customGiftNote.trim() || undefined,
    };

    onAddToCart(newItem);
    setAddedNotice(true);
    setTimeout(() => {
      setAddedNotice(false);
      onClose();
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative bg-white w-full max-w-4xl rounded-2xl shadow-2xl border border-stone-200 overflow-hidden flex flex-col md:flex-row my-auto max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 hover:bg-white text-stone-600 hover:text-stone-950 border border-stone-200 shadow-sm transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Column: Visual Media & Story */}
        <div className="md:w-1/2 bg-stone-100 flex flex-col justify-between overflow-hidden">
          <div className="relative aspect-[4/3] md:aspect-auto md:h-full min-h-[260px] md:min-h-[380px]">
            <img
              src={cake.image}
              alt={cake.name}
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent md:hidden" />
            
            <div className="absolute bottom-4 left-4 right-4 md:hidden text-white">
              <span className="text-[11px] uppercase tracking-wider text-amber-300 font-medium">
                {cake.categoryLabel}
              </span>
              <h2 className="font-serif text-2xl font-medium">{cake.name}</h2>
            </div>
          </div>

          {/* Quick Lead Time Bar */}
          <div className="p-4 bg-stone-900 text-stone-200 text-xs flex items-center justify-between border-t border-stone-800">
            <span className="flex items-center gap-1.5 text-stone-300">
              <Calendar className="w-3.5 h-3.5 text-amber-400" />
              <span>{cake.leadTime}</span>
            </span>
            <span className="text-stone-400">Handcrafted in Marais Atelier</span>
          </div>
        </div>

        {/* Right Column: Contiguous Purchase Module */}
        <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto max-h-[85vh] md:max-h-none">
          <div>
            <div className="hidden md:flex items-center gap-2 text-xs text-stone-500 uppercase tracking-wider font-medium mb-1">
              <span>{cake.categoryLabel}</span>
              <span aria-hidden="true">·</span>
              <span>{currentSize.servings}</span>
            </div>

            <h2 className="hidden md:block font-serif text-2xl sm:text-3xl font-medium text-stone-900 tracking-tight">
              {cake.name}
            </h2>

            {/* Price Row */}
            <div className="mt-2 mb-4 flex items-baseline gap-3">
              <span className="font-serif text-3xl font-semibold text-stone-900 tabular-nums">
                ${totalPrice}
              </span>
              {quantity > 1 && (
                <span className="text-xs text-stone-500 tabular-nums">
                  (${unitPrice} each)
                </span>
              )}
            </div>

            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-6">
              {cake.description}
            </p>

            {/* Tabs for details */}
            <div className="flex border-b border-stone-200 mb-5 text-xs font-medium">
              <button
                onClick={() => setActiveTab('details')}
                className={`pb-2 px-3 border-b-2 transition-colors cursor-pointer ${
                  activeTab === 'details'
                    ? 'border-stone-900 text-stone-900 font-semibold'
                    : 'border-transparent text-stone-500 hover:text-stone-800'
                }`}
              >
                Customization
              </button>
              <button
                onClick={() => setActiveTab('ingredients')}
                className={`pb-2 px-3 border-b-2 transition-colors cursor-pointer ${
                  activeTab === 'ingredients'
                    ? 'border-stone-900 text-stone-900 font-semibold'
                    : 'border-transparent text-stone-500 hover:text-stone-800'
                }`}
              >
                Ingredients & Allergens
              </button>
              {cake.pairing && (
                <button
                  onClick={() => setActiveTab('pairing')}
                  className={`pb-2 px-3 border-b-2 transition-colors cursor-pointer ${
                    activeTab === 'pairing'
                      ? 'border-stone-900 text-stone-900 font-semibold'
                      : 'border-transparent text-stone-500 hover:text-stone-800'
                  }`}
                >
                  Sommelier Pairing
                </button>
              )}
            </div>

            {/* Tab: Customization */}
            {activeTab === 'details' && (
              <div className="space-y-4">
                {/* Size Selection */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-2">
                    Select Cake Dimension
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {cake.availableSizes.map((sizeOpt, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setSelectedSizeIndex(idx)}
                        className={`text-left p-2.5 rounded-lg border text-xs transition-all cursor-pointer ${
                          selectedSizeIndex === idx
                            ? 'border-stone-900 bg-stone-50 ring-1 ring-stone-900'
                            : 'border-stone-200 hover:border-stone-300 bg-white'
                        }`}
                      >
                        <div className="font-semibold text-stone-900">{sizeOpt.size}</div>
                        <div className="text-[11px] text-stone-500">{sizeOpt.servings}</div>
                        <div className="font-serif font-medium text-stone-900 mt-1 tabular-nums">${sizeOpt.price}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Hand-piped Inscription */}
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1 flex items-center justify-between">
                    <span>Complimentary Chocolate Plaque Inscription</span>
                    <span className="text-[11px] font-normal text-stone-400">Max 30 chars</span>
                  </label>
                  <input
                    type="text"
                    maxLength={30}
                    value={topperText}
                    onChange={(e) => setTopperText(e.target.value)}
                    placeholder="e.g., Happy 30th Birthday Noah!"
                    className="w-full text-xs px-3 py-2 border border-stone-200 rounded-lg focus:outline-none focus:border-stone-700 bg-stone-50/50"
                  />
                </div>

                {/* Celebration Candles */}
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Artisanal Beeswax Taper Candles
                  </label>
                  <div className="flex gap-2">
                    {[0, 1, 6, 12].map((num) => (
                      <button
                        key={num}
                        type="button"
                        onClick={() => setCandlesCount(num)}
                        className={`px-3 py-1.5 rounded-md text-xs border cursor-pointer transition-colors ${
                          candlesCount === num
                            ? 'bg-stone-900 text-white border-stone-900'
                            : 'bg-white text-stone-700 border-stone-200 hover:border-stone-300'
                        }`}
                      >
                        {num === 0 ? 'None' : `${num} Candles`}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Gift Note */}
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Calligraphy Gift Card Note (Optional)
                  </label>
                  <textarea
                    rows={2}
                    value={customGiftNote}
                    onChange={(e) => setCustomGiftNote(e.target.value)}
                    placeholder="Handwritten letter included with order..."
                    className="w-full text-xs px-3 py-2 border border-stone-200 rounded-lg focus:outline-none focus:border-stone-700 bg-stone-50/50 resize-none"
                  />
                </div>
              </div>
            )}

            {/* Tab: Ingredients & Allergens */}
            {activeTab === 'ingredients' && (
              <div className="space-y-4 text-xs">
                <div>
                  <h4 className="font-semibold text-stone-800 uppercase tracking-wider text-[11px] mb-1.5">
                    Noble Sourced Ingredients
                  </h4>
                  <p className="text-stone-600 leading-relaxed">
                    {cake.ingredients.join(', ')}
                  </p>
                </div>

                <div className="p-3 bg-amber-50/80 border border-amber-200/70 rounded-lg">
                  <div className="flex items-center gap-1.5 font-semibold text-amber-900 text-xs mb-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>Allergen Transparency</span>
                  </div>
                  <p className="text-amber-800 text-[11px]">
                    Contains: {cake.allergens.join(', ')}. Prepared in an atelier that processes nuts, wheat, dairy, and eggs.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-stone-800 uppercase tracking-wider text-[11px] mb-1.5">
                    Storage & Serving Care
                  </h4>
                  <p className="text-stone-600 leading-relaxed">
                    {cake.careInstructions}
                  </p>
                </div>
              </div>
            )}

            {/* Tab: Pairing */}
            {activeTab === 'pairing' && cake.pairing && (
              <div className="space-y-3 p-4 bg-stone-50 rounded-xl border border-stone-200 text-xs">
                <div className="flex items-center gap-2 text-stone-900 font-semibold">
                  <Coffee className="w-4 h-4 text-amber-700" />
                  <span>Recommended Beverage Pairing</span>
                </div>
                <div className="font-medium text-stone-800 text-sm">
                  {cake.pairing.beverage}
                </div>
                <p className="text-stone-600 text-xs leading-relaxed">
                  {cake.pairing.notes}
                </p>
              </div>
            )}

          </div>

          {/* Sticky Bottom Purchase Actions */}
          <div className="pt-6 mt-6 border-t border-stone-200 flex items-center gap-3">
            {/* Quantity Stepper */}
            <div className="flex items-center border border-stone-200 rounded-lg bg-stone-50 px-1 py-0.5">
              <button
                type="button"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-1.5 text-stone-600 hover:text-stone-950 transition-colors cursor-pointer"
                aria-label="Decrease quantity"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <span className="w-8 text-center text-xs font-semibold tabular-nums text-stone-800">
                {quantity}
              </span>
              <button
                type="button"
                onClick={() => setQuantity(quantity + 1)}
                className="p-1.5 text-stone-600 hover:text-stone-950 transition-colors cursor-pointer"
                aria-label="Increase quantity"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Add to Bag Button */}
            <button
              onClick={handleAdd}
              disabled={addedNotice}
              className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-medium text-xs sm:text-sm transition-all cursor-pointer ${
                addedNotice
                  ? 'bg-emerald-700 text-white'
                  : 'bg-stone-900 hover:bg-stone-800 text-white shadow-sm'
              }`}
            >
              {addedNotice ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Added to Order Bag</span>
                </>
              ) : (
                <>
                  <span>Add to Order Bag</span>
                  <span aria-hidden="true">·</span>
                  <span className="font-mono tabular-nums">${totalPrice}</span>
                </>
              )}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
