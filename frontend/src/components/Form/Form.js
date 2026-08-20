import React, { useEffect } from 'react';
import { Preferences, Features, RecommendationType } from './Fields';
import { SubmitButton } from './SubmitButton';
import useProducts from '../../hooks/useProducts';
import useForm from '../../hooks/useForm';
import useRecommendations from '../../hooks/useRecommendations';

function Form({ onHandleSubmit, onLoadingChange }) {
  const { preferences, features, products } = useProducts();

  const { formData, handleChange } = useForm({
    selectedPreferences: [],
    selectedFeatures: [],
    selectedRecommendationType: '',
  });

  const { getRecommendations, isLoading } = useRecommendations(products);

  useEffect(() => {
    onLoadingChange?.(isLoading);
  }, [isLoading, onLoadingChange]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataRecommendations = await getRecommendations(formData);

    onHandleSubmit?.(dataRecommendations);
  };

  return (
    <form className="flex flex-col h-full" onSubmit={handleSubmit}>
      <div className="flex-1 overflow-y-auto pr-1 -mr-1">
        <Preferences
          preferences={preferences}
          onPreferenceChange={(selected) => handleChange('selectedPreferences', selected)}
        />
        <Features
          features={features}
          onFeatureChange={(selected) => handleChange('selectedFeatures', selected)}
        />
        <RecommendationType
          onRecommendationTypeChange={(selected) => handleChange('selectedRecommendationType', selected)}
        />
      </div>

      <div className="pt-4 mt-2 border-t border-slate-100">
        <SubmitButton text="Obter recomendação" isLoading={isLoading} />
      </div>
    </form>
  );
}

export default Form;