// List of provinces
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State'];

// List of names
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie'];

// List of products with prices
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
];


// Logs each name
names.forEach(name => console.log(name));

// Logs each province
provinces.forEach(province => console.log(province));

// Log each name with its matching province
names.forEach((name, index) => {
  console.log(`${name} (${provinces[index]})`);
});

// Create a new array of province names in all uppercase
const uppercaseProvinces = provinces.map(province => province.toUpperCase());
console.log(uppercaseProvinces);

// CreateS a new array that contains the length of each name
const nameLengths = names.map(name => name.length);
console.log(nameLengths);


// Alphabetically sort the provinces
const sortedProvinces = [...provinces].sort();
console.log(sortedProvinces);


// Remove provinces containing "Cape" and log the count of remaining provinces
const filteredProvinces = provinces.filter(province => !province.includes('Cape'));
console.log(filteredProvinces.length);

// Creates a boolean array to determine if a name contains the letter 'S'
const containsS = names.map(name => name.includes('S'));
console.log(containsS);

// Transform the names array into an object mapping names to their respective provinces
const nameToProvinceMap = names.reduce((obj, name, index) => {
  obj[name] = provinces[index];
  return obj;
}, {});
console.log(nameToProvinceMap);


// Log each name and province with matching format "Name (Province)"
console.log(names.map((name, index) => `${name} (${provinces[index]})`));

// Logs the new array of province names in all uppercase
console.log(provinces.map(province => province.toUpperCase()));

// Logs the array of name lengths
console.log(names.map(name => name.length));

// Logs the alphabetically sorted provinces
console.log([...provinces].sort());

// Logs the count of remaining provinces after filtering out those containing "Cape"
console.log(provinces.filter(province => !province.includes('Cape')).length);

// Log the boolean array for names containing 'S'
console.log(names.map(name => name.includes('S')));

// Log the object mapping names to their respective provinces
console.log(names.reduce((obj, name, index) => {
  obj[name] = provinces[index];
  return obj;
}, {}));