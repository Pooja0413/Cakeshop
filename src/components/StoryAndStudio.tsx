import React, { useState } from 'react';
import { REVIEWS } from '../data/cakes';
import { Star, MapPin, Clock, Phone, Sparkles, Check, HeartHandshake, ShieldCheck, Mail } from 'lucide-react';

export const StoryAndStudio: React.FC = () => {
  const [consultName, setConsultName] = useState('');
  const [consultEmail, setConsultEmail] = useState('');
  const [consultDate, setConsultDate] = useState('');
  const [consultOccasion, setConsultOccasion] = useState('Wedding Tasting (Tiered Cakes)');
  const [consultSubmitted, setConsultSubmitted] = useState(false);

  const handleConsultSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!consultName || !consultEmail) return;
    setConsultSubmitted(true);
  };

  return (
    <div className="bg-[#FAF8F5]">
      {/* Sourcing & Kitchen Craft Section */}
      <section id="our-craft" className="py-16 sm:py-24 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-stone-500 font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                <span>The Pâtisserie Philosophy</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-stone-900 tracking-tight text-balance leading-tight">
                Noble ingredients without compromise.
              </h2>

              <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                We believe exceptional cake is not achieved through excess sugar, but through the tension of intense ingredients: the cultured tang of slow-churned butter, the bitter complexity of single-origin dark cocoa, and the perfume of crushed botanicals.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3.5">
                  <div className="w-7 h-7 rounded-full bg-amber-100/70 text-amber-900 flex items-center justify-center shrink-0 mt-0.5 text-xs font-semibold">
                    1
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-stone-900">Isigny Sainte-Mère Cultured Butter</h4>
                    <p className="text-xs text-stone-500 mt-0.5">Slow-matured churned butter with 82% butterfat for silken crumb structure.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-7 h-7 rounded-full bg-amber-100/70 text-amber-900 flex items-center justify-center shrink-0 mt-0.5 text-xs font-semibold">
                    2
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-stone-900">Grand Cru Single-Origin Valrhona Cacao</h4>
                    <p className="text-xs text-stone-500 mt-0.5">Ethically harvested Araguani and Guanaja chocolates with roasted nib acidity.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-7 h-7 rounded-full bg-amber-100/70 text-amber-900 flex items-center justify-center shrink-0 mt-0.5 text-xs font-semibold">
                    3
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-stone-900">Locally Foraged & Grown Edible Blooms</h4>
                    <p className="text-xs text-stone-500 mt-0.5">Pansies, violas, and Provencal lavender pressed by hand every sunrise.</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right: Ingredient Mosaic Grid */}
            <div className="lg:col-span-7 grid grid-cols-2 gap-4">
              <div className="p-6 bg-white rounded-2xl border border-stone-200/90 shadow-2xs space-y-3">
                <span className="text-xs uppercase tracking-wider text-amber-800 font-semibold block">Cultured Dairy</span>
                <h3 className="font-serif text-xl font-medium text-stone-900">Normandy French Butter</h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Imported twice weekly from certified Normandy creameries, providing nutty richness that margarine or hydrogenated fats can never simulate.
                </p>
              </div>

              <div className="p-6 bg-white rounded-2xl border border-stone-200/90 shadow-2xs space-y-3">
                <span className="text-xs uppercase tracking-wider text-amber-800 font-semibold block">Single Estate</span>
                <h3 className="font-serif text-xl font-medium text-stone-900">72% Dark Chocolates</h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  We formulate custom cocoa ganaches pairing stone fruit undertones with Venezuelan and Madagascan cacao beans.
                </p>
              </div>

              <div className="p-6 bg-white rounded-2xl border border-stone-200/90 shadow-2xs space-y-3">
                <span className="text-xs uppercase tracking-wider text-amber-800 font-semibold block">Organic Orchards</span>
                <h3 className="font-serif text-xl font-medium text-stone-900">Stoneground Flours</h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Unbleached, non-GMO stoneground pastry flours that preserve vital wheat germ aromatics without artificial whitening agents.
                </p>
              </div>

              <div className="p-6 bg-white rounded-2xl border border-stone-200/90 shadow-2xs space-y-3">
                <span className="text-xs uppercase tracking-wider text-amber-800 font-semibold block">Slow Methods</span>
                <h3 className="font-serif text-xl font-medium text-stone-900">Zero Artificial Extracts</h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Only scraped vanilla bean caviar from Tahiti and Bourbon pods, steeped for 72 hours in organic whole milk.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Attributable Testimonials Section */}
      <section className="py-16 sm:py-20 border-b border-stone-200 bg-[#F7F4EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest text-stone-500 font-semibold">
              Celebration Testimonials
            </span>
            <h2 className="font-serif text-3xl font-medium text-stone-900 mt-1">
              Cherished Moments from Our Guests
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS.map((rev) => (
              <div 
                key={rev.id}
                className="p-6 bg-white rounded-xl border border-stone-200/90 shadow-2xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex gap-1 text-amber-600 mb-3">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed italic">
                    "{rev.comment}"
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-stone-100">
                  <div className="text-xs font-semibold text-stone-900">{rev.author}</div>
                  <div className="text-[11px] text-stone-500">{rev.role}</div>
                  <div className="text-[10px] text-stone-400 mt-0.5">{rev.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Atelier Visit & Tasting Booking Section */}
      <section id="visit-us" className="py-16 sm:py-24 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left: Studio Hours & Location */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-widest text-stone-500 font-semibold">
                Studio & Salon
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-medium text-stone-900 tracking-tight">
                Visit Our Tasting Atelier
              </h2>
              <p className="text-stone-600 text-sm leading-relaxed">
                Step into our open-concept kitchen on Rue du Marais. Watch our confectioners roll delicate sable crusts, pipe Lambeth ruffles, and temper chocolate.
              </p>

              <div className="bg-white rounded-xl border border-stone-200 p-6 space-y-4 shadow-2xs text-xs">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-stone-900">Location</h4>
                    <p className="text-stone-600 mt-0.5">142 Rue du Marais, Pâtisserie District</p>
                    <p className="text-stone-400 text-[11px]">Direct street access · Chilled curbside pickup available</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-stone-100">
                  <Clock className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-stone-900">Opening & Collection Hours</h4>
                    <div className="text-stone-600 mt-0.5 space-y-0.5">
                      <div className="flex justify-between w-64">
                        <span>Tuesday – Saturday:</span>
                        <span className="font-medium text-stone-900">8:00 AM – 7:00 PM</span>
                      </div>
                      <div className="flex justify-between w-64">
                        <span>Sunday Morning:</span>
                        <span className="font-medium text-stone-900">9:00 AM – 4:00 PM</span>
                      </div>
                      <div className="flex justify-between w-64 text-stone-400">
                        <span>Monday:</span>
                        <span>Closed for Recipe R&D</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-stone-100">
                  <Phone className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-stone-900">Concierge & Cake Hotline</h4>
                    <p className="text-stone-600 mt-0.5">+1 (555) 438-9210 · concierge@cremeandcrumb.com</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right: Private Tasting Consultation Form */}
            <div className="lg:col-span-6 bg-white rounded-2xl border border-stone-200/90 p-6 sm:p-8 shadow-sm">
              <div className="mb-6">
                <span className="text-xs uppercase tracking-wider text-amber-800 font-semibold">
                  Private Appointments
                </span>
                <h3 className="font-serif text-2xl font-medium text-stone-900 mt-1">
                  Reserve a Wedding or Milestone Tasting
                </h3>
                <p className="text-stone-600 text-xs mt-1 leading-relaxed">
                  Sample 5 signature flavor pairings with our lead decorator and sommelier. Complimentary for events over 30 guests.
                </p>
              </div>

              {consultSubmitted ? (
                <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-xl text-center space-y-3">
                  <div className="w-10 h-10 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto">
                    <Check className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif text-lg font-medium text-emerald-950">
                    Tasting Request Received
                  </h4>
                  <p className="text-xs text-emerald-800 max-w-sm mx-auto">
                    Thank you {consultName}. Our salon concierge will call you at your preferred time to finalize your private tasting schedule.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleConsultSubmit} className="space-y-4 text-xs">
                  <div>
                    <label className="block text-stone-700 font-semibold mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={consultName}
                      onChange={(e) => setConsultName(e.target.value)}
                      placeholder="Genevieve Marchand"
                      className="w-full px-3 py-2.5 border border-stone-300 rounded-lg focus:outline-none focus:border-stone-900"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-stone-700 font-semibold mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={consultEmail}
                        onChange={(e) => setConsultEmail(e.target.value)}
                        placeholder="genevieve@example.com"
                        className="w-full px-3 py-2.5 border border-stone-300 rounded-lg focus:outline-none focus:border-stone-900"
                      />
                    </div>
                    <div>
                      <label className="block text-stone-700 font-semibold mb-1">Event Date (Approximate)</label>
                      <input
                        type="date"
                        value={consultDate}
                        onChange={(e) => setConsultDate(e.target.value)}
                        className="w-full px-3 py-2.5 border border-stone-300 rounded-lg focus:outline-none focus:border-stone-900"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-stone-700 font-semibold mb-1">Celebration Type</label>
                    <select
                      value={consultOccasion}
                      onChange={(e) => setConsultOccasion(e.target.value)}
                      className="w-full px-3 py-2.5 border border-stone-300 rounded-lg focus:outline-none focus:border-stone-900 bg-white"
                    >
                      <option value="Wedding Tasting (Tiered Cakes)">Wedding Reception (Multi-Tier)</option>
                      <option value="Milestone Birthday">Milestone Birthday (30th, 40th, 50th)</option>
                      <option value="Corporate Gala">Corporate Celebration / Banquet</option>
                      <option value="Anniversary">Silver / Golden Wedding Anniversary</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-stone-900 hover:bg-stone-800 text-white font-medium text-xs sm:text-sm py-3 px-4 rounded-xl transition-colors cursor-pointer"
                  >
                    Request Tasting Appointment
                  </button>
                  <p className="text-[11px] text-stone-400 text-center">
                    Appointments take 45 minutes in our Marais tasting parlor.
                  </p>
                </form>
              )}

            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
