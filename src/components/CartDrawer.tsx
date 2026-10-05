import React, { useState } from 'react';
import { CartItem } from '../types/cake';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, Truck, Store, Calendar, Sparkles } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (cartId: string, delta: number) => void;
  onRemoveItem: (cartId: string) => void;
  onProceedToCheckout: (options: {
    fulfillmentType: 'pickup' | 'delivery';
    date: string;
    timeSlot: string;
    giftNote: string;
  }) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout,
}) => {
  const [fulfillmentType, setFulfillmentType] = useState<'pickup' | 'delivery'>('pickup');
  const [selectedDate, setSelectedDate] = useState('Tomorrow');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('Afternoon (1:00 PM - 4:00 PM)');
  const [orderGiftNote, setOrderGiftNote] = useState('');

  if (!isOpen) return null;

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const deliveryFee = fulfillmentType === 'delivery' ? 15 : 0;
  const tax = Math.round(subtotal * 0.08 * 100) / 100;
  const total = subtotal + deliveryFee + tax;

  const handleCheckoutClick = () => {
    onProceedToCheckout({
      fulfillmentType,
      date: selectedDate,
      timeSlot: selectedTimeSlot,
      giftNote: orderGiftNote,
    });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-stone-900/60 backdrop-blur-xs flex justify-end animate-in fade-in duration-200">
      <div 
        className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between overflow-hidden border-l border-stone-200 animate-in slide-in-from-right duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Drawer Header */}
        <div className="p-5 border-b border-stone-200 flex items-center justify-between bg-[#FAF8F5]">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-stone-900" />
            <h2 className="font-serif text-xl font-medium text-stone-900">
              Your Order Bag
            </h2>
            <span className="text-xs font-mono tabular-nums bg-stone-200/80 text-stone-800 px-2 py-0.5 rounded-full">
              {cart.reduce((a, b) => a + b.quantity, 0)}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-stone-500 hover:text-stone-900 hover:bg-stone-200/50 transition-colors cursor-pointer"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Body */}
        <div className="flex-1 overflow-y-auto p-5 space-y-6">
          {cart.length === 0 ? (
            <div className="py-16 text-center text-stone-500 space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-stone-100 flex items-center justify-center text-stone-400">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <p className="font-serif text-lg text-stone-800">Your bag is currently empty</p>
              <p className="text-xs max-w-xs mx-auto text-stone-500">
                Select one of our signature cakes or architect a custom milestone piece in the Bespoke Studio.
              </p>
              <button
                onClick={onClose}
                className="mt-2 text-xs font-semibold uppercase tracking-wider text-amber-900 underline underline-offset-4 cursor-pointer"
              >
                Browse Cake Menu
              </button>
            </div>
          ) : (
            <>
              {/* Itemized List */}
              <div className="space-y-4">
                {cart.map((item) => (
                  <div 
                    key={item.cartId}
                    className="p-3.5 bg-stone-50 rounded-xl border border-stone-200/80 flex gap-3 relative"
                  >
                    {/* Thumbnail */}
                    <div className="w-18 h-18 rounded-lg overflow-hidden bg-stone-200 shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0 pr-6">
                      <div className="flex items-center gap-1.5">
                        {item.isCustomCake && (
                          <span className="text-[10px] bg-amber-100 text-amber-900 px-1.5 py-0.5 rounded font-medium">
                            Bespoke
                          </span>
                        )}
                        <h4 className="font-serif text-sm font-medium text-stone-900 truncate">
                          {item.name}
                        </h4>
                      </div>

                      <div className="text-[11px] text-stone-500 mt-0.5">
                        {item.size} · {item.servings}
                      </div>

                      {item.topperText && (
                        <div className="text-[11px] text-stone-600 italic mt-0.5 truncate">
                          "{item.topperText}"
                        </div>
                      )}

                      <div className="mt-2 flex items-center justify-between">
                        {/* Stepper */}
                        <div className="flex items-center border border-stone-300 rounded bg-white px-1">
                          <button
                            type="button"
                            onClick={() => onUpdateQuantity(item.cartId, -1)}
                            className="p-1 text-stone-500 hover:text-stone-900 cursor-pointer"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-6 text-center text-xs font-semibold tabular-nums text-stone-800">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => onUpdateQuantity(item.cartId, 1)}
                            className="p-1 text-stone-500 hover:text-stone-900 cursor-pointer"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        {/* Price */}
                        <span className="font-serif text-sm font-semibold text-stone-900 tabular-nums">
                          ${item.price * item.quantity}
                        </span>
                      </div>
                    </div>

                    {/* Remove button */}
                    <button
                      type="button"
                      onClick={() => onRemoveItem(item.cartId)}
                      className="absolute top-3 right-3 text-stone-400 hover:text-rose-600 p-1 cursor-pointer transition-colors"
                      title="Remove item"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>

              {/* Fulfillment Option */}
              <div className="pt-2 border-t border-stone-200">
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-2">
                  Fulfillment Method
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setFulfillmentType('pickup')}
                    className={`p-2.5 rounded-lg border text-left text-xs transition-all cursor-pointer flex items-center gap-2 ${
                      fulfillmentType === 'pickup'
                        ? 'border-stone-900 bg-stone-50 font-semibold text-stone-900 ring-1 ring-stone-900'
                        : 'border-stone-200 text-stone-600 bg-white hover:border-stone-300'
                    }`}
                  >
                    <Store className="w-4 h-4 text-stone-700" />
                    <div>
                      <div>Studio Pickup</div>
                      <div className="text-[10px] text-stone-500 font-normal">Free · Marais Atelier</div>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFulfillmentType('delivery')}
                    className={`p-2.5 rounded-lg border text-left text-xs transition-all cursor-pointer flex items-center gap-2 ${
                      fulfillmentType === 'delivery'
                        ? 'border-stone-900 bg-stone-50 font-semibold text-stone-900 ring-1 ring-stone-900'
                        : 'border-stone-200 text-stone-600 bg-white hover:border-stone-300'
                    }`}
                  >
                    <Truck className="w-4 h-4 text-stone-700" />
                    <div>
                      <div>Chilled Courier</div>
                      <div className="text-[10px] text-stone-500 font-normal">+$15 · Hand delivered</div>
                    </div>
                  </button>
                </div>
              </div>

              {/* Date & Time Slot */}
              <div className="space-y-2.5 text-xs">
                <div className="flex items-center gap-1.5 font-semibold text-stone-800">
                  <Calendar className="w-3.5 h-3.5 text-amber-700" />
                  <span>Scheduled Preparation Window</span>
                </div>
                
                <div className="grid grid-cols-3 gap-1.5">
                  {['Today (4-hr)', 'Tomorrow', 'This Weekend'].map((d) => (
                    <button
                      key={d}
                      type="button"
                      onClick={() => setSelectedDate(d)}
                      className={`py-1.5 px-2 rounded border text-center text-[11px] transition-colors cursor-pointer ${
                        selectedDate === d
                          ? 'bg-stone-900 text-white border-stone-900 font-medium'
                          : 'bg-white text-stone-700 border-stone-200 hover:border-stone-300'
                      }`}
                    >
                      {d}
                    </button>
                  ))}
                </div>

                <select
                  value={selectedTimeSlot}
                  onChange={(e) => setSelectedTimeSlot(e.target.value)}
                  className="w-full text-xs p-2 border border-stone-300 rounded-lg bg-white text-stone-800 focus:outline-none focus:border-stone-800"
                >
                  <option value="Morning (10:00 AM - 1:00 PM)">Morning (10:00 AM - 1:00 PM)</option>
                  <option value="Afternoon (1:00 PM - 4:00 PM)">Afternoon (1:00 PM - 4:00 PM)</option>
                  <option value="Evening (4:00 PM - 7:30 PM)">Evening (4:00 PM - 7:30 PM)</option>
                </select>
              </div>

              {/* Complimentary Hand-Written Gift Card */}
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Complimentary Calligraphy Note (Optional)
                </label>
                <textarea
                  rows={2}
                  value={orderGiftNote}
                  onChange={(e) => setOrderGiftNote(e.target.value)}
                  placeholder="Enclosed in an envelope with wax seal..."
                  className="w-full text-xs p-2.5 border border-stone-200 rounded-lg focus:outline-none focus:border-stone-800 bg-stone-50/50 resize-none"
                />
              </div>
            </>
          )}
        </div>

        {/* Drawer Footer / Subtotal & Checkout */}
        {cart.length > 0 && (
          <div className="p-5 border-t border-stone-200 bg-[#FAF8F5] space-y-3">
            <div className="space-y-1.5 text-xs text-stone-600">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-mono tabular-nums font-medium text-stone-900">${subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span>{fulfillmentType === 'delivery' ? 'Chilled Transit Delivery' : 'Atelier Pickup'}</span>
                <span className="font-mono tabular-nums text-stone-900">
                  {deliveryFee === 0 ? 'Free' : `$${deliveryFee}`}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Estimated Tax (8%)</span>
                <span className="font-mono tabular-nums text-stone-900">${tax}</span>
              </div>
              <div className="flex justify-between text-sm font-semibold text-stone-900 pt-2 border-t border-stone-200">
                <span>Estimated Total</span>
                <span className="font-serif text-lg font-semibold tabular-nums">${total.toFixed(2)}</span>
              </div>
            </div>

            <button
              onClick={handleCheckoutClick}
              className="w-full bg-stone-900 hover:bg-stone-800 text-white font-medium text-xs sm:text-sm py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm"
            >
              <span>Proceed to Checkout</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
