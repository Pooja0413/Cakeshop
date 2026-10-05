import React, { useState } from 'react';
import { CartItem, OrderDetails } from '../types/cake';
import { X, CheckCircle, ShieldCheck, CreditCard, Sparkles, MapPin, Phone, User, Mail, Calendar, Clock, ArrowRight } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  fulfillmentType: 'pickup' | 'delivery';
  scheduledDate: string;
  timeSlot: string;
  giftNote: string;
  onOrderSuccess: (order: OrderDetails) => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  cart,
  fulfillmentType,
  scheduledDate,
  timeSlot,
  giftNote,
  onOrderSuccess,
}) => {
  const [customerName, setCustomerName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [zip, setZip] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'apple_pay' | 'pay_on_pickup'>('card');
  const [isProcessing, setIsProcessing] = useState(false);
  const [completedOrder, setCompletedOrder] = useState<OrderDetails | null>(null);

  if (!isOpen) return null;

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const deliveryFee = fulfillmentType === 'delivery' ? 15 : 0;
  const tax = Math.round(subtotal * 0.08 * 100) / 100;
  const total = subtotal + deliveryFee + tax;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !email || !phone) return;
    if (fulfillmentType === 'delivery' && (!address || !city || !zip)) return;

    setIsProcessing(true);

    setTimeout(() => {
      const orderNum = `CC-${Math.floor(10000 + Math.random() * 90000)}`;
      const newOrder: OrderDetails = {
        orderNumber: orderNum,
        fulfillmentType,
        deliveryDate: scheduledDate,
        deliveryTimeSlot: timeSlot,
        customerName,
        email,
        phone,
        deliveryAddress: address,
        deliveryCity: city,
        deliveryZip: zip,
        specialInstructions: giftNote,
        items: [...cart],
        subtotal,
        deliveryFee,
        tax,
        total,
        createdAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setCompletedOrder(newOrder);
      setIsProcessing(false);
      onOrderSuccess(newOrder);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-stone-200 overflow-hidden flex flex-col my-auto max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="p-5 border-b border-stone-200 flex items-center justify-between bg-[#FAF8F5]">
          <div>
            <h2 className="font-serif text-xl sm:text-2xl font-medium text-stone-900">
              {completedOrder ? 'Order Confirmed' : 'Checkout & Reservation'}
            </h2>
            <p className="text-xs text-stone-500 mt-0.5">
              {completedOrder 
                ? 'Your handcrafted cakes are queued in our Marais pastry kitchen.' 
                : 'Direct from our kitchen to your celebration table.'}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-stone-500 hover:text-stone-900 hover:bg-stone-200/50 transition-colors cursor-pointer"
            aria-label="Close checkout"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content View */}
        <div className="p-6 overflow-y-auto max-h-[78vh]">
          {completedOrder ? (
            /* Order Confirmation State */
            <div className="space-y-6 text-center py-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto shadow-xs">
                <CheckCircle className="w-9 h-9" />
              </div>

              <div>
                <span className="text-xs uppercase tracking-widest text-emerald-800 font-semibold">
                  Order Confirmed
                </span>
                <h3 className="font-serif text-3xl font-medium text-stone-900 mt-1">
                  Thank You, {completedOrder.customerName}
                </h3>
                <p className="font-mono text-sm text-stone-500 mt-1">
                  Order Reference: <strong className="text-stone-900">{completedOrder.orderNumber}</strong>
                </p>
              </div>

              {/* Order Logistics Card */}
              <div className="bg-stone-50 rounded-xl border border-stone-200 p-5 text-left text-xs space-y-3 max-w-lg mx-auto">
                <div className="flex items-center justify-between border-b border-stone-200/80 pb-2.5">
                  <span className="text-stone-500">Preparation & Fulfillment:</span>
                  <span className="font-semibold text-stone-900">
                    {completedOrder.fulfillmentType === 'delivery' ? 'Chilled Transit Delivery' : 'Atelier Boutique Pickup'}
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-stone-200/80 pb-2.5">
                  <span className="text-stone-500">Scheduled Window:</span>
                  <span className="font-semibold text-stone-900">
                    {completedOrder.deliveryDate} · {completedOrder.deliveryTimeSlot}
                  </span>
                </div>

                {completedOrder.deliveryAddress && (
                  <div className="flex items-center justify-between border-b border-stone-200/80 pb-2.5">
                    <span className="text-stone-500">Destination:</span>
                    <span className="font-semibold text-stone-900">
                      {completedOrder.deliveryAddress}, {completedOrder.deliveryCity}
                    </span>
                  </div>
                )}

                <div className="flex items-center justify-between pt-1">
                  <span className="text-stone-500">Total Billed:</span>
                  <span className="font-serif font-semibold text-sm text-stone-900 tabular-nums">
                    ${completedOrder.total.toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Items summary */}
              <div className="text-left max-w-lg mx-auto border-t border-stone-100 pt-4">
                <h4 className="text-xs uppercase tracking-wider font-semibold text-stone-700 mb-2">
                  Items in this bake ({completedOrder.items.length})
                </h4>
                <div className="space-y-2">
                  {completedOrder.items.map((it) => (
                    <div key={it.cartId} className="flex justify-between text-xs text-stone-600">
                      <span>{it.quantity}x {it.name} ({it.size})</span>
                      <span className="font-mono tabular-nums font-medium text-stone-900">
                        ${it.price * it.quantity}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 max-w-sm mx-auto">
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full bg-stone-900 hover:bg-stone-800 text-white font-medium text-xs sm:text-sm py-3 px-4 rounded-xl transition-colors cursor-pointer"
                >
                  Return to Pâtisserie
                </button>
              </div>

            </div>
          ) : (
            /* Checkout Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Customer Contact */}
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-900 mb-3 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-amber-700" />
                  <span>Contact Information</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div>
                    <label className="block text-stone-600 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="Claire Delacroix"
                      className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:outline-none focus:border-stone-900"
                    />
                  </div>
                  <div>
                    <label className="block text-stone-600 mb-1">Phone Number (For Delivery/Pickup SMS) *</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+1 (555) 349-2810"
                      className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:outline-none focus:border-stone-900"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-stone-600 mb-1">Email (For Confirmation & Care Guide) *</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="claire@domain.com"
                      className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:outline-none focus:border-stone-900"
                    />
                  </div>
                </div>
              </div>

              {/* Delivery Address (if delivery selected) */}
              {fulfillmentType === 'delivery' && (
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-900 mb-3 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-amber-700" />
                    <span>Delivery Address (White-Glove Chilled Transit)</span>
                  </h3>
                  <div className="space-y-3 text-xs">
                    <div>
                      <label className="block text-stone-600 mb-1">Street Address *</label>
                      <input
                        type="text"
                        required
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="742 Evergreen Terrace, Apt 4B"
                        className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:outline-none focus:border-stone-900"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-stone-600 mb-1">City *</label>
                        <input
                          type="text"
                          required
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                          placeholder="New York"
                          className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:outline-none focus:border-stone-900"
                        />
                      </div>
                      <div>
                        <label className="block text-stone-600 mb-1">Postal Code *</label>
                        <input
                          type="text"
                          required
                          value={zip}
                          onChange={(e) => setZip(e.target.value)}
                          placeholder="10012"
                          className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:outline-none focus:border-stone-900"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Payment Method */}
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-900 mb-3 flex items-center gap-1.5">
                  <CreditCard className="w-3.5 h-3.5 text-amber-700" />
                  <span>Payment Method</span>
                </h3>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`p-3 rounded-lg border text-left text-xs transition-colors cursor-pointer ${
                      paymentMethod === 'card'
                        ? 'border-stone-900 bg-stone-50 font-semibold text-stone-900 ring-1 ring-stone-900'
                        : 'border-stone-200 text-stone-600 hover:border-stone-300'
                    }`}
                  >
                    Credit Card
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('apple_pay')}
                    className={`p-3 rounded-lg border text-left text-xs transition-colors cursor-pointer ${
                      paymentMethod === 'apple_pay'
                        ? 'border-stone-900 bg-stone-50 font-semibold text-stone-900 ring-1 ring-stone-900'
                        : 'border-stone-200 text-stone-600 hover:border-stone-300'
                    }`}
                  >
                    Apple Pay / GPay
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('pay_on_pickup')}
                    className={`p-3 rounded-lg border text-left text-xs transition-colors cursor-pointer ${
                      paymentMethod === 'pay_on_pickup'
                        ? 'border-stone-900 bg-stone-50 font-semibold text-stone-900 ring-1 ring-stone-900'
                        : 'border-stone-200 text-stone-600 hover:border-stone-300'
                    }`}
                  >
                    {fulfillmentType === 'delivery' ? 'Cash on Delivery' : 'Pay on Pickup'}
                  </button>
                </div>
              </div>

              {/* Order Snapshot */}
              <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 text-xs space-y-1.5">
                <div className="flex justify-between text-stone-600">
                  <span>Scheduled Time:</span>
                  <span className="font-medium text-stone-900">{scheduledDate} · {timeSlot}</span>
                </div>
                <div className="flex justify-between text-stone-600">
                  <span>Fulfillment:</span>
                  <span className="font-medium text-stone-900">
                    {fulfillmentType === 'delivery' ? 'Chilled Transit Delivery ($15)' : 'Atelier Pickup (Free)'}
                  </span>
                </div>
                <div className="flex justify-between font-semibold text-stone-900 pt-2 border-t border-stone-200 text-sm">
                  <span>Total Amount Due</span>
                  <span className="font-serif tabular-nums text-base">${total.toFixed(2)}</span>
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isProcessing}
                className="w-full bg-stone-900 hover:bg-stone-800 text-white font-medium text-xs sm:text-sm py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm disabled:opacity-75"
              >
                {isProcessing ? (
                  <span className="flex items-center gap-2">
                    <span className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
                    <span>Confirming Kitchen Reservation...</span>
                  </span>
                ) : (
                  <>
                    <span>Confirm Cake Reservation (${total.toFixed(2)})</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
