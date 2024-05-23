// A list of provinces:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']

// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']

// A list of products with prices:
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]
const provinceSelect = document.getElementById('provinceSelect');
const productList = document.getElementById('productList');

function populateProvinces() {
  provinces.forEach(province => {
    const option = document.createElement('option');
    option.value = province;
    option.textContent = province;
    provinceSelect.appendChild(option);
  });
}

function filterProducts() {
  const selectedProvince = provinceSelect.value;
  const filteredProducts = products.filter(product => product.origin.includes(selectedProvince));
  productList.innerHTML = ''; // Clear previous list

  if (filteredProducts.length > 0) {
    filteredProducts.forEach(product => {
      const listItem = document.createElement('li');
      listItem.textContent = `${product.product} (Price: $${product.price})`;
      productList.appendChild(listItem);
    });
  } else {
    productList.innerHTML = '<li>No products available in this province.</li>';
  }
}

populateProvinces();
provinceSelect.addEventListener('change', filterProducts); // Update products on province change