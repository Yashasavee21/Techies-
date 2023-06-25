function removeFromCart(index) {
    const cart = getCartItems();
    cart.splice(index, 1);
    saveCartItems(cart);
    showCartItems();
  }
  

  document.addEventListener('DOMContentLoaded', showCartItems);
  