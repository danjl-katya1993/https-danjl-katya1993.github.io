* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    overflow: hidden;
}

.game-container {
    position: relative;
    width: 100vw;
    height: 100vh;
}

.ui-panel {
    position: absolute;
    top: 10px;
    left: 10px;
    background: rgba(255, 255, 255, 0.9);
    padding: 15px;
    border-radius: 10px;
    z-index: 10;
}

.stats div {
    margin-bottom: 5px;
    font-weight: bold;
}

.actions button {
    display: block;
    margin: 5px 0;
    padding: 8px 12px;
    background: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.store {
    position: relative;
    width: 100%;
    height: 70vh;
    background: #f0f8ff;
    border: 2px solid #333;
    margin-top: 20px;
}

.shelves {
    position: absolute;
    bottom: 20px;
    width: 100%;
    display: flex;
    justify-content: space-around;
}

.shelf {
    width: 18%;
    height: 120px;
    background: #cd853f;
    border: 2px solid #8b4513;
    position: relative;
}

.product {
    position: absolute;
    width: 40px;
    height: 40px;
    background: #ff6b6b;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    color: white;
    cursor: pointer;
}

.box {
    position: absolute;
    width: 60px;
    height: 60px;
    background: #f4a261;
    border: 2px dashed #e76f51;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size:
