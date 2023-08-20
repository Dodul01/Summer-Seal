const applyCuponBtn = document.getElementById('apply-cupone-btn');
const couponInputFild = document.getElementById('coupon-input-fild');

applyCuponBtn.addEventListener('click', function(){
  const cuponeInputValue = couponInputFild.value;
  const cuponeCode = 'SELL200';

  if(cuponeInputValue === cuponeCode){
    const discountPrice = calculatePercentage(totalPrice, 20);
    const discountElement = document.getElementById('discount');
    const totalElement = document.getElementById('total');

    total = totalPrice - discountPrice;

    totalElement.innerText = total.toFixed(2);
    discountElement.innerText = discountPrice.toFixed(2);
  }else{
    alert('Wrong Coupon Code!!!');
  }

  couponInputFild.value = '';
})

function calculatePercentage(total, percentage){
  return (total / 100) * percentage;
}