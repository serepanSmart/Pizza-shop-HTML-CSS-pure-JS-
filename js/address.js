const toOrder = document.getElementById('toOrder');
const org = document.getElementById('org');
const city = document.getElementById('city');
const street = document.getElementById('street');
const house = document.getElementById('house'); 
const toCustomer = document.getElementById('toCustomer'); 


toCustomer.onclick = function (e) {
  history.back();
}

const orderInfo = JSON.parse(localStorage.getItem('orderInfo')) ?
  JSON.parse(localStorage.getItem('orderInfo')) : [];

deliverySelect.addEventListener('change', (e) => {
  orderInfo.typeOdDelivery = e.target.value;
})

org.addEventListener('input', (e) => {
  orderInfo.address.organization = e.target.value;
})

city.addEventListener('input', (e) => {
  orderInfo.address.city = e.target.value;
})

street.addEventListener('input', (e) => {
  orderInfo.address.street = e.target.value;
})

house.addEventListener('input', (e) => {
  orderInfo.address.house = e.target.value;
})

toOrder.addEventListener('click', (e) => {
  localStorage.setItem('orderInfo', JSON.stringify(orderInfo));
  // localStorage.setItem('pizzas', JSON.stringify(productsArr));
  window.open('ready_order.html', '_self');
  console.log({ id: `${new Date().getTime()}${orderInfo.fullName.slice(2, 5)}`, ...orderInfo })
})