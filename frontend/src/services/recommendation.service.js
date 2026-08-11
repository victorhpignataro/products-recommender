// getRecommendations.js


const multipleProductsLogic = ({selectedPreferences, selectedFeatures, products}) => {
  
}

const singleProductsLogic = ({selectedPreferences, selectedFeatures, products}) => {

}

const getRecommendations = (
  formData = { selectedPreferences: [], selectedFeatures: [], selectedRecommendationType: '' },
  products,
) => {
  /**
   * Crie aqui a lógica para retornar os produtos recomendados.
   */
  let productsResults = [];
  const {recomendationType, selectedFeatures, selectedPreferences}  = formData;
  
  if(!recomendationType) {
    return productsResults;
  }
  
  if(recomendationType === 'SingleProducts') {
    productsResults = singleProductsLogic({selectedPreferences, selectedFeatures, products})
  }

  if(recomendationType === 'MultipleProducts') {
    productsResults = multipleProductsLogic({selectedPreferences, selectedFeatures, products})
  }
  
  return productsResults;
};

// Linter Obs
const recommendationService = { getRecommendations };

export default recommendationService;
