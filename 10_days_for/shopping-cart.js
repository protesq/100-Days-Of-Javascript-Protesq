// Ürün listesi
const products = [
  { id: 1, name: "Laptop", price: 15000, image: "" },
  { id: 2, name: "Mouse", price: 200, image: "" },
  { id: 3, name: "Klavye", price: 500, image: "" },
  { id: 4, name: "Monitor", price: 3000, image: "" },
  { id: 5, name: "Kulaklık", price: 400, image: "" },
  { id: 6, name: "Mousepad", price: 100, image: "" },
];

// Alışveriş sepeti
const cart = [];

// Sepet toplamını hesaplayan fonksiyon
function calculateTotal() {
  let total = 0;
  
  // for döngüsü ile sepetteki her ürünü dolaş
  for (let i = 0; i < cart.length; i++) {
    const item = cart[i];
    total += item.price * item.quantity;
  }
  
  return total;
}

// Sepet içeriği
function displayCart() {
  const cartDiv = document.getElementById('cart-items');
  const totalDiv = document.getElementById('cart-total');
  
  let cartHTML = '';
  
  for (const item of cart) {
    cartHTML += `
      <div class="cart-item">
        <span>${item.name} - ${item.quantity} adet - ${item.price} TL</span>
        <button onclick="removeFromCart('${item.name}')" class="delete-btn">Sil</button>
      </div>
    `;
  }
  
  cartDiv.innerHTML = cartHTML;
  totalDiv.textContent = `Toplam: ${calculateTotal()} TL`;
}

// Ürünleri görüntüle
function displayProducts() {
  const productsDiv = document.getElementById('products');
  let productsHTML = '';
  
  for (const product of products) {
    productsHTML += `
      <div class="product-card">
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.price} TL</p>
        <button onclick="addToCart('${product.name}', ${product.price}, 1)">Sepete Ekle</button>
      </div>
    `;
  }
  
  productsDiv.innerHTML = productsHTML;
}

// Sepete ürün ekleyen fonksiyon
function addToCart(name, price, quantity) {
  // Ürün zaten sepette var mı kontrol et
  const existingItem = cart.find(item => item.name === name);
  
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({ name, price, quantity });
  }
  
  displayCart();
}

// Sepetten ürün silme fonksiyonu
function removeFromCart(name) {
  const index = cart.findIndex(item => item.name === name);
  if (index > -1) {
    cart.splice(index, 1);
    displayCart();
  }
}

// Sayfa yüklendiğinde
window.onload = function() {
  displayProducts();
  displayCart();
};

// Form ile ürün ekleme
function handleAddToCart() {
  const name = document.getElementById('name').value;
  const price = Number(document.getElementById('price').value);
  const quantity = Number(document.getElementById('quantity').value);
  
  if (!name || !price || !quantity) {
    alert('Lütfen tüm alanları doldurun!');
    return;
  }
  
  addToCart(name, price, quantity);
  
  // Formu temizle
  document.getElementById('name').value = '';
  document.getElementById('price').value = '';
  document.getElementById('quantity').value = '1';
} 