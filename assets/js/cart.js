// Script for Cart page

let loaded = {};

// Get the value of the total cart
let cartTotal = sumCart();

// Show all items in the Cart
loaded.displayCart = function () {
  cart = JSON.parse(localStorage.getItem("cart"));
  if (cart && Object.keys(cart).length === 0 && Object.getPrototypeOf(cart) === Object.prototype) {
    // A jQuery function which contains hiding/showing.
    $('#empty-cart').show();
    $('#cart-page').hide();
  } else {
    $('#cart-page').show();
    $('#empty-cart').hide();
    let table = document.getElementById('table');
    for(const key of Object.keys(cart)){
      let cartRow = document.createElement('tr');
      cartRow.innerHTML = `<tr><td><img src ="${cart[key].image_product}" alt = "${cart[key].name}"></td><td>${cart[key].name}</td><td>R${cart[key].price}</td></tr>`;
      table.appendChild(cartRow);
    };
    // Show the total of the items in the cart
    let total = document.createElement('tr');
    total.innerHTML = `<tr><td></td><td><b>Total:</b></td><td> <b>R${sumCart()}</b></td>`;
    table.appendChild(total);
    let subtotal = document.getElementById('subtotal');
    subtotal.innerHTML = `Cart Total: R${cartTotal}`;
  }
}

// Create a form which allows for “discount coupons”. - only allow if the coupon code "javascript" is used to give 10% off
let couponSubmit = document.getElementById('couponSubmit');
let couponAmt = 0;
couponSubmit.addEventListener('click', function() {
  let couponCode = document.getElementById('couponInput').value;
  if (couponCode == "javascript") {
    // jQuery animation
    $('#couponMsg1').fadeIn(3000);
    $('#couponMsg2').fadeOut(2000);
    couponAmt = 0.1;
    $('#coupon').show();
    $("#coupon").html('Discount: -R' + Math.round((sumCart() * couponAmt) * 100) / 100); 
  } else {
    // jQuery animation
    $('#couponMsg2').fadeIn(3000);
    $('#couponMsg1').fadeOut(2000);
    couponAmt = 0;
    $('#coupon').hide();
  }
  cartTotalAmt();
  return couponAmt;
});

// Create forms to allow a user to select “collection” or “delivery”.
let delMethod = document.getElementById('delMethod');
let delivery = document.getElementById('delivery');
let deliveryCost = 0;
document.addEventListener('change', function () {
  if (delMethod.value == "delivery") {
    deliveryCost = 100;
    $("#delivery").html('Delivery: R' + deliveryCost); 
    $('#additionalDel').show();
  } else if (delMethod.value == "collection") {
    deliveryCost = 0;
    $("#delivery").html('Collection: R' + deliveryCost); 
    $('#additionalDel').hide();
  }
  cartTotalAmt();
  return deliveryCost;
});

// Additional delivery options
let additionalDel = 0;
document.addEventListener('change', function additionalDelivery() {
  if(document.getElementById('priority').checked) {
    additionalDel = 50;
    $("#additional-delivery").html('Priority Delivery: + R' + additionalDel); 
    $('#additional-delivery').show();
  } else if (document.getElementById('sameDay').checked) {
    additionalDel = 100;
    $("#additional-delivery").html('Same Day Delivery: + R' + additionalDel); 
    $('#additional-delivery').show();
  } else {
    additionalDel = 0;
    $('#additional-delivery').hide();
  }
  cartTotalAmt();
  return additionalDel;
});

// Calculate the total value after discount, delivery, additional delivery and before vat
let totalExcl;
function cartTotalAmt() {
  totalExcl = cartTotal - (cartTotal * couponAmt) + deliveryCost + additionalDel;
  $("#totalBefore").html('Subtotal: R' + totalExcl); 
  $("#vat").html('Vat: R' + Math.round((totalExcl * 0.15) * 100) / 100); 
  $("#total").html('Total: R' + Math.round((totalExcl * 1.15) * 100) / 100); 
  return totalExcl;
}

// When clicking confirm order check if a delivery option is selected and then create order and redirect to success
document.getElementById('confirmOrder').addEventListener('click', function () {
  if (delMethod.value == "collection" || delMethod.value == "delivery") {
    window.location = "./success.html";
  } else {
    alert('Please select a delivery method');
  }
});

// Load the function on page load
loaded.displayCart();