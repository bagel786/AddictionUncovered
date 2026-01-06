const resourceContent = {
    'understanding': {
        title: 'Understanding Addiction',
        content: `
            <p class="mb-4">Addiction is a complex, chronic medical condition involving interactions among brain circuits, genetics, the environment, and an individual’s life experiences. People with addiction use substances or engage in behaviors that become compulsive and often continue despite harmful consequences. It is not merely a lack of willpower; it is a disease that affects the brain's reward system.</p>
            <p class="mb-4">Risk factors for addiction can vary and include genetics, environment, and development. For instance, a family history of addiction can increase susceptibility, while peer pressure or lack of family involvement can also play significant roles. Adolescents are particularly vulnerable because their brains are still developing in areas that govern decision-making and self-control.</p>
            <p>Recovery is possible and looks different for everyone. It typically involves a combination of medication, behavioral counseling, and long-term follow-up to prevent relapse. Effective treatment addresses the whole person, not just the substance abuse, and empowers individuals to regain control of their lives and build a supportive community.</p>
        `
    },
    'prevention': {
        title: 'Prevention Resources',
        content: `
            <p class="mb-4">Prevention strategies are essential in reducing the risk of substance abuse, particularly among young people. Evidence-based prevention programs work by boosting protective factors—such as strong family bonds and social skills—while reducing risk factors like early aggressive behavior or poor social skills. These programs can be implemented in schools, families, and communities.</p>
            <p class="mb-4">Early intervention is key. Educators and parents can look for warning signs such as sudden changes in behavior, academic struggles, or changes in friend groups. Open communication is one of the most powerful tools for prevention; talking honestly about the risks of drug use and listening to youth concerns can foster trust and resilience.</p>
            <p>Community prevention efforts also play a vital role. By creating environments that support healthy choices—through after-school programs, mentoring, and policy changes—communities can significantly lower the rates of substance initially and long-term abuse.</p>
        `
    },
    'family': {
        title: 'Family Support',
        content: `
            <p class="mb-4">Addiction affects the entire family, not just the individual struggling with substance use. Family members often experience confusion, guilt, and exhaustion. It is crucial for families to find their own support systems to navigate these challenges. Groups like Al-Anon and Alateen primarily focus on the well-being of the family, helping them understand that they didn't cause the addiction and cannot cure it.</p>
            <p class="mb-4">Educational resources can help families set healthy boundaries and improve communication. Learning about the disease of addiction reduces stigma and helps family members approach their loved one with empathy rather than judgment. This supportive approach can sometimes encourage the individual to seek help.</p>
            <p>Taking care of oneself is also vital for family members. Engaging in self-care, seeking professional therapy, and connecting with others in similar situations can provide the strength and stability needed to cope with the impacts of addiction on the family unit.</p>
        `
    },
    'mental-health': {
        title: 'Mental Health Support',
        content: `
            <p class="mb-4">Mental health and substance use disorders are often deeply interconnected, a condition known as co-occurring disorders or dual diagnosis. Individuals may use substances to cope with symptoms of mental health issues like anxiety, depression, or trauma. Conversely, substance abuse can trigger or worsen these mental health conditions.</p>
            <p class="mb-4">Integrated treatment that addresses both mental health and substance use simultaneously is often the most effective approach. Resources provided by organizations like the Jed Foundation and CVS Health emphasize the importance of accessible mental health care and offer tools for emotional well-being and crisis management.</p>
            <p>Recognizing the signs of mental health distress is the first step toward getting help. Whether it's through professional therapy, support groups, or crisis hotlines, connecting with mental health resources can provide the necessary tools for recovery and long-term wellness.</p>
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
