import { useState } from 'react';
import recommendationService from '../services/recommendation.service';

function useRecommendations(products) {
  const [isLoading, setIsLoading] = useState(false);

  const getRecommendations = async (formData) => {
    setIsLoading(true);
    try {
      return await recommendationService.getRecommendations(formData, products);
    } finally {
      setIsLoading(false);
    }
  };

  return { getRecommendations, isLoading };
}

export default useRecommendations;