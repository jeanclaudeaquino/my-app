const axios = require('axios');

axios.get('http://localhost:3000/check-approval')
  .then(response => {
    if (response.data.approved === true) {
      console.log("Approvals received.");
      process.exit(0);  // Exit with 0 for success
    } else if (response.data.approved === false && response.data.rejected === true) {
      console.log("Approval rejected.");
      process.exit(2);  // Exit with 2 for rejection
    } else {
      console.log("Approvals not yet received.");
      process.exit(1);  // Exit with 1 for pending status
    }
  })
  .catch(error => {
    console.error("Error checking approvals:", error);
    process.exit(1);  // Exit with 1 on error
  });
