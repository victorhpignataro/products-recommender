import React, { useState } from 'react';
import Checkbox from './Checkbox';

function CheckboxGroup({ title, icon: Icon, items, selectedItems = [], onChange }) {
  const [currentItems, setCurrentItems] = useState(selectedItems);

  const handleItemChange = (item) => {
    const updatedItems = currentItems.includes(item)
      ? currentItems.filter((current) => current !== item)
      : [...currentItems, item];

    setCurrentItems(updatedItems);
    onChange(updatedItems);
  };

  return (
    <div className="mb-4">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-sm font-semibold text-slate-900 flex items-center gap-2">
          {Icon && <Icon size={16} className="text-sky-600" />}
          {title}
        </h2>
        <hr className="flex-1 ml-4 border-slate-200" />
        {currentItems.length > 0 && (
          <span className="text-xs font-medium text-sky-700 bg-sky-100 px-2 py-0.5 rounded-full">
            {currentItems.length} selecionada{currentItems.length > 1 ? 's' : ''}
          </span>
        )}
      </div>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
        {items.map((item, index) => {
          const isChecked = currentItems.includes(item);

          return (
            <li key={index} className="rounded-lg overflow-hidden">
              <Checkbox
                value={item}
                checked={isChecked}
                onChange={() => handleItemChange(item)}
                className={`px-3 py-2.5 border rounded-lg transition-colors ${
                  isChecked
                    ? 'border-sky-500 bg-sky-50'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <span className={isChecked ? 'text-slate-900 font-medium' : 'text-slate-600'}>
                  {item}
                </span>
              </Checkbox>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default CheckboxGroup;