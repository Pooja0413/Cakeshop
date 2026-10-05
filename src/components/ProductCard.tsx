import React from 'react';
import { CakeItem } from '../types/cake';
import { Plus, Eye, Sparkles } from 'lucide-react';

interface ProductCardProps {
  cake: CakeItem;
  onSelect: (cake: CakeItem) => void;
  onQuickAdd: (cake: CakeItem) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ cake, onSelect, onQuickAdd }) => {
  return (
    <article className="group bg-white rounded-xl border border-stone-200/80 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-stone-300">
      
      {/* Top Media Container */}
      <div 
        onClick={() => onSelect(cake)}
        className="relative aspect-[4/3] bg-stone-100 overflow-hidden cursor-pointer"
      >
        <img
          src={cake.image}
          alt={cake.name}
          className="w-full h-full object-cover object-center transform transition duration-500 group-hover:scale-105"
          referrerPolicy="no-referrer"
          loading="lazy"
        />

        {/* Subtle subtle single badge if present */}
        {cake.badge && (
          <div className="absolute top-3 left-3 bg-stone-900/85 backdrop-blur-xs text-stone-100 text-[11px] font-medium px-2.5 py-1 rounded tracking-wide">
            {cake.badge}
          </div>
        )}

        {/* Hover Quick Actions Overlay */}
        <div className="absolute inset-0 bg-stone-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 p-4">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onSelect(cake);
            }}
            className="bg-white/95 text-stone-900 hover:bg-white text-xs font-medium px-3 py-2 rounded-lg shadow-sm flex items-center gap-1.5 transition-transform active:scale-95 cursor-pointer"
            aria-label={`View details for ${cake.name}`}
          >
            <Eye className="w-3.5 h-3.5 text-stone-600" />
            <span>Customize</span>
          </button>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Unboxed Metadata with · separator */}
          <div className="flex items-center gap-2 text-xs text-stone-500 mb-1.5 font-medium">
            <span className="uppercase tracking-wider">{cake.categoryLabel}</span>
            <span aria-hidden="true">·</span>
            <span>{cake.servings}</span>
          </div>

          <h3 
            onClick={() => onSelect(cake)}
            className="font-serif text-lg sm:text-xl font-medium text-stone-900 line-clamp-1 hover:text-amber-800 transition-colors cursor-pointer"
          >
            {cake.name}
          </h3>

          <p className="text-xs text-stone-600 line-clamp-2 mt-1.5 leading-relaxed">
            {cake.tagline}
          </p>

          {/* Flavor notes unboxed bullet tags */}
          <div className="mt-3 flex flex-wrap gap-1.5">
            {cake.flavorNotes.slice(0, 2).map((note, index) => (
              <span key={index} className="text-[11px] text-stone-600 bg-stone-100 px-2 py-0.5 rounded">
                {note}
              </span>
            ))}
          </div>
        </div>

        {/* Footer with Price and Actions */}
        <div className="mt-5 pt-3.5 border-t border-stone-100 flex items-center justify-between">
          <div>
            <span className="text-[11px] text-stone-500 block leading-tight">Starting at</span>
            <span className="font-serif text-xl font-semibold text-stone-900 tabular-nums">
              ${cake.price}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onQuickAdd(cake)}
              className="inline-flex items-center gap-1 bg-stone-100 hover:bg-stone-900 text-stone-800 hover:text-white text-xs font-medium px-3 py-2 rounded-lg transition-colors cursor-pointer"
              title="Add classic size to bag"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add</span>
            </button>

            <button
              onClick={() => onSelect(cake)}
              className="p-2 text-stone-500 hover:text-stone-900 hover:bg-stone-100 rounded-lg transition-colors cursor-pointer"
              title="Configure options"
              aria-label="Configure cake"
            >
              <Eye className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

    </article>
  );
};
