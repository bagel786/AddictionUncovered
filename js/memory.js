// Memory Match Game Logic
const cardPairs = [
    { id: 1, text: "Alcohol", pair: "Most used addictive substance" },
    { id: 2, text: "Nicotine", pair: "Reaches brain in 10 seconds" },
    { id: 3, text: "Opioids", pair: "Used for pain relief" },
    { id: 4, text: "Tolerance", pair: "Needing more for same effect" },
    { id: 5, text: "Withdrawal", pair: "Symptoms when stopping use" },
    { id: 6, text: "Genetics", pair: "40-60% of addiction risk" },
    { id: 7, text: "Recovery", pair: "Treatment + support = success" },
    { id: 8, text: "Prevention", pair: "Education + communication" }
];

let cards = [];
let flippedCards = [];
let matchedPairs = 0;
let moves = 0;
let bestScore = localStorage.getItem('memoryBestScore') || null;
let canFlip = true;

// DOM Elements
const gameBoard = document.getElementById('game-board');
const matchesEl = document.getElementById('matches');
const movesEl = document.getElementById('moves');
const bestScoreEl = document.getElementById('best-score');
const resetBtn = document.getElementById('reset-btn');
const winModal = document.getElementById('win-modal');
const finalMovesEl = document.getElementById('final-moves');
const playAgainBtn = document.getElementById('play-again-btn');

// Initialize game
function initGame() {
    // Create card deck (each pair appears twice)
    cards = [];
    cardPairs.forEach(pair => {
        cards.push({ ...pair, type: 'term', content: pair.text });
        cards.push({ ...pair, type: 'definition', content: pair.pair });
    });

    // Shuffle cards
    cards = shuffleArray(cards);

    // Reset game state
    flippedCards = [];
    matchedPairs = 0;
    moves = 0;
    canFlip = true;

    // Update UI
    updateStats();
    renderBoard();
    winModal.classList.add('hidden');
}

// Shuffle array
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Render game board
function renderBoard() {
    gameBoard.innerHTML = '';
    cards.forEach((card, index) => {
        const cardEl = document.createElement('div');
        cardEl.className = 'card aspect-square cursor-pointer';
        cardEl.dataset.index = index;
        cardEl.innerHTML = `
            <div class="card-inner relative w-full h-full transition-transform duration-500 transform-style-3d">
                <div class="card-face card-back absolute w-full h-full bg-gradient-to-br from-uncovered-purple to-uncovered-dark rounded-lg flex items-center justify-center backface-hidden shadow-md p-2">
                    <img src="assets/images/logo.png" alt="Logo" class="w-full h-full object-contain opacity-90">
                </div>
                <div class="card-face card-front absolute w-full h-full bg-white rounded-lg shadow-lg flex items-center justify-center p-3 backface-hidden border-2 ${card.type === 'term' ? 'border-uncovered-purple bg-uncovered-cream' : 'border-uncovered-teal bg-teal-50'}">
                    <p class="text-center text-sm sm:text-base font-semibold ${card.type === 'term' ? 'text-uncovered-purple' : 'text-teal-700'}">${card.content}</p>
                </div>
            </div>
        `;
        cardEl.addEventListener('click', () => flipCard(index));
        gameBoard.appendChild(cardEl);
    });
}

// Flip card
function flipCard(index) {
    if (!canFlip) return;
    if (flippedCards.some(card => card.index === index)) return;
    if (cards[index].matched) return;

    const cardEl = gameBoard.children[index];
    const cardInner = cardEl.querySelector('.card-inner');
    cardInner.style.transform = 'rotateY(180deg)';

    flippedCards.push({ index, card: cards[index] });

    if (flippedCards.length === 2) {
        canFlip = false;
        moves++;
        updateStats();
        checkMatch();
    }
}

// Check for match
function checkMatch() {
    const [first, second] = flippedCards;

    setTimeout(() => {
        if (first.card.id === second.card.id) {
            // Match!
            cards[first.index].matched = true;
            cards[second.index].matched = true;
            matchedPairs++;
            updateStats();

            // Add matched style
            [first.index, second.index].forEach(i => {
                const cardEl = gameBoard.children[i];
                cardEl.querySelector('.card-inner').classList.add('opacity-60');
            });

            // Check for win
            if (matchedPairs === cardPairs.length) {
                setTimeout(showWinModal, 500);
            }

            flippedCards = [];
            canFlip = true;
        } else {
            // No match - flip back
            [first.index, second.index].forEach(i => {
                const cardEl = gameBoard.children[i];
                const cardInner = cardEl.querySelector('.card-inner');
                cardInner.style.transform = 'rotateY(0deg)';
            });

            setTimeout(() => {
                flippedCards = [];
                canFlip = true;
            }, 600);
        }
    }, 1000);
}

// Update stats
function updateStats() {
    matchesEl.textContent = `${matchedPairs} / ${cardPairs.length}`;
    movesEl.textContent = moves;
    bestScoreEl.textContent = bestScore || '--';
}

// Show win modal
function showWinModal() {
    finalMovesEl.textContent = `Completed in ${moves} moves!`;

    // Update best score
    if (!bestScore || moves < parseInt(bestScore)) {
        bestScore = moves;
        localStorage.setItem('memoryBestScore', bestScore);
        bestScoreEl.textContent = bestScore;
        finalMovesEl.innerHTML += '<br><span class="text-yellow-500">🏆 New Best Score!</span>';
    }

    winModal.classList.remove('hidden');
}

// Event listeners
resetBtn.addEventListener('click', initGame);
playAgainBtn.addEventListener('click', initGame);

// Add custom styles
const style = document.createElement('style');
style.textContent = `
    .transform-style-3d {
        transform-style: preserve-3d;
    }
    .backface-hidden {
        backface-visibility: hidden;
        -webkit-backface-visibility: hidden;
    }
    .card-front {
        transform: rotateY(180deg);
    }
`;
document.head.appendChild(style);

// Initialize best score display
if (bestScore) {
    bestScoreEl.textContent = bestScore;
}

// Start the game
initGame();
