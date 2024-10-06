const axios = require('axios');

async function sendSMS() {
  try {
    // Make a POST request to the endpoint without a payload
    const response = await axios.post('https://authorized-deployment-7iek.onrender.com/send-sms');

    // Assuming the server responds with a success message
    console.log('SMS request sent successfully:', response.data);
    process.exit(0);  // Exit with status 0 (success)
  } catch (error) {
    console.error('Error sending SMS request:', error.message);
    process.exit(1);  // Exit with status 1 (failure)
  }
}

// Call the sendSMS function
sendSMS();