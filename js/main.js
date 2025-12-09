// Main JavaScript - Addiction Uncovered

// Initialize app
document.addEventListener('DOMContentLoaded', function () {
    console.log('🎮 Addiction Uncovered initialized');

    // Add smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add entrance animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all game cards
    document.querySelectorAll('.card, .resource-card').forEach(card => {
        observer.observe(card);
    });
});

// Analytics placeholder (can be extended)
function trackGameStart(gameName) {
    console.log(`📊 Game started: ${gameName}`);
    // Add analytics code here if needed
}

// Export for other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { trackGameStart };
}
