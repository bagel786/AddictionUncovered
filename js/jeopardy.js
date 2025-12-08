// Jeopardy Game Logic
const categories = {
    "Substance Facts": [
        {
            points: 100,
            question: "This substance is the most commonly used addictive drug in the world.",
            options: ["Caffeine", "Alcohol", "Nicotine", "Cannabis"],
            answer: 0,
            info: "Caffeine is found in coffee, tea, soda, and chocolate. About 90% of adults consume it daily!"
        },
        {
            points: 200,
            question: "The active ingredient in marijuana that produces psychoactive effects.",
            options: ["CBD", "THC", "Nicotine", "Tannins"],
            answer: 1,
            info: "THC (Tetrahydrocannabinol) is the main psychoactive compound in cannabis."
        },
        {
            points: 300,
            question: "This prescription medication class is highly addictive and used for pain relief.",
            options: ["Antibiotics", "Antihistamines", "Opioids", "Antacids"],
            answer: 2,
            info: "Opioids include medications like oxycodone, morphine, and fentanyl. They're effective for pain but carry high addiction risk."
        },
        {
            points: 400,
            question: "How long does it take for nicotine to reach the brain after inhaling?",
            options: ["10 seconds", "1 minute", "5 minutes", "30 minutes"],
            answer: 0,
            info: "Nicotine reaches the brain in just 10 seconds, faster than injected drugs!"
        }
    ],
    "Prevention": [
        {
            points: 100,
            question: "What percentage of addiction risk is influenced by genetics?",
            options: ["10-20%", "40-60%", "70-80%", "90-100%"],
            answer: 1,
            info: "Genetic factors account for 40-60% of addiction vulnerability. Environment and choices make up the rest."
        },
        {
            points: 200,
            question: "Which of these is a protective factor against substance abuse?",
            options: ["Social isolation", "Strong family bonds", "Academic failure", "Peer pressure"],
            answer: 1,
            info: "Strong relationships, particularly with family, are one of the strongest protective factors."
        },
        {
            points: 300,
            question: "At what age is the brain most vulnerable to addiction?",
            options: ["Before age 10", "Ages 12-25", "Ages 30-40", "After age 50"],
            answer: 1,
            info: "The brain continues developing until about age 25. Early substance use can significantly impact brain development."
        },
        {
            points: 400,
            question: "What's the most effective way to prevent teen substance abuse?",
            options: ["Punishment", "Ignoring it", "Open communication + education", "Complete isolation"],
            answer: 2,
            info: "Evidence shows that open, honest communication combined with education is most effective."
        }
    ],
    "Myths vs Facts": [
        {
            points: 100,
            question: "True or False: Addiction is a choice, not a disease.",
            options: ["True", "False"],
            answer: 1,
            info: "FALSE. Addiction is a chronic brain disease that changes brain structure and function."
        },
        {
            points: 200,
            question: "True or False: You can't get addicted from prescription medications if taken as prescribed.",
            options: ["True", "False"],
            answer: 1,
            info: "FALSE. Even when taken as prescribed, some medications (especially opioids) can lead to dependence."
        },
        {
            points: 300,
            question: "True or False: Natural substances like marijuana can't be addictive.",
            options: ["True", "False"],
            answer: 1,
            info: "FALSE. About 9% of marijuana users become addicted. The rate is higher for those who start young."
        },
        {
            points: 400,
            question: "True or False: People with addiction can stop anytime they want to.",
            options: ["True", "False"],
            answer: 1,
            info: "FALSE. Addiction changes brain chemistry, making it extremely difficult to quit without help."
        }
    ],
    "Signs & Symptoms": [
        {
            points: 100,
            question: "Needing more of a substance to get the same effect is called:",
            options: ["Withdrawal", "Tolerance", "Dependence", "Craving"],
            answer: 1,
            info: "Tolerance develops when the body adapts to regular substance use."
        },
        {
            points: 200,
            question: "Physical symptoms when stopping a substance are called:",
            options: ["Side effects", "Withdrawal", "Tolerance", "Allergies"],
            answer: 1,
            info: "Withdrawal symptoms vary by substance but can include anxiety, sweating, tremors, and nausea."
        },
        {
            points: 300,
            question: "Which is NOT a common warning sign of addiction?",
            options: ["Lying about use", "Neglecting responsibilities", "Increased social activities", "Secrecy"],
            answer: 2,
            info: "Addiction typically leads to DECREASED social activities and isolation, not increased."
        },
        {
            points: 400,
            question: "What's the medical term for the intense urge to use a substance?",
            options: ["Tolerance", "Dependence", "Craving", "Withdrawal"],
            answer: 2,
            info: "Cravings are powerful urges that can persist long after physical withdrawal symptoms end."
        }
    ],
    "Recovery & Help": [
        {
            points: 100,
            question: "What does AA stand for?",
            options: ["Addiction Anonymous", "Alcoholics Anonymous", "Awareness Alliance", "Aid Association"],
            answer: 1,
            info: "Alcoholics Anonymous is a worldwide peer support program founded in 1935."
        },
        {
            points: 200,
            question: "What's the national substance abuse helpline number?",
            options: ["1-800-662-HELP", "911", "311", "411"],
            answer: 0,
            info: "1-800-662-HELP (4357) is SAMHSA's National Helpline, available 24/7, free and confidential."
        },
        {
            points: 300,
            question: "Medication-assisted treatment (MAT) combines medication with:",
            options: ["Exercise only", "Counseling & behavioral therapy", "Diet changes", "Isolation"],
            answer: 1,
            info: "MAT is most effective when combining FDA-approved medications with counseling and support."
        },
        {
            points: 400,
            question: "What percentage of people who receive treatment achieve long-term recovery?",
            options: ["Less than 10%", "About 25%", "40-60%", "Over 90%"],
            answer: 2,
            info: "With proper treatment and support, 40-60% of people maintain long-term recovery!"
        }
    ]
};

let currentTeam = 'A';
let scores = { A: 0, B: 0 };
let usedQuestions = new Set();

// DOM Elements
const gameBoard = document.getElementById('game-board');
const modal = document.getElementById('question-modal');
const scoreAEl = document.getElementById('score-a');
const scoreBEl = document.getElementById('score-b');
const currentTeamEl = document.getElementById('current-team');

// Initialize board
function initBoard() {
    const categoryNames = Object.keys(categories);

    // Create grid
    let boardHTML = '<div class="grid grid-cols-5 gap-2 sm:gap-4">';

    // Headers
    categoryNames.forEach(cat => {
        boardHTML += `
            <div class="bg-gradient-to-br from-blue-600 to-purple-600 text-white p-3 sm:p-4 rounded-lg text-center font-bold text-xs sm:text-sm">
                ${cat}
            </div>
        `;
    });

    // Questions (4 rows)
    for (let i = 0; i < 4; i++) {
        categoryNames.forEach(cat => {
            const question = categories[cat][i];
            const questionId = `${cat}-${i}`;
            boardHTML += `
                <button 
                    class="question-tile bg-blue-500 hover:bg-blue-600 text-white p-4 sm:p-6 rounded-lg font-bold text-lg sm:text-2xl transition-all"
                    data-category="${cat}"
                    data-index="${i}"
                    data-id="${questionId}"
                    onclick="selectQuestion('${cat}', ${i}, '${questionId}')"
                >
                    ${question.points}
                </button>
            `;
        });
    }

    boardHTML += '</div>';
    gameBoard.innerHTML = boardHTML;
}

// Select question
function selectQuestion(category, index, questionId) {
    if (usedQuestions.has(questionId)) return;

    const question = categories[category][index];

    // Update modal
    document.getElementById('modal-category').textContent = category;
    document.getElementById('modal-points').textContent = `$${question.points}`;
    document.getElementById('modal-question').textContent = question.question;

    // Create answer buttons
    const answerOptions = document.getElementById('answer-options');
    answerOptions.innerHTML = '';
    question.options.forEach((option, i) => {
        const btn = document.createElement('button');
        btn.className = 'w-full p-4 bg-gray-100 hover:bg-gray-200 rounded-lg text-left font-semibold transition-colors';
        btn.textContent = option;
        btn.onclick = () => checkAnswer(i, question, questionId);
        answerOptions.appendChild(btn);
    });

    // Reset feedback
    document.getElementById('answer-feedback').classList.add('hidden');
    answerOptions.classList.remove('hidden');

    // Show modal
    modal.classList.remove('hidden');
}

// Check answer
function checkAnswer(selectedIndex, question, questionId) {
    const answerOptions = document.getElementById('answer-options');
    const feedback = document.getElementById('answer-feedback');
    const feedbackText = document.getElementById('feedback-text');
    const feedbackInfo = document.getElementById('feedback-info');

    answerOptions.classList.add('hidden');
    feedback.classList.remove('hidden');

    if (selectedIndex === question.answer) {
        // Correct!
        scores[currentTeam] += question.points;
        updateScoreboard();
        feedbackText.textContent = '✅ Correct!';
        feedbackText.className = 'text-lg font-semibold mb-4 text-center text-green-600';
    } else {
        // Wrong
        feedbackText.textContent = `❌ Incorrect. The answer was: ${question.options[question.answer]}`;
        feedbackText.className = 'text-lg font-semibold mb-4 text-center text-red-600';
    }

    feedbackInfo.textContent = question.info;

    // Mark as used
    usedQuestions.add(questionId);
    const tile = document.querySelector(`[data-id="${questionId}"]`);
    if (tile) {
        tile.classList.add('opacity-30', 'cursor-not-allowed');
        tile.disabled = true;
    }
}

// Close modal and switch teams
document.getElementById('close-modal').addEventListener('click', () => {
    modal.classList.add('hidden');
    switchTeam();
});

// Switch current team
function switchTeam() {
    currentTeam = currentTeam === 'A' ? 'B' : 'A';
    currentTeamEl.textContent = `Team ${currentTeam}`;
    currentTeamEl.className = `text-2xl font-bold ${currentTeam === 'A' ? 'text-blue-600' : 'text-purple-600'}`;
}

// Update scoreboard
function updateScoreboard() {
    scoreAEl.textContent = scores.A;
    scoreBEl.textContent = scores.B;
}

// Make selectQuestion global
window.selectQuestion = selectQuestion;

// Initialize the game
initBoard();
