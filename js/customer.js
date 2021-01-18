const fullName = document.getElementById('fullName')
const email = document.getElementById('email')
const tel = document.getElementById('tel')
const toAddress = document.getElementById('toAddress')
const toBasket = document.getElementById('toBasket')
const orderInfo = JSON.parse(localStorage.getItem('orderInfo')) ?
    JSON.parse(localStorage.getItem('orderInfo')) : [];

fullName.addEventListener('input', (e) => {
    orderInfo.fullName = e.target.value;
})

email.addEventListener('input', (e) => {
    orderInfo.email = e.target.value;
})

tel.addEventListener('input', (e) => {
    orderInfo.tel = e.target.value;
})

toAddress.addEventListener('click', (e) => {
    localStorage.setItem('orderInfo', JSON.stringify(orderInfo));
    window.open('address.html', '_self');
})

toBasket.addEventListener('click', (e) => {
    window.open('cart.html', '_self');
})

