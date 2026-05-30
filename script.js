// Данные о играх
const gamesData = [
    {
        id: 1,
        title: "Мир Денди",
        description: "Классическая ретро-игра в стиле 8-битных консолей",
        icon: "🕹️",
        folder: "dendy-world",
        category: "dendy"
    }
];

// Генерируем остальные 99 игр
for (let i = 2; i <= 100; i++) {
    gamesData.push({
        id: i,
        title: `Игра №${i}`,
        description: `Увлекательное приключение №${i} с красочной графикой`,
        icon: getRandomIcon(),
        folder: `game${i}`,
        category: getRandomCategory()
    });
}

// Служебные функции
function getRandomIcon() {
    const icons = ["🎮", "🏀", "⚽", "🏸", "🎯", "🛸", "🚀", "🦸", "🧙", "🤹"];
    return icons[Math.floor(Math.random() * icons.length)];
}

function getRandomCategory() {
    const categories = ["adventure", "puzzle", "arcade", "strategy", "sports"];
    return categories[Math.floor(Math.random() * categories.length)];
}

// Функция для создания карточек игр
function createGameCards() {
    const gamesGrid = document.getElementById('gamesGrid');
    
    gamesData.forEach(game => {
        const card = document.createElement('div');
        card.className = `game-card ${game.category}`;
        card.innerHTML = `
            <div class="game-icon">${game.icon}</div>
            <h3 class="game-title">${game.title}</h3>
            <p class="game-description">${game.description}</p>
        `;
        
        card.addEventListener('click', () => playGame(game.folder));
        gamesGrid.appendChild(card);
    });
}

// Функция запуска игры
function playGame(gameFolder) {
    // В реальном проекте здесь будет переход на страницу игры
    alert(`Запуск игры из папки: ${gameFolder}`);
    // window.location.href = `games/${gameFolder}/index.html`;
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', createGameCards);
