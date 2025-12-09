# Addiction Uncovered

**Educational Web App on Substance Abuse Awareness**

![Project Status](https://img.shields.io/badge/status-active-success.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

---

## 📋 Overview

**Addiction Uncovered** is a comprehensive educational platform designed to raise awareness about substance abuse, prevention strategies, and recovery resources. Through engaging interactive games and accessible information, the app empowers users with knowledge while maintaining a professional, reflective, and compassionate approach to this critical topic.

The platform combines evidence-based education with dynamic user experiences to create memorable learning moments without trivializing the serious nature of addiction.

---

## ✨ Features

### 🎮 Interactive Game Modes

#### **Pinpoint**
- Daily word-association puzzles that challenge users to identify hidden addiction-related categories
- **Fuzzy matching** technology accepts close guesses (80%+ similarity)
- Dynamic hint system that appears after multiple attempts
- Randomized puzzles that don't repeat within recent sessions
- Animated score tracking with streak multipliers
- Progressive clue revelation system with point bonuses for quicker answers

#### **Jeopardy Challenge**
- Classic quiz board format with multiple categories related to substance abuse awareness
- Team-based gameplay with scoring and answer-stealing mechanics
- Timed questions with multiple-choice and true/false formats
- Interactive question grid with modal pop-ups
- Real-time scoreboard updates with smooth animations

#### **Memory Match**
- Card-matching game connecting related addiction awareness concepts
- Smooth flip animations and visual feedback
- Matched cards show subtle glow effects and checkmarks
- Animated progress bar tracking game completion
- Reinforces key terms and relationships through visual learning

#### **Quick Fire Quiz**
- Fast-paced 60-second True/False challenge
- Animated countdown timer with color-coded progress bar
- Instant visual feedback (green for correct, red for incorrect)
- Streak tracking and best streak recording
- Comprehensive final summary with statistics and encouragement

### 📄 Information Pages

#### **About Us**
- Mission statement and organizational values
- Team information and campaign highlights
- Fade-in animations and professional layout
- Clear articulation of approach and beliefs
- Logo placeholder for branding

#### **Contact Us**
- Functional contact form with client-side validation
- Direct email display: **Addictionuncoveredpromotion@gmail.com**
- Social media links:
  - **Instagram**: [@addictionuncoveredpromo](https://instagram.com/addictionuncoveredpromo)
  - **TikTok**: [@addictionuncoveredpromo](https://tiktok.com/@addictionuncoveredpromo)
- Animated social media cards with hover effects
- Logo placeholder for branding

#### **Resources**
- Comprehensive hotline directory with clickable phone/text links:
  - **SAMHSA National Helpline**: 1-800-662-HELP (4357)
  - **Crisis Text Line**: Text HOME to 741741
  - **Drug Abuse Hotline**: 1-844-289-0879
  - **Al-Anon Family Groups**: 1-888-4AL-ANON (425-2666)
- Links to treatment locators, AA, and NA resources
- Prominent crisis intervention section
- Educational resource cards with categorized support options

---

## 🎨 Design System

### Color Palette: "Uncovered & Sleek"

| Color Name | Hex Code | Usage |
|------------|----------|-------|
| **Primary Logo Purple** | `#5E4A77` | Headings, important text, graphic accents |
| **Base / Background Cream** | `#FAF8F3` | Main site background |
| **Dark Anchor Text** | `#1D2A3B` | Body text for high contrast |
| **Sleek Accent Teal** | `#3EB4B4` | CTAs, hover effects, key highlights |
| **Neutral Gray** | `#C4C8CC` | Borders, dividers, secondary info |

### Typography
- **Headings**: Poppins Bold (Google Fonts)
- **Body Text**: Inter Regular (Google Fonts)
- Consistent spacing, padding, and line-height for optimal readability

### Dynamic UI Elements
- ✨ Hover animations on buttons, cards, and links
- 🎭 Smooth modal pop-up transitions
- 📊 Animated score counters and progress bars
- 🔥 Streak indicators with visual effects
- 🌈 Soft gradient background transitions
- 🎨 Particle background effects on hero sections

### Responsiveness & Accessibility
- 📱 **Mobile-first** design approach
- 🖥️ Adaptive layouts for tablet and desktop
- ♿ ARIA labels and semantic HTML
- ⌨️ Keyboard navigation support
- 🖼️ Alt text for all images
- 🎯 High-contrast mode compatible

---

## 🛠️ Technology Stack

- **Frontend**: HTML5, Tailwind CSS, Vanilla JavaScript
- **Fonts**: Google Fonts (Poppins, Inter)
- **Icons**: Heroicons (SVG)
- **Deployment**: Fully client-side, no server dependencies
- **Compatibility**: Modern browsers (Chrome, Firefox, Safari, Edge)

---

## 📂 Project Structure

```
/addiction-uncovered
│
├─ index.html                 # Homepage with game selection
├─ pinpoint.html              # Pinpoint game page
├─ jeopardy.html              # Jeopardy Challenge game page
├─ memory.html                # Memory Match game page
├─ quickfire.html             # Quick Fire Quiz game page
├─ about.html                 # About Us page
├─ contact.html               # Contact page
├─ resources.html             # Resources and hotlines page
│
├─ css/
│   ├─ input.css              # Source Tailwind CSS with custom styles
│   └─ output.css             # Compiled CSS (generated)
│
├─ js/
│   ├─ main.js                # Main app initialization
│   ├─ pinpoint.js            # Pinpoint game logic with fuzzy matching
│   ├─ jeopardy.js            # Jeopardy Challenge logic
│   ├─ memory.js              # Memory Match logic
│   ├─ quickfire.js           # Quick Fire Quiz logic
│   └─ contact.js             # Contact form handler
│
├─ assets/
│   ├─ images/                # Logo, icons, card images
│   └─ sounds/                # Optional sound effects
│
├─ tailwind.config.js         # Tailwind configuration
├─ package.json               # Project dependencies
└─ README.md                  # This file
```

---

## 🚀 Installation & Setup

### Prerequisites
- A modern web browser
- (Optional) Node.js for Tailwind CSS compilation

### Quick Start

1. **Clone or download the repository**
   ```bash
   git clone https://github.com/yourorg/addiction-uncovered.git
   cd addiction-uncovered
   ```

2. **Open in browser**
   ```bash
   # Simply open index.html in your browser
   open index.html
   # Or use a local server
   python -m http.server 8000
   ```

3. **Navigate the app**
   - Browse game modes from the homepage
   - Access resources via the top navigation
   - Contact us through the contact form

### Development Setup (Optional)

If you want to modify Tailwind CSS:

```bash
# Install dependencies
npm install

# Watch for CSS changes
npm run watch:css

# Build for production
npm run build:css
```

---

## 🎯 Usage Guide

### For Learners
1. Start with the **About Us** page to understand the mission
2. Play any of the four games to learn interactively
3. Check the **Resources** page for professional help if needed

### For Educators
1. Use games as classroom activities
2. Reference statistics and facts featured in game feedback
3. Share the **Resources** page with students

### For Those Seeking Help
1. Visit the **Resources** page immediately
2. Call the hotlines available 24/7
3. Access treatment locators and support groups

---

##  💡 Contributing

We welcome contributions to improve education and accessibility!

### Ways to Contribute
- **Content**: Add new clue words, questions, or card pairs
- **UI/UX**: Improve animations, accessibility, and responsiveness
- **Features**: Suggest new game modes or educational resources
- **Bug Reports**: Submit issues via GitHub
- **Translations**: Help make the app multilingual

### Development Guidelines
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📊 Educational Content

All game content is:
- ✅ Evidence-based and factually accurate
- ✅ Reviewed for sensitivity and appropriateness
- ✅ Designed to educate without judgment
- ✅ Updated regularly with latest research

---

## 🔒 Privacy & Data

- ✅ **No user data is collected or stored**
- ✅ All games run entirely in the browser
- ✅ Contact form submissions are client-side (extendable to backend)
- ✅ No cookies or tracking

---

## 📱 Social Media

Stay connected and spread awareness:

- **Instagram**: [@addictionuncoveredpromo](https://instagram.com/addictionuncoveredpromo)
- **TikTok**: [@addictionuncoveredpromo](https://tiktok.com/@addictionuncoveredpromo)
- **Email**: Addictionuncoveredpromotion@gmail.com

---

## 🆘 Crisis Resources

If you or someone you know needs immediate help:

- **🆘 Call 988** - Suicide & Crisis Lifeline
- **📞 1-800-662-HELP (4357)** - SAMHSA National Helpline
- **💬 Text HOME to 741741** - Crisis Text Line
- **🚨 Call 911** - For immediate emergencies

---

## 📜 License

This project is licensed under the **MIT License**.

```
MIT License

Copyright (c) 2024 Addiction Uncovered

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 🙏 Acknowledgments

- SAMHSA for providing national helpline resources
- All mental health professionals dedicated to addiction awareness
- The recovery community for their ongoing support and inspiration
- Google Fonts for typography
- Tailwind CSS for the styling framework

---

## 📞 Support

For questions, suggestions, or support:
- **Email**: Addictionuncoveredpromotion@gmail.com
- **Social**: @addictionuncoveredpromo on Instagram and TikTok

---

<div align="center">

**Remember: Recovery is possible. You are not alone.** ❤️

[Get Help Now](resources.html) | [Learn More](about.html) | [Contact Us](contact.html)

</div>
