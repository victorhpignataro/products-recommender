import React, { useState } from 'react';
import { Package, Layers } from 'lucide-react';

const options = [
  { value: 'SingleProduct', label: 'Produto Único', icon: Package },
  { value: 'MultipleProducts', label: 'Múltiplos Produtos', icon: Layers },
];

function RecommendationType({ selectedType = null, onRecommendationTypeChange }) {
  const [currentType, setCurrentType] = useState(selectedType);

  const handleChange = (value) => {
    setCurrentType(value);
    onRecommendationTypeChange(value);
  };

  return (
    <div className="mb-4">
      <h2 className="text-sm font-semibold text-slate-900 mb-3">Tipo de recomendação</h2>

      <div className="grid grid-cols-2 gap-2">
        {options.map(({ value, label, icon: Icon }) => {
          const isSelected = currentType === value;

          return (
            <label
              key={value}
              htmlFor={value}
              className={`flex flex-col items-center justify-center gap-1.5 rounded-lg border px-3 py-3 text-sm text-center cursor-pointer transition-colors ${
                isSelected
                  ? 'border-sky-500 bg-sky-50 text-slate-900 font-medium'
                  : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
              }`}
            >
              <input
                id={value}
                type="radio"
                name="recommendationType"
                value={value}
                checked={isSelected}
                onChange={() => handleChange(value)}
                className="sr-only"
              />
              <Icon size={18} className={isSelected ? 'text-sky-600' : 'text-slate-400'} />
              {label}
            </label>
          );
        })}
      </div>
    </div>
  );
}

export default RecommendationType;