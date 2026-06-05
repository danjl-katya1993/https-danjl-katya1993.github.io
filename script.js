class SupermarketSimulator {
    constructor() {
        this.money = 1000;
        this.level = 1;
        this.reputation = 50;
        this.cashiers = 0;
        this.stockers = 0;

        this.shelves = document.getElementById('shelves');
        this.customersContainer = document.getElementById('customers');
        this.trash = document.getElementById('trash');
        this.productsList = document.getElementById('products-list');

        this.init();
    }

    init() {
        this.createShelves();
        this.createProductsList();
        this.setupEventListeners();
        this.startCustomerSpawner();
    }

    createShelves() {
        for (let i = 0; i < 5; i++) {
            const shelf = document.createElement('div');
            shelf.className = 'shelf';
            shelf.id = `shelf-${i}`;
            this.shelves.appendChild(shelf);
        }
    }

    createProductsList() {
        const products = [
            { name: 'Молоко', price: 50, cost: 30 },
            { name: 'Хлеб', price: 30, cost: 15 },
            { name: 'Яйца', price: 80, cost: 50 },
            { name: 'Сыр', price: 200, cost: 120 }
        ];

        products.forEach(product => {
            const productEl = document.createElement('div');
            productEl.textContent = `${product.name} (+${product.price} руб.)`;
            productEl.dataset.product = JSON.stringify(product);
            product
