// Pinpoint Game Logic with Fuzzy Matching
const puzzles = [
    {
        category: "Alcohol",
        clues: ["Beer", "Wine", "Vodka", "Whiskey", "Champagne", "Rum"],
        info: "Alcohol is the most commonly used addictive substance. About 17 million people in the U.S. have an alcohol use disorder.",
        hints: ["This substance is legal but still dangerous", "Often found at social gatherings"]
    },
    {
        category: "Nicotine",
        clues: ["Cigarettes", "Vaping", "Tobacco", "Patches", "Gum", "Cigars"],
        info: "Nicotine is highly addictive. It takes only 10 seconds for nicotine to reach the brain after inhaling.",
        hints: ["Highly addictive stimulant", "Available in many forms"]
    },
    {
        category: "Opioids",
        clues: ["Morphine", "Codeine", "Fentanyl", "Heroin", "Oxycodone", "Prescription"],
        info: "Opioid addiction affects over 2 million Americans. Fentanyl is 50-100 times more potent than morphine.",
        hints: ["Pain management medications", "Major epidemic in recent years"]
    },
    {
        category: "Risk Factors",
        clues: ["Genetics", "Trauma", "Stress", "Peer Pressure", "Environment", "Mental Health"],
        info: "Addiction is influenced by genetics (40-60%), environment, and mental health. No single factor determines addiction.",
        hints: ["Things that increase vulnerability", "Not just one cause"]
    },
    {
        category: "Protective Factors",
        clues: ["Support", "Counseling", "Exercise", "Hobbies", "Family", "Education"],
        info: "Strong social connections, healthy coping mechanisms, and education reduce addiction risk by up to 50%.",
        hints: ["Things that help prevent addiction", "Build resilience"]
    },
    {
        category: "Warning Signs",
        clues: ["Tolerance", "Withdrawal", "Cravings", "Isolation", "Neglect", "Secrecy"],
        info: "Early recognition of warning signs can lead to earlier intervention and better outcomes.",
        hints: ["Red flags of substance abuse", "Early indicators"]
    },
    {
        category: "Recovery",
        clues: ["Therapy", "Support Groups", "Medication", "Mindfulness", "Sobriety", "Relapse Prevention"],
        info: "Recovery is possible! With proper treatment, many people achieve long-term sobriety and improved quality of life.",
        hints: ["The journey to wellness", "Multiple pathways exist"]
    },
    {
        category: "Cannabis",
        clues: ["Marijuana", "THC", "CBD", "Joint", "Edibles", "Vape"],
        info: "Cannabis affects brain development in teens. Regular use before age 25 can impact memory and learning.",
        hints: ["Most commonly used illegal drug", "Affects brain development"]
    },
    {
        category: "Stimulants",
        clues: ["Cocaine", "Meth", "Adderall", "Caffeine", "Energy", "Speed"],
        info: "Stimulants increase alertness and energy but can be highly addictive and dangerous.",
        hints: ["Drugs that speed up body functions", "Increase energy and focus"]
    },
    {
        category: "Coping Skills",
        clues: ["Meditation", "Journaling", "Breathing", "Art", "Music", "Walking"],
        info: "Healthy coping skills help manage stress and emotions without substances.",
        hints: ["Alternative ways to manage stress", "Healthier choices"]
    }
];

let currentPuzzle;
let revealedClues = 0;
let score = 0;
let streak = 0;
let round = 1;
let attempts = 0;
let usedPuzzles = [];

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
const giveUpBtn = document.getElementById('give-up-btn');

// Levenshtein Distance for fuzzy matching
function levenshteinDistance(str1, str2) {
    const len1 = str1.length;
    const len2 = str2.length;
    const matrix = Array(len1 + 1).fill(null).map(() => Array(len2 + 1).fill(null));

    for (let i = 0; i <= len1; i++) matrix[i][0] = i;
    for (let j = 0; j <= len2; j++) matrix[0][j] = j;

    for (let i = 1; i <= len1; i++) {
        for (let j = 1; j <= len2; j++) {
            const cost = str1[i - 1] === str2[j - 1] ? 0 : 1;
            matrix[i][j] = Math.min(
                matrix[i - 1][j] + 1,
                matrix[i][j - 1] + 1,
                matrix[i - 1][j - 1] + cost
            );
        }
    }

    return matrix[len1][len2];
}

// Fuzzy match function
function fuzzyMatch(guess, answer) {
    guess = guess.toLowerCase().trim();
    answer = answer.toLowerCase().trim();

    // Exact match
    if (guess === answer) return true;

    // Don't allow very short guesses (less than 3 chars) unless the answer itself is short
    if (guess.length < 3 && answer.length >= 3) return false; // Added condition to allow short guesses if answer is also short

    // Check if guess is a significant substring of answer (must be at least 70% of the answer's length)
    // This allows "recover" to match "recovery" but not "re"
    if (answer.includes(guess) && guess.length >= answer.length * 0.7) return true;

    // Calculate similarity threshold based on Levenshtein distance
    const maxLength = Math.max(guess.length, answer.length);
    const distance = levenshteinDistance(guess, answer);
    const similarity = 1 - (distance / maxLength);

    // Stricter threshold: 85% similarity matching
    return similarity >= 0.85;
}

