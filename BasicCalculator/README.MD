# Basic Calculator — Frontend Web Development Internship Assignment

## 📌 Project Overview
This repository contains a fully functional **Basic Calculator** web application developed as part of the **CodeAlfa Frontend Web Development Internship**. The application features an interactive, highly responsive, and visually polished user interface designed to perform fundamental mathematical computations flawlessly. 

By leveraging **Object-Oriented Programming (OOP) in JavaScript** alongside **Bootstrap 4.6**, the project ensures excellent separation of concerns, modular logic, and modern UX standards.

---

## ✨ Features
* **Core Arithmetic Operations:** Native support for addition (`+`), subtraction (`-`), multiplication (`×`), and division (`÷`).
* **Advanced Dual-Line Display:** Keeps track of your current calculations and displays the previously entered values along with active operator states to prevent input confusion.
* **Smart Input Validations:** Built-in safeguards against structural errors, such as multiple consecutive decimal points (`.`) or redundant leading zeros.
* **Robust Error Handling:** Contains custom edge-case overrides for mathematical anomalies like division-by-zero, cleanly outputting an explicit `"Error"` notification on the screen.
* **Interactive Editing Tooling:** Complete integration of full-wipe All Clear (`AC`) memory functionality and individual string character deletion (`Del`) for seamless typo adjustments.
* **Modern Aesthetic & Responsive Layout:** Crafted using an optimized card system backed by high-contrast typography drops, drop-shadow elevations, and a mathematical-themed vector grid backdrop.

---

## 🛠️ Technologies & Tools Used
* **HTML5:** Structural backbone utilizing data-attributes (`data-number`, `data-operation`, `data-equals`, etc.) to map out predictable DOM selectors safely.
* **CSS3:** Custom linear-gradient overlays, custom button sizing fixes, and focus pseudo-state modifications for a cleaner canvas finish.
* **Bootstrap v4.6:** Flexible utilization of utility spacing wrappers (`no-gutters`, `p-1`, `shadow-sm`, `btn-block`) to quickly arrange standard calculator button templates.
* **JavaScript (ES6):** Developed using clean Object-Oriented Programming principles via an isolated `Calculator` class wrapper to orchestrate functional states efficiently.

---

## 📂 File Structure
```text
├── index.html     # Semantic structure and Bootstrap button grid configuration
├── style.css      # Visual overrides, background vectors, and responsive scaling rules
├── script.js      # Logical implementation containing the encapsulated Calculator engine
└── README.md      # Project overview and run configurations
