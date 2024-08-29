const select = document.getElementById('cars')
const showModel = document.querySelector('.show-model')
const showPrice = document.querySelector('.show-price')

const carsDb = () => {
    return fetch('cars.json')
        .then(respone => respone.json())
        .then(data => {
            console.log('данные cars:', data)
            return data
        })
        .catch(error => {
            console.log('ошибка', error)
        })
}

const showCars = (car) => {
    if (car) {
        showModel.textContent = `Тачка: ${car.model}`
        showPrice.textContent = `Цена: $${car.price}`
    } else {
        showPrice.textContent = ''
        showModel.textContent = ''
    }
}

select.addEventListener('change', function() {
    const selectBrand = this.value;

    carsDb()
        .then(data => {
            if (data) {
                const selectedCar = data.cars.filter(car => car.brand === selectBrand)[0]
                showCars(selectedCar);
            }
        })
        .catch(error => {
            console.error('ошибка', error)
        });
});