// Initialize game
function initGame() {
    // Select a random puzzle that hasn't been used recently
    let availablePuzzles = puzzles.filter(p => !usedPuzzles.includes(p));
    if (availablePuzzles.length === 0) {
        usedPuzzles = [];
        availablePuzzles = puzzles;
    }

    currentPuzzle = availablePuzzles[Math.floor(Math.random() * availablePuzzles.length)];
    usedPuzzles.push(currentPuzzle);
    if (usedPuzzles.length > 5) usedPuzzles.shift();

    revealedClues = 1;
    attempts = 0;
    renderClues();
    guessInput.value = '';
    guessInput.focus();
    feedback.classList.add('hidden');
    updateHintText();
    submitBtn.disabled = false;
    guessInput.disabled = false;
}

// Update hint text
function updateHintText() {
    hintText.textContent = `${revealedClues} of ${currentPuzzle.clues.length} clues revealed`;
}

// Render clue words
function renderClues() {
    cluesGrid.innerHTML = '';
    currentPuzzle.clues.forEach((clue, index) => {
        const clueCard = document.createElement('div');
        clueCard.className = `p-4 rounded-xl text-center font-semibold transition-all duration-500`;

        if (index < revealedClues) {
            clueCard.classList.add('bg-gradient-to-br', 'from-purple-100', 'to-teal-100', 'text-uncovered-purple', 'scale-100', 'shadow-md');
            clueCard.textContent = clue;
            // Add entrance animation
            setTimeout(() => {
                clueCard.style.transform = 'scale(1.05)';
                setTimeout(() => {
                    clueCard.style.transform = 'scale(1)';
                }, 200);
            }, index * 100);
        } else {
            clueCard.classList.add('bg-gray-100', 'text-gray-400', 'border-2', 'border-dashed', 'border-gray-300');
            clueCard.textContent = '???';
        }

        cluesGrid.appendChild(clueCard);
    });
}

// Animate score update
function animateScore(element, newValue) {
    element.classList.add('animate-score-pop');
    element.textContent = newValue;
    setTimeout(() => {
        element.classList.remove('animate-score-pop');
    }, 400);
}

// Check guess with fuzzy matching
function checkGuess() {
    const guess = guessInput.value.trim();
    if (!guess) return;

    const answer = currentPuzzle.category;
    attempts++;

    if (fuzzyMatch(guess, answer)) {
        // Correct!
        const points = Math.max(10 - revealedClues, 3);
        score += points;
        streak++;

        animateScore(scoreEl, score);
        animateScore(streakEl, streak);

        feedback.classList.remove('hidden');
        feedback.className = 'p-6 rounded-xl bg-gradient-to-br from-green-50 to-teal-50 border-2 border-green-300';
        feedbackText.innerHTML = `🎉 <span class="text-green-600 font-bold">Correct!</span> +${points} points`;
        feedbackText.className = 'text-lg font-semibold mb-4';
        feedbackInfo.textContent = currentPuzzle.info;
        feedbackInfo.className = 'text-uncovered-dark opacity-80';

        // Reveal all clues with animation
        revealedClues = currentPuzzle.clues.length;
        renderClues();

        submitBtn.disabled = true;
        guessInput.disabled = true;
    } else {
        // Wrong - reveal another clue
        if (revealedClues < currentPuzzle.clues.length) {
            revealedClues++;
            renderClues();
            updateHintText();

            // Show contextual hint
            if (attempts === 2 && currentPuzzle.hints.length > 0) {
                hintText.textContent += ` 💡 Hint: ${currentPuzzle.hints[0]}`;
            } else if (attempts === 3 && currentPuzzle.hints.length > 1) {
                hintText.textContent += ` 💡 Hint: ${currentPuzzle.hints[1]}`;
            }

            guessInput.value = '';

            // Shake animation
            guessInput.classList.add('animate-shake');
            setTimeout(() => guessInput.classList.remove('animate-shake'), 500);
        } else {
            // Out of clues
            streak = 0;
            animateScore(streakEl, streak);

            feedback.classList.remove('hidden');
            feedback.className = 'p-6 rounded-xl bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-300';
            feedbackText.innerHTML = `The answer was: <span class="text-red-600 font-bold">${currentPuzzle.category}</span>`;
            feedbackText.className = 'text-lg font-semibold mb-4';
            feedbackInfo.textContent = currentPuzzle.info;
            feedbackInfo.className = 'text-uncovered-dark opacity-80';

            submitBtn.disabled = true;
            guessInput.disabled = true;
        }
    }
}

// Give up functionality
function giveUp() {
    streak = 0;
    animateScore(streakEl, streak);

    feedback.classList.remove('hidden');
    feedback.className = 'p-6 rounded-xl bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-300';
    feedbackText.innerHTML = `The answer was: <span class="text-orange-600 font-bold">${currentPuzzle.category}</span>`;
    feedbackText.className = 'text-lg font-semibold mb-4';
    feedbackInfo.textContent = currentPuzzle.info;
    feedbackInfo.className = 'text-uncovered-dark opacity-80';

    // Reveal all clues
    revealedClues = currentPuzzle.clues.length;
    renderClues();

    submitBtn.disabled = true;
    guessInput.disabled = true;
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
if (giveUpBtn) {
    giveUpBtn.addEventListener('click', giveUp);
}

// Add animation styles
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
    @keyframes scorePop {
        0% { transform: scale(1); }
        50% { transform: scale(1.3); }
        100% { transform: scale(1); }
    }
    .animate-score-pop {
        animation: scorePop 0.4s ease-out;
    }
`;
document.head.appendChild(style);

// Start the game
initGame();
