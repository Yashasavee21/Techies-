
function getCartItems() {
    let cart = localStorage.getItem('cart');
    if (!cart) {

      cart = [];
    } else {
      cart = JSON.parse(cart);
    }
    return cart;
  }

  function saveCartItems(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  function showCartItems() {
    const cartItemsDiv = document.getElementById('cart-items');
    cartItemsDiv.innerHTML = '';
  
    const cart = getCartItems();
  
    if (cart.length === 0) {
      cartItemsDiv.innerHTML = '<p>Your cart is empty.</p>';
    } else {
      cart.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('cart-item');
        itemDiv.innerHTML = `
          <p>${item.name} - $${item.price}</p>
          <button class="remove-btn" onclick="removeFromCart(${index})">Remove</button>
        `;
        cartItemsDiv.appendChild(itemDiv);
      });
    }
  }

  function removeFromCart(index) {
    const cart = getCartItems();
    cart.splice(index, 1);
    saveCartItems(cart);
    showCartItems();
  }

  function showOrderSummary() {
    const orderSummaryDiv = document.getElementById('order-summary');
    orderSummaryDiv.innerHTML = '';
  
    const cart = getCartItems();
    let total = 0;
  
    if (cart.length === 0) {
      orderSummaryDiv.innerHTML = '<p>Your cart is empty.</p>';
    } else {
      cart.forEach((item) => {
        total += item.price;
      });
  
      orderSummaryDiv.innerHTML = `
        <p>Total Items: ${cart.length}</p>
        <p>Total Price: $${total.toFixed(2)}</p>
      `;
    }
  }

  function clearCart() {
    localStorage.removeItem('cart');
  }

  if (window.location.pathname === '/show_cart.html') {
    showCartItems();
  }

  if (window.location.pathname === '/checkout.html') {
    showOrderSummary();
  
    document.getElementById('place-order-btn').addEventListener('click', () => {
      alert('Order placed successfully!');
      clearCart();
      window.location.href = '/show_cart.html';
    });
  }
  