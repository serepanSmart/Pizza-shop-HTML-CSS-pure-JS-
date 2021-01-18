const readyOrder = document.getElementById('readyOrder');
const toAddr = document.getElementById('toAddr');
const orderInfo = JSON.parse(localStorage.getItem('orderInfo')) ?
    JSON.parse(localStorage.getItem('orderInfo')) : [];

const totalCount = JSON.parse(localStorage.getItem('totalCount')) || [];
const totalPrice = JSON.parse(localStorage.getItem('totalPrice')) || [];

toAddr.onclick = function (e) {
    history.back();
}

readyOrder.innerHTML = `<h1>Общее количество: ${totalCount}</h1>
  <h1>Общая цена: ${totalPrice}</h1>
  <h1>Имя покупателя: ${orderInfo.fullName}</h1>
  <h1>Электронный адрес: ${orderInfo.email}</h1>
  <h1>Телефон: ${orderInfo.tel}</h1>
  <h1>Тип доставки: ${orderInfo.typeOdDelivery}</h1>
  <h1>Организация: ${orderInfo.address.organization}</h1>
  <h1>Адрес доставки: <br>
  Город  ${orderInfo.address.city}</h1>
  <h1>Улица  ${orderInfo.address.street}</h1>
  <h1>Дом  ${orderInfo.address.house}</h1>`