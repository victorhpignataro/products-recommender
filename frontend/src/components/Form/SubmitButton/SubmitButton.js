import React from 'react';
import { Search, Loader2 } from 'lucide-react';

export function SubmitButton({ text, isLoading = false }) {
  return (
    <button
      type="submit"
      disabled={isLoading}
      className="w-full flex items-center justify-center gap-2 bg-sky-600 hover:bg-sky-700 disabled:bg-sky-300 disabled:cursor-not-allowed text-white text-sm font-semibold py-2.5 px-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
    >
      {isLoading ? (
        <>
          <Loader2 size={16} className="animate-spin" />
          Buscando...
        </>
      ) : (
        <>
          <Search size={16} />
          {text}
        </>
      )}
    </button>
  );
}

export default SubmitButton;