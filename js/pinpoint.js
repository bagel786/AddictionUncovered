// Pinpoint Game Logic
const puzzles = [
    {
        category: "Alcohol",
        clues: ["Beer", "Wine", "Vodka", "Whiskey", "Champagne", "Rum"],
        info: "Alcohol is the most commonly used addictive substance. About 17 million people in the U.S. have an alcohol use disorder."
    },
    {
        category: "Nicotine",
        clues: ["Cigarettes", "Vaping", "Tobacco", "Patches", "Gum", "Cigars"],
        info: "Nicotine is highly addictive. It takes only 10 seconds for nicotine to reach the brain after inhaling."
    },
    {
        category: "Opioids",
        clues: ["Morphine", "Codeine", "Fentanyl", "Heroin", "Oxycodone", "Prescription"],
        info: "Opioid addiction affects over 2 million Americans. Fentanyl is 50-100 times more potent than morphine."
    },
    {
        category: "Risk Factors",
        clues: ["Genetics", "Trauma", "Stress", "Peer Pressure", "Environment", "Mental Health"],
        info: "Addiction is influenced by genetics (40-60%), environment, and mental health. No single factor determines addiction."
    },
    {
        category: "Protective Factors",
        clues: ["Support", "Counseling", "Exercise", "Hobbies", "Family", "Education"],
        info: "Strong social connections, healthy coping mechanisms, and education reduce addiction risk by up to 50%."
    },
    {
        category: "Warning Signs",
        clues: ["Tolerance", "Withdrawal", "Cravings", "Isolation", "Neglect", "Secrecy"],
        info: "Early recognition of warning signs can lead to earlier intervention and better outcomes."
    },
    {
        category: "Recovery",
        clues: ["Therapy", "Support Groups", "Medication", "Mindfulness", "Sobriety", "Relapse Prevention"],
        info: "Recovery is possible! With proper treatment, many people achieve long-term sobriety and improved quality of life."
    },
    {
        category: "Cannabis",
        clues: ["Marijuana", "THC", "CBD", "Joint", "Edibles", "Vape"],
        info: "Cannabis affects brain development in teens. Regular use before age 25 can impact memory and learning."
    }
];

let currentPuzzle;
let revealedClues = 0;
let score = 0;
let streak = 0;
let round = 1;
let attempts = 0;

// DOM Elements
const cluesGrid = document.getElementById('clues-grid');
const guessInput = document.getElementById('guess-input');
const submitBtn = document.getElementById('submit-btn');
const feedback = document.getElementById('feedback');
const feedbackText = document.getElementById('feedback-text');
const feedbackInfo = document.getElementById('feedback-info');
const nextBtn = document.getElementById('next-btn');
const hintText = document.getElementById('hint-text');
const scoreEl = document.getElementById('score');
const streakEl = document.getElementById('streak');
const roundEl = document.getElementById('round');

// Initialize game
function initGame() {
    currentPuzzle = puzzles[Math.floor(Math.random() * puzzles.length)];
    revealedClues = 1;
    attempts = 0;
    renderClues();
    guessInput.value = '';
    guessInput.focus();
    feedback.classList.add('hidden');
    hintText.textContent = `${revealedClues} of ${currentPuzzle.clues.length} clues revealed`;
}

// Render clue words
function renderClues() {
    cluesGrid.innerHTML = '';
    currentPuzzle.clues.forEach((clue, index) => {
        const clueCard = document.createElement('div');
        clueCard.className = `p-4 rounded-lg text-center font-semibold transition-all duration-500`;

        if (index < revealedClues) {
            clueCard.classList.add('bg-blue-100', 'text-blue-800', 'scale-100');
            clueCard.textContent = clue;
            // Add entrance animation
            setTimeout(() => {
                clueCard.style.transform = 'scale(1.05)';
                setTimeout(() => {
                    clueCard.style.transform = 'scale(1)';
                }, 200);
            }, index * 100);
        } else {
            clueCard.classList.add('bg-gray-100', 'text-gray-400');
            clueCard.textContent = '???';
        }

        cluesGrid.appendChild(clueCard);
    });
}

// Check guess
function checkGuess() {
    const guess = guessInput.value.trim().toLowerCase();
    const answer = currentPuzzle.category.toLowerCase();

    attempts++;

    if (guess === answer) {
        // Correct!
        const points = Math.max(10 - revealedClues, 3); // More points for fewer clues
        score += points;
        streak++;

        scoreEl.textContent = score;
        streakEl.textContent = streak;

        feedback.classList.remove('hidden', 'bg-red-50');
        feedback.classList.add('bg-green-50');
        feedbackText.textContent = `🎉 Correct! +${points} points`;
        feedbackText.className = 'text-lg font-semibold mb-4 text-green-700';
        feedbackInfo.textContent = currentPuzzle.info;

        // Reveal all clues with animation
        revealedClues = currentPuzzle.clues.length;
        renderClues();

    } else {
        // Wrong - reveal another clue
        if (revealedClues < currentPuzzle.clues.length) {
            revealedClues++;
            renderClues();
            hintText.textContent = `Not quite! Here's another clue... (${revealedClues}/${currentPuzzle.clues.length} revealed)`;
            guessInput.value = '';

            // Shake animation
            guessInput.classList.add('animate-shake');
            setTimeout(() => guessInput.classList.remove('animate-shake'), 500);
        } else {
            // Out of clues
            streak = 0;
            streakEl.textContent = streak;

            feedback.classList.remove('hidden', 'bg-green-50');
            feedback.classList.add('bg-red-50');
            feedbackText.textContent = `The answer was: ${currentPuzzle.category}`;
            feedbackText.className = 'text-lg font-semibold mb-4 text-red-700';
            feedbackInfo.textContent = currentPuzzle.info;
        }
    }
}

// Next round
function nextRound() {
    round++;
    roundEl.textContent = round;
    initGame();
}

// Event listeners
submitBtn.addEventListener('click', checkGuess);
guessInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') checkGuess();
});
nextBtn.addEventListener('click', nextRound);

// Add shake animation style
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-10px); }
        75% { transform: translateX(10px); }
    }
    .animate-shake {
        animation: shake 0.5s;
    }
`;
document.head.appendChild(style);

// Start the game
initGame();
