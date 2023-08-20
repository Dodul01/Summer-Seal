let totalPrice = 0;
let discount = 0;
let total = 0;
let cartItems = 0;

const makePurchaseBtn = document.getElementById('make-purchase-btn');
const resetCartBtn = document.getElementById('reset');

function cart(productName, productPrice) {
  const cartProductsContainer = document.getElementById('cart-products-container');
  const li = document.createElement('li');
  cartItems++;
  cartProductsContainer.appendChild(li);
  li.classList.add('font-semibold')
  li.classList.add('text-lg')
  li.innerText = cartItems + '. ' + productName;
}

function getProductName(id) {
  const card = document.getElementById(id);
  const productName = card.childNodes[3].childNodes[3].innerText;

  return productName;
}

function getProductPrice(id) {
  const card = document.getElementById(id);
  const productPrice = parseFloat(card.childNodes[3].childNodes[5].childNodes[1].innerText);
  
  return productPrice;
}

function setText(id, value) {
  const element = document.getElementById(id);
  element.innerText = value.toFixed(2);
  disabledBtn(value)
}

function disabledBtn(value) {
  const makePurchaseBtn = document.getElementById('make-purchase-btn');
  const applyCuponeBtn = document.getElementById('apply-cupone-btn');

  if(value > 0){
    makePurchaseBtn.removeAttribute('disabled');
  }
  
  if(value >= 200){
    applyCuponeBtn.removeAttribute('disabled');
  }

}

resetCartBtn.addEventListener('click', function(){
  const cartProductsContainer = document.getElementById('cart-products-container');
  const makePurchaseBtn = document.getElementById('make-purchase-btn');
  const applyCuponeBtn = document.getElementById('apply-cupone-btn');
  
  total = 0;
  discount = 0;
  totalPrice = 0;
  cartItems = 0;

  setText('total-price', totalPrice);
  setText('discount', discount);
  setText('total', total);

  cartProductsContainer.innerHTML = ' ';

  makePurchaseBtn.setAttribute('disabled', '');
  applyCuponeBtn.setAttribute('disabled', '');
})