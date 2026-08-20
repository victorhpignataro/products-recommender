import React from 'react';

function Checkbox({ children, className = '', ...props }) {
  return (
    <label className="flex items-center gap-2 cursor-pointer select-none w-full">
      <input
        type="checkbox"
        className={`form-checkbox h-4 w-4 rounded border-slate-300 text-sky-600 focus:ring-sky-500 focus:ring-offset-0 ${className}`}
        {...props}
      />
      <span className="text-sm">{children}</span>
    </label>
  );
}

export default Checkbox;