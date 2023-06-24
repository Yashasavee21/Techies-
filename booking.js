// Function to submit the booking
function submitBooking() {
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const service = document.getElementById('service').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const comments = document.getElementById('comments').value;
  
    // Create a booking object
    const booking = {
      name: name,
      email: email,
      service: service,
      date: date,
      time: time,
      comments: comments
    };
  
    // Send the booking object to your API endpoint or perform necessary actions
    sendBookingData(booking);
  }
  
  // Function to send booking data to the server
  function sendBookingData(booking) {
    // Send the booking data to your API endpoint
    // Replace the URL with your actual API endpoint
    fetch('https://your-api-endpoint.com/bookings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(booking)
    })
      .then(response => response.json())
      .then(data => {
        // Handle the API response
        if (data.success) {
          // Booking successful
          alert('Booking successful!'); // You can customize this message
        } else {
          // Booking failed
          alert('Booking failed. Please try again.'); // You can customize this message
        }
      })
      .catch(error => {
        // Handle any errors
        console.error('Error:', error);
        alert('An error occurred. Please try again.'); // You can customize this message
      });
  }
  
  