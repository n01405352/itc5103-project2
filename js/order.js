function submitOrder() {
    var burgerPrice = parseFloat(document.getElementById("burger").value);
    var drinkPrice = parseFloat(document.getElementById("drink").value);
    var saladPrice = parseFloat(document.getElementById("salad").value)
    var friesPrice = parseInt(document.getElementById("fries").value);
    var quantity = parseInt(document.getElementById("quantity").value);
    var totalCost = (burgerPrice + drinkPrice + saladPrice+friesPrice) * quantity;
    var deliveryTime = document.getElementById("deliveryTime").value;
    document.getElementById("totalCost").innerText = "Total Cost: $" + totalCost.toFixed(2);
    return false; // Prevent form submission
  }
  function submitOrder() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const postcode = document.getElementById('postcode').value.trim();
    const address = document.getElementById('address').value.trim();

    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Regular expression for phone number validation (###-###-#### format)
    const phoneRegex = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;

    if (!name || !email || !phone || !postcode || !address) {
        alert('Please fill in all fields.');
        return false;
    }

    if (!emailRegex.test(email)) {
        alert('Invalid email address.');
        return false;
    }

    if (!phoneRegex.test(phone)) {
        alert('Invalid phone number. Please use the format: XXX-XXX-XXXX');
        return false;
    }

    return true; // Form is valid
}

document.getElementById('orderForm').addEventListener('submit', function(event) {
    if (!validateForm()) {
        event.preventDefault(); // Prevent form submission if validation fails
    }
});

