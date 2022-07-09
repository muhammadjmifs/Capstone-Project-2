// Task 15 - Capstone Project
// Create a functional shopping cart for your online store.

// Constructor function that will be used to create all products
function Product(code, name, image_product, description, price, specification1, specification2, specification3, specification4) {
  this.code = code;
  this.name = name;
  this.image_product = image_product;
  this.description = description;
  this.price = price;
  this.specifications = {
    specification1: specification1,
    specification2: specification2,
    specification3: specification3,
    specification4: specification4
  };
};  

// Product Details
let product1 = new Product (
  "A001",
  "Baby Bottle",
  "../assets/images/baby_bottle.jpeg",
  "120ml baby bottle. Comes in 4 colours.",
  12,
  "Colors: Red, blue, Green, Yellow, Red",
  "Size: 120ml",
  "Material: Plastic",
  "Ages: 0 - 3 years"
);

let product2 = new Product (
  "A002",
  "Black Pepper",
  "../assets/images/black_pepper.jpeg",
  "A bag of delicious coarse black pepper to provide spice for the food. Perfect for your cooking requirements.",
  32,
  "Color: Black",
  "Coarse: 5mm",
  "Bag Size: 150g",
  "Expiry: 31/12/2023"
);

let product3 = new Product (
  "A003",
  "Butter Ghee",
  "../assets/images/butter_ghee.jpeg",
  "Finely produced to provide the perfect butter ghee. It is unsalted and will provide the perfect texture for your cooking.",
  99,
  "Type: Unsalted",
  "Size: 500g",
  "Expiry: 31/12/2023",
  ""
);

let product4 = new Product (
  "A004",
  "Face Mask",
  "../assets/images/face_mask.jpeg",
  "Blue Medical Grade face masks to protect your and your family from all air borne viruses",
  50,
  "Color: Blue",
  "Pack Size: 10pcs",
  "Material: Cotton",
  "Strength: Medium"
);

let product5 = new Product (
  "A005",
  "Maize Snack",
  "../assets/images/maize_snack.jpeg",
  "Enjoy a bag of tasty bbq maize chips. Perfect for your late night snacks.",
  2,
  "Main ingredient: Maize",
  "Size: 200g",
  "Flavour: BBQ",
  "Expiry: 31/12/2023"
);

let product6 = new Product (
  "A006",
  "Masala Mix",
  "../assets/images/masala_mix.jpeg",
  "A mix of masala to provide the perfect spice for your cooking. Make yummy indian food at home.",
  22,
  "Types: red, green, brown masala",
  "Size: 50g each",
  "Expiry: 31/12/2023",
  ""
);

// Create an array of Products
let arrayOfProducts = [product1, product2, product3, product4, product5, product6];

//On 1st load Set items for local storage
$(document).ready(function() {
  if (localStorage.getItem("hasCodeRunBefore") === null) {
     localStorage.setItem("cart", JSON.stringify({}));
     localStorage.setItem("hasCodeRunBefore", true);
  } 
});

// Function to add products when add to cart button is cliked or when quick add button is clicked and store in local storage
function addCart(product_key) {
  let cart = JSON.parse(localStorage.getItem("cart"));
  let product = arrayOfProducts[product_key];
  if (cart[product.code] !== undefined) {
    alert(product.name + ' has already been added to cart.')
  } else {
    cart[product.code] = product;
    // When an item is added, an alert should tell the user what the current total is.
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.name} has been added to cart.
    Your total amount is R${sumCart()}`);
  } 
}

// Calculate Total amount of cart and store in local storage
function sumCart() {
  let cart = JSON.parse(localStorage.getItem("cart"));
  let sum = 0;
  for(const key of Object.keys(cart)){
    sum += cart[key].price;
  }; 
  return sum;
}

// jQuery dropdown for about page
$('.accordion-element').hide();

  $('.btn-accordion').hover(function () {
    $('.accordion-element').show();
      }, 
    function () {
      $('.accordion-element').hide();
  }
  );

// jQuery Chained effect
  function backgroundColor() {
    $('body').css('background-color', 'rgb(240, 227, 227)');
  };
  function animate() {
    $(".container").fadeIn(2000);
  };
  $(document).ready(function() {
      backgroundColor();
      animate();
  });