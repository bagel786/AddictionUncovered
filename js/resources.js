const resourceContent = {
    'understanding': {
        title: 'Understanding Addiction',
        content: `
            <p class="mb-4">Addiction is complex. It is not a sign of weakness; it is a medical condition involving the brain, genetics, and environment. Fundamentally, it alters the brain's reward system.</p>
            <p class="mb-4">Various factors can increase risk, such as family history or peer pressure. Adolescent brains are still developing, particularly the areas responsible for decision-making, necessitating extra caution.</p>
            <p>Recovery is entirely possible, though it looks different for everyone. It typically involves a combination of medication, therapy, and a strong support system.</p>
        `
    },
    'prevention': {
        title: 'Prevention Resources',
        content: `
            <p class="mb-4">Preventing addiction before it starts is crucial. Programs that build social skills and strengthen family bonds are effective in lowering risks.</p>
            <p class="mb-4">Early intervention matters. If you notice declining grades, personality changes, or new peer groups, speak up. Honest communication builds trust and aids resilience.</p>
            <p>Community involvement is also key. After-school programs, mentorships, and safe environments make a significant difference in keeping everyone on a healthy path.</p>
        `
    },
    'family': {
        title: 'Family Support',
        content: `
            <p class="mb-4">Addiction impacts the entire family, not just the individual. It can be confusing, exhausting, and stressful. Groups like Al-Anon demonstrate that you are not the cause, and you cannot control it.</p>
            <p class="mb-4">Understanding addiction as a disease helps shift focus from judgment to effective support. Establishing healthy boundaries is essential.</p>
            <p>Self-care is equally important. Therapy and support groups provide the strength needed to navigate challenges and support your loved one without compromising your own well-being.</p>
        `
    },
    'mental-health': {
        title: 'Mental Health Support',
        content: `
            <p class="mb-4">Mental health and substance use are often linked. Individuals may use substances to cope with anxiety or depression, commonly exacerbating the issue.</p>
            <p class="mb-4">Addressing both simultaneously is the most effective approach. Organizations like the Jed Foundation offer excellent tools for managing specific emotions and situations.</p>
            <p>Recognizing the signs is the first step. Do not hesitate to seek help from professionals or support groups. Caring for your mental health is as vital as caring for your physical health.</p>
        `
    }
};

function openModal(categoryKey) {
    const modal = document.getElementById('resource-modal');
    const titleEl = document.getElementById('modal-title');
    const contentEl = document.getElementById('modal-content');
    const data = resourceContent[categoryKey];

    if (data) {
        titleEl.textContent = data.title;
        contentEl.innerHTML = data.content;
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
}

function closeModal() {
    const modal = document.getElementById('resource-modal');
    modal.classList.add('hidden');
    document.body.style.overflow = ''; // Restore scrolling
}

// Close modal when clicking outside the content
document.getElementById('resource-modal').addEventListener('click', function (e) {
    if (e.target === this) {
        closeModal();
    }
});

// Close modal on escape key
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});
