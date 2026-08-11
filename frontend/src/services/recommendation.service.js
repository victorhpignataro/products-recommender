// getRecommendations.js

const multipleProductsLogic = ({
  selectedPreferences,
  selectedFeatures,
  products,
}) => {
  if(!selectedFeatures?.length && !selectedPreferences?.length) {
    return products;
  }

  let result = products.filter((element) => {
    const productPreferences = element?.preferences ?? [];
    const productFeatures = element?.features ?? [];

    const hasPreference = (selectedPreferences ?? []).some((selectedPreference) => {
      return productPreferences.includes(selectedPreference);
    });

    const hasFeature = (selectedFeatures ?? []).some((selectedFeature) => {
      return productFeatures.includes(selectedFeature);
    });

    return hasPreference || hasFeature;
  });

  return result;
};

const getMaxScoreProductId = (scoreMap) => {
  let maxScore = 0;
  let maxScoreId = null;
  Object.keys(scoreMap).forEach((key) => {
    if (scoreMap[key] >= maxScore) {
      maxScore = scoreMap[key];
      maxScoreId = parseInt(key);
    }
  });
  return maxScoreId;
}

const singleProductsLogic = ({
  selectedPreferences,
  selectedFeatures,
  products,
}) => {
  const scoreMap = {};
  products.forEach((element) => {
    const productPreferences = element?.preferences ?? [];
    const productFeatures = element?.features ?? [];
    let productScore = 0;

    (selectedFeatures ?? []).forEach((selectedFeature) => {
      if (productFeatures.includes(selectedFeature)) {
        productScore += 1;
      }
    });

      (selectedPreferences ?? []).forEach((selectedPreference) => {
        if (productPreferences.includes(selectedPreference)) {
          productScore += 1;
        }
      });

    scoreMap[element.id] = productScore;
  });

  const maxScoreId = getMaxScoreProductId(scoreMap);
  if (!maxScoreId) {
    return [];
  }
  return [products.find(element => parseInt(element.id) === maxScoreId)];
};

const getRecommendations = (
  formData = {
    selectedPreferences: [],
    selectedFeatures: [],
    selectedRecommendationType: '',
  },
  products,
) => {
  /**
   * Crie aqui a lógica para retornar os produtos recomendados.
   */
  let productsResults = [];
  const { selectedRecommendationType, selectedFeatures, selectedPreferences } =
    formData;

  if (!selectedRecommendationType) {
    return products;
  }

  if (selectedRecommendationType === 'SingleProduct') {
    productsResults = singleProductsLogic({
      selectedPreferences,
      selectedFeatures,
      products,
    });
  }

  if (selectedRecommendationType === 'MultipleProducts') {
    productsResults = multipleProductsLogic({
      selectedPreferences,
      selectedFeatures,
      products,
    });
  }

  return productsResults;
};

// Linter Obs
const recommendationService = { getRecommendations };

export default recommendationService;
