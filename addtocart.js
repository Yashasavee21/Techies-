document.getElementById('add-to-cart-btn').addEventListener('click', addToCart);

function addToCart() {
  const productName = document.querySelector('#cart h2').innerText;
  const price = document.querySelector('#cart p').innerText.replace('Price: $', '');
  
  const cartItem = {
    name: productName,
    price: parseFloat(price)
  };

  let cart = localStorage.getItem('cart');
  if (!cart) {
    cart = [];
  } else {
    cart = JSON.parse(cart);
  }

  cart.push(cartItem);
  localStorage.setItem('cart', JSON.stringify(cart));
  alert('Item added to cart!');
}
