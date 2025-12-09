/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                'uncovered': {
                    'purple': '#5E4A77',      // Primary Logo Purple
                    'cream': '#FAF8F3',        // Base / Background Cream  
                    'dark': '#1D2A3B',         // Dark Anchor Text
                    'teal': '#3EB4B4',         // Sleek Accent Teal
                    'gray': '#C4C8CC',         // Neutral Gray
                }
            },
            fontFamily: {
                'heading': ['Poppins', 'sans-serif'],
                'body': ['Inter', 'sans-serif'],
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-in',
                'slide-up': 'slideUp 0.6s ease-out',
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'bounce-gentle': 'bounceGentle 2s infinite',
                'glow': 'glow 2s ease-in-out infinite alternate',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                bounceGentle: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                glow: {
                    '0%': { boxShadow: '0 0 5px rgba(62, 180, 180, 0.5)' },
                    '100%': { boxShadow: '0 0 20px rgba(62, 180, 180, 0.8)' },
                }
            },
        },
    },
    plugins: [],
}
