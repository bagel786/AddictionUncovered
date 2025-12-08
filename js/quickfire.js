// Quick Fire Quiz Logic
const questions = [
    { question: "Addiction is a choice, not a disease.", answer: false },
    { question: "Genetics account for 40-60% of addiction vulnerability.", answer: true },
    { question: "You can't get addicted to prescription medications when taken as prescribed.", answer: false },
    { question: "The brain continues developing until about age 25.", answer: true },
    { question: "Caffeine is the most commonly used addictive substance in the world.", answer: true },
    { question: "Natural substances like marijuana cannot be addictive.", answer: false },
    { question: "Nicotine reaches the brain within 10 seconds of inhaling.", answer: true },
    { question: "People with addiction can stop using substances anytime they want.", answer: false },
    { question: "Recovery from addiction is impossible for most people.", answer: false },
    { question: "Alcohol is the most commonly used addictive drug in the United States.", answer: true },
    { question: "Tolerance means needing less of a substance to get the same effect.", answer: false },
    { question: "Withdrawal symptoms only occur with illegal drugs.", answer: false },
    { question: "Strong family bonds are a protective factor against substance abuse.", answer: true },
    { question: "Most people who try drugs once will become addicted.", answer: false },
    { question: "Medication-assisted treatment (MAT) combines medication with counseling.", answer: true },
    { question: "Opioids are only dangerous when used illegally.", answer: false },
    { question: "Teen brains are more vulnerable to addiction than adult brains.", answer: true },
    { question: "Vaping is completely safe and non-addictive.", answer: false },
    { question: "Early substance use can impact brain development.", answer: true },
    { question: "Addiction only affects the person using substances.", answer: false },
    { question: "With proper treatment, 40-60% of people maintain long-term recovery.", answer: true },
    { question: "Craving is the same as withdrawal.", answer: false },
    { question: "Social isolation is a risk factor for substance abuse.", answer: true },
    { question: "All prescription painkillers are equally addictive.", answer: false },
    { question: "Education and open communication are effective prevention strategies.", answer: true },
    { question: "Addiction changes brain chemistry and structure.", answer: true },
    { question: "People with mental health conditions have higher addiction risk.", answer: true },
    { question: "Mixing alcohol with other drugs is safer than using drugs alone.", answer: false },
    { question: "THC is the main psychoactive compound in cannabis.", answer: true },
    { question: "Addiction treatment is most effective when forced on someone.", answer: false }
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
