// Add event listener to submit button
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const vendorName = document.getElementById('vendor-name').value;
    const vendorMobileNo = document.getElementById('vendor-mobile-no').value;
    const vendorEmailId = document.getElementById('vendor-email-id').value;
    const category = document.getElementById('category').value;
    const product = document.getElementById('product').value;
    const quantity = document.getElementById('quantity').value;
    const price = document.getElementById('price').value;
  
    // Add logic to save vendor details to database or display them on the page
  });
  