// Quick Fire Quiz Logic
const questions = [
    { question: "Addiction is just a choice, not a disease.", answer: false },
    { question: "Your genes control about 40-60% of your addiction risk.", answer: true },
    { question: "Prescribed meds are always safe and can't get you hooked.", answer: false },
    { question: "Your brain keeps growing until you're about 25.", answer: true },
    { question: "Caffeine is the most widely used addictive drug on Earth.", answer: true },
    { question: "Natural stuff like weed can't be addictive.", answer: false },
    { question: "Nicotine hits your brain in 10 seconds flat.", answer: true },
    { question: "Addicts can just stop whenever they feel like it.", answer: false },
    { question: "Recovery is impossible for most people.", answer: false },
    { question: "Alcohol is the #1 most used addictive drug in the US.", answer: true },
    { question: "Tolerance means you need LESS of a drug to get high.", answer: false },
    { question: "Withdrawal only happens with illegal street drugs.", answer: false },
    { question: "Having a cool family vibe helps protect you from addiction.", answer: true },
    { question: "Try drugs once and you're instantly hooked for life.", answer: false },
    { question: "Medication-assisted treatment (MAT) uses meds AND therapy.", answer: true },
    { question: "Opioids are only dangerous if you buy them on the street.", answer: false },
    { question: "Teen brains get hooked easier than adult brains.", answer: true },
    { question: "Vaping is totally safe and just water vapor.", answer: false },
    { question: "Using drugs early can mess up your brain development.", answer: true },
    { question: "Addiction only hurts the person using, nobody else.", answer: false },
    { question: "With real help, 40-60% of people stay recovered long-term.", answer: true },
    { question: "Cravings are the same thing as withdrawal.", answer: false },
    { question: "Being lonely and isolated makes addiction more likely.", answer: true },
    { question: "All painkillers are exactly the same strength.", answer: false },
    { question: "Learning the facts helps prevent addiction.", answer: true },
    { question: "Addiction literally changes the shape of your brain.", answer: true },
    { question: "Mental health issues can raise your risk for addiction.", answer: true },
    { question: "Mixing alcohol with other stuff is a safe bet.", answer: false },
    { question: "THC is the part of weed that gets you high.", answer: true },
    { question: "Treatment works best when people are forced into it.", answer: false }
];

let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let streak = 0;
let bestStreak = 0;
let timeLeft = 60;
let timer;
let correctCount = 0;
let totalAnswered = 0;

// DOM Elements
const startScreen = document.getElementById('start-screen');
const gameScreen = document.getElementById('game-screen');
const resultsScreen = document.getElementById('results-screen');
const startBtn = document.getElementById('start-btn');
const trueBtn = document.getElementById('true-btn');
const falseBtn = document.getElementById('false-btn');
const questionText = document.getElementById('question-text');
const questionNum = document.getElementById('question-num');
const scoreEl = document.getElementById('score');
const streakEl = document.getElementById('streak');
const timerEl = document.getElementById('timer');
const timeBar = document.getElementById('time-bar');
const feedback = document.getElementById('feedback');
const feedbackText = document.getElementById('feedback-text');
const playAgainBtn = document.getElementById('play-again-btn');

// Start game
function startGame() {
    // Shuffle questions
    currentQuestions = shuffleArray([...questions]);
    currentQuestionIndex = 0;
    score = 0;
    streak = 0;
    bestStreak = 0;
    timeLeft = 60;
    correctCount = 0;
    totalAnswered = 0;

    // Show game screen
    startScreen.classList.add('hidden');
    resultsScreen.classList.add('hidden');
    gameScreen.classList.remove('hidden');

    // Reset UI
    updateUI();
    loadQuestion();

    // Start timer
    timer = setInterval(updateTimer, 1000);
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

// Load question
function loadQuestion() {
    if (currentQuestionIndex >= currentQuestions.length) {
        currentQuestions = shuffleArray([...questions]);
        currentQuestionIndex = 0;
    }

    const question = currentQuestions[currentQuestionIndex];
    questionText.textContent = question.question;
    questionNum.textContent = totalAnswered + 1;

    // Enable buttons
    trueBtn.disabled = false;
    falseBtn.disabled = false;
    trueBtn.classList.remove('opacity-50', 'cursor-not-allowed');
    falseBtn.classList.remove('opacity-50', 'cursor-not-allowed');

    // Hide feedback
    feedback.classList.add('hidden');
}

// Check answer
function checkAnswer(userAnswer) {
    const question = currentQuestions[currentQuestionIndex];
    const isCorrect = userAnswer === question.answer;

    totalAnswered++;

    if (isCorrect) {
        correctCount++;
        score += 10 + (streak * 5); // Bonus points for streaks
        streak++;
        bestStreak = Math.max(bestStreak, streak);
        showFeedback(true);
    } else {
        streak = 0;
        showFeedback(false);
    }

    updateUI();

    // Disable buttons temporarily
    trueBtn.disabled = true;
    falseBtn.disabled = true;
    trueBtn.classList.add('opacity-50', 'cursor-not-allowed');
    falseBtn.classList.add('opacity-50', 'cursor-not-allowed');

    // Load next question
    setTimeout(() => {
        currentQuestionIndex++;
        loadQuestion();
    }, 800);
}

// Show feedback
function showFeedback(isCorrect) {
    feedback.classList.remove('hidden');
    if (isCorrect) {
        feedbackText.textContent = '✅ Correct!';
        feedbackText.className = 'text-xl font-semibold text-green-600';
    } else {
        feedbackText.textContent = '❌ Wrong!';
        feedbackText.className = 'text-xl font-semibold text-red-600';
    }
}

// Update UI
function updateUI() {
    scoreEl.textContent = score;
    streakEl.textContent = streak;
    timerEl.textContent = timeLeft;

    // Update time bar
    const percentage = (timeLeft / 60) * 100;
    timeBar.style.width = percentage + '%';
}

// Update timer
function updateTimer() {
    timeLeft--;
    updateUI();

    if (timeLeft <= 0) {
        endGame();
    }
}

// End game
function endGame() {
    clearInterval(timer);

    // Show results screen
    gameScreen.classList.add('hidden');
    resultsScreen.classList.remove('hidden');

    // Display results
    document.getElementById('final-score').textContent = score;
    document.getElementById('correct-count').textContent = correctCount;
    document.getElementById('total-count').textContent = totalAnswered;
    document.getElementById('best-streak').textContent = bestStreak;
}

// Event listeners
startBtn.addEventListener('click', startGame);
trueBtn.addEventListener('click', () => checkAnswer(true));
falseBtn.addEventListener('click', () => checkAnswer(false));
playAgainBtn.addEventListener('click', startGame);

// Keyboard support
document.addEventListener('keydown', (e) => {
    if (gameScreen.classList.contains('hidden')) return;
    if (trueBtn.disabled) return;

    if (e.key === 'ArrowLeft' || e.key === 't' || e.key === 'T') {
        checkAnswer(true);
    } else if (e.key === 'ArrowRight' || e.key === 'f' || e.key === 'F') {
        checkAnswer(false);
    }
});
