// Contact Form Handler
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    const feedback = document.getElementById('form-feedback');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Since this is a client-side app, we'll show a thank you message
        // In a real app, you would send this to a backend API

        feedback.classList.remove('hidden', 'bg-red-100', 'text-red-700');
        feedback.classList.add('bg-green-100', 'text-green-700');
        feedback.innerHTML = `
            <div class="flex items-center">
                <svg class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <div>
                    <p class="font-semibold">Thank you for your message!</p>
                    <p class="text-sm">We'll get back to you at ${email} as soon as possible.</p>
                </div>
            </div>
        `;

        // Clear form
        form.reset();

        // Hide feedback after 5 seconds
        setTimeout(() => {
            feedback.classList.add('hidden');
        }, 5000);

        // In a real implementation, you would do something like:
        // fetch('/api/contact', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ name, email, message })
        // })
    });
});
