
function submitBooking() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const service = document.getElementById('service').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const comments = document.getElementById('comments').value;
  
    const booking = {
      name: name,
      email: email,
      service: service,
      date: date,
      time: time,
      comments: comments
    };
  
    sendBookingData(booking);
  }
  
  function sendBookingData(booking) {
    fetch('https://your-api-endpoint.com/bookings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(booking)
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          alert('Booking successful!');
        } else {
          alert('Booking failed. Please try again.'); 
        }
      })
      .catch(error => {
        // Handle any errors
        console.error('Error:', error);
        alert('An error occurred. Please try again.'); 
      });
  }
  
  
