import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail('');
  };

  return (
    <footer className="bg-[#1C1A19] text-[#EFEBE4] pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-stone-800/80">
          
          {/* Brand Info */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="font-serif text-2xl font-semibold tracking-tight text-white">
              Crème & Crumb
            </h3>
            <p className="text-stone-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Artisanal pâtisserie and bespoke cake studio. Hand-laminating puff pastry, churning Normandy butter, and decorating celebration milestones since 2018.
            </p>
            <div className="text-xs text-stone-500 space-y-0.5">
              <div>142 Rue du Marais, Pâtisserie District</div>
              <div>Tuesday – Sunday · Concierge: +1 (555) 438-9210</div>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-300">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <button onClick={() => onNavigate('hero')} className="hover:text-white transition-colors cursor-pointer">
                  Top of Salon
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('collection')} className="hover:text-white transition-colors cursor-pointer">
                  Today's Cake Menu
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('custom-studio')} className="hover:text-white transition-colors cursor-pointer">
                  Bespoke Custom Studio
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('flavor-pairings')} className="hover:text-white transition-colors cursor-pointer">
                  Sommelier Flavors
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('our-craft')} className="hover:text-white transition-colors cursor-pointer">
                  Sourcing & Butter
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('visit-us')} className="hover:text-white transition-colors cursor-pointer">
                  Studio Location
                </button>
              </li>
            </ul>
          </div>

          {/* Cake Collections */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-300">
              Atelier Curations
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>Signature Valrhona Noir</li>
              <li>Sicilian Pistachio Entremet</li>
              <li>Mademoiselle Flora Tier</li>
              <li>Vintage Lambeth Ruffles</li>
              <li>Gluten-Free Dark Truffle</li>
              <li>French Choux & Tart Box</li>
            </ul>
          </div>

          {/* Newsletter / Seasonal Journal */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-300">
              Seasonal Kitchen Journal
            </h4>
            <p className="text-xs text-stone-400 leading-relaxed">
              Receive private invitations for limited holiday entremet releases, seasonal tart menus, and masterclass tasting events.
            </p>

            {subscribed ? (
              <div className="p-3 bg-stone-900 border border-stone-700 rounded-lg text-xs text-amber-200 flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Thank you. You are enrolled in our seasonal journal.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="bg-stone-900 border border-stone-700 rounded-lg px-3 py-2 text-xs text-stone-200 placeholder-stone-500 focus:outline-none focus:border-stone-400 flex-1"
                />
                <button
                  type="submit"
                  className="bg-amber-100 hover:bg-white text-stone-950 px-3.5 py-2 rounded-lg text-xs font-medium transition-colors cursor-pointer shrink-0 flex items-center gap-1"
                >
                  <span>Join</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}

            <p className="text-[11px] text-stone-500">
              Strictly zero spam. Unsubscribe at any single moment.
            </p>
          </div>

        </div>

        {/* Quiet Bottom Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>© {new Date().getFullYear()} Crème & Crumb Pâtisserie Studio. All rights reserved.</p>
          <div className="flex items-center gap-4 text-stone-400">
            <span>Allergen Notice: Nut & Wheat Atelier</span>
            <span>·</span>
            <span>Local Refrigerated Transport</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
