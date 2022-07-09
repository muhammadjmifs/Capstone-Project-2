// Script for the success page

$(document).ready(function () {
  confirmOrder();
});

function confirmOrder() {
  let success = document.getElementById('success');
  let successP = document.createElement('p');
  successP.innerHTML = 'Your order has been succesfully created and your order number is ' + keyword();
  success.appendChild(successP);
}

// Generate a keyword for the order reference number
let reference = '';
function keyword () { 
  const d = new Date();
  reference = 'INV' + '-' + d.getDate() + d.getMonth() + d.getFullYear() + '-' + Math.floor(Math.random() * 1000);
  return reference;
}