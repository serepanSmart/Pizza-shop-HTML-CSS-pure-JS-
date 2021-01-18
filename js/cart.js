const pizzasContainer = document.querySelector('.main');
const infoContainer = document.querySelector('.info');
const deliverySelect = document.getElementById('deliverySelect');
const promocode = document.getElementById('promocode');
const btnPromo = document.getElementById('btnPromo');
const btnPromoClean = document.getElementById('btnPromoClean');
const toShop = document.getElementById('toShop');

const toCustomer = document.getElementById('toCustomer')
const clear = document.getElementById('clear')


const productsArr = JSON.parse(localStorage.getItem('productsArr')) ?
  JSON.parse(localStorage.getItem('productsArr')) : [];

const orderInfo = {

  fullName: '',
  email: '',
  tel: +'',
  address: {
    organization: '',
    city: 'Харьков',
    street: '',
    house: +'',
  },
  typeOdDelivery: 'Курьер'
};

const createPizza = (pizzaObj) => {

  const pizzaElement = document.createElement('div');
  pizzaElement.classList.add('pizza');
  pizzaElement.id = pizzaObj.id;

  const h1Element = document.createElement('h1');
  h1Element.innerText = pizzaObj.name;
  pizzaElement.append(h1Element);

  const ulElement = document.createElement('ul');
  pizzaObj.composition.forEach(compose => {
    const li = document.createElement('li');
    li.innerText = compose;
    ulElement.append(li);
  })
  pizzaElement.append(ulElement);

  const pElement = document.createElement('p');
  pElement.innerText = pizzaObj.price + ' $';
  pizzaElement.append(pElement);

  const addElement = document.createElement('button');
  addElement.innerText = '+';
  addElement.onclick = function (e) {
    const index = productsArr.findIndex(product => product.id === pizzaObj.id);
    productsArr[index].count += 1;
    localStorage.setItem('productsArr', JSON.stringify(productsArr));
    renderPizzas();
  }
  pizzaElement.append(addElement)
  const removeElement = document.createElement('button');
  removeElement.innerText = '-';
  removeElement.onclick = function (e) {
    const index = productsArr.findIndex(product => product.id === pizzaObj.id);
    productsArr[index].count = productsArr[index].count == 0 ? 0 : --productsArr[index].count;
    localStorage.setItem('productsArr', JSON.stringify(productsArr));
    renderPizzas();
  }
  pizzaElement.append(removeElement);

  const countElement = document.createElement('p');
  countElement.innerText = `Count: ${pizzaObj.count} pts. , Price: ${pizzaObj.price * pizzaObj.count} $`;
  pizzaElement.append(countElement);

  pizzasContainer.append(pizzaElement)
}


// Отрисовка пицц в корзине, с кнопками промокода и очистки

const renderPizzas = () => {
  pizzasContainer.innerHTML = "";
  let modidyPizzaArr = productsArr.map(product => {
    let pizza = pizzaList.find(pizza => pizza.id === product.id);
    return { ...pizza, count: product.count };
  });
  let totalCount = 0;
  let totalPrice = 0;

  modidyPizzaArr.forEach(pizza => {
    totalCount += pizza.count;
    totalPrice += pizza.count * pizza.price;
    createPizza(pizza);
  });

  infoContainer.innerHTML = `<h1>Total count: ${totalCount} pts.</h1>
                              <h1>Total price: ${totalPrice} $</h1>`;


  // применяем промокод

  btnPromo.addEventListener('click', function (e) {
    let value = +promocode.value;
    totalPrice = Math.floor(totalPrice * 0.85);
    if (promo.find(val => val === value)) {
      infoContainer.innerHTML = `<h1>Total count: ${totalCount} pts.</h1>
                                    <h1>Total price: ${totalPrice} $</h1>`
                                    btnPromo.disabled = true;
                                    btnPromo.style.background = '#607d8b';
    };
  });

  // очистка промокода

  btnPromoClean.addEventListener('click', function (e) {
    infoContainer.innerHTML = '';
    infoContainer.innerHTML = `<h1>Total count: ${totalCount} pts.</h1>
                                    <h1>Total price: ${totalPrice} $</h1>`;
  });


  // Переход на страницу с данными клиента
  toCustomer.addEventListener('click', (e) => {
    localStorage.setItem('orderInfo', JSON.stringify(orderInfo));
    localStorage.setItem('totalPrice', JSON.stringify(totalPrice))
    localStorage.setItem('totalCount', JSON.stringify(totalCount))
    window.open('customer.html', '_self');
  });

};
renderPizzas();

// кнопка с history

toShop.addEventListener('click', function (e) {
  window.open('index.html', '_self');
})


// Очистка корзины и localStorage

clear.addEventListener('click', function (e) {
  productsArr.splice(0, productsArr.length);
  localStorage.clear();
  pizzasContainer.innerHTML = '';
  infoContainer.innerHTML = `<h1>Total count: 0</h1>
                              <h1>Total price: 0</h1>`
})
