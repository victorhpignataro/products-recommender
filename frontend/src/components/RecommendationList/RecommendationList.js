import React from 'react';
import { Inbox, Sparkles } from 'lucide-react';

function RecommendationList({ recommendations, isLoading = false }) {
  if (isLoading) {
    return (
      <ul className="flex flex-col gap-2" aria-busy="true" aria-label="Carregando recomendações">
        {[1, 2, 3].map((key) => (
          <li key={key} className="rounded-lg border border-slate-200 bg-white px-4 py-3">
            <div className="h-3.5 w-2/3 bg-slate-200 rounded animate-pulse mb-2" />
            <div className="h-3 w-1/2 bg-slate-100 rounded animate-pulse" />
          </li>
        ))}
      </ul>
    );
  }

  if (recommendations.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-12 px-4">
        <div className="bg-slate-100 rounded-full p-3 mb-3">
          <Inbox size={20} className="text-slate-400" />
        </div>
        <p className="text-sm font-medium text-slate-700">
          Nenhuma recomendação ainda
        </p>
        <p className="text-sm text-slate-500 mt-1 max-w-[220px]">
          Selecione suas preferências ao lado e clique em "Obter recomendação"
        </p>
      </div>
    );
  }

  return (
    <ul className="flex flex-col gap-2">
      {recommendations.map((recommendation, index) => {
        const isTopMatch = index === 0;

        return (
          <li
            key={recommendation.id ?? recommendation.name ?? index}
            className={`rounded-lg border px-4 py-3 ${
              isTopMatch
                ? 'border-sky-500 bg-sky-50'
                : 'border-slate-200 bg-white'
            }`}
          >
            <div className="flex items-start justify-between gap-2">
              <p className="text-sm font-semibold text-slate-900">
                {recommendation.name}
              </p>
              {isTopMatch && (
                <span className="shrink-0 inline-flex items-center gap-1 text-[11px] font-medium text-sky-700 bg-sky-100 px-2 py-0.5 rounded-full">
                  <Sparkles size={11} />
                  Melhor opção
                </span>
              )}
            </div>

            {recommendation.description && (
              <p className="text-xs text-slate-500 mt-1">
                {recommendation.description}
              </p>
            )}
          </li>
        );
      })}
    </ul>
  );
}

export default RecommendationList;