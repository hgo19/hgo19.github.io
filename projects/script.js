const items = document.querySelector('.items');
const cart = document.querySelector('.cart__items');
const clearButton = document.querySelector('.empty-cart');
const subtotalContainer = document.querySelector('#subtotal');
const cartTitle = document.querySelector('.container-cartTitle');
const sectionCart = document.querySelector('.cart');
const contador = document.querySelector('.items-count');
const searchBar = document.querySelector('#search-bar');
const searchButton = document.querySelector('#search-button');

const showCart = () => {
  cartTitle.addEventListener('click', () => {
    if (sectionCart.style.display === 'flex') {
      sectionCart.style.display = 'none';
    } else {
      sectionCart.style.cssText = 'display: flex;'
        + 'flex-basis: 32%;'
        + 'flex-flow: column wrap;';
    }
  });
};

showCart();

const newItem = () => {
  const span = document.createElement('span');
  span.className = 'newitem';
  span.innerText = 'newitem';
  cartTitle.appendChild(span);
}

const counter = () => {
  if (cart.childNodes.length > 0) {
    contador.style.cssText = 'background-color: rgb(142, 200, 255);'
    + 'border-radius: 30%;'
    + 'color: white;'
    + 'font-weight: 700;'
    + 'padding: 3px 3px 0 3px;'
  contador.innerHTML = cart.childNodes.length;
  } else {
    contador.style.display = 'none';
  }
}

const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  const imgHD = imageSource.replace(/I.jpg/g, 'W.jpg');
  img.src = imgHD;
  return img;
};

const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

const createPriceElement = (className, price) => {
  const span = document.createElement('span');
  span.className = className;
  span.innerText = `R$: ${price.toFixed(2)}`;
  return span;
}

const createProductItemElement = ({ sku, name, image, price }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createPriceElement('item__price', price));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return items.appendChild(section);
};

const createSubTotal = () => {
  const span = document.createElement('span');
  span.className = 'total-price';
  subtotalContainer.appendChild(span);
};

createSubTotal();

const sum = () => {
  const carts = document.querySelectorAll('.span-cart');
  const prices = [];
  carts.forEach((element) => {
    const text = element.textContent;
    const array = text.split('$');
    prices.push(Number(array[1]));
  });
  const result = prices.reduce((acc, curr) => acc + curr, 0);
  const subtotal = document.querySelector('.total-price');
  subtotal.innerText = `${result.toFixed(2)}`;
  localStorage.setItem('valor', `${subtotal.innerText}`);
};

const loadItems = () => {
  const div = document.createElement('div');
  div.className = 'loading';
  div.innerHTML = 'Carregando...';
  items.appendChild(div);
};

const loadCart = () => {
  const div = document.createElement('div');
  div.className = 'loading';
  div.innerHTML = 'Carregando...';
  cart.appendChild(div);
};

const removeLoad = () => {
  const loading = document.querySelector('.loading');
  loading.remove();
};

const cartItemClickListener = (event) => {
  event.remove();
  saveCartItems(cart.innerHTML);
  sum();
  counter();
};

const createCartItemElement = ({ sku, name, salePrice, image }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  const img = document.createElement('img');
  img.src = image;
  img.className = 'img-cart';
  li.appendChild(img);
  const span = document.createElement('span');
  span.className = 'span-cart';
  span.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.appendChild(span);
  li.addEventListener('click', () => cartItemClickListener(li));
  cart.appendChild(li);
};

const dataItems = async (param) => {
  loadItems();
  const result = await fetchProducts(param);
  removeLoad();
  const response = await result.results;
  return response;
};

const callItens = async (param) => {
  if (!param) {
    const array = await dataItems('computador');
    array.forEach((e) => {
      const { id: sku, title: name, thumbnail: image, price: price } = e;
      createProductItemElement({ sku, name, image, price });
    });
  } else {
    const array = await dataItems(param);
    array.forEach((e) => {
      const { id: sku, title: name, thumbnail: image, price: price } = e;
      createProductItemElement({ sku, name, image, price });
    });
  }
};


const setCartItems = async (itemId) => {
  loadCart();
  const object = await fetchItem(itemId);
  removeLoad();
  const { id: sku, title: name, price: salePrice, thumbnail: image } = object;
  createCartItemElement({ sku, name, salePrice, image });
  const storageItems = cart.innerHTML;
  saveCartItems(storageItems);
  sum();
};

const itemButton = () => {
  const addButton = document.querySelectorAll('.item__add');
  addButton.forEach((button) => {
    button.addEventListener('click', () => {
      const father = button.parentNode;
      const sku = father.firstChild.innerText;
      setCartItems(sku);
      newItem();
      setTimeout(() => {
        const newItem = document.querySelector('.newitem');
        newItem.remove();
      }, 800);
      counter();
    });
  });
};

const search = () => {
  searchButton.addEventListener('click', async () => {
    const teste = searchBar.value;
    items.innerHTML = '';
    await callItens(teste);
    itemButton();
  });
}

const removeItem = () => {
  const cartStorageItem = document.querySelectorAll('.cart__item');
  cartStorageItem.forEach((item) => {
    item.addEventListener('click', () => cartItemClickListener(item));
  });
  saveCartItems(cart.innerHTML);
  sum();
};

const checkContent = () => {
  const cartItems = cart.innerHTML;
  const oldItems = getSavedCartItems();
  if (cartItems.length === 0) {
    cart.innerHTML = oldItems;
  }
};

const clear = () => {
  const subtotal = document.querySelector('.total-price');
  clearButton.addEventListener('click', () => {
    cart.innerHTML = '';
    localStorage.removeItem('cartItems');
    subtotal.innerText = '0,00';
    counter();
  });
};

clear();

const callAsync = async () => {
  await callItens();
  search();
  itemButton();
  checkContent();
  removeItem();
  counter();
};

window.onload = () => {
  callAsync();
};
