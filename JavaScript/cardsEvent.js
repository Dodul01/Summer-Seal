const card1 = document.getElementById('card1');
const card2 = document.getElementById('card2');
const card3 = document.getElementById('card3');
const card4 = document.getElementById('card4');
const card5 = document.getElementById('card5');
const card6 = document.getElementById('card6');

card1.addEventListener('click', function() {
  const productName = getProductName('card1');
  const productPrice = getProductPrice('card1');

  totalPrice += productPrice;
  
  setText('total-price', totalPrice);

  cart(productName, productPrice);
})

card2.addEventListener('click', function () {
  const productName = getProductName('card2');
  const productPrice = getProductPrice('card2');

  totalPrice += productPrice
  setText('total-price', totalPrice);

  cart(productName, productPrice);
})

card3.addEventListener('click', function () {
  const productName = getProductName('card3');
  const productPrice = getProductPrice('card3');

  totalPrice += productPrice
  setText('total-price', totalPrice);

  cart(productName, productPrice);
})

card4.addEventListener('click', function () {
  const productName = getProductName('card4');
  const productPrice = getProductPrice('card4');

  totalPrice += productPrice
  setText('total-price', totalPrice);

  cart(productName, productPrice);
})

card5.addEventListener('click', function () {
  const productName = getProductName('card5');
  const productPrice = getProductPrice('card5');

  totalPrice += productPrice
  setText('total-price', totalPrice);

  cart(productName, productPrice);
})

card6.addEventListener('click', function () {
  const productName = getProductName('card6');
  const productPrice = getProductPrice('card6');

  totalPrice += productPrice
  setText('total-price', totalPrice);
  cart(productName, productPrice);
})