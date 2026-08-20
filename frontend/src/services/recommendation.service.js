const multipleProductsLogic = ({
  selectedPreferences,
  selectedFeatures,
  products,
}) => {
  if (!selectedFeatures?.length && !selectedPreferences?.length) {
    return products;
  }

  return products.filter((product) => {
    const productPreferences = product?.preferences ?? [];
    const productFeatures = product?.features ?? [];

    const hasPreference = (selectedPreferences ?? []).some(
      (selectedPreference) =>
        productPreferences.includes(selectedPreference),
    );

    const hasFeature = (selectedFeatures ?? []).some(
      (selectedFeature) => productFeatures.includes(selectedFeature),
    );

    return hasPreference || hasFeature;
  });
};

const getMaxScoreProductId = (scoreMap) => {
  let maxScore = 0;
  let maxScoreId = null;

  Object.keys(scoreMap).forEach((key) => {
    if (scoreMap[key] >= maxScore) {
      maxScore = scoreMap[key];
      maxScoreId = parseInt(key, 10);
    }
  });

  return maxScoreId;
};

const singleProductsLogic = ({
  selectedPreferences,
  selectedFeatures,
  products,
}) => {
  const scoreMap = {};

  products.forEach((product) => {
    const productPreferences = product?.preferences ?? [];
    const productFeatures = product?.features ?? [];
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

    scoreMap[product.id] = productScore;
  });

  const maxScoreId = getMaxScoreProductId(scoreMap);

  if (!maxScoreId) {
    return [];
  }

  return [
    products.find(
      (product) => parseInt(product.id, 10) === maxScoreId,
    ),
  ];
};

const resolveRecommendations = (
  formData = {
    selectedPreferences: [],
    selectedFeatures: [],
    selectedRecommendationType: '',
  },
  products,
) => {
  const {
    selectedRecommendationType,
    selectedFeatures,
    selectedPreferences,
  } = formData;

  if (!selectedRecommendationType) {
    return products;
  }

  if (selectedRecommendationType === 'SingleProduct') {
    return singleProductsLogic({
      selectedPreferences,
      selectedFeatures,
      products,
    });
  }

  if (selectedRecommendationType === 'MultipleProducts') {
    return multipleProductsLogic({
      selectedPreferences,
      selectedFeatures,
      products,
    });
  }

  return [];
};

const MIN_LOADING_TIME = 600;

const getRecommendations = async (formData, products) => {
  await new Promise((resolve) => setTimeout(resolve, MIN_LOADING_TIME));

  return resolveRecommendations(formData, products);
};

const recommendationService = {
  getRecommendations,
};

export default recommendationService;