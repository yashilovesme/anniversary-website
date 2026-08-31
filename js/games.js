/* ===========================
   ANNIVERSARY WEBSITE - GAMES JS
   =========================== */

// Game state
let gameState = {
    heartCatcher: {
        active: false,
        score: 0,
        timeLeft: 30,
        targetScore: 10
    },
    memoryMatch: {
        active: false,
        cards: [],
        flipped: [],
        matched: [],
        moves: 0,
        pairsFound: 0
    },
    hiddenHeart: {
        found: false,
        clicks: 0
    }
};

// Initialize games when page loads
document.addEventListener('DOMContentLoaded', function() {
    initHeartCatcherGame();
    initMemoryMatchGame();
    initHiddenHeartGame();
});

// ===========================
// HEART CATCHER GAME
// ===========================

function initHeartCatcherGame() {
    const gameBtn = document.getElementById('heartGameBtn');
    
    if (!gameBtn) return;

    gameBtn.addEventListener('click', startHeartCatcherGame);
}

function startHeartCatcherGame() {
    gameState.heartCatcher.active = true;
    gameState.heartCatcher.score = 0;
    gameState.heartCatcher.timeLeft = 30;
    
    const gameContainer = document.getElementById('heartGame');
    const gameBtn = document.getElementById('heartGameBtn');
    const scoreDisplay = document.getElementById('heartScore');
    const timerDisplay = document.getElementById('heartTimer');
    const messageDisplay = document.getElementById('heartGameMessage');
    
    if (!gameContainer || !gameBtn) return;

    // Clear previous content
    gameContainer.innerHTML = '';
    messageDisplay.textContent = '';
    gameBtn.disabled = true;
    gameBtn.textContent = 'Game Running...';

    // Update displays
    scoreDisplay.textContent = '0';
    timerDisplay.textContent = '30';

    // Timer countdown
    const timerInterval = setInterval(() => {
        gameState.heartCatcher.timeLeft--;
        timerDisplay.textContent = gameState.heartCatcher.timeLeft;

        if (gameState.heartCatcher.timeLeft <= 0) {
            clearInterval(timerInterval);
            endHeartCatcherGame();
        }
    }, 1000);

    // Generate hearts
    const spawnHearts = setInterval(() => {
        if (!gameState.heartCatcher.active) {
            clearInterval(spawnHearts);
            return;
        }

        spawnHeart(gameContainer, scoreDisplay);
    }, 600);

    // Store interval ID for cleanup
    gameState.heartCatcher.timerInterval = timerInterval;
    gameState.heartCatcher.spawnInterval = spawnHearts;
}

function spawnHeart(container, scoreDisplay) {
    if (!gameState.heartCatcher.active) return;

    const heart = document.createElement('div');
    heart.className = 'game-heart';
    heart.textContent = '♡';
    
    const x = Math.random() * (container.clientWidth - 40);
    const y = Math.random() * (container.clientHeight - 40);
    
    heart.style.left = x + 'px';
    heart.style.top = y + 'px';
    
    heart.addEventListener('click', function(e) {
        e.stopPropagation();
        gameState.heartCatcher.score++;
        scoreDisplay.textContent = gameState.heartCatcher.score;
        
        // Celebration animation
        heart.style.animation = 'none';
        heart.style.fontSize = '3rem';
        heart.style.color = '#FF69B4';
        
        setTimeout(() => heart.remove(), 200);

        if (gameState.heartCatcher.score >= gameState.heartCatcher.targetScore) {
            gameState.heartCatcher.active = false;
            clearInterval(gameState.heartCatcher.timerInterval);
            clearInterval(gameState.heartCatcher.spawnInterval);
            endHeartCatcherGame(true);
        }
    });
    
    container.appendChild(heart);
}

