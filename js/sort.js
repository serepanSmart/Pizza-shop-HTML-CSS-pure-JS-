// сотрировка по имени и другим парамеирам


input.addEventListener('input', function (event) {
    pizzasContainer.innerHTML = "";
    const value = event.target.value.toLocaleLowerCase().replace(' ', '');
    const findedPizzas = pizzaList.filter(pizza => {
        return pizza.name.replace(' ', '').toLocaleLowerCase().includes(value) ||
            pizza.composition.find(compose => compose.toLocaleLowerCase().includes(value) ||
                pizza.price.toString().includes(value));
    })
    renderPizzas(findedPizzas);
});

// сотрировка по диапазону цен 

const lowerPrice = document.getElementById('lowerPrice');
const highPrice = document.getElementById('highPrice');
const evalPrice = document.getElementById('evalPrice');
const evalPriceReset = document.getElementById('evalPriceReset');

evalPrice.addEventListener('click', function (event) {
    pizzasContainer.innerHTML = "";
    let value = event.target.value;
    const findedPizzas = pizzaList.filter(pizza => {
        if (pizza.price >= lowerPrice.value && pizza.price <= highPrice.value) {
            pizzasContainer.innerHTML = "";
            return pizza;
        }
    })
    renderPizzas(findedPizzas);
});

evalPriceReset.addEventListener('click', function () {
    pizzasContainer.innerHTML = "";
    renderPizzas(pizzaList);
})

// сотрировка по диапазону калорий 

const lowerCalorie = document.getElementById('lowerCalorie');
const highCalorie = document.getElementById('highCalorie');
const evalCalorie = document.getElementById('evalCalorie');
const evalCalorieReset = document.getElementById('evalCalorieReset');

evalCalorie.addEventListener('click', function (event) {
    pizzasContainer.innerHTML = "";
    let value = event.target.value;
    const findedPizzas = pizzaList.filter(pizza => {
        if (highCalorie.value <= lowerCalorie.value || highCalorie.value === null) {
            return pizzasContainer.innerHTML = "sdsd";

        };
        if (pizza.caloricity >= lowerCalorie.value && pizza.caloricity <= highCalorie.value) {
            pizzasContainer.innerHTML = "";
            return pizza;
        }
    })
    renderPizzas(findedPizzas);
});

evalCalorieReset.addEventListener('click', function () {
    pizzasContainer.innerHTML = "";
    renderPizzas(pizzaList);
})

//  сортировка по возрастанию - убыванию

let onSelect = function (value) {
    switch (value) {
        case '1':
            pizzaList.filter(pizza => !!pizzaList.find(pizza => pizzaList.id == pizza.id));
            return renderPizzas(pizzaList);
        case '2':
            pizzaList.sort((a, b) => {
                if (a.price > b.price) return 1;
                if (a.price < b.price) return -1;
                if (a.price == b.price) return 0;
            });
            return renderPizzas(pizzaList);
        case '3':
            pizzaList.sort((a, b) => {
                if (a.price > b.price) return -1;
                if (a.price < b.price) return 1;
                if (a.price == b.price) return 0;
            });
            return renderPizzas(pizzaList);
    }
}










