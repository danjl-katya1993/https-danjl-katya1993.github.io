// Переменные игры
let lemonadeCount = 0; // Количество стаканов лимонада
let autoclickerLevel = 0; // Уровень автокликера
let autoclickerPower = 1; // Сила автокликера (стаканов в секунду)

// Получение элементов DOM
const lemonadeCountElement = document.getElementById('lemonadeCount');
const autoclickerLevelElement = document.getElementById('autoclickerLevel');
const autoclickerPowerElement = document.getElementById('autoclickerPower');
const lemonElement = document.getElementById('lemon');
const buyAutoclickerButton = document.getElementById('buyAutoclicker');
const shopMessageElement = document.getElementById('shopMessage');

// Функция обновления отображения
function updateDisplay() {
    lemonadeCountElement.textContent = lemonadeCount;
    autoclickerLevelElement.textContent = autoclickerLevel;
    autoclickerPowerElement.textContent = autoclickerPower;
}

// Обработчик клика по лимону
lemonElement.addEventListener('click', function() {
    lemonadeCount++;
    updateDisplay();
});

// Покупка автокликера
buyAutoclickerButton.addEventListener('click', function() {
    const cost = 10; // Стоимость автокликера в стаканах
    if (lemonadeCount >= cost) {
        lemonadeCount -= cost;
        autoclickerLevel++;
        // Увеличиваем силу автокликера каждые 5 уровней
        if (autoclickerLevel % 5 === 0) {
            autoclickerPower++;
        }
        updateDisplay();
        shopMessageElement.textContent = 'Автокликер куплен!';
        setTimeout(() => { shopMessageElement.textContent = ''; }, 2000);
    } else {
        shopMessageElement.textContent = 'Недостаточно стаканов!';
        setTimeout(() => { shopMessageElement.textContent = '', 2000 });
    }
});

// Автокликер — добавляет стаканы каждую секунду
setInterval(function() {
    if (autoclickerLevel > 0) {
        lemonadeCount += autoclickerPower * autoclickerLevel;
        updateDisplay();
    }
}, 1000);

// Инициализация игры
updateDisplay();
