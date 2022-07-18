const fetchProducts = async (param) => {
  try {
    const url = `https://api.mercadolibre.com/sites/MLB/search?q=${param}`;
    const result = await fetch(url);
    const response = await result.json();
    return response;
  } catch (error) {
    return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
