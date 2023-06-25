
const reviewForm = document.getElementById('review-form');
const serviceSelect = document.getElementById('service-select');
const ratingSelect = document.getElementById('rating-select');
const reviewText = document.getElementById('review-text');

reviewForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  const service = serviceSelect.value;
  const rating = ratingSelect.value;
  const review = reviewText.value;

  console.log('Service:', service);
  console.log('Rating:', rating);
  console.log('Review:', review);

  reviewForm.reset();
});
