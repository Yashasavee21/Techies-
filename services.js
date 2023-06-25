function redirectToServiceDetails(serviceTitle) {
    sessionStorage.setItem('serviceTitle', serviceTitle);
    window.location.href = 'service-details.html';
  }
  
  function redirectToBooking() {
    alert('Redirecting to booking page...');
    window.location.href = 'booking.html';
  }
  function closetoback() {
    alert('Redirecting to Services page...');
    window.location.href = 'services.html';
  }
  function addToCart(serviceTitle) {
    alert('Adding ' + serviceTitle + ' to cart...');
    window.location.href = 'addtocart.js';
  }
  
  function getServiceTitleFromStorage() {
    return sessionStorage.getItem('serviceTitle');
  }
  
  function displayServiceDetails() {
    const serviceTitle = getServiceTitleFromStorage();
    const serviceTitleElement = document.getElementById('service-title');
    serviceTitleElement.textContent = serviceTitle;
  }
  
  function initializeServiceDetailsPage() {
    displayServiceDetails();
  }
  
  if (window.location.pathname.includes('service-details.html')) {
    initializeServiceDetailsPage();
  }
  