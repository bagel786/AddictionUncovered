// Jeopardy Game Logic
const categories = {
    "Substance Facts": [
        {
            points: 100,
            question: "What's the most common addictive drug in the world?",
            options: ["Caffeine", "Alcohol", "Nicotine", "Cannabis"],
            answer: 0,
            info: "Yep, caffeine. It's in coffee, tea, soda, and chocolate. Like 90% of adults use it every single day."
        },
        {
            points: 200,
            question: "This stuff in weed is what gets you high.",
            options: ["CBD", "THC", "Nicotine", "Tannins"],
            answer: 1,
            info: "THC is the main chemical in cannabis that messes with your head."
        },
        {
            points: 300,
            question: "Doctors prescribe these for pain, but they can be super addictive.",
            options: ["Antibiotics", "Antihistamines", "Opioids", "Antacids"],
            answer: 2,
            info: "Opioids like oxycodone and fentanyl kill pain, but they're also really dangerous if you're not careful."
        },
        {
            points: 400,
            question: "How fast does nicotine hit your brain after you inhale?",
            options: ["10 seconds", "1 minute", "5 minutes", "30 minutes"],
            answer: 0,
            info: "10 seconds. That's faster than drugs you inject. Scary, right?"
        }
    ],
    "Prevention": [
        {
            points: 100,
            question: "How much of addiction risk comes from your genes?",
            options: ["10-20%", "40-60%", "70-80%", "90-100%"],
            answer: 1,
            info: "Your genes cover about 40-60%. The rest is up to your environment and choices."
        },
        {
            points: 200,
            question: "What's a huge help in keeping you away from addiction?",
            options: ["Being alone", "Strong family vibes", "Failing class", "Peer pressure"],
            answer: 1,
            info: "Having people who care about you, especially family, is a massive shield against addiction."
        },
        {
            points: 300,
            question: "When is your brain most likely to get hooked on something?",
            options: ["Before age 10", "Ages 12-25", "Ages 30-40", "After age 50"],
            answer: 1,
            info: "Your brain is still building itself until you're like 25. Using drugs during that time can mess up the wiring."
        },
        {
            points: 400,
            question: "What actually works to stop teens from using drugs?",
            options: ["Strict punishment", "Ignoring it", "Real talk & facts", "Locking them up"],
            answer: 2,
            info: "Honest conversations and knowing the facts work way better than just scaring people."
        }
    ],
    "Myths vs Facts": [
        {
            points: 100,
            question: "True or False: Addiction is just a bad choice.",
            options: ["True", "False"],
            answer: 1,
            info: "False. It's a brain disease. It changes how your brain actually works."
        },
        {
            points: 200,
            question: "True or False: Prescribed meds are always safe.",
            options: ["True", "False"],
            answer: 1,
            info: "False. Even if a doctor gives them to you, stuff like opioids can still get you hooked."
        },
        {
            points: 300,
            question: "True or False: Weed is natural so it can't be addictive.",
            options: ["True", "False"],
            answer: 1,
            info: "False. Plenty of people get addicted to weed, especially if they start young."
        },
        {
            points: 400,
            question: "True or False: If you're addicted, you can just stop whenever.",
            options: ["True", "False"],
            answer: 1,
            info: "False. Once your brain chemistry changes, quitting on your own is extremely hard."
        }
    ],
    "Signs & Symptoms": [
        {
            points: 100,
            question: "When you need more of a drug to feel the same high, it's called:",
            options: ["Withdrawal", "Tolerance", "Dependence", "Craving"],
            answer: 1,
            info: "That's tolerance. Your body gets used to it, so you have to take more. Not good."
        },
        {
            points: 200,
            question: "Feeling sick when you stop using is called:",
            options: ["Side effects", "Withdrawal", "Tolerance", "Allergies"],
            answer: 1,
            info: "Withdrawal. It can be anything from anxiety to shaking and nausea."
        },
        {
            points: 300,
            question: "Which of these is NOT a sign of addiction?",
            options: ["Lying", "Dropping hobbies", "Being super social", "Being secretive"],
            answer: 2,
            info: "Addiction usually makes people isolate themselves, not go out more."
        },
        {
            points: 400,
            question: "What do doctors call that intense urge to use?",
            options: ["Tolerance", "Dependence", "Craving", "Withdrawal"],
            answer: 2,
            info: "Cravings. They're powerful urges that can stick around for a long time."
        }
    ],
    "Recovery & Help": [
        {
            points: 100,
            question: "What does AA stand for?",
            options: ["Addiction Anonymous", "Alcoholics Anonymous", "Awareness Alliance", "Aid Association"],
            answer: 1,
            info: "Alcoholics Anonymous. It's been helping people stay sober since 1935."
        },
        {
            points: 200,
            question: "Who do you call for 24/7 help with substance abuse?",
            options: ["1-800-662-HELP", "911", "311", "411"],
            answer: 0,
            info: "1-800-662-HELP. It's free, confidential, and they can help you find treatment."
        },
        {
            points: 300,
            question: "Medication-assisted treatment (MAT) pairs meds with:",
            options: ["Just exercise", "Counseling & therapy", "Better diet", "Isolation"],
            answer: 1,
            info: "The meds help the cravings, and the therapy helps you rebuild your life. Best of both worlds."
        },
        {
            points: 400,
            question: "Do people actually recover from addiction?",
            options: ["Rarely", "Maybe 25%", "40-60% do", "Almost everyone"],
            answer: 2,
            info: "About 40-60% of people maintain long-term recovery with the right help. There's plenty of hope."
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
            <div class="bg-gradient-to-br from-uncovered-purple to-uncovered-dark text-white p-2 sm:p-4 rounded-lg text-center font-bold text-xs sm:text-sm flex items-center justify-center shadow-md">
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
                    class="question-tile bg-uncovered-purple bg-opacity-90 hover:bg-uncovered-teal text-white p-4 sm:p-6 rounded-lg font-bold text-lg sm:text-2xl transition-all shadow-sm hover:shadow-md transform hover:-translate-y-1"
                    data-category="${cat}"
                    data-index="${i}"
                    data-id="${questionId}"
                    onclick="selectQuestion('${cat.replace(/'/g, "\\'")}', ${i}, '${questionId}')"
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
    currentTeamEl.className = `text-2xl font-bold ${currentTeam === 'A' ? 'text-uncovered-purple' : 'text-uncovered-teal'}`;
}

// Update scoreboard
function updateScoreboard() {
    scoreAEl.textContent = scores.A;
    scoreBEl.textContent = scores.B;
}

// Make selectQuestion global
window.selectQuestion = selectQuestion;

// Initialize the game
document.addEventListener('DOMContentLoaded', initBoard);