function endHeartCatcherGame(won = false) {
    gameState.heartCatcher.active = false;
    
    const gameBtn = document.getElementById('heartGameBtn');
    const messageDisplay = document.getElementById('heartGameMessage');
    const gameContainer = document.getElementById('heartGame');

    if (won) {
        messageDisplay.textContent = '🎉 You caught them all! 💗';
        messageDisplay.style.color = '#FF69B4';
        messageDisplay.style.fontSize = '1.2rem';
        
        setTimeout(() => {
            messageDisplay.textContent = 'Somehow, you still caught my heart first. ♡';
            messageDisplay.style.fontSize = '1rem';
        }, 2000);
    } else {
        messageDisplay.textContent = `Time's up! You caught ${gameState.heartCatcher.score}/${gameState.heartCatcher.targetScore} hearts. Try again!`;
    }

    if (gameContainer) gameContainer.innerHTML = '';
    
    if (gameBtn) {
        gameBtn.disabled = false;
        gameBtn.textContent = 'Start Game';
    }
}

// ===========================
// MEMORY MATCH GAME
// ===========================

function initMemoryMatchGame() {
    const gameBtn = document.getElementById('matchGameBtn');
    
    if (!gameBtn) return;

    gameBtn.addEventListener('click', startMemoryMatchGame);
}

function startMemoryMatchGame() {
    gameState.memoryMatch.active = true;
    gameState.memoryMatch.cards = [];
    gameState.memoryMatch.flipped = [];
    gameState.memoryMatch.matched = [];
    gameState.memoryMatch.moves = 0;
    gameState.memoryMatch.pairsFound = 0;
    
    const memoryGrid = document.getElementById('memoryGrid');
    const gameBtn = document.getElementById('matchGameBtn');
    const messageDisplay = document.getElementById('matchGameMessage');
    const movesDisplay = document.getElementById('matchMoves');
    const scoreDisplay = document.getElementById('matchScore');
    
    if (!memoryGrid || !gameBtn) return;

    // Clear previous
    memoryGrid.innerHTML = '';
    messageDisplay.textContent = '';
    gameBtn.disabled = true;
    gameBtn.textContent = 'Game Running...';
    movesDisplay.textContent = '0';
    scoreDisplay.textContent = '0';

    // Create card pairs
    const symbols = ['♡', '♡', '🌸', '🌸', '✨', '✨', '⭐', '⭐', 
                     'S', 'S', 'Y', 'Y', '💕', '💕', '🎀', '🎀'];
    
    // Shuffle
    const shuffled = symbols.sort(() => Math.random() - 0.5);

    // Create cards
    shuffled.forEach((symbol, index) => {
        const card = document.createElement('div');
        card.className = 'memory-card';
        card.dataset.symbol = symbol;
        card.dataset.index = index;
        card.textContent = '?';
        
        card.addEventListener('click', function() {
            flipMemoryCard(this);
        });

        memoryGrid.appendChild(card);
        gameState.memoryMatch.cards.push(card);
    });
}

function flipMemoryCard(card) {
    if (!gameState.memoryMatch.active) return;
    if (card.classList.contains('flipped') || card.classList.contains('matched')) return;
    if (gameState.memoryMatch.flipped.length >= 2) return;

    card.classList.add('flipped');
    card.textContent = card.dataset.symbol;
    gameState.memoryMatch.flipped.push(card);

    if (gameState.memoryMatch.flipped.length === 2) {
        checkMemoryMatch();
    }
}

function checkMemoryMatch() {
    gameState.memoryMatch.moves++;
    document.getElementById('matchMoves').textContent = gameState.memoryMatch.moves;

    const [card1, card2] = gameState.memoryMatch.flipped;

    if (card1.dataset.symbol === card2.dataset.symbol) {
        // Match!
        card1.classList.add('matched');
        card2.classList.add('matched');
        gameState.memoryMatch.pairsFound++;
        document.getElementById('matchScore').textContent = gameState.memoryMatch.pairsFound;

        gameState.memoryMatch.flipped = [];

        if (gameState.memoryMatch.pairsFound === 8) {
            endMemoryMatchGame(true);
        }
    } else {
        // No match
        setTimeout(() => {
            card1.classList.remove('flipped');
            card2.classList.remove('flipped');
            card1.textContent = '?';
            card2.textContent = '?';
            gameState.memoryMatch.flipped = [];
        }, 1000);
    }
}

function endMemoryMatchGame(won = false) {
    gameState.memoryMatch.active = false;
    
    const gameBtn = document.getElementById('matchGameBtn');
    const messageDisplay = document.getElementById('matchGameMessage');

    if (won) {
        messageDisplay.textContent = '🎉 Perfect match! ♡';
        messageDisplay.style.color = '#FF69B4';
        messageDisplay.style.fontSize = '1.2rem';
        
        setTimeout(() => {
            messageDisplay.textContent = 'Maybe we\'re getting pretty good at this. 💕';
            messageDisplay.style.fontSize = '1rem';
        }, 2000);
    }

    if (gameBtn) {
        gameBtn.disabled = false;
        gameBtn.textContent = 'Start Game';
    }
}

// ===========================
// HIDDEN HEART GAME
// ===========================

function initHiddenHeartGame() {
    const hiddenHeart = document.getElementById('hiddenHeart');
    const messageDisplay = document.getElementById('hiddenHeartMessage');
    
    if (!hiddenHeart) return;

    hiddenHeart.addEventListener('click', function(e) {
        e.stopPropagation();
        gameState.hiddenHeart.clicks++;
        
        // Gradually reveal
        const opacity = Math.min(gameState.hiddenHeart.clicks * 0.2, 1);
        hiddenHeart.style.opacity = opacity;

        if (gameState.hiddenHeart.clicks === 1) {
            messageDisplay.textContent = 'You\'re getting warmer... ♡';
        } else if (gameState.hiddenHeart.clicks === 2) {
            messageDisplay.textContent = 'Very close now... 💕';
        } else if (gameState.hiddenHeart.clicks >= 3) {
            foundHiddenHeart();
        }
    });
}

function foundHiddenHeart() {
    if (gameState.hiddenHeart.found) return;
    
    gameState.hiddenHeart.found = true;
    
    const hiddenHeart = document.getElementById('hiddenHeart');
    const messageDisplay = document.getElementById('hiddenHeartMessage');
    const container = document.getElementById('hiddenHeartContainer');

    if (!hiddenHeart) return;

    // Make it fully visible
    hiddenHeart.style.opacity = '1';
    
    // Celebration effect
    if (container) {
        const celebration = document.createElement('div');
        celebration.style.position = 'absolute';
        celebration.style.top = '50%';
        celebration.style.left = '50%';
        celebration.style.transform = 'translate(-50%, -50%)';
        celebration.style.fontSize = '4rem';
        celebration.style.pointerEvents = 'none';
        celebration.textContent = '✨';
        celebration.style.animation = 'fadeOut 1s ease-out forwards';
        container.appendChild(celebration);

        setTimeout(() => celebration.remove(), 1000);
    }

    // Add style for fadeOut animation
    const style = document.createElement('style');
    style.appendChild(document.createTextNode(`
        @keyframes fadeOut {
            0% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
            100% { opacity: 0; transform: translate(-50%, -50%) scale(0.5); }
        }
    `));
    document.head.appendChild(style);

    messageDisplay.innerHTML = '<strong>You found it!</strong> Just like you found a very special place in my life. ♡';
    messageDisplay.style.color = '#FF69B4';
    messageDisplay.style.fontWeight = 'bold';
}

// ===========================
// UTILITY: Create missing animation styles
// ===========================

// Add any missing keyframe animations
window.addEventListener('load', function() {
    const style = document.createElement('style');
    style.appendChild(document.createTextNode(`
        @keyframes floatHeart {
            0% {
                opacity: 1;
                transform: translateY(0);
            }
            100% {
                opacity: 0;
                transform: translateY(-100px);
            }
        }

        @keyframes celebrationBurst {
            0% {
                transform: translate(0, 0) scale(1);
                opacity: 1;
            }
            100% {
                transform: translate(var(--tx, 0), var(--ty, 0)) scale(0);
                opacity: 0;
            }
        }

        @keyframes particleFloat {
            0% {
                transform: translate(0, 0) scale(1);
                opacity: 0.5;
            }
            100% {
                transform: translate(var(--tx, 50px), var(--ty, 50px)) scale(0.5);
                opacity: 0;
            }
        }

        @keyframes petalFall {
            0% {
                transform: translateY(0) rotate(0deg);
                opacity: 1;
            }
            100% {
                transform: translateY(var(--distance, 100vh)) rotate(360deg);
                opacity: 0;
            }
        }
    `));
    
    if (!document.querySelector('style[data-games-animations]')) {
        style.setAttribute('data-games-animations', '');
        document.head.appendChild(style);
    }
});
