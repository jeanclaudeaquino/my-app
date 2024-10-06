const axios = require('axios');

async function checkApproval() {
  try {
    // Make a GET request to the endpoint
    const response = await axios.get('https://authorized-deployment.onrender.com/check-approval');

    // Assuming the response contains a JSON object like { "approved": true }
    const approved = response.data.approved;

    if (approved) {
      console.log('Deployment approved.');
      process.exit(0);  // Return status 0 (success) to GitHub Actions
    } else {
      console.log('Waiting for approval script...');
      process.exit(1);  // Return status 1 (failure) to GitHub Actions to indicate approval not yet received
    }
  } catch (error) {
    console.error('Error checking approval:', error);
    process.exit(1);  // Return status 1 (failure) on error
  }
}

// Call the checkApproval function
checkApproval();