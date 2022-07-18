const fetchItem = async (itemId) => {
  try {
    const url = `https://api.mercadolibre.com/items/${itemId}`;
    const result = await fetch(url);
    const response = await result.json();
    return response;
  } catch (e) {
    return e;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
