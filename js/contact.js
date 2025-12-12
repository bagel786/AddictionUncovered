// Contact Form Handler with EmailJS
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    const feedback = document.getElementById('form-feedback');
    const submitButton = form.querySelector('button[type="submit"]');

    // Initialize EmailJS with your public key
    emailjs.init('-OD3YVUuG30ccd4Ws');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Disable submit button and show loading state
        submitButton.disabled = true;
        submitButton.textContent = 'Sending...';

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Send email using EmailJS
        emailjs.send('service_kpi1q1k', 'template_wvb06yc', {
            name: name,
            email: email,
            message: message
        })
        .then(function(response) {
            // Success
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
        })
        .catch(function(error) {
            // Error
            feedback.classList.remove('hidden', 'bg-green-100', 'text-green-700');
            feedback.classList.add('bg-red-100', 'text-red-700');
            feedback.innerHTML = `
                <div class="flex items-center">
                    <svg class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <div>
                        <p class="font-semibold">Oops! Something went wrong.</p>
                        <p class="text-sm">Please try again or email us directly at Addictionuncoveredpromotion@gmail.com</p>
                    </div>
                </div>
            `;
        })
        .finally(function() {
            // Re-enable submit button
            submitButton.disabled = false;
            submitButton.textContent = 'Send Message';
        });
    });
});
