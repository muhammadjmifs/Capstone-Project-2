// Script for Catalog page

let loaded = {};
loaded.addProduct = function() {
  // Create a product for each item in the array
  arrayOfProducts.forEach(function(product, product_key) {
    const ptest = document.getElementById('ptest');
    const div = document.createElement('div');
    div.setAttribute('class', 'product-catalog');
    // Allow a “quick add to cart” from the catalogue page.
    div.innerHTML =
    `<a href="javascript:void(0)" onclick = "displayProduct(${product_key})">
    <img src="${product.image_product}" class="img-fluid img-thumbnail" alt="${product.name}">
        <a class = "cart-icon" href="javascript:void(0)" onclick="addCart(${product_key})""><i class="fa fa-shopping-cart"></i></a>
        <p>${product.description}</p>
      </a>
      <div class="d-grid">
        <button class="btn btn-success" type="button" onclick = "displayProduct(${product_key})">View Product</button>
      </div>`
    ptest.appendChild(div);
  });
}

// Function to load the products
loaded.addProduct();

// Function to load individual product when product is clicked from catalog
function displayProduct(product_key) {
  const product = arrayOfProducts[product_key];
  $('#products').hide();
  const productItem = document.getElementById('product-container');
  const divItem = document.createElement('div');
  divItem.innerHTML = 
  `<small>All Products -> ${product.name}</small>
  <div class="single-product container mt-3">
  <div class="row mt-6 row-eq-height">
    <div class="col-sm h-100">
      <img src="${product.image_product}" class="img-fluid img-thumbnail" alt="${product.name}">
    </div>
  <div class="col-sm h-100">
    <h4>Description:</h4>
    <p>${product.description}</p>
    <h4>Specifications:</h4>
    <ul>
      <li>${product.specifications.specification1}</li>
      <li>${product.specifications.specification2}</li>
      <li>${product.specifications.specification3}</li>
      <li>${product.specifications.specification4}</li>
    </ul>
    <h4>Price: R${product.price}</h4>
    <!-- Padding for all images and buttons. -->
    <div class="d-grid mt-4">
      <button class="btn btn-success" type="button" onclick="addCart(${product_key})">Add to Cart</button>
    </div>
  </div>
  </div>
 </div>`
 productItem.appendChild(divItem);
}
