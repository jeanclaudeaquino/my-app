const axios = require('axios');

axios.get('https://authorized-deployment.onrender.com/check-approval')
  .then(response => {
    const status = response.data.status;  // Assuming the API response has a "status" field for approval

    if (status === 1) {  // 1 = approved
      console.log("Both SMS approvals received.");
      process.exit(0);  // Exit with 0 for success
    } else if (status === 2) {  // 2 = rejected
      console.log("Approval rejected.");
      process.exit(2);  // Exit with 2 for rejection
    } else if (status === 0) {  // 0 = still waiting for approvals
      console.log("Still waiting for approvals.");
      process.exit(1);  // Exit with 1 for pending status
    } else {
      console.log("Unknown status received.");
      process.exit(1);  // Exit with 1 for unknown status
    }
  })
  .catch(error => {
    console.error("Error checking approvals:", error.message || error);
    process.exit(1);  // Exit with 1 on error
  });