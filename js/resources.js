const resourceContent = {
    'understanding': {
        title: 'Understanding Addiction',
        content: `
            <p class="mb-4">Addiction is complicated. It's not about being weak; it's a medical thing involving your brain, genes, and environment. Basically, it changes how your brain's reward system works.</p>
            <p class="mb-4">A bunch of things can raise the risk, like family history or peer pressure. Teen brains are still growing, especially the parts for decision-making, so we gotta be extra careful.</p>
            <p>Recovery is totally possible, but it looks different for everyone. It usually takes some combo of meds, therapy, and good support to get back on track.</p>
        `
    },
    'prevention': {
        title: 'Prevention Resources',
        content: `
            <p class="mb-4">Stopping addiction before it starts is huge. Programs that build social skills and family bonds really help lower the risks.</p>
            <p class="mb-4">Catching things early matters. If you see grades dropping, personality changes, or new friend groups, say something. Honest talk builds trust and helps people bounce back.</p>
            <p>Communities need to step up too. After-school programs, mentors, and safe places to hang out make a big difference in keeping everyone on a healthy path.</p>
        `
    },
    'family': {
        title: 'Family Support',
        content: `
            <p class="mb-4">Addiction hits the whole family, not just the person using. It's confusing, exhausting, and stressful. Groups like Al-Anon show you that you didn't cause it, and you can't control it.</p>
            <p class="mb-4">Learning about addiction as a disease helps you stop judging and start helping effectively. Setting healthy boundaries is key.</p>
            <p>You gotta take care of yourself too. Therapy and support groups give you the strength to handle the chaos and support your loved one without losing yourself.</p>
        `
    },
    'mental-health': {
        title: 'Mental Health Support',
        content: `
            <p class="mb-4">Mental health and drugs are often linked. Sometimes people use substances to cope with anxiety or depression, but it usually just makes things worse.</p>
            <p class="mb-4">Treating both at the same time is the best move. Places like the Jed Foundation have great tools to help you manage specific emotions and situations.</p>
            <p>Knowing the signs is step one. Don't be afraid to ask for help from pros or support groups. Taking care of your mind is just as important as your body.</p>
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
