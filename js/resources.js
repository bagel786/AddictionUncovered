const resourceContent = {
    'understanding': {
        title: 'Understanding Addiction',
        content: `
            <p class="mb-4">Addiction is a complex chronic medical condition involving brain circuits, genetics, environment, and life experiences. When someone has an addiction, they continue using substances or engaging in certain behaviors despite harmful consequences. Addiction is not about weakness or lack of willpower—it's a disease that affects the brain's reward system.</p>
            <p class="mb-4">Several risk factors can increase the likelihood of developing an addiction. Genetics plays a significant role, meaning family history can increase susceptibility. Environmental factors like peer pressure or limited family support can also contribute to substance use. Adolescents are particularly vulnerable because their brains are still developing in areas responsible for decision-making and self-control.</p>
            <p>Recovery is possible and looks different for everyone. It typically involves a combination of medication, therapy, and ongoing support to prevent relapse. Effective treatment addresses the whole person—not just the substance use—providing tools to regain control and build meaningful connections.</p>
        `
    },
    'prevention': {
        title: 'Prevention Resources',
        content: `
            <p class="mb-4">Prevention plays a crucial role in reducing substance abuse, particularly among young people. Evidence-based programs focus on strengthening protective factors—such as strong family relationships and social skills—while addressing risk factors like aggressive behavior or social difficulties. These programs are implemented in schools, homes, and communities.</p>
            <p class="mb-4">Early intervention is essential. Educators and parents can identify warning signs such as sudden behavior changes, declining grades, or shifts in peer groups. Open communication about the risks of drug use and active listening to youth concerns are powerful prevention tools that build trust and resilience.</p>
            <p>Community prevention efforts are equally important. When communities create environments that support healthy choices—through after-school programs, mentoring, and policy initiatives—they can significantly reduce substance abuse rates both immediately and long-term.</p>
        `
    },
    'family': {
        title: 'Family Support',
        content: `
            <p class="mb-4">Addiction affects not only the individual but also those closest to them. Family members often experience confusion, guilt, and exhaustion. Finding support systems is essential for families navigating these challenges. Groups like Al-Anon and Alateen help families understand that they didn't cause the addiction and cannot cure it.</p>
            <p class="mb-4">Education about addiction helps families establish healthy boundaries and improve communication. Understanding addiction as a disease makes it easier to approach loved ones with empathy rather than judgment. This supportive approach can encourage individuals to seek help.</p>
            <p>Self-care is vital for family members. Engaging in personal wellness, seeking professional therapy, and connecting with others in similar situations provides the strength needed to cope with addiction's impact on the family.</p>
        `
    },
    'mental-health': {
        title: 'Mental Health Support',
        content: `
            <p class="mb-4">Mental health and substance use disorders are often interconnected—a condition known as co-occurring disorders or dual diagnosis. Individuals may use substances to cope with mental health symptoms like anxiety, depression, or trauma. However, substance use can worsen existing mental health conditions or trigger new ones.</p>
            <p class="mb-4">Integrated treatment addressing both mental health and substance use simultaneously is often most effective. Organizations like the Jed Foundation and CVS Health emphasize accessible mental health care and provide tools for emotional well-being and crisis support.</p>
            <p>Recognizing signs of mental health distress is the first step toward getting help. Professional therapy, support groups, and crisis hotlines offer essential resources for recovery and long-term wellness.</p>
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
