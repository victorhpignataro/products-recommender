import { useState } from 'react';

import Form from './components/Form/Form';
import RecommendationList from './components/RecommendationList/RecommendationList';



function App() {
  const [recommendations, setRecommendations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = (recommendations) => {
    setRecommendations(recommendations);
  };

  return (
    <div className="bg-slate-50 min-h-screen flex flex-col items-center px-4 py-10">
      <header className="w-full max-w-6xl flex items-center justify-between mb-8">
        <div>
          <p className="text-2xl font-semibold uppercase tracking-wider text-sky-600 mb-1">
            Recomendador de Produtos
          </p>
        </div>
        <img src="/rd-station-default.svg" alt="RD Station" width={90} />
      </header>

      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <section className="px-8 py-6 border-b border-slate-100">
          <p className="text-slate-700">
            Encontre, entre as soluções da RD Station, a combinação ideal para o seu negócio.
            Conte pra gente o que você precisa e a gente recomenda os produtos certos —
            de <span className="font-semibold text-slate-900">CRM</span> a{' '}
            <span className="font-semibold text-slate-900">Marketing</span>,
            de <span className="font-semibold text-slate-900">Conversas</span> a{' '}
            <span className="font-semibold text-slate-900">Inteligência Artificial</span>.
          </p>


        </section>

        <div className="grid grid-cols-1 lg:grid-cols-5 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
          <div className="lg:col-span-3 p-8 lg:max-h-[calc(100vh-220px)] flex flex-col">

            <div className="flex-1 min-h-0">
              <Form onHandleSubmit={handleFormSubmit} onLoadingChange={setIsLoading} />
            </div>
          </div>

          <div className="lg:col-span-2 p-8 lg:max-h-[calc(100vh-220px)] overflow-y-auto">
            <h2 className="text-sm font-semibold text-slate-900 mb-4">
              Recomendações
            </h2>
            <RecommendationList recommendations={recommendations} isLoading={isLoading} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;