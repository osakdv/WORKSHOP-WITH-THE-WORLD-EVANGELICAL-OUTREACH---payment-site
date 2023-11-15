const paymentForm = document.getElementById('give-form');
const firstNameEl = document.getElementById("firstName")
const lastNameEl = document.getElementById("lastName")
const phoneNumEl = document.getElementById("phoneNum")
const amountListEl = document.querySelectorAll("ul li")
const customAmountEl = document.getElementById("custom-amount")

// form validation 
let firstName;
let lastName;
let phoneNumber;
let amount;

// Form validation required

paymentForm.addEventListener('submit', payWithPaystack, false);
function payWithPaystack(e) {
    e.preventDefault()
  var handler = PaystackPop.setup({
    key: 'pk_test_b6ea880c07f01a64263425a791f9a4396062fd84', // Replace with your public key
    email: "test@email.com",
    amount: 200 * 100, // the amount value is multiplied by 100 to convert to the lowest currency unit
    currency: 'NGN', // Use GHS for Ghana Cedis or USD for US Dollars
    ref: 'YOUR_REFERENCE', // Replace with a reference you generated
    callback: function(response) {
      //this happens after the payment is completed successfully
      var reference = response.reference;
      alert('Payment complete! Reference: ' + reference);
      // Make an AJAX call to your server with the reference to verify the transaction
    },
    onClose: function() {
      alert('Transaction was not completed, window closed.');
    },
  });
  handler.openIframe();
}
