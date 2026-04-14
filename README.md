# 🧠 Interactive Quiz Application

A dynamic, single-page web application engineered to test users' computer science and programming knowledge through a seamless, interactive user interface.

* **Live Demo Link:** https://sk-reyad.github.io/Quiz-Game/

---

# 📝 Project Overview

This Interactive Quiz Game is a sleek, client-side application that delivers a smooth, engaging assessment experience. Built entirely with vanilla web technologies, it completely bypasses the need for page reloads by cleverly managing "screens" dynamically within the DOM. 

Users are guided through progressive levels of technical questions—from basic HTML acronyms to core Object-Oriented Programming principles—while receiving instant visual feedback on their selections. A dynamic progress bar and a final percentage-based evaluation system keep users informed and motivated throughout their learning journey.

---

# ✨ Key Features

* **Dynamic Content Generation:** Questions and answer buttons are injected into the DOM on the fly from a structured JavaScript data array, making the quiz highly scalable and easy to update.
* **Instant Visual Feedback:** Upon selecting an answer, the UI immediately responds. Correct answers are highlighted in green, while incorrect choices are flagged in red, alongside revealing the actual correct answer.
* **Real-Time Progress Tracking:** A fluid, animated progress bar visually represents the user's journey through the quiz, recalculating its width instantly as they advance.
* **Smart Interaction Prevention:** Implemented an `answersDisabled` state lock that prevents users from double-clicking or changing their answer once a selection is made, ensuring score integrity.
* **Automated Pacing:** Utilizes JavaScript timing events to provide a brief 500ms pause after an answer is selected before automatically smoothly transitioning to the next question.
* **Tiered Results Evaluation:** The final results screen calculates a percentage score and delivers custom, tier-based feedback messages (e.g., "Perfect! You're a genius!" vs. "Good effort!").

---

# 🧠 Technical Highlights (Skills Showcase)

This project demonstrates a strong command of vanilla web development, specifically highlighting efficient DOM manipulation, state management, and modern CSS structuring without the use of external UI libraries.

### Advanced JavaScript Logic & State Management
* **Data Attribute Leveraging:** Engineered the answer verification system using HTML5 `data-correct` attributes. The JavaScript reads `dataset.correct` to evaluate logic, keeping the HTML structure intimately tied to the application state without complex mapping.
* **Dynamic DOM Construction:** Rather than hardcoding HTML, the `showQuestion` function utilizes `document.createElement()` and `appendChild()` to build the interface iteratively based on the active question object, clearing the previous state via `innerHTML = ""`.
* **Single Page Application (SPA) Architecture:** Created a seamless multi-view experience by toggling an `.active` CSS class. The JS logic strategically adds and removes this class to transition between the Start, Quiz, and Result screens (`display: block` vs `display: none`).

### Modern CSS3 Architecture & Styling
* **Flexbox Layouts:** Utilized CSS Flexbox extensively to center the main application container within the viewport (`justify-content: center`, `align-items: center`) and to handle the vertical stacking and spacing of the dynamic answer buttons (`flex-direction: column`, `gap: 10px`).
* **Smooth Micro-interactions:** Implemented `transition: all 0.3s ease` on buttons and `transition: width 0.3s ease` on the progress bar to provide a polished, responsive feel that reacts gracefully to state changes.
* **Fluid Responsiveness:** Built a responsive design system utilizing a `@media (max-width: 500px)` query. The layout automatically adapts for mobile devices by intelligently scaling down padding, font sizes (`2rem` to `1.3rem`), and button dimensions for optimal touch targets.

### Semantic HTML5
* **Clean Document Structure:** Utilized semantic elements and strategic container `div`s to separate the header, core question interface, and progress trackers, ensuring the code is maintainable and logically organized.

---

# 🛠️ Tech Stack

* **HTML5:** Semantic structure and dataset attributes.
* **CSS3:** Flexbox, CSS Transitions, Box-shadow depth, and Media Queries.
* **JavaScript (ES6+):** Object Arrays, DOM Element Creation, Event Delegation, and Timeout handling.
* **Google Fonts:** Integration of Poppins, Mulish, and Bebas Neue for a crisp, modern typographic hierarchy.

---

# 🚀 Quick Start

* **Clone the repository:**
```bash
git clone https://github.com/sk-reyad/quiz-game.git
```

* **Navigate to the project directory:**
```bash
cd quiz-game
```

* **Run the application:**
Simply open the `index.html` file in your preferred web browser. No local server, installation, or dependencies required!

---

# 📬 Let's Connect
* **📧 Email:** skreyad2016@gmail.com
* **💼 LinkedIn:** https://www.linkedin.com/in/sk-reyad/
