const products = {
  computers: [
    { id: 1, name: 'ByteBlaster', price: 1999990, image: 'images/torre1.jpg' },
    { id: 2, name: 'CodeCrusader', price: 2319990, image: 'images/torre2.jpg' },
    { id: 3, name: 'PixelPioneer', price: 4299990, image: 'images/torre3.jpg' },
    { id: 4, name: 'DataDynamo', price: 2649990, image: 'images/torre4.jpg' },
    { id: 5, name: 'CyberSurge', price: 4299990, image: 'images/torre5.jpg' },
    { id: 6, name: 'LogicLord', price: 3299990, image: 'images/torre6.jpg' },
    { id: 7, name: 'QuantumQuester', price: 4699990, image: 'images/torre7.jpg' },
    { id: 8, name: 'MatrixMaster', price: 2999990, image: 'images/torre8.jpg' },
    { id: 9, name: 'CircuitSage', price: 4149990, image: 'images/torre9.jpg' },
    { id: 10, name: 'BinaryBoss', price: 3399990, image: 'images/torre10.jpg' },
    { id: 11, name: 'ScriptSavant', price: 7649990, image: 'images/torre11.jpg' },
    { id: 12, name: 'KernelKnight', price: 6099990, image: 'images/torre12.jpg' },
    { id: 13, name: 'AlgorithmAce', price: 6549990, image: 'images/torre13.jpg' },
    { id: 14, name: 'CryptoCommander', price: 5599990, image: 'images/torre14.jpg' },
    { id: 15, name: 'FirewallFury', price: 3699990, image: 'images/torre15.jpg' },
    { id: 16, name: 'NetworkNinja', price: 8699990, image: 'images/torre16.jpg' }
  ],
  laptops: [
    { id: 1, name: 'LENOVO LOQ', price: 3399000, image: 'images/portatil1.webp' },
    { id: 2, name: 'LENOVO IDEAPAD', price: 3149000, image: 'images/portatil2.webp' },
    { id: 3, name: 'HP VICTUS', price: 3499000, image: 'images/portatil3.webp' },
    { id: 4, name: 'ACER PREDATOR', price: 7999050, image: 'images/portatil4.webp' },
    { id: 5, name: 'AZUS TUF 14', price: 3999000, image: 'images/portatil5.webp' },
    { id: 6, name: 'AZUS TUF 15', price: 5199000, image: 'images/portatil6.webp' },
    { id: 7, name: 'HP OMEN', price: 8599000, image: 'images/portatil7.webp' },
    { id: 8, name: 'MSI UCX', price: 2349000, image: 'images/portatil8.webp' },
    { id: 9, name: 'ACER NITRO', price: 149000, image: 'images/portatil9.webp' }

  ],
  screens: [
    { id: 1, name: 'Monitor Samsung 24" 75HZ', price: 549000, image: 'images/monitor1.avif' },
    { id: 2, name: 'Monitor Samsung 32" 165HZ', price: 1499000, image: 'images/monitor2.avif' },
    { id: 3, name: 'Monitor LG 24" 100HZ', price: 479000, image: 'images/monitor3.avif' },
    { id: 4, name: 'Monitor Gamer LG 24" 165HZ', price: 614900, image: 'images/monitor4.avif' },
    { id: 5, name: 'Monitor Gamer LG 27" 165HZ', price: 759000, image: 'images/monitor4.avif' },
    { id: 6, name: 'Monitor Gamer AZUS TUF 24" 180HZ', price: 799000, image: 'images/monitor5.avif' },
    { id: 7, name: 'Monitor Gamer AZUS 23.8"', price: 669000, image: 'images/monitor11.png' },
    { id: 8, name: 'Monitor LG Ultragear 27" 240HZ', price: 1119000, image: 'images/monitor7.avif' },
    { id: 9, name: 'Monitor Gamer LENOVO 27" 100HZ', price: 847900, image: 'images/monitor1.avif' },
  ],
  peripherals: [
    { id: 1, name: 'Periférico 1', price: 50, image: 'images/peripheral1.jpg' },
    { id: 2, name: 'Periférico 2', price: 60, image: 'images/peripheral2.jpg' },
    { id: 3, name: 'Periférico 3', price: 70, image: 'images/peripheral3.jpg' },
    { id: 4, name: 'Periférico 4', price: 80, image: 'images/peripheral4.jpg' },
    { id: 5, name: 'Periférico 5', price: 90, image: 'images/peripheral5.jpg' },
    { id: 6, name: 'Periférico 6', price: 100, image: 'images/peripheral6.jpg' }
  ]
};

let cart = [];

function formatPrice(price) {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function showCategory(category) {
  const productList = document.getElementById('product-list');
  productList.innerHTML = '';

  products[category].forEach(product => {
    const productElement = document.createElement('div');
    productElement.className = 'col-md-4 product';
    productElement.innerHTML = `
      <h5>${product.name}</h5>
      <img src="${product.image}" alt="${product.name}">
      <p>Precio: $${formatPrice(product.price)}</p>
      <div class="quantity-container">
        <button class="quantity-button" onclick="changeQuantity(${product.id}, '${category}', -1)">-</button>
        <input type="text" id="quantity-${category}-${product.id}" class="quantity-input" value="1" readonly>
        <button class="quantity-button" onclick="changeQuantity(${product.id}, '${category}', 1)">+</button>
        <button class="cart-button" onclick="addToCart(${product.id}, '${category}')">Añadir al Carrito</button>
      </div>
    `;
    productList.appendChild(productElement);
  });
}

function changeQuantity(productId, category, delta) {
  const quantityInput = document.getElementById(`quantity-${category}-${productId}`);
  let quantity = parseInt(quantityInput.value);
  quantity = Math.max(1, quantity + delta);
  quantityInput.value = quantity;
}

function addToCart(productId, category) {
  const quantityInput = document.getElementById(`quantity-${category}-${productId}`);
  const quantity = parseInt(quantityInput.value);

  const product = products[category].find(p => p.id === productId);

  const cartItem = cart.find(item => item.id === productId && item.category === category);
  if (cartItem) {
    cartItem.quantity += quantity;
  } else {
    cart.push({ ...product, category, quantity });
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  alert('Producto añadido al carrito');
}

function loadCart() {
  const storedCart = localStorage.getItem('cart');
  if (storedCart) {
    cart = JSON.parse(storedCart);
    updateCartDisplay();
  }
}

function updateCartDisplay() {
  const cartItemsContainer = document.getElementById('cart-items');
  cartItemsContainer.innerHTML = '';
  let total = 0;

  cart.forEach(item => {
    total += item.price * item.quantity;
    const cartItemElement = document.createElement('li');
    cartItemElement.className = 'list-group-item cart-item';
    cartItemElement.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <div class="cart-item-details">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-quantity">Cantidad: ${item.quantity}</div>
        <div class="cart-item-price">Precio: $${formatPrice(item.price)}</div>
      </div>
      <button onclick="removeFromCart(${item.id}, '${item.category}')">Eliminar</button>
    `;
    cartItemsContainer.appendChild(cartItemElement);
  });

  document.getElementById('cart-total').innerText = formatPrice(total);
}

function removeFromCart(productId, category) {
  cart = cart.filter(item => !(item.id === productId && item.category === category));
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartDisplay();
}

function emptyCart() {
  cart = [];
  localStorage.removeItem('cart');
  updateCartDisplay();
}

function checkout() {
  if (cart.length > 0) {
    alert('Compra realizada con éxito!');
    emptyCart();
  } else {
    alert('El carrito está vacío.');
  }
}

// Cargar carrito al inicio
window.onload = loadCart;